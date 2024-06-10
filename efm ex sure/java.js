document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("btn-add").onclick = function addTable(){
        let name = document.getElementById("inp_name").value
        let id = document.getElementById("inp_id").value
        let filiaire = document.getElementById("inp_filiaire").value
        let tablo = document.getElementById("tablo")
        let tab = `
            <tr>
                <td>${name}</td>
                <td>${id}</td>
                <td>${filiaire}</td>
                <td><button type="button" id="btn-delete">Delete</button></td>
            </tr>
        `
        tablo.innerHTML += tab
        
    }

    document.getElementById("tablo").addEventListener("click", function (event) {
       
    });
});