// AJAX POST METHOD

document.addEventListener("DOMContentLoaded", chargement);

function chargement(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "ajax.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const jsonData = JSON.parse(xhr.responseText);
            console.log(jsonData);
        }
    };

    xhr.send();}



// 

