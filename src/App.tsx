import { useState } from 'react';
import './App.css';
import AttributeList from "./Components/AttributeList";
import ClassList from './Components/ClassList';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import SkillList from './Components/SkillList';


function App() {
  const [num, setNum] = useState<number>(0);
  const [attributes, setAttributes] = useState({Strength: 0,
    Dexterity: 0,
    Constitution: 0,
    Intelligence: 0,
    Wisdom: 0,
    Charisma: 0})
  const [skills, setSkills] = useState({
    Acrobatics:0,
    "Animal Handling":0,
    Arcana:0,
    Athletics:0,
    Deception:0,
    History:0,
    Insight:0,
    Intimidation:0,
    Investigation:0,
    Medicine:0,
    Nature:0,
    Perception:0,
    Performance:0,
    Persuasion:0,
    Religion:0,
    "Sleight of Hand":0,
    Stealth:0,
    Survival:0
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section" style={{"display":"flex"}}>
        <AttributeList attributes={attributes} setAttributes={setAttributes}></AttributeList>
        <ClassList attributes={attributes}></ClassList>
        <SkillList attributes={attributes} skills={skills} setSkills={setSkills}></SkillList>
      </section>
    </div>
  );
}

export default App;
