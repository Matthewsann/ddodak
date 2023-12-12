"use client";

import Script from "next/script";
import { Coordinates, NaverMap } from "@/types/map";
import { useCallback, useEffect, useRef, useState } from "react";
import { latlngToMaxMeter } from "@/utils/latlng-to-meter";
import { centerAroundList } from "@/apis/center";
import { CenterType } from "@/types/center";
import { throttle } from "lodash";

const mapId = "mapmapmap";

export default function Map({
  loc,
  setCenters,
}: {
  loc: Coordinates;
  setCenters: (centers: CenterType[]) => void;
}) {
  const mapRef = useRef<NaverMap>();
  const [center, setCenter] = useState<Coordinates>(loc);
  const [distance, setDistance] = useState(500);
  const [mapInstance, setMapInstance] = useState<NaverMap>();

  const initializeMap = useCallback(() => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(loc),
      zoom: 15,
      scaleControl: true,
      mapDataControl: true,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };
    const map = new window.naver.maps.Map(mapId, mapOptions);
    map.addListener("drag", onBoundChange);
    map.addListener("pinch", onBoundChange);
    mapRef.current = map;
    setMapInstance(map);
  }, [loc]);

  const onBoundChange = useCallback(
    throttle(() => {
      if (!mapRef.current) return;
      const bounds = mapRef.current.getBounds();
      setDistance(
        latlngToMaxMeter(
          bounds.minX(),
          bounds.minY(),
          bounds.maxX(),
          bounds.maxY()
        )
      );
      setCenter([
        (bounds.minY() + bounds.maxY()) / 2,
        (bounds.minX() + bounds.maxX()) / 2,
      ]);
    }, 2000),
    []
  );

  const updateCenters = useCallback(async () => {
    const centers = await centerAroundList({
      lat: center[0],
      lng: center[1],
      distance,
    });
    setCenters(centers);
    centers.forEach((center) => {
      new naver.maps.Marker({
        position: new naver.maps.LatLng(center.latitude, center.longitude),
        map: mapInstance,
        icon: {
          url: "./asset/map/location.svg",
          size: new naver.maps.Size(24, 24),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(12, 22),
        },
      });
    });
  }, [center, distance, mapInstance, setCenters]);

  useEffect(() => {
    updateCenters();
  }, [updateCenters]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_CLIENT_ID}`}
        onReady={initializeMap}
      ></Script>
      <div id={mapId} style={{ width: "100%", height: "100%" }} />
    </>
  );
}
