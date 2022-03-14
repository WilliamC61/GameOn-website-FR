function displayBurgerMenu(event) {
    event.preventDefault();
    const burgerMenu = document.querySelector(".header_top-nav_ul");
    burgerMenu.style.visibility = "visible";
}

// identification of element on which events are listen
const burgerMenuButton = document.querySelector(".header_top-nav_burger-menu-button");
// const modalConfirmationCloseButton = document.querySelector(".modal_confirmation_close_button");

// Events to be listened
burgerMenuButton.addEventListener("click", displayBurgerMenu);
// subscriptionFormSubmit.addEventListener("submit", subscriptionFormValidation);
// modalHeaderModalQuitIcon.addEventListener("click", modalQuit);
// modalConfirmationCloseButton.addEventListener("click", modalQuit);
