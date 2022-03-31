// ============================================================================
// Modal management code
// ============================================================================

// ────────────────────────────────────────────────────────────────────────────
// Verifcation functions used to validate the subscription form
//
// All unitary validation functions have the same structure:
//     - if the field value is  valid
//         - clear the associated error message
//         - remove the "has error" class to remove the red border around
//           the field
//         - and return 0 for 0 error
//     - else
//         - put appropriate message in the associated error message
//         - add the "has error" class to add a red border around the field
//         - and return 1 for 1 error found
//
// the field values are retrieved by their id
// the error message are retrieved by their subclass ( same as id with --prefix)
//
//
// The global validaition function :
//     - compute the number of error by adding the value returned by all the
//       unitary validaiton function
//     - trigger necessary actions depending on the result
// ────────────────────────────────────────────────────────────────────────────

/**
 * @function firstnameValidation() : validate first name
 * @returns:
 *      0 (0 error) if firsname is at least 2 characters long
 *      1 (error found) if not
 *
 * The function manages as well the associated error message field and the border
 * around the input field.
 */
function firstNameValidation() {
    const errorMessageElement = document.querySelector(".--firstname");
    const element = document.getElementById("firstname");

    if (element.value.length < 2) {
        errorMessageElement.textContent = "Entrez au moins 2 caractères pour votre prénom";
        element.classList.add("has-error");
        return 1; // error found
    }
    errorMessageElement.textContent = "";
    element.classList.remove("has-error");
    return 0; // no error
}

/**
 * @function nameValidation() : validate first name
 * @returns:
 *      0 (0 error) if firsname is at least 2 characters long
 *      1 (error found) if not
 *
 * The function manages as well the associated error message field and the border
 * around the input field.
 */
function nameValidation() {
    const errorMessageElement = document.querySelector(".--name");
    const element = document.getElementById("name");

    if (element.value.length < 2) {
        errorMessageElement.textContent = "Entrez au moins 2 caractères pour votre nom";
        element.classList.add("has-error");
        return 1;
    }
    errorMessageElement.textContent = "";
    element.classList.remove("has-error");
    return 0;
}

/**
 * @function eMailValidation() : validate  eMail
 * @returns:
 *      0 (0 error) if eMail match email regex template
 *      1 (error found) if not
 *
 * The function manages as well the associated error message field and the border
 * around the input field.
 */
function eMailValidation() {
    const errorMessageElement = document.querySelector(".--email");
    const element = document.getElementById("email");
    const eMailTemplate = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!eMailTemplate.test(element.value)) {
        errorMessageElement.textContent = "Entrez un email valide";
        element.classList.add("has-error");
        return 1;
    }
    errorMessageElement.textContent = "";
    element.classList.remove("has-error");
    return 0;
}

/**
 * @function isDateValid(date) : check if the date in argument is a valid
 *           date. (generic as not linked to a specific input field)
 * @param {date} date : the date to be tested
 * @returns:
 *      true if the date is valid
 *      false if not
 * The expected format is "YYYY/MM/DD". the check is made in 4 pass:
 *      1/ check of the date template used to split the date string
 *      2/ check that month is in range 1..12
 *      3/ check that the day is coherent with month (using an array)
 *      4/ if date is februry 29th YYYY check that the year is a leap year
 *         using Wikipedia definition
 *
 */
function isDateValid(date) {
    const dateTemplate = /(\d{4})[- /](\d{1,2})[- /](\d{1,2})/;
    const nbDayPerMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const splitDate = date.match(dateTemplate);
    if (!splitDate) {
        return false;
    }
    const year = parseInt(splitDate[1], 10);
    const month = parseInt(splitDate[2], 10);
    const day = parseInt(splitDate[3], 10);
    if (month === 0 || month > 12) {
        return false;
    }
    if (day === 0 || day > nbDayPerMonth[month]) {
        return false;
    }
    // leap year (année bissextile) if year is multiple of 4, but not mutiple of 100 except if multiple of 400
    if ((month === 2 && day === 29) && !(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))) {
        return false;
    }
    return true;
}

/**
 * @function dateOfBirthValidation() : validate birth date
 * @returns:
 *      0 (0 error) if given date is a valid date
 *      1 (error found) if the date is of invalid format
 * the "generic" function isDateValid(date) is used to check the date.
 * the function manage as well the associated error message field and the border
 * around the input field.
 */
function dateOfBirthValidation() {
    const errorMessageElement = document.querySelector(".--date-of-birth");
    const element = document.getElementById("date-of-birth");
    if (!isDateValid(element.value)) {
        errorMessageElement.textContent = "Entrez une date valide";
        element.classList.add("has-error");
        return 1;
    }
    errorMessageElement.textContent = "";
    element.classList.remove("has-error");
    return 0;
}

/**
 * @function playedTournamentNumberValidation() : validate the number of tournament played
 * @returns:
 *      0 (0 error) if the number is not valid
 *      1 (error found) if not
 *
 * The check is made by testing : if the input is not empty (===""), and if not empty,
 * if it is in the range 0..20. in case of error an appropriate error messge is displayed.
 * The function manages as well the associated error message field and the border
 * around the input field.
 */
function playedTournamentNumberValidation() {
    const errorMessageElement = document.querySelector(".--played-tournament-number");
    const element = document.getElementById("played-tournament-number");
    if (element.value === "") {
        errorMessageElement.textContent = "Entrez un nombre valide";
        element.classList.add("has-error");
        return 1;
    } else if (element.value < 0 || element.value > 20) {
        errorMessageElement.textContent = "Entrez un nombre entre 0 et 20";
        element.classList.add("has-error");
        return 1;
    }
    errorMessageElement.textContent = "";
    element.classList.remove("has-error");
    return 0;
}

/**
 * @function locationValidation() : validate that a next tournament location is selected
 * @returns:
 *      0 (0 error) if one city is selected
 *      1 (error found) if no city selected
 *
 * The check is made by testing if on of the radio button is selected.
 * Test loop stops when one city is found selected. The fact that only one
 * city is selectd is insured by radio button mechanism.
 * The function manages as well the associated error message field and the border
 * around the input field.
 */
function locationValidation() {
    const errorMessageElement = document.querySelector(".--input-location");
    const locationButtonTable = document.getElementsByClassName("subscription_form_input-radio");
    for (const locationButton of locationButtonTable) {
        if (locationButton.checked) {
            errorMessageElement.textContent = "";
            return 0;
        }
    }
    errorMessageElement.textContent = "Veillez sélectionner une des villes";
    return 1;
}

/**
 * @function termOfUseValidation() : validate that the terms of use checkbox is checked.
 * @returns:
 *      0 (0 error) if the checkbox is checked
 *      1 (error found) if not
 *
 * The function manages as well the associated error message field and the border
 * around the input field.
 */
function termsOfUseValidation() {
    const errorMessageElement = document.querySelector(".--terms-of-use");
    const element = document.getElementById("terms-of-use");

    if (!element.checked) {
        errorMessageElement.textContent = "Veuillez lire et accepter les conditions d'utilisation";
        return 1;
    }
    errorMessageElement.textContent = "";
    return 0;
}

/**
 * @function subscriptionFormValidation() : Global validation of subscription
 *      form.
 * @param {event} event : the submit event that is fully processed and not
 *      propagated forward.
 * @listens submit event of the subscription form
 *
 *   if the validation is OK
 *      the confirmation form is displayed in replacement of the
 *      subscription one and the form is reset
 *  else
 *      the subcription form is kept displayed and user can see the error
 *      message(s) diplayed below the fied(s).
 *
 * The function is triggered by the submit event of the subscription form
 * The test is made by adding the result of all the unitary validation
 * functions.
 * Note: numeric values are used as the use of boolean with the same
 * structure (chain of && or ||) would not insure the  all tests performance.
 *
 */
function subscriptionFormValidation(event) {
    event.preventDefault();
    const errorNumber = firstNameValidation() +
                                    nameValidation() +
                                    eMailValidation() +
                                    dateOfBirthValidation() +
                                    playedTournamentNumberValidation() +
                                    locationValidation() +
                                    termsOfUseValidation();
    if (errorNumber === 0) {
        const modalSubscription = document.querySelector(".modal_subscription");
        modalSubscription.style.display = "none";
        const modalConfirmation = document.querySelector(".modal_confirmation");
        modalConfirmation.style.display = "flex";
        const modalSubcriptionForm = document.querySelector("#subscription-form");
        modalSubcriptionForm.reset();
    }
}

/**
 * @function modalQuit() : close the modal and the lightbox and return to main
 *      page.
 * @listens click event on quit icon or "close" button of the modal header and
 *      confirmation modal.
 * * The subscription, confirmation and modal are hidden (display: none).
 * The modal header is kept untouched has hidden by the container modal.
 * Subcription and confirmation are hidden to retrun back to initial
 * HTML/CSS sate hidden, hidden.
 * The light box is hidden as well using visibility:hidden.
 *
 * The function is triggered either by the click of the quit icon of the
 * modal header or the "close" bitton of the confirmation.
 */
function modalQuit() {
    const modalSubscription = document.querySelector(".modal_subscription");
    modalSubscription.style.display = "none";
    const modalConfirmation = document.querySelector(".modal_confirmation");
    modalConfirmation.style.display = "none";
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
    const lightbox = document.querySelector(".lightbox");
    lightbox.style.display = "none";
}

/**
 * @function subscriptionLaunch() : display lightbox and the subscription form.
 * @listens click event on the button "I subscribe"
 * The light box is displeyed with visibility: visible.
 * The subscription is displayed with display: flex.
 * Nothing to do for the modal header
 *
 * The function is triggered by the click on the button "I subscribe".
 */
function subscriptionLaunch(event) {
    const lightbox = document.querySelector(".lightbox");
    lightbox.style.display = "block";
    const modal = document.querySelector(".modal");
    modal.style.display = "flex";
    const modalSubscription = document.querySelector(".modal_subscription");
    modalSubscription.style.display = "flex";
}

/**
 *  Code executed at inital page display:
 *  1/ Identification of the elements on which events are listen
 *  2/ set-up of event listening
 */

// Identification of the elements on which events are listen
const subcriptionLaunchButton = document.querySelector(".subscription-launch_button");
const subscriptionFormSubmit = document.querySelector("#subscription-form");
const modalHeaderModalQuitIcon = document.querySelector(".modal_header_modal-quit-icon");
const modalConfirmationCloseButton = document.querySelector(".modal_confirmation_close_button");

// Events to be listened
subcriptionLaunchButton.addEventListener("click", subscriptionLaunch);
subscriptionFormSubmit.addEventListener("submit", subscriptionFormValidation);
modalHeaderModalQuitIcon.addEventListener("click", modalQuit);
modalConfirmationCloseButton.addEventListener("click", modalQuit);
