function error() {
    let ID = document.getElementById("ID").value
    let ID2 = document.getElementById("ID")

    let FN = document.getElementById("FN").value
    let FN2 = document.getElementById("FN")

    let LN = document.getElementById("LN").value
    let LN2 = document.getElementById("LN")

    let AGE = document.getElementById("AGE").value
    let AGE2 = document.getElementById("AGE")

    let ADR = document.getElementById("ADR").value
    let ADR2 = document.getElementById("ADR")

    let SAL = document.getElementById("SAL").value
    let SAL2 = document.getElementById("SAL")

    if (isNaN(ID)) {
        document.getElementById("ERRid").innerHTML = "ID must be a Number"
        ID2.style.border = '1px solid red'
    }
    else {
        document.getElementById("ERRid").innerHTML = ""
        ID2.style.border = '1px solid green'
    }

    if (FN.length < 3 || !isNaN(FN)) {
        document.getElementById("ERRfn").innerHTML = "First Name should at least be 3 characters long"
        FN2.style.border = '1px solid red'

    }
    else {
        document.getElementById("ERRfn").innerHTML = ""
        FN2.style.border = '1px solid green'
    }

    if (LN.length < 3 || !isNaN(LN)) {
        document.getElementById("ERRln").innerHTML = "last Name should be at least 3 characters long"
    }
    else {
        document.getElementById("ERRln").innerHTML = ""
        FN2.style.border = '1px solid green'
    }

    if (AGE < 18 || isNaN(AGE)) {
        document.getElementById("ERRage").innerHTML = "Must be Older than 18"
    }
    else {
        document.getElementById("ERRage").innerHTML = ""
        AGE2.style.border = '1px solid green'
    }

    // if (!ADR.checkValidity()) {
    //     document.getElementById("ERRadr").innerHTML="format incorrect"

    // }

    if (SAL < 4000 || isNaN(AGE)) {
        document.getElementById("ERRsal").innerHTML = "Must be more than 4000"
    }
    else {
        document.getElementById("ERRsal").innerHTML = ""
        SAL2.style.border = '1px solid green'
    }
}
function add() {
    let tablee = document.getElementById("tab")
    let ID = document.getElementById("ID").value
    let FN = document.getElementById("FN").value
    let LN = document.getElementById("LN").value
    let AGE = document.getElementById("AGE").value
    let ADR = document.getElementById("ADR").value
    let SAL = document.getElementById("SAL").value
    let template = `
    <tr>
        <td>${ID}</td>
        <td>${FN}</td>
        <td>${LN}</td>
        <td>${AGE}</td>
        <td>${ADR}</td>
        <td>${SAL}</td>

    </tr>
    <button type="button" onclick="dell()">Suprimer</button>`
    
    tablee.innerHTML += template
    function  dell() {
    let template = `
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

    </tr>`
}
}

function reset() {
    document.getElementById("ID").value = ""
    document.getElementById("FN").value = ""
    document.getElementById("LN").value = ""
    document.getElementById("AGE").value = ""
    document.getElementById("ADR").value = ""
    document.getElementById("SAL").value = ""
}
