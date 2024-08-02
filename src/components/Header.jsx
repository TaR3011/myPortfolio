import NavBar from "./NavBar";
import a from "../assets/a.webp";

const Header = () => {
  return (
    <>
      <NavBar />
      <section>
        <div className="container">
          <div className="text_section">
            <h1>
              مرحبًا 👋,
              <br /> اسمي <span>تركي</span>
              , <br />
              أنا مطور ويب للواجهة الأمامية
            </h1>
            <div className="btn_container">
              <button>Linkedln</button>
              <button>Github</button>
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
