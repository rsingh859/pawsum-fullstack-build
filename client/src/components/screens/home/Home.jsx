import { FAQs, MainHeader, Programs, Testimonials } from "../../molecules";
import "./Home.css";

function Home() {
  return (
    <div>
      <MainHeader />
      <Programs />
      <FAQs />
      <Testimonials />
    </div>
  );
}

export default Home;
