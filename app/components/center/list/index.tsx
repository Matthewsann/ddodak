"use client";

import { useCallback, useEffect, useState } from "react";
import Center from "..";
import { centerAroundList } from "@/apis/center";
import { CenterType } from "@/types/center";
import Loading from "./loading";

export default function CounselorList() {
  const [latLng, setLatLng] = useState({ lat: 0, lng: 0 });
  const [data, setData] = useState<CenterType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getCounselorList = useCallback(async () => {
    setLoading(true);
    const res = await centerAroundList({
      lat: latLng.lat,
      lng: latLng.lng,
      distance: 10000,
    });
    setData(res);
    setLoading(false);
  }, [latLng.lat, latLng.lng]);

  useEffect(() => {
    getCounselorList();
  }, [getCounselorList]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatLng({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return (
    <div className="flex gap-4">
      {loading ? (
        <Loading />
      ) : (
        data.map((item, i) => <Center key={i} center={item} />)
      )}
    </div>
  );
}
