import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
    scroll: string;
    linkPDF: string;
  }[];
  button?: (
    {
      title: string;
      color: string;
      scroll: string;
      linkPDF: string;
    }

  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
