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
      skills[skill] += 1;
    }
  }

  function decreaseAttribute(skill)
  {
    if(skills[skill] > 0)
    {
      setPoints(points + 1);
      skills[skill] -= 1;
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