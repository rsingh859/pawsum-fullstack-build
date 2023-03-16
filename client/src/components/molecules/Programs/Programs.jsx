import { TbLayoutNavbarCollapse } from "react-icons/tb";
import { AiFillCaretRight } from "react-icons/ai";
import { SectionHead, Card } from "../../atoms";
import { programs } from "../../../dynamicdata";
import { Link } from "react-router-dom";
import "./Programs.css";

function Programs() {
  return (
    <section className="programs">
      <div className="container programs__container">
        <div className="programs__head">
          <SectionHead
            icon={<TbLayoutNavbarCollapse />}
            title="Featured Collection"
          />
        </div>
        <div className="programs__wrapper">
          {programs.map(
            ({ id, icon, title, info, path, imgSrc, description }) => {
              return (
                <Card className="programs__program" key={id}>
                  <img src={imgSrc} alt={description} />
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <div className="card__link">
                    <Link to={path} className="btn sm">
                      Learn More <AiFillCaretRight />
                    </Link>
                  </div>
                </Card>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}

export default Programs;
