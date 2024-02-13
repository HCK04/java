// // console.log("Hello World")
// // alert("ALERT!!!!!")

// let c = "2024"

// let nC = Number(c)

// console.log(nC)

// console.log(Number("dd106"))

// /*-------------------------------------------------------------*/

// console.log(typeof(x))

// /*-------------------------------------------------------------*/

// console.log(String(100 + 23))

// /*-------------------------------------------------------------*/

// console.log(String(100) + String(23))

// /*-------------------------------------------------------------*/

// let z = 33
// sk = z.toString()
// console.log(typeof(sk))

// /*-------------------------------------------------------------*/

// console.log(Boolean(1))
// console.log(Boolean(0))

// /*-------------------------------------------------------------*/

// let vD = new Date();
// zz = Number(vD)
// console.log(zz)

// /*-------------------------------------------------------------*/

// let d = new Date()
// console.log(d.getDay())
// console.log(d.getDate())
// console.log(d.getYear())
// console.log(d.getFullYear())
// console.log(d.getMilliseconds())
// console.log(d.getSeconds())
// console.log(d.getMinutes())
// console.log(d.getHours())
// console.log(d.getMonth())
// console.log(d.getTimezoneOffset())


// /*-------------------------------------------------------------*/

// switch (new Date().getDay()) {
//   case 0:
//     jour = "Sunday";
//     break;
//   case 1:
//     jour = "Monday";
//     break;
//   case 2:
//      jour = "Tuesday";
//     break;
//   case 3:
//     jour = "Wednesday";
//     break;
//   case 4:
//     jour = "Thursday";
//     break;
//   case 5:
//     jour = "Friday";
//     break;
//   case 6:
//     jour = "Saturday";
// }

// console.log(jour)

// /*-------------------------------------------------------------*/
// let dd = "developpement digitale";
// let pp = "pp";

// switch (dd) {
//   case "developpement digitale":
//     console.log("developpement digitale");
//     break;
//   case pp:
//     console.log("no");
//     break;
// }

/* ----------------------LOOP--------------------- */
// let i=0

// for (let i=0; i<=5; i++){
//   console.log(i)
// }

// let j = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// for (let i=0; i<7; i++){
//   console.log("Today is " + j[i])
// }
// console.log(j.length)

// // for in

// for (let jr in j){
//   console.log(j[jr])
// }
// console.log("----------------------------------------------------------------")
// // for/of

// for (let jours of j){
//   console.log(jours)
// }
// console.log("----------------------------------------------------------------")
// // WHILE LOOPP

// let n;
// n = 10
// while(n>=0){
//   console.log(n)
//   n = n - 1
// }

// console.log("----------------------------------------------------------------")

// //DO LOOP
// let m = -1
// do{
//   console.log(m)
//   m = m-1

// }
// while(m>=0)
// console.log("----------------------------------------------------------------")

// for each
// let txtJours = "";
// j.forEach(my_function)
// function my_function(value, index, array) {
//   txtJours = txtJours + " " + value;
// }

// console.log(txtJours)

// console.log("----------------------------------------------------------------")

// // CONTINUE

// for (let y=0; y<= (j.length -1); y++){
//   if (y === 3){
//     console.log("CONTINUE STOP")
//     continue;
//   }
//   console.log(j[y])
// }

// console.log("----------------------------------------------------------------")



// // BREAK!!
// for (let x=0; x<= (j.length -1); x++){
//   if (x === 3){
//     console.log("BREAK STOP")
//     break;
//   }
//   console.log(j[x])
// }
// SEANCE 6!!!














// ------------------------------------------------------------------------------------------------

console.log("----------------------------------------------------------------")


// FUNCTION FLECHES (arrow function):

// let a = function(){
//   return console.log("hello!!")
// }
// let greet = () =>{console.log("isfoooooo")}

// console.log(greet)

// console.log("----------------------------------------------------------------")

// let jours = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// jours.map((item) => {
//   return console.log(item)
// }


// x = [
//   { nom: "Akram", prenom: "Maih" },
//   { nom: "Mohammed", prenom: "Belakoul" },
//   { nom: "Hamza", prenom: "Samih" }
// ];

// const y = x.map(person => person.nom + ' ' + person.prenom);

// console.log(y);

let stagiaires = [
  { nom: "Akram", prenom: "Maih", age:"19" },
  { nom: "Mohammed", prenom: "Belakoul", age:"35" },
  { nom: "Hamza", prenom: "Samih", age:"1" }

  ];
let nomStag = stagiaires.map(info => {
  let fullName = info['nom'] + " " + info['prenom'];
  return { fullName, age: info['age'] };
});

console.table(nomStag);
