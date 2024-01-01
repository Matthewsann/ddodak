"use client";

import Script from "next/script";
import { useSearchStore } from "./store/search-store";
import { useCallback } from "react";

export default function Global() {
  const { setAddr } = useSearchStore();

  const initialize = useCallback(() => {
    window.naver.maps.onJSContentLoaded = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        window.naver.maps.Service.reverseGeocode(
          {
            coords: new window.naver.maps.LatLng({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }),
          },
          function (status, response) {
            if (status !== window.naver.maps.Service.Status.OK) {
              return;
            }
            const result = response.v2.results[0];
            const roadAddr =
              result.region.area2.name + " " + result.region.area3.name;
            setAddr(roadAddr);
          }
        );
      });
    };
  }, [setAddr]);

  return (
    <Script
      strategy="afterInteractive"
      type="text/javascript"
      src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_CLIENT_ID}&submodules=geocoder`}
      onReady={initialize}
    ></Script>
  );
}
