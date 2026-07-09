const skillsList = [
  'Full Stack Development',
  'Machine Learning',
  'Data Analysis',
]

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <ul className="skills-list">
        {skillsList.map((skill) => (
          <li key={skill} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
