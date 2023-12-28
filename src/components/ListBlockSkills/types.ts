import { TFunction } from "react-i18next";
export interface ListBlockSkillsProps {
  icon: string;
  title: string;
  content: string;
  section?: {
    icon:string,
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
