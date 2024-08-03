const ProjectCard = ({ img, name, live, git }) => {
  const handelOpenPage = (b, l) => {
    if (b === "git") {
      window.open(l, "_blank");
    } else {
      window.open(l, "_blank");
    }
  };

  return (
    <div className="project_container">
      <div className="info_section">
        <img src={img} />
        <h4>{name}</h4>
      </div>
      <div className="links_section">
        <button onClick={() => handelOpenPage("git", git)}>Github</button>
        <button onClick={() => handelOpenPage("live", live)}>Demo</button>
      </div>
    </div>
  );
};

export default ProjectCard;
