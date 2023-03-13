import {
  NavBar,
  Content,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "@/components";

import { ContentContainer } from "@/layouts/ContentContainer";
import { NavBarContainer } from "@/layouts/NavBarContainer";
import styles from "../styles";
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <NavBarContainer>
      <NavBar />
    </NavBarContainer>
    <ContentContainer>
      <Content />
    </ContentContainer>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);
export default App;
