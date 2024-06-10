// HIDE BUTTON

document.getElementById("hide-title").addEventListener('click', function(){
    $(".hello").hide();
});


// SHOW BUTTON

document.getElementById("show-title").addEventListener('click', function(){
    $(".hello").show();
});

//DOMcontentLoaded

$(document).ready(function(){
    $("#write").click(function(){
        document.getElementById("body").innerHTML = "Something";
    });
});


// add class using jQuery:

$(document).ready(function(){
    $("#click_me").click(function(){
        $("#no_class").addClass("new_class")
    })
})

