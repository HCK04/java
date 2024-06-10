var my_text = "I'm Moroccan and i want to be a great programmer!"

var result = my_text.replace(/m/g, "h") // replaces m with h and the g is global
var result = my_text.replace(/o+c?/) // c after o and the ? means its optional, it can display oc, o or c.// you can also use * istead of +?
var result = my_text.replace(/.oc/g) // it will print any word that contains "at"
var result = my_text.replace(/\./) // period
var result = my_text.replace(/\w/g) //matches every letter
var result = my_text.replace(/\s/g) // white space
var result = my_text.replace(/\ negative = W or S/g)
var mat = "52763 - D - 7"
var mat_new = mat.replace(/\S/g, "")
        //  all RegEX expressions:
        //     i = case insensetive (if its maj or min)




