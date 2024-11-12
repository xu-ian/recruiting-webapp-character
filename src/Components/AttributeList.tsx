import { ATTRIBUTE_LIST } from '../consts';

function AttributeList({attributes, setAttributes})
{

  function attributeSum()
  {
    let sum = 0;
    for(let i = 0; i < ATTRIBUTE_LIST.length; i++)
    {
      sum += attributes[ATTRIBUTE_LIST[i]];
    }
    return sum
  }

  //Increases selected attribute
  function increaseAttribute(attribute)
  {
    if(attributes[attribute] < 20 && attributeSum() < 70)
    {
      setAttributes({
        Strength: attributes["Strength"] + ((attribute == 'Strength') ? 1 : 0),
        Dexterity: attributes["Dexterity"] + ((attribute == 'Dexterity') ? 1 : 0),
        Constitution: attributes["Constitution"] + ((attribute == 'Constitution') ? 1 : 0),
        Intelligence: attributes["Intelligence"] + ((attribute == 'Intelligence') ? 1 : 0),
        Wisdom: attributes["Wisdom"] + ((attribute == 'Wisdom') ? 1 : 0),
        Charisma: attributes["Charisma"] + ((attribute == 'Charisma') ? 1 : 0),
      });
    }
  }

  //Decreases selected attribute
  function decreaseAttribute(attribute)
  {
    if(attributes[attribute] > 0)
    {
      setAttributes({
        Strength: attributes["Strength"] - ((attribute == 'Strength') ? 1 : 0),
        Dexterity: attributes["Dexterity"] - ((attribute == 'Dexterity') ? 1 : 0),
        Constitution: attributes["Constitution"] - ((attribute == 'Constitution') ? 1 : 0),
        Intelligence: attributes["Intelligence"] - ((attribute == 'Intelligence') ? 1 : 0),
        Wisdom: attributes["Wisdom"] - ((attribute == 'Wisdom') ? 1 : 0),
        Charisma: attributes["Charisma"] - ((attribute == 'Charisma') ? 1 : 0),
      });
    }
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