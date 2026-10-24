import Tag from "../components/ui/Tag";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Git & GitHub",
  ];

  return (
    <main>
      <h1>My Skills</h1>

      <div className="skills-list">
        {skills.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>
    </main>
  );
}

export default Skills;