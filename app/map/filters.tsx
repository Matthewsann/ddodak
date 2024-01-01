import FilterItem from "@/components/filter/item";
import FilterTitle from "@/components/filter/title";
import RangeInput from "@/components/input/range";
import { CONTACT, GENDERS, RELIGIONS } from "@/constants/filter";
import { FilterType, KeywordType } from "@/types/counselor";

export const GenderFilter = ({
  filter,
  setFilter,
}: {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}) => (
  <>
    <FilterTitle title="성별" duplicate />
    <div className="flex gap-2 mt-4">
      {GENDERS.map((f, key) => (
        <FilterItem
          key={key}
          checked={filter.gender.includes(f.key)}
          toggle={() => {
            setFilter(() => ({
              ...filter,
              gender: filter.gender.includes(f.key)
                ? filter.gender.filter((type) => type !== f.key)
                : [...filter.gender, f.key],
            }));
          }}
        >
          {f.value}
        </FilterItem>
      ))}
    </div>
  </>
);

export const PriceFilter = ({
  filter,
  setFilter,
}: {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}) => (
  <>
    <FilterTitle title="상담 가격" />
    <div className="w-full text-right text-primary text-[11px] font-medium">
      {filter.minPrice / 10000} - {filter.maxPrice / 10000}만 원
    </div>
    <RangeInput
      className="mt-4"
      range={[0, 200000]}
      min={filter.minPrice}
      max={filter.maxPrice}
      minText={"최소"}
      maxText={"최대"}
      minValueText={`${filter.minPrice / 10000}만 원`}
      maxValueText={`${filter.maxPrice / 10000}만 원`}
      setMin={(min) => setFilter((filter) => ({ ...filter, minPrice: min }))}
      setMax={(max) => setFilter((filter) => ({ ...filter, maxPrice: max }))}
      step={10000}
    />
  </>
);

export const ContactFilter = ({
  filter,
  setFilter,
}: {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}) => (
  <>
    <FilterTitle title="상담 방식" duplicate />
    <div className="flex gap-2 mt-4">
      {CONTACT.map((f, key) => (
        <FilterItem
          key={key}
          checked={filter.contactType.includes(f.key)}
          toggle={() => {
            setFilter((filter) => ({
              ...filter,
              contactType: filter.contactType.includes(f.key)
                ? filter.contactType.filter((type) => type !== f.key)
                : [...filter.contactType, f.key],
            }));
          }}
        >
          {f.value}
        </FilterItem>
      ))}
    </div>
  </>
);

export const AgeFilter = ({
  filter,
  setFilter,
}: {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}) => (
  <>
    <FilterTitle title="연령" />
    <div className="w-full text-right text-primary text-[11px] font-medium">
      {filter.minAge} -{" "}
      {filter.maxAge < 60 ? `${filter.maxAge}세` : "60대 이상"}
    </div>
    <RangeInput
      className="mt-4"
      range={[20, 60]}
      min={filter.minAge}
      max={filter.maxAge}
      minText={"20대"}
      maxText={"60대 이상"}
      minValueText={`${filter.minAge}세`}
      maxValueText={`${filter.maxAge}세`}
      setMin={(min) => setFilter((filter) => ({ ...filter, minAge: min }))}
      setMax={(max) => setFilter((filter) => ({ ...filter, maxAge: max }))}
      step={1}
    />
  </>
);

export const ReligionFilter = ({
  filter,
  setFilter,
}: {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}) => (
  <>
    <FilterTitle title="종교" duplicate />
    <div className="flex gap-2 mt-4">
      {RELIGIONS.map((f, key) => (
        <FilterItem
          key={key}
          checked={filter.religion.includes(f.key)}
          toggle={() => {
            setFilter(() => ({
              ...filter,
              religion: filter.religion.includes(f.key)
                ? filter.religion.filter((type) => type !== f.key)
                : [...filter.religion, f.key],
            }));
          }}
        >
          {f.value}
        </FilterItem>
      ))}
    </div>
  </>
);

export const KeywordFilter = ({
  selectedKeywords,
  keywords,
  selectKeyword,
}: {
  selectedKeywords: number[];
  keywords: KeywordType[];
  selectKeyword: React.Dispatch<React.SetStateAction<number[]>>;
}) => (
  <>
    <FilterTitle title="특징" duplicate />
    <div className="flex gap-2 flex-wrap mt-4">
      {keywords.map((filter, key) => (
        <FilterItem
          checked={selectedKeywords.includes(filter.id)}
          key={key}
          toggle={() => {
            selectKeyword((keywords) =>
              keywords.includes(filter.id)
                ? keywords.filter((id) => id !== filter.id)
                : [...keywords, filter.id]
            );
          }}
        >
          {filter.keyword}
        </FilterItem>
      ))}
    </div>
  </>
);