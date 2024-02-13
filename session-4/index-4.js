// console.log("Hello World")
// alert("ALERT!!!!!")

let c = "2024"

let nC = Number(c)

console.log(nC)

console.log(Number("dd106"))

/*-------------------------------------------------------------*/

console.log(typeof(x))

/*-------------------------------------------------------------*/

console.log(String(100 + 23))

/*-------------------------------------------------------------*/

console.log(String(100) + String(23))

/*-------------------------------------------------------------*/

let z = 33
sk = z.toString()
console.log(typeof(sk))

/*-------------------------------------------------------------*/

console.log(Boolean(1))
console.log(Boolean(0))

/*-------------------------------------------------------------*/

let vD = new Date();
zz = Number(vD)
console.log(zz)

/*-------------------------------------------------------------*/

let d = new Date()
console.log(d.getDay())
console.log(d.getDate())
console.log(d.getYear())
console.log(d.getFullYear())
console.log(d.getMilliseconds())
console.log(d.getSeconds())
console.log(d.getMinutes())
console.log(d.getHours())
console.log(d.getMonth())
console.log(d.getTimezoneOffset())


/*-------------------------------------------------------------*/

switch (new Date().getDay()) {
  case 0:
    jour = "Sunday";
    break;
  case 1:
    jour = "Monday";
    break;
  case 2:
     jour = "Tuesday";
    break;
  case 3:
    jour = "Wednesday";
    break;
  case 4:
    jour = "Thursday";
    break;
  case 5:
    jour = "Friday";
    break;
  case 6:
    jour = "Saturday";
}

console.log(jour)

/*-------------------------------------------------------------*/
let dd = "developpement digitale";
let pp = "pp";

switch (dd) {
  case "developpement digitale":
    console.log("developpement digitale");
    break;
  case pp:
    console.log("no");
    break;
}
/* ------------------------------------------------------------- */
