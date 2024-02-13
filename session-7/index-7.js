function sommeCalcule(){

  let x = +document.querySelector (".age").value
  console.log(x)
  let y = +document.querySelector(".age2").value
  console.log(y)
  let z = +document.querySelector(".age3").value
  console.log(z)


  const somme = x + y + z;
  console.log("La somme est: ", somme)


  if (somme > 100){
    document.body.style.backgroundColor = "red";
  }
  else{
  document.body.style.backgroundColor = "green";
  }


}

sommeCalcule();


// let y = x.value

// let z = x + 10;

// console.log(z);