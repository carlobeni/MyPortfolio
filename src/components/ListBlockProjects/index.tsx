import { Row, Col, Card } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { ListBlockProjectsProps } from "./types";
import {
  ContentSection,
  ContentWrapper,
  ServiceWrapper,
} from "./styles";
import { CustomCard } from "../Card";

const ListBlockProjects = ({
  icon,
  title,
  content,
  section,
  t,
  id,
  direction,
}: ListBlockProjectsProps) => {
  return (
    <ContentSection id={id}>
      <Fade direction={direction}>
          <ContentWrapper>
            <h6>{t(title)}</h6>
            <ServiceWrapper>
                {typeof section === "object" &&
                  section.map(
                    (
                      item: {
                        title: string;
                        content: string;
                        repoLink: string;
                      },
                      id: number
                    ) => {
                      return (
                        <Fade direction={"up"}>
                          <CustomCard title={item.title} content={item.content} link={item.repoLink}/>
                          </Fade>
                      );
                    }
                  )}
            </ServiceWrapper>
          </ContentWrapper>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ListBlockProjects);
