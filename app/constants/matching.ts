import { QuestionType } from "@/types/question";

export const TOTALINDEX = {
  individual: 12,
};

export const DEFAULT: QuestionType[] = [
  {
    index: "1",
    goto: "2",
    title: "어떤 유형의 상담을 찾으시나요?",
    type: "radio",
    options: [
      {
        subtitle: "나를 위한",
        title: "개인 상담(Individual)",
        value: "individual",
      },
      {
        subtitle: "나와 나의 파트너를 위한",
        title: "커플/부부 상담(Couples)",
        value: "couples",
      },
      {
        subtitle: "나의 자녀를 위한",
        title: "청소년(Teen)",
        value: "teen",
      },
    ],
  },
];

export const INDIVIDUAL: QuestionType[] = [
  {
    index: "2",
    title: "선호하는 상담 방식을 알려주세요.",
    type: "checkbox",
    goto: "3",
    options: [
      {
        title: "대면 상담",
        value: "offline",
        goto: "2-1",
      },
      {
        title: "화상 상담",
        value: "online",
      },
      {
        title: "전화 상담",
        value: "phone",
      },
      {
        title: "상관없음",
        value: "none",
        goto: "2-1",
        exclusive: true,
      },
      {
        title: "아직 잘 모르겠음.",
        value: "undecided",
        underTitle: "나중에 결정",
        goto: "2-1",
        exclusive: true,
      },
    ],
  },
  {
    index: "2-1",
    title: "상담 희망 지역을 선택해 주세요.",
    type: "dropdown",
    goto: "3",
    options: [
      {
        title: "[선택 1] 시/도",
        type: "province",
      },
      {
        title: "[선택 1] 시/군/구",
        type: "city",
      },
      {
        title: "[선택 2] 시/도",
        type: "province",
      },
      {
        title: "[선택 2] 시/군/구",
        type: "city",
      },
    ],
  },
  {
    index: "3",
    title: "생물학적 성별이 어떻게 되시나요?",
    type: "radio",
    goto: "4",
    options: [
      {
        title: "남",
        value: "male",
      },
      {
        title: "여",
        value: "female",
      },
    ],
  },
  {
    index: "4",
    title: "나이가 어떻게 되시나요?",
    goto: "5",
    type: "radio",
    options: [
      {
        title: "만 13세 미만 ~ 19세",
        value: "teen",
      },
      {
        title: "20세 이상",
        value: "adult",
      },
    ],
  },
  {
    index: "5",
    title: "성 정체성은 어떻게 되시나요?",
    type: "radio",
    goto: "6",
    options: [
      {
        title: "이성애자(Straight)",
        value: "straight",
      },
      {
        title: "게이(Gay)",
        value: "gay",
        goto: "5-1",
      },
      {
        title: "레즈비언(Lesbian)",
        value: "lesbian",
        goto: "5-1",
      },
      {
        title: "양성애자(Bisexual)",
        value: "bisexual",
        goto: "5-1",
      },
      {
        title: "무성애자(Asexual)",
        value: "asexual",
        goto: "5-1",
      },
      {
        title: "답하고 싶지 않음.",
        value: "none",
        goto: "5-1",
      },
      {
        title: "그 외",
        value: "other",
        goto: "5-1",
      },
    ],
  },
  {
    index: "5-1",
    title: "[LGBTQ+] 성 정체성에 대하여 얼마나 만족하시나요?",
    type: "radio",
    goto: "5-2",
    options: [
      {
        title: "1. 전혀 만족스럽지 않다.",
        value: 1,
      },
      {
        title: "2. 약간 만족스럽지 않다.",
        value: 2,
      },
      { title: "3. 만족스럽다.", value: 4 },
      {
        title: "4. 매우 만족스럽다.",
        value: 5,
      },
    ],
  },
  {
    index: "5-2",
    title: "[LGBTQ+] 성 정체성이 당신의 정신건강에 영향을 미치고 있나요?",
    type: "radio",
    goto: "5-3",
    options: [
      { title: "1. 전혀 그렇지 않다.", value: 1 },
      { title: "2. 약간 그렇지 않다.", value: 2 },
      { title: "3. 그저 그렇다.", value: 3 },
      { title: "4. 많이 영향을 받는다.", value: 4 },
      { title: "5.지배적인 영향을 받는다.", value: 5 },
    ],
  },
  {
    index: "5-3",
    title: "[LGBTQ+] LGBTQ+ Friendly 상담사를 추천 받길 선호하시나요?",
    type: "radio",
    goto: "6",
    options: [
      {
        title: "네",
        value: "yes",
      },
      {
        title: "아니오",
        value: "no",
      },
      {
        title: "상관없음",
        value: "none",
      },
    ],
  },
  {
    index: "6",
    title: "종교가 어떻게 되시나요?",
    type: "radio",
    goto: "7",
    options: [
      {
        title: "무교",
        value: "none",
      },
      {
        title: "기독교",
        value: "christian",
        goto: "6-1",
      },
      {
        title: "불교",
        value: "buddhist",
        goto: "6-1",
      },
      {
        title: "천주교",
        value: "catholic",
        goto: "6-1",
      },
      {
        title: "그 외 (직접 입력)",
        value: "other",
        goto: "6-1",
        input: true,
      },
    ],
  },
  {
    index: "6-1",
    title: "종교 성향이 동일한 상담사를 추천 받길 선호하시나요?",
    type: "radio",
    goto: "7",
    options: [
      {
        title: "네",
        value: "yes",
      },
      {
        title: "아니오",
        value: "no",
      },
      {
        title: "상관없음",
        value: "none",
      },
    ],
  },
  {
    index: "7",
    title: "오늘 상담을 고려하게 된 이유는 무엇인가요?",
    type: "checkbox",
    goto: "8",
    options: [
      {
        title: "기분이 우울했어요.",
        value: "depression",
      },
      {
        title: "자주 불안하고 가슴이 답답했어요.",
        value: "anxiety",
      },
      {
        title: "최근 기분이 직업/학업 성과를 방해하고 있어요.",
        value: "work",
      },
      {
        title: "관계를 만들거나 유지하는게 어려워요.",
        value: "relationship",
      },
      {
        title: "삶의 목적과 의미를 찾을 수 없어요.",
        value: "meaning",
      },
      {
        title: "기분이 슬퍼요.",
        value: "sad",
      },
      {
        title: "트라우마를 겪고 있어요.",
        value: "trauma",
      },
      {
        title: "구체적인 해결방법을 찾지 못하겠어요.",
        value: "solution",
      },
      {
        title: "자신감을 얻고 싶어요.",
        value: "confidence",
      },
      {
        title:
          "나를 변화시키고 발전시키고 싶은데 어디서부터 시작해야 할지 모르겠어요.",
        value: "improve",
      },
      {
        title: "지인 추천(친구, 가족, 의사)",
        value: "recommend",
      },
      {
        title: "그냥 우연히",
        value: "accident",
      },
    ],
  },
  {
    index: "8",
    title: "상담사에게 무엇을 기대하고 계신가요?",
    type: "checkbox",
    goto: "9",
    options: [
      {
        title: "제 이야기를 들어주세요.",
        value: "listen",
      },
      {
        title: "위로와 공감을 받고 싶어요.",
        value: "comfort",
      },
      {
        title: "제가 처한 상황에 대한 해결책을 알고 싶어요.",
        value: "solution",
      },
      {
        title: "목표를 실행할 수 있도록 도움받고 싶어요.",
        value: "goal",
      },
      {
        title: "올바른 관계형성을 위한 스킬을 배우고 싶어요.",
        value: "relationship",
      },
      {
        title: "올바른 대화법을 배우고 싶어요.",
        value: "conversation",
      },
      {
        title: "감정을 잘 다스리기 위한 스킬이 필요해요.",
        value: "emotion",
      },
      {
        title: "트라우마를 극복하고 싶어요.",
        value: "trauma",
      },
      {
        title: "좋지 않은 습관을 버리고 싶어요.",
        value: "habit",
      },
      {
        title: "모르겠습니다.",
        value: "none",
      },
    ],
  },
  {
    index: "9",
    title:
      "심리상담 서비스를 이용하는데 있어 재정적인 여유는 어느정도 되시나요?",
    type: "radio",
    goto: "10",
    options: [
      { title: "좋음", value: "good" },
      { title: "보통", value: "normal" },
      { title: "어려움", value: "bad" },
    ],
  },
  {
    index: "10",
    title: "자살에 대해 마지막으로 생각해본 적이 언제인가요?",
    type: "radio",
    goto: "11",
    options: [
      {
        title: "생각해 본 적 없다.",
        value: "never",
      },
      {
        title: "대략 1년 전",
        value: "year",
      },
      {
        title: "6개월 이내",
        value: "6month",
      },
      {
        title: "3개월 이내",
        value: "3month",
      },
      {
        title: "1개월 이내",
        value: "1month",
        goto: "10-1",
      },
      {
        title: "2주일 이내",
        value: "2week",
        goto: "10-1",
      },
    ],
  },
  {
    index: "10-1",
    title: "자살에 대한 구체적인 계획이 있나요?",
    type: "radio",
    goto: "11",
    options: [
      { title: "아니요, 그저 감정이나 생각들 뿐이에요.", value: "no" },
      {
        title: "네, 구체적인 계획이 있어요.",
        value: "yes",
        goto: "10-2",
        alert: true,
      },
    ],
  },
  {
    index: "11",
    title: "상담사에 대하여 개인적인 선호사항이 있나요?",
    type: "checkbox",
    goto: "12",
    options: [
      {
        title: "남자 상담사",
        value: "male",
      },
      {
        title: "여자 상담사",
        value: "female",
      },
      {
        title: "청년 상담사 (35세 이하)",
        value: "young",
      },
      {
        title: "시니어 상담사 (중장년 45세 이상)",
        value: "senior",
      },
      {
        title: "LGBTQ+ Friendly 상담사",
        value: "lgbtq",
      },
      {
        title: "같은 종교성을 가진 상담사",
        value: "religion",
      },
      {
        title: "비 종교적인 상담사",
        value: "noreligion",
      },
      {
        title: "미술심리상담사",
        value: "art",
      },
      {
        title: "색체심리상담사",
        value: "color",
      },
      {
        title: "아동심리상담사",
        value: "child",
      },
      {
        title: "노인심리상담사",
        value: "elder",
      },
      {
        title: "트라우마전문상담사",
        value: "trauma",
      },
      {
        title: "연극치료전문상담사",
        value: "play",
      },
      {
        title: "영어 상담 가능 상담사",
        value: "english",
      },
      {
        title: "그 외",
        value: "other",
      },
    ],
  },
  {
    index: "12",
    title: "어떻게 상담플러스를 알게되셨나요?",
    type: "radio",
    goto: "end",
    options: [
      {
        title: "검색",
        value: "search",
      },
      {
        title: "지인 추천",
        value: "recommend",
      },
      {
        title: "네이버 블로그 or 카페",
        value: "blog",
      },
      {
        title: "인스타그램",
        value: "instagram",
      },
      {
        title: "페이스북",
        value: "facebook",
      },
      {
        title: "유튜브",
        value: "youtube",
      },
      {
        title: "카카오톡",
        value: "kakaotalk",
      },
      {
        title: "오프라인 (전단지, 설문, 현수막 등)",
        value: "offline",
      },
      {
        title: "그 외",
        value: "other",
      },
    ],
  },
];
