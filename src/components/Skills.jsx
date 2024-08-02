const ss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const Skills = () => {
  return (
    <div className="skills_container">
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
            <p>{s}</p>
          </h4>
        ))}
      </div>
    </div>
  );
};

export default Skills;
