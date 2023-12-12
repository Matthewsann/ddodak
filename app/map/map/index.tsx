"use client";

import Script from "next/script";
import { Coordinates, NaverMap } from "@/types/map";
import { useCallback, useRef } from "react";

const mapId = "mapmapmap";

export default function Map({ loc }: { loc: Coordinates }) {
  const mapRef = useRef<NaverMap>();

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
  }, [loc]);

  const onBoundChange = useCallback(() => {
    if (!mapRef.current) return;
    const bounds = mapRef.current.getBounds();
    const x = bounds.minX() + "," + bounds.maxX();
    const y = bounds.minY() + "," + bounds.maxY();
    console.log(x, y);
  }, []);

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
