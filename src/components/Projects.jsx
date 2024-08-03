import ProjectCard from "./ProjectCard";

const Projects = () => {
  const ProjectsInfo = [
    {
      name: "تطبيق نوتاتي",
      img: "https://firebasestorage.googleapis.com/v0/b/projectsimage-e386d.appspot.com/o/notaty.png?alt=media&token=752d68cb-08e5-4c1e-a923-650333ede92e",
      git: "https://github.com/TaR3011/Notaty-app/tree/main",
      live: "https://notaty.netlify.app/",
    },
    {
      name: "تطبيق قائمة المهام",
      img: "https://firebasestorage.googleapis.com/v0/b/projectsimage-e386d.appspot.com/o/todo.png?alt=media&token=d9b091ce-3c86-40e5-9687-d49151d399dd",
      git: "https://github.com/TaR3011/TaR_Todos",
      live: "https://tar-todos.netlify.app/",
    },
    {
      name: "مترجم اللغات",
      img: "https://firebasestorage.googleapis.com/v0/b/projectsimage-e386d.appspot.com/o/translator.png?alt=media&token=a157607e-970d-469c-986e-1ff2f37f0126",
      git: "https://github.com/TaR3011/Tar-Translator",
      live: "https://tar-translator.netlify.app/",
    },
    {
      name: "X O",
      img: "https://firebasestorage.googleapis.com/v0/b/projectsimage-e386d.appspot.com/o/tic-tac.png?alt=media&token=499150bd-89ea-4489-b72f-2b3ef9c96c66",
      git: "https://github.com/TaR3011/Tic_Tac_Toe?tab=readme-ov-file",
      live: "https://tictactoegame-tar.netlify.app/",
    },
    {
      name: "موقع بيت الأثاث",
      img: "https://firebasestorage.googleapis.com/v0/b/projectsimage-e386d.appspot.com/o/furninture.png?alt=media&token=ac098a85-7a88-4c6e-8405-1e5ddcdf2a17",
      git: "https://github.com/TaR3011/Furniture_site/tree/main",
      live: "https://furniturehome1.netlify.app/",
    },
    {
      name: "خمن الكلمه",
      img: "https://firebasestorage.googleapis.com/v0/b/projectsimage-e386d.appspot.com/o/guess.png?alt=media&token=aaaefa34-6fe6-4c4c-ab6d-ec58becc35fd",
      git: "https://github.com/TaR3011/guess-word-game",
      live: "https://guesswordgame1.netlify.app/",
    },
    {
      name: "تطبيق المقاضي",
      img: "https://firebasestorage.googleapis.com/v0/b/projectsimage-e386d.appspot.com/o/cart.png?alt=media&token=626d5a81-4c66-45a1-87fd-ec04ff13a930",
      git: "https://github.com/TaR3011/Shopping-list/tree/main",
      live: "https://shippinglist.netlify.app/",
    },
    {
      name: "قائمة المهام",
      img: "https://firebasestorage.googleapis.com/v0/b/projectsimage-e386d.appspot.com/o/forkfiy.png?alt=media&token=8d0cc91b-f95b-43e1-bcb2-09a745456ceb",
      git: "https://github.com/TaR3011/forkify-app/tree/main",
      live: "https://forkify-app-turki.netlify.app/",
    },
  ];

  return (
    <div id="projects" className="skills_container">
      <div className="skills_text">
        <h1>مشاريعي</h1>
        <p>
          خلال مسيرتي كمطور واجهات أمامية، عملت على مجموعة متنوعة من المشاريع
          التي تعكس مهاراتي وتفانيي في هذا المجال. تشمل مشاريعي مواقع ويب
          وتطبيقات تفاعلية تلبي احتياجات متنوعة
        </p>
      </div>

      <div className="projects_section">
        {ProjectsInfo.map((s) => (
          <ProjectCard name={s.name} img={s.img} git={s.git} live={s.live}>
            llll
          </ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
