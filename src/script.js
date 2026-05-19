let containerHam = document.querySelector("#hamburger");
let containerCancel = document.querySelector("#cancel");
let containerUl = document.querySelector("#navitems");

let navLinks = document.querySelectorAll("#navitems a");


// Open Menu
containerHam.addEventListener("click", () => {
    containerUl.classList.remove("hidden");

    containerHam.classList.add("hidden");
    containerCancel.classList.remove("hidden");
});


// Close Menu with X
containerCancel.addEventListener("click", () => {
    closeMenu();
});


// Close Menu when any link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});


// Reusable function
function closeMenu() {
    containerUl.classList.add("hidden");

    containerHam.classList.remove("hidden");
    containerCancel.classList.add("hidden");
}