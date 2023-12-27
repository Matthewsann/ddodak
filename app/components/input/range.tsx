import cc from "classcat";

export default function RangeInput({
  range,
  min,
  max,
  setMin,
  setMax,
  step,
  ...props
}: {
  range: [number, number];
  min: number;
  max: number;
  setMin: (min: number) => void;
  setMax: (max: number) => void;
  step?: number;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={cc(["w-full", props.className])}>
      <div className="relative flex items-center">
        <div className="bg-black/20 rounded-full w-full h-[5px]">
          <div
            className="bg-primary rounded-full h-full"
            style={{
              width: `${((max - min) / (range[1] - range[0])) * 100}%`,
              marginLeft: `${
                ((min - range[0]) / (range[1] - range[0])) * 100
              }%`,
            }}
          />
        </div>
        <div className="absolute w-full">
          <input
            type="range"
            className="absolute w-full h-5 -top-2.5 appearance-none bg-transparent thumb pointer-events-none"
            min={range[0]}
            max={range[1]}
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
            step={step}
          />
          <input
            type="range"
            className="absolute w-full h-5 -top-2.5 appearance-none bg-transparent thumb pointer-events-none"
            min={range[0]}
            max={range[1]}
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
            step={step}
          />
        </div>
      </div>

      <div className="relative w-full text-black/50 text-[11px] font-medium mt-4 flex justify-center">
        <div className="w-[calc(100%-18px)] absolute">
          {min > range[0] && (
            <div
              className="absolute whitespace-nowrap w-px flex justify-center"
              style={{
                left: `${((min - range[0]) / (range[1] - range[0])) * 100}%`,
              }}
            >
              {min / 10000}만 원
            </div>
          )}
          {max < range[1] && (
            <div
              className="absolute whitespace-nowrap w-px flex justify-center"
              style={{
                left: `${((max - range[0]) / (range[1] - range[0])) * 100}%`,
              }}
            >
              {max / 10000}만 원
            </div>
          )}
        </div>

        <div className="grid grid-cols-[1fr_1px_1fr] w-full items-center justify-between">
          <div>최소</div>
          <div className="h-3 w-px bg-[#c8c8c8] -translate-y-[19px]" />
          <div className="text-right">최대</div>
        </div>
      </div>
    </div>
  );
}
