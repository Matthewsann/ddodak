import { CONTACT, GENDERS, RELIGIONS } from "@/constants/filter";
import { FilterType } from "@/types/counselor";
import cc from "classcat";

export default function IndividualList({
  filter,
  setOpenIndividually,
}: {
  filter: FilterType;
  setOpenIndividually: React.Dispatch<
    React.SetStateAction<
      "contact" | "gender" | "price" | "age" | "religion" | ""
    >
  >;
}) {
  return (
    <div className="w-full overflow-x-auto flex gap-2 flex-nowrap no-scrollbar whitespace-nowrap px-2">
      <button
        className={cc([
          filter.contactType.length === 0
            ? "item-button"
            : "item-button-selected",
        ])}
        onClick={() => setOpenIndividually("contact")}
      >
        {filter.contactType.length
          ? filter.contactType.length === 1
            ? CONTACT.find((c) => c.key === filter.contactType[0])?.value
            : `${
                CONTACT.find((c) => c.key === filter.contactType[0])?.value
              } 외 ${filter.contactType.length - 1}개`
          : "상담 방식"}
      </button>

      <button
        className="item-button-selected"
        onClick={() => setOpenIndividually("price")}
      >
        {filter.minPrice / 10000} - {filter.maxPrice / 10000}만원
      </button>

      <button
        className={cc([
          filter.gender.length === 0 ? "item-button" : "item-button-selected",
        ])}
        onClick={() => setOpenIndividually("gender")}
      >
        {filter.gender.length
          ? filter.gender.length === 1
            ? GENDERS.find((c) => c.key === filter.gender[0])?.value
            : `${GENDERS.find((c) => c.key === filter.gender[0])?.value} 외 ${
                filter.gender.length - 1
              }개`
          : "성별"}
      </button>

      <button
        className="item-button-selected"
        onClick={() => setOpenIndividually("age")}
      >
        {filter.minAge} -{" "}
        {filter.maxAge < 60 ? `${filter.maxAge}세` : "60대 이상"}
      </button>

      <button
        className={cc([
          filter.religion.length === 0 ? "item-button" : "item-button-selected",
        ])}
        onClick={() => setOpenIndividually("religion")}
      >
        {filter.religion.length
          ? filter.religion.length === 1
            ? RELIGIONS.find((c) => c.key === filter.religion[0])?.value
            : `${
                RELIGIONS.find((c) => c.key === filter.religion[0])?.value
              } 외 ${filter.religion.length - 1}개`
          : "종교"}
      </button>
    </div>
  );
}
