import NavBar from "./NavBar";
import a from "../assets/a.webp";
import memoji from "../assets/memoji.png";

const Header = () => {
  const git = "https://github.com/TaR3011";
  const linkdlin = "https://www.linkedin.com/in/turki-al-ammari-526989234/";
  const handelOpenPage = (b, l) => {
    if (b === "git") {
      window.open(l, "_blank");
    } else {
      window.open(l, "_blank");
    }
  };

  return (
    <>
      <NavBar />
      <section>
        <div id="header" className="container">
          <div className="text_section">
            <h1>
              أهلاً 👋,
              <br /> اسمي <span>تركي</span>
              , <br />
              أنـــا مطور ويــب 💻
            </h1>
            <div className="btn_container">
              <button onClick={() => handelOpenPage("linkdln", linkdlin)}>
                Linkedln
              </button>
              <button onClick={() => handelOpenPage("git", git)}>Github</button>
            </div>
          </div>
          <div className="img_section">
            <img className="avatar" src={a} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
