import { ATTRIBUTE_LIST } from '../consts';
import {useState } from 'react';
function AttributeList({attributes, setAttributes})
{
  const [str, setStr] = useState(0);
  const [dex, setDex] = useState(0);
  const [con, setCon] = useState(0);
  const [int, setInt] = useState(0);
  const [wis, setWis] = useState(0);
  const [cha, setCha] = useState(0);

  function increaseAttribute(attribute)
  {
    if(attributes[attribute] < 20)
    {
      attributes[attribute] += 1;
      setAttributes(attributes);
    }
  }

  function decreaseAttribute(attribute)
  {
    if(attributes[attribute] > 0)
    {
      attributes[attribute] -= 1;
      setAttributes(attributes);
      
    }
  }

  function printAttributes()
  {
    console.log(attributes);
  }

  return (
    <div style={{"border":"1px solid white","margin":"4px","borderRadius":"3px"}}>
      {ATTRIBUTE_LIST.map(elem => <div key={elem}>
        {elem}:
        <button onClick={e => {increaseAttribute(elem)}}>+</button>
          {attributes[elem]}
        <button onClick={e => {decreaseAttribute(elem)}}>-</button>
        </div>)}
    </div>
  )
}

export default AttributeList;