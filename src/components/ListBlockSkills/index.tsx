import { Row, Col, Card } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { GithubOutlined } from "@ant-design/icons";

import { ListBlockSkillsProps } from "./types";
import {
  ContentSection,
  ContentWrapper,
  ServiceWrapper,
  StyledRow,
} from "./styles";
import { SvgIcon } from "../../common/SvgIcon";
import Meta from "antd/lib/card/Meta";

const ListBlockSkills = ({
  icon,
  title,
  content,
  section,
  t,
  id,
  direction,
}: ListBlockSkillsProps) => {
  return (
    <ContentSection id={id}>
        <StyledRow justify="space-between" align="middle" direction={direction}>
        <Fade direction={direction}>
          <ContentWrapper>
            <h6>{t(title)}</h6>
            <ServiceWrapper>
              <Row gutter={[16, 16]} justify="space-between">
                {typeof section === "object" &&
                  section.map(
                    (
                      item: {
                        icon:string
                      },
                      id: number
                    ) => {
                      return (
                        <Col className="gutter-row" xs={24} sm={12} md={8} lg={8} xl={6} key={id}>
                          <Card
                            hoverable
                            style={{ 
                              display: "flex",
                              justifyContent: "center",
                              padding: "10px",
                              border: "1px solid #ccc",
                              borderRadius: '15px',
                  
                            }
                          }
                          >
                            <SvgIcon 
                            src={item.icon}
                            width="60px"
                            height="60px"/>
                        
                          </Card>
                        </Col>
                      );
                    }
                  )}
              </Row>
            </ServiceWrapper>
          </ContentWrapper>
          </Fade>
        </StyledRow>
    </ContentSection>
  );
};

export default withTranslation()(ListBlockSkills);
