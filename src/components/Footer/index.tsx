import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import {
  FooterSection,
  Extra,
  Para,
  Large,
  Chat,
  FooterContainer,
  Language
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
        style={{ marginRight: '10px', marginLeft: '20px' }}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Tell me everything")}</Large>
              <Para>
                {t(`Do you have any question?`)}
              </Para>
              <a href="mailto:carlosbenitez.dev.acct@gmail.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="start"
            style={{
            paddingTop: "3rem"
            }}
          >
            <FooterContainer>
              <SocialLink
                href="https://github.com/carlobeni"
                src="github.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/carlosbeni/"
                src="linkedin.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
