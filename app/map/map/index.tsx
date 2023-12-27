"use client";

import Script from "next/script";
import { Coordinates, NaverMap } from "@/types/map";
import { useCallback, useEffect, useRef, useState } from "react";
import { throttle } from "lodash";
import { CenterType } from "@/types/center";

const mapId = "mapmapmap";

export default function Map({
  centers,
  loc,
  setBound,
}: {
  centers: CenterType[];
  loc: Coordinates;
  setBound: React.Dispatch<
    React.SetStateAction<{
      minLatitude: number;
      maxLatitude: number;
      minLongitude: number;
      maxLongitude: number;
    }>
  >;
}) {
  const mapRef = useRef<NaverMap>();
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

    let b = map.getBounds();
    setBound({
      minLatitude: b.minY(),
      maxLatitude: b.maxY(),
      minLongitude: b.minX(),
      maxLongitude: b.maxX(),
    });

    map.addListener("drag", onBoundChange);
    map.addListener("pinch", onBoundChange);
    mapRef.current = map;

    setMapInstance(map);
  }, [loc, setBound]);

  useEffect(() => {
    if (!mapInstance) return;
    mapInstance.setCenter(new window.naver.maps.LatLng(loc));
  }, [loc, mapInstance]);

  const onBoundChange = useCallback(
    throttle(() => {
      if (!mapRef.current) return;
      const b = mapRef.current.getBounds();
      setBound({
        minLatitude: b.minY(),
        maxLatitude: b.maxY(),
        minLongitude: b.minX(),
        maxLongitude: b.maxX(),
      });
    }, 2000),
    []
  );

  useEffect(() => {
    if (!mapInstance) return;
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
  }, [centers]);

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
