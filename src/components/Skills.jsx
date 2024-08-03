import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import js from "../assets/icons/js.png";
import react from "../assets/icons/react.png";
import redux from "../assets/icons/redux.png";
import api from "../assets/icons/api.png";
import node from "../assets/icons/node.png";
import postman from "../assets/icons/postman.png";

const ss = [html, css, js, react, redux, api, node, postman];
const Skills = () => {
  return (
    <div id="skills" className="skills_container">
      <div className="skills_text">
        <h1>مهاراتي</h1>
        <p>
          أمتلك مجموعة واسعة من المهارات التي تجعلني مطور واجهات أمامية بارعًا.
          لدي خبرة قوية في تقنيات
        </p>
      </div>

      <div className="skills_img">
        {ss.map((s) => (
          <h4>
            <img src={s} />
          </h4>
        ))}
      </div>
    </div>
  );
};

export default Skills;
