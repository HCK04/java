

let list = []
function addObj(){
    try {
        let code_input = document.getElementById("codeI").value
        let nom_input = document.getElementById("nomI").value
        let pnom_input = document.getElementById("pnomI").value
        let group_input = document.getElementById("grpI").value
        let note_input = +document.getElementById("noteI").value

        let regex = /^DD-106-\d{2}$/;
        let code_inp2 = document.getElementById("codeI");
        if (regex.test(code_input)) {
            console.log("True");
            let info = {"code" : code_input, "nom": nom_input, "prenom": pnom_input, "group": group_input, "note": note_input}
            list.push(info)
            console.log(list)
            code_inp2.style.borderColor = 'green';

        } 
        else {
            console.log("False");
            code_inp2.style.borderColor = 'red';
        }
    } catch (error) {
        
    }
   

}


// -------------------------------------------------------------------------------- //

function afficher() {
    
    const tbody = document.getElementById("tab1").querySelector("tbody");

    
    content = '';
    for (let i = 0; i < list.length; i++) {
        let item = list[i];
        content += `
            <tr>
                <td>${item.code}</td>
                <td>${item.nom}</td>
                <td>${item.prenom}</td>
                <td>${item.group}</td>
                <td class="notetab">${item.note}</td>
            </tr>
        `
    };

    tbody.innerHTML = content
    const noteCells = tbody.querySelectorAll('.notetab');
    noteCells.forEach(cell => {
        const note = +(cell.textContent);
        if (note > 15) {
            cell.style.color = 'green'; 
        } else if (note < 10) {
            cell.style.color = 'red';
        } else {
            cell.style.color = 'black';
        }
    });

}


// --------------------------------------------------

function max(){
    let notes = list.map(item => item.note);
    const topNote = Math.max(...notes);

    const topNoteDiv = document.getElementById("div");
    topNoteDiv.innerHTML = `Top Note: ${topNote}`;
}

// ---------------------------------------------------

document.getElementById("ajax").addEventListener("click", function (){
    let request = new XMLHttpRequest();
    request.open("GET", "branche.json", "true")
    request.onreadystatechange = function (){
        if (request.readyState == 4 && request.status == 200){
            console.log("xhr is functionning correctly")
            branche = JSON.parse(this.responseText);
        }
    }

    request.send();



})

