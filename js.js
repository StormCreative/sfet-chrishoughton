
document.addEventListener("DOMContentLoaded", function(event) { 
    var form        = document.getElementById("signup");
    document.body.addEventListener("click", function(e) {
        if(e.target.className != "btn" && e.target.nodeName != "INPUT") {
           hideForm();
        }
            
    });
    form.style.display = "none";
    
    
});

function showForm() {
    var form        = document.getElementById("signup"),
        btnSignup   = document.getElementById("btn-sign-up");

    if (form.style.display === "none") {
        showElement(form);
        hideElement(btnSignup);
    }
}

function hideForm() {
    var form        = document.getElementById("signup"),
        btnSignup   = document.getElementById("btn-sign-up");

    if (form.style.display != "none") {
        showElement(btnSignup);
        hideElement(form);
    }
}

function hideElement(el) {
    el.style.display = "none";
    return el;
}

function showElement(el) {
    el.style.display = "inline-block";
    return el;
}