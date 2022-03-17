// ============================================================================
// Burger menu managementcode
// ============================================================================

/**
 * @function displayBurgerMenu(event) : display the burger nav menu
 * @param {event} event : click event used to inhibate propagation
 * @listens click event on burger menu icon
 * Function is triggered by click on the burger menu icon displyed for all
 * screen sizes except for desktop.
 * Visibility is used as the menu if over (z-index = 1 the main page)
 */
function displayBurgerMenu(event) {
    event.preventDefault();
    const burgerMenu = document.querySelector(".header_top-nav_burger-menu");
    burgerMenu.style.visibility = "visible";
}

/**
 * @function closeBurgerMenu(event) : close the burger nav menu
 * @param {*} event : click event, used to inhibate propagation
 * @listens : click event on on one nav menu item
 * Function is triggered by click on one nav menu item. a time-out is then
 * set-up to hide the burger menu after 150ms.
 * screen sizes except for desktop.
 * Visibility is used as the menu if over (z-index = 1 the main page)
 */
function closeBurgerMenu(event) {
    event.preventDefault();
    setTimeout(function () {
        const burgerMenu = document.querySelector(".header_top-nav_burger-menu");
        burgerMenu.style.visibility = ""; // "" and not "hidden" to preserve default value for desktop
    }, 150);
}

/**
 *  Code executed at inital page display:
 *  1/ Identification of the elements on which events are listen
 *  2/ set-up of event listening
 */

// ──── identification of the elements on which events are listen ────────────────────
// burgen menu icon
const burgerMenuButton = document.querySelector(".header_top-nav_burger-menu-button");
// list of the burger menu items
const menuItemTable = document.querySelectorAll(".header_top-nav_ul_li");

// ──── Events to be listened ───────────────────────────────────────────────────
// click on burger menu icon
burgerMenuButton.addEventListener("click", displayBurgerMenu);
// clik on all burger menu items
for (const menuItem of menuItemTable) {
    menuItem.addEventListener("click", closeBurgerMenu);
}
