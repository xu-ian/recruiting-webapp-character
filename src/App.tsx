import { useState, useEffect } from 'react';
import './App.css';
import AttributeList from "./Components/AttributeList";
import { getCharacter, sendData } from './Components/Api';
import ClassList from './Components/ClassList';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import SkillList from './Components/SkillList';


function App() {
  const [attributes, setAttributes] = useState({Strength: 10,
    Dexterity: 10,
    Constitution: 10,
    Intelligence: 10,
    Wisdom: 10,
    Charisma: 10})
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

  //Loads data from server
  useEffect(() => {
    getCharacter(out => {
      console.log(out);
      if(out.body && out.statusCode && out.statusCode == 200)
      {
        if(out.body.attributes && out.body.skills)
        {
          setAttributes(out.body.attributes);
          setSkills(out.body.skills);
        }
      }
    });
  }, []);

  useEffect(() => {
    sendData({attributes:attributes, skills:skills})
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
