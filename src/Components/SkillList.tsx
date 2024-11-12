import { Class, Attributes } from '../types';
import { useState } from 'react';
import { SKILL_LIST } from "../consts";

function SkillList({attributes, skills, setSkills})
{
  const [points, setPoints] = useState(10 + Math.trunc(attributes["Intelligence"]/2));
  function increaseAttribute(skill)
  {
    if(points > 0)
    {
      setPoints(points - 1);
      setSkills(
        {
          Acrobatics: skills["Acrobatics"] + ((skill == 'Acrobatics') ? 1 : 0),
          "Animal Handling": skills["Animal Handling"] + ((skill == 'Animal Handling') ? 1 : 0),
          Arcana: skills["Arcana"] + ((skill == 'Arcana') ? 1 : 0),
          Athletics: skills["Athletics"] + ((skill == 'Athletics') ? 1 : 0),
          Deception: skills["Deception"] + ((skill == 'Deception') ? 1 : 0),
          History: skills["History"] + ((skill == 'History') ? 1 : 0),
          Insight: skills["Insight"] + ((skill == 'Insight') ? 1 : 0),
          Intimidation: skills["Intimidation"] + ((skill == 'Intimidation') ? 1 : 0),
          Investigation: skills["Investigation"] + ((skill == 'Investigation') ? 1 : 0),
          Medicine: skills["Medicine"] + ((skill == 'Medicine') ? 1 : 0),
          Nature: skills["Nature"] + ((skill == 'Nature') ? 1 : 0),
          Perception: skills["Perception"] + ((skill == 'Perception') ? 1 : 0),
          Performance: skills["Performance"] + ((skill == 'Performance') ? 1 : 0),
          Persuasion: skills["Persuasion"] + ((skill == 'Persuasion') ? 1 : 0),
          Religion: skills["Religion"] + ((skill == 'Religion') ? 1 : 0),
          "Sleight of Hand": skills["Sleight of Hand"] + ((skill == 'Sleight of Hand') ? 1 : 0),
          Stealth: skills["Stealth"] + ((skill == 'Stealth') ? 1 : 0),
          Survival: skills["Survival"] + ((skill == 'Survival') ? 1 : 0),
        }
      )
    }
  }

  function decreaseAttribute(skill)
  {
    if(skills[skill] > 0)
    {
      setPoints(points + 1);
      setSkills(
        {
          Acrobatics: skills["Acrobatics"] - ((skill == 'Acrobatics') ? 1 : 0),
          "Animal Handling": skills["Animal Handling"] - ((skill == 'Animal Handling') ? 1 : 0),
          Arcana: skills["Arcana"] - ((skill == 'Arcana') ? 1 : 0),
          Athletics: skills["Athletics"] - ((skill == 'Athletics') ? 1 : 0),
          Deception: skills["Deception"] - ((skill == 'Deception') ? 1 : 0),
          History: skills["History"] - ((skill == 'History') ? 1 : 0),
          Insight: skills["Insight"] - ((skill == 'Insight') ? 1 : 0),
          Intimidation: skills["Intimidation"] - ((skill == 'Intimidation') ? 1 : 0),
          Investigation: skills["Investigation"] - ((skill == 'Investigation') ? 1 : 0),
          Medicine: skills["Medicine"] - ((skill == 'Medicine') ? 1 : 0),
          Nature: skills["Nature"] - ((skill == 'Nature') ? 1 : 0),
          Perception: skills["Perception"] - ((skill == 'Perception') ? 1 : 0),
          Performance: skills["Performance"] - ((skill == 'Performance') ? 1 : 0),
          Persuasion: skills["Persuasion"] - ((skill == 'Persuasion') ? 1 : 0),
          Religion: skills["Religion"] - ((skill == 'Religion') ? 1 : 0),
          "Sleight of Hand": skills["Sleight of Hand"] - ((skill == 'Sleight of Hand') ? 1 : 0),
          Stealth: skills["Stealth"] - ((skill == 'Stealth') ? 1 : 0),
          Survival: skills["Survival"] - ((skill == 'Survival') ? 1 : 0),
        }
      )
    }
  }

  return (
    <div style={{"border":"1px solid white","margin":"4px","borderRadius":"3px"}}>
      <div>Skill Points:{points}</div>
      {SKILL_LIST.map(elem => <div key={elem.name}>
        {elem.name} :
        <button onClick={e => {increaseAttribute(elem.name)}}>+</button>
          {skills[elem.name]}
        <button onClick={e => {decreaseAttribute(elem.name)}}>-</button>
        </div>)}
    </div>
  )
}

export default SkillList;