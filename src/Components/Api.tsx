function sendData(data)
{
  fetch("https://recruiting.verylongdomaintotestwith.ca/api/{xu-ian}/character", 
    {method:"POST", body:JSON.stringify(data), 
      headers: {"content-type":"application/json"}
    })
  .then(res => {
    console.log(res);
  });
}

function getCharacter(next)
{
  fetch("https://recruiting.verylongdomaintotestwith.ca/api/{xu-ian}/character", {method:"GET"})
  .then(res => {
    res.json().then(obj => {
      next(obj);
    })
  });
}

export {sendData, getCharacter};