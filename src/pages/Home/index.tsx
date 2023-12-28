import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutMeContent from "../../content/AboutMeContent.json";
import DevelopmentSkillsContent from "../../content/DevelopmentSkillsContent.json";
import ProjectsContent from "../../content/ProjectsContent.json";
import ContactContent from "../../content/ContactContent.json";
import ListBlockSkills from "../../components/ListBlockSkills";
import ListBlockProjects from "../../components/ListBlockProjects";


const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="profile.png"
        id="intro"
      />
      <MiddleBlock
        title={AboutMeContent.title}
        content={AboutMeContent.text}
        button={AboutMeContent.button}
        id="about"
      />
      <ListBlockProjects
        direction="left"
        title={ProjectsContent.title}
        content={ProjectsContent.text}
        section={ProjectsContent.section}
        icon="graphs.svg"
        id="projects"
      />
      <ListBlockSkills
        direction="left"
        title={DevelopmentSkillsContent.title}
        content={DevelopmentSkillsContent.text}
        section={DevelopmentSkillsContent.section}
        icon="waving.svg"
        id="skills"
      />
      <Contact
        title={ContactContent.title}
        id="contact"
      />
    </Container>
  );
};

export default Home;
