import { atom } from "recoil";

export const skillGridFirst = atom({
  key: "skillGridFirst",
  default: "1fr 1fr 1fr",
});
export const skillGridSecond = atom({
  key: "skillGridSecond",
  default: "1fr 1fr 1fr",
});

export const SkillViewToggle = atom({
  key: "skillView",
  default: false,
});
