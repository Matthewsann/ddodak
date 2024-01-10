import { centerDetail } from "@/apis/center";
import Header from "@/components/header";
import Icons from "@/components/icons";
import Link from "next/link";
import { redirect } from "next/navigation";
import Contents from "./contents";
import CenterHeader from "./center-header";

const fetchData = async (id: number) => {
  try {
    const res = await centerDetail(id);
    return res;
  } catch (e) {
    console.log(e);
    redirect("/");
  }
};

export default async function CenterDetail({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const data = await fetchData(Number(id));

  return (
    <div className="w-full h-[100dvh] flex flex-col pt-16">
      <CenterHeader />
      <div className="flex gap-5 px-5">
        <div className="w-[120px] h-[120px] rounded-full relative overflow-hidden shrink-0">
          <img src={data.profileUrl} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="font-medium flex items-center justify-between w-full">
            {data.name}
            <button className="btn btn-sm btn-ghost btn-circle">
              <Icons.Heart />
              {/*  <Icons.HeartBlank /> */}
            </button>
          </div>
          <div className="font-light text-sm">{data.address}</div>
          {data.linkUrl && (
            <Link
              href={data.linkUrl}
              className="btn btn-sm btn-ghost !px-1 w-fit !text-sm !font-light"
              target="_blank"
            >
              <Icons.HomePlus />
              홈페이지
            </Link>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 px-5 my-7">
        <a
          href={`tel:${data.phoneNumber}`}
          className="btn btn-sm w-full btn-primary btn-outline !rounded-full !text-black !border-primary !font-medium !text-sm"
        >
          <Icons.Telephone />
          전화하기
        </a>
        <button className="btn btn-sm w-full btn-primary btn-outline !rounded-full !text-black !border-primary !font-medium !text-sm">
          <Icons.Edit />
          상담신청서 작성
        </button>
      </div>

      <Contents data={data} />
    </div>
  );
}
