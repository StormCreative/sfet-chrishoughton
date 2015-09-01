
document.addEventListener("DOMContentLoaded", function(event) { 

    var form            = document.getElementById("js-form"),
        btnShowForm     = document.querySelector(".js-show-form"),
        btnHideForm     = document.querySelector(".js-hide-form");
    
    console.log(btnHideForm);
    
    btnShowForm.onclick = function(e) {
        e.preventDefault();
        showElement(form);
        hideElement(btnShowForm);
    };
    
    btnHideForm.onclick = function(e) {
        e.preventDefault();
        hideElement(form);
        showElement(btnShowForm);
    };
       
    form.style.display = "none";
});


function hideElement(el) {
    el.style.display = "none";
    return el;
}

function showElement(el) {
    el.style.display = "inline-block";
    return el;
}
