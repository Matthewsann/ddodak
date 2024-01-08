import { CenterDetailType, CenterType } from "@/types/center";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Icons from "@/components/icons";

export default function CenterInfo({ data }: { data: CenterDetailType }) {
  const [isTimetableOpen, setIsTimetableOpen] = useState(false);
  const today = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][
    new Date().getDay()
  ];
  const [day, setDay] = useState(data.scheduleList[0]);

  useEffect(() => {
    setDay(
      data.scheduleList.find((s) => s.weekday.code === today) ||
        data.scheduleList[0]
    );
  }, [data.scheduleList, today]);

  return (
    <div className="w-full">
      <h1 className="contents-title" id="info">
        센터사진
      </h1>
      <Swiper
        className="w-full h-[200px] mb-12"
        modules={[Pagination]}
        pagination={true}
        centeredSlides={true}
        slidesPerView={1.2}
      >
        {data.imageList.map((image) => (
          <SwiperSlide key={image.id} className="w-full h-full">
            <img className="w-full h-full object-cover" src={image.imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
      <h1 className="contents-title">영업시간</h1>
      <div
        className="w-full border border-black/30 rounded-lg px-4 py-5 relative mb-12"
        onClick={() => {
          setIsTimetableOpen(!isTimetableOpen);
        }}
      >
        {isTimetableOpen ? (
          <ul className="flex flex-col gap-2">
            {data.scheduleList.map((schedule) => (
              <li
                key={schedule.id}
                className="grid grid-cols-[64px_1fr_40px] text-sm"
              >
                <div>{schedule.weekday.title}</div>
                <div>
                  {schedule.startTime.slice(0, 2)}:
                  {schedule.startTime.slice(2, 4)}-
                  {schedule.endTime.slice(0, 2)}: {schedule.endTime.slice(2, 4)}
                </div>
                <div className="text-primary text-xs">
                  {schedule.isStop ? "" : "진료중"}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div key={day.id} className="grid grid-cols-[64px_1fr_40px] text-sm">
            <div>{day.weekday.title}</div>
            <div>
              {day.startTime.slice(0, 2)}:{day.startTime.slice(2, 4)}-
              {day.endTime.slice(0, 2)}: {day.endTime.slice(2, 4)}
            </div>
            <div className="text-primary text-xs">
              {day.isStop ? "" : "진료중"}
            </div>
          </div>
        )}
        <button className="absolute right-4 top-7">
          {isTimetableOpen ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
        </button>
      </div>

      <h1 className="contents-title">이벤트</h1>
      <Swiper
        className="w-full h-[200px] mb-12"
        modules={[Pagination]}
        pagination={true}
        centeredSlides={true}
        slidesPerView={1.2}
      >
        {data.eventList.map((image) => (
          <SwiperSlide key={image.id} className="w-full h-full">
            <img className="w-full h-full object-cover" src={image.imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>

      <h1 className="contents-title" id="service">
        서비스/가격
      </h1>
      <ul className="divide-y mb-12">
        {data.serviceList.map((service) => (
          <li key={service.id} className="py-3">
            <div className="flex justify-between text-xs font-medium mb-1">
              <div>{service.title}</div>
              <div>{service.price.toLocaleString()}원</div>
            </div>
            <div className="text-[11px] font-light">{service.content}</div>
          </li>
        ))}
      </ul>

      <h1 className="contents-title" id="counselor">
        상담사{" "}
        <span className="text-base font-semibold">
          {data.counselorList.length}
        </span>
      </h1>
      <ul>
        {data.counselorList.map((counselor) => (
          <div className="flex items-center gap-2 mb-4 h-24" key={counselor.id}>
            <div className="w-24 h-24 rounded bg-black overflow-hidden shrink-0">
              <img
                src={counselor.profileUrl}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between w-full h-full">
              <div className="text-sm font-medium">
                {counselor.name}{" "}
                <span className="text-[11px] text-black/60 font-medium">
                  {/* TODO: 자격증 정보 */}
                </span>
              </div>
              <div className="relative font-medium">
                <div className="text-xs">
                  {'"'}
                  {counselor.intro}
                  {'"'}
                </div>
                <div className="text-[13px]">
                  대표 가격 : {counselor.price.toLocaleString()}원
                </div>
                <div className="flex gap-2 items-center absolute bottom-0 right-0">
                  {counselor.isServicePhone && <Icons.Telephone />}
                  {counselor.isServiceOnline && <Icons.Camera />}
                  {counselor.isServiceOffline && (
                    <Icons.User className="w-5 h-5 stroke-black" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
