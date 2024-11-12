import { ATTRIBUTE_LIST, CLASS_LIST } from '../consts';
import { Class, Attributes } from '../types';
import { useState } from 'react';
import '../App.css';


function ClassList({attributes})
{
  let classes = Object.keys(CLASS_LIST) as Array<Class>;
  
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

  function meetsRequirements(clss)
  {
    const usr = CLASS_LIST[clss];
    for(let i = 0; i < ATTRIBUTE_LIST.length; i++)
    {
      if(usr[ATTRIBUTE_LIST[i]] > attributes[ATTRIBUTE_LIST[i]])
      {
        return "unmet";
      }
    }
    return "met";
  }

  return (
    <div style={{"border":"1px solid white","margin":"4px","borderRadius":"3px"}}>
      {classes.map(clss => {
        return <div>
          <div className={meetsRequirements(clss)} key={clss} onClick={e => {toggleVisbility(clss)}}>Class Requirements: {clss}</div>
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