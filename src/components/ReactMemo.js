import React, { useState } from 'react';

const SkillList = React.memo(({ skills }) => {
  console.log('Rendering SkillList');
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
});

function ReactMemo() {
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);

  const addSkill = () => {
    if (skill.length > 5) {
      setSkills([...skills, skill]);
      setSkill('');
    }
  };

  return (
    <div>
      <h2>React.memo</h2>
      <input
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <button onClick={addSkill}>Add Skill</button>
      <SkillList skills={skills} />
    </div>
  );
}

export default ReactMemo;
