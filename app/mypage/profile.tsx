"use client";

import Icons from "@/components/icons";
import { useUserStore } from "@/store/user-store";

export default function Profile() {
  const { email } = useUserStore();
  return (
    <div>
      <div className="flex w-full px-8 gap-6 items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden shrink-0">
          <img
            src="https://via.placeholder.com/96"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full">
          <div className="font-bold flex items-center justify-between w-full">
            이소윤
            <button className="btn btn-secondary btn-xs rounded-full !text-white !font-medium px-3">
              수정
            </button>
          </div>
          <div className="text-xs font-light">{email}</div>
        </div>
      </div>

      <div className="px-3">
        <div className="flex justify-end">
          <button className="btn btn-primary btn-sm py-2 px-4 !h-auto rounded-xl !text-black border-primary btn-outline">
            <Icons.Heart />
            나의 찜
          </button>
        </div>

        <ul className="grid grid-cols-3 gap-3 py-4">
          <li className="w-full">
            <button className="btn btn-lg btn-primary !font-medium !text-xs w-full !text-white px-0">
              추천 상담사
            </button>
          </li>
          <li className="w-full">
            <button className="btn btn-lg btn-primary !font-medium !text-xs w-full !text-white px-0">
              상담 신청 내역
            </button>
          </li>
          <li className="w-full">
            <button className="btn btn-lg btn-primary !font-medium !text-xs w-full !text-white px-0">
              내 후기
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
