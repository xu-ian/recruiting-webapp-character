import { ATTRIBUTE_LIST, CLASS_LIST } from '../consts';
import { Class, Attributes } from '../types';
import { useState } from 'react';

function ClassList({attributes})
{
  let [vis1, setVis1] = useState(false); 
  let classes = Object.keys(CLASS_LIST) as Array<Class>;
  classes.map(clss => {
    console.log(CLASS_LIST[clss]);
    let usr = CLASS_LIST[clss];
    ATTRIBUTE_LIST.map(
      attribute => {
        console.log(attribute, usr[attribute]);
      }
    )
  });
  
  function toggleVisbility(clss)
  {
    if(document.getElementById(clss).style.display != 'none')
    {
      document.getElementById(clss).style.display = 'none';
    }
    else
    {
      document.getElementById(clss).style.display = 'block';
    }

  }

  return (
    <div style={{"border":"1px solid white","margin":"4px","borderRadius":"3px"}}>
      {classes.map(clss => {
        return <div>
          <div key={clss} onClick={e => {toggleVisbility(clss)}}>Class Requirements: {clss}</div>
          <div id={clss} style={{"display":"none"}}>
            {
              ATTRIBUTE_LIST.map(attribute => <div key={attribute}>{attribute} : {(CLASS_LIST[clss])[attribute]}</div>)
            }
          </div>
        </div>
      })}
    </div>
  )
}

export default ClassList;