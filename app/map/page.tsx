import MapContainer from "./map/container";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <div>Page title: 지도로 찾기</div>
      <div>Route: /map</div>
      <div className="w-full h-full bg-green-400">
        <MapContainer />
      </div>
    </div>
  );
}
