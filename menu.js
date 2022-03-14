const desktopkreakpoint = "1200px";

function displayBurgerMenu(event) {
    event.preventDefault();
    const burgerMenu = document.querySelector(".header_top-nav_burger-menu");
    burgerMenu.style.visibility = "visible";
}
// if not on deskto, close the burger menu after 300ms
function closeBurgerMenu(event) {
    event.preventDefault();
    if (!window.matchMedia("(min-width:" + " " + desktopkreakpoint + ")").matches) {
        setTimeout(function () {
            const burgerMenu = document.querySelector(".header_top-nav_burger-menu");
            burgerMenu.style.visibility = "";
        }, 300);
    }
}

// identification of element on which events are listen
const burgerMenuButton = document.querySelector(".header_top-nav_burger-menu-button");
const menuItemTable = document.querySelectorAll(".header_top-nav_ul_li");

// Events to be listened
burgerMenuButton.addEventListener("click", displayBurgerMenu);

for (const menuItem of menuItemTable) {
    menuItem.addEventListener("click", closeBurgerMenu);
}
// subscriptionFormSubmit.addEventListener("submit", subscriptionFormValidation);
// modalHeaderModalQuitIcon.addEventListener("click", modalQuit);
// modalConfirmationCloseButton.addEventListener("click", modalQuit);
