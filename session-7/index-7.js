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
    document.querySelector(".age2").style.backgroundColor = "red";
  }
  else{
    document.querySelector(".age").style.backgroundColor = "green";
  }


}

sommeCalcule();


// -------------------------------------------------------------------------------------------------------------------

// Button click

function BackgroundColor() {
  document.querySelector(".age").style.backgroundColor = "red";
}

document.querySelector(".btn").addEventListener("click", BackgroundColor); //NO "()" SO IT DOESNT EXECUTE BY ITSELF


// CALCULE

document.querySelector(".btn").addEventListener("click", () => {
  let x = +document.querySelector(".age").value;
  console.log(x);
  let y = +document.querySelector(".age2").value;
  console.log(y);

  let z = x + y;
  document.querySelector(".age3").value = z;

  if (z > 100) {
    document.querySelector(".age3").style.backgroundColor = "red";
  } else {
    document.querySelector(".age3").style.backgroundColor = "green";
  }
});


// RESET 

document.querySelector(".reset").addEventListener("click", () => {
  document.querySelector(".age").value = "";
  document.querySelector(".age2").value = "";
  document.querySelector(".age3").value = "";
  document.querySelector(".age").style.backgroundColor = "";
  console.log("reset clicked")
})

// 



















