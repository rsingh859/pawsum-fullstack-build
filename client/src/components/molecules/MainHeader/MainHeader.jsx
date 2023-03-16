import { Link } from "react-router-dom";
import Image from "../../../images/main_header.png";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#PamperYourPup</h4>
          <h1>
            Unleash your pup's style with our pawsome selection of accessories
          </h1>
          <p>
          Because every dog deserves to look and feel their best, our dog accessories are designed to bring out their unique personalities and enhance their comfort and style
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
