let navbarExtended = false;

function toggleNavbar() {
    if (!navbarExtended) {
        extend()
    } else {
        collapse()
    }
}

function collapse() {
    document.getElementById("navbar").classList.add("collapsed");
    document.getElementById("navbar").classList.remove("extended");
    document.getElementById("navbar-items").style.visibility = "hidden";
    document.getElementById("navbar-items").style.flexDirection = "row";
    navbarExtended = false;
    console.log("Collapsed")
}

function extend() {
    document.getElementById("navbar").classList.add("extended");
    document.getElementById("navbar").classList.remove("collapsed");
    document.getElementById("navbar-items").style.visibility = "visible";
    document.getElementById("navbar-items").style.flexDirection = "column";
    navbarExtended = true;
    console.log("Extended")
}

window.addEventListener('resize', function (event) {
    collapse();
    if (window.innerWidth >= 1401) {
        collapse();
        document.getElementById("navbar-items").style.visibility = "visible";
        document.getElementById("navbar-items").style.flexDirection = "row";
    } else {
        document.getElementById("navbar-items").style.visibility = "hidden";
        document.getElementById("navbar-items").style.flexDirection = "column";
    }
}, true);