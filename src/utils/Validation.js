import * as UserType from "../constants/UserType";

const VALID_PASSWORD_LENGTH = 8;
const ERROR_COLOR = "red";
const VALID_COLOR = "rgba(0, 0, 0, 1)";
const VALID_LABEL_COLOR = "rgba(0, 0, 0, 0.5)";
const VALID_BORDER_COLOR = "rgba(0, 0, 0, 0.1)";
const VALID_OUTLINE_COLOR = "#286efa";

/**
 * Validate name input
 * 
 * @param {HTMLInputElement} element input element
 * @param {HTMLLabelElement} label label element for the input
 * @param {boolean} highlight whether highlight the label & borders or not
 * @returns true if name validation satisfied, false otherwise
 */
export const validateName = (element, label, highlight = false) => {
    if(toString.call(element.value) !== "[object String]" || element.value.trim() === "") {
        if(highlight) {
            element.style.color = ERROR_COLOR;
            element.style.borderColor = ERROR_COLOR;
            element.style.outlineColor = ERROR_COLOR;
            label.style.color = ERROR_COLOR;
        }

        return false;
    } else {
        if(highlight) {
            event.target.style.color = VALID_COLOR;
            event.target.style.borderColor = VALID_BORDER_COLOR;
            event.target.style.outlineColor = VALID_OUTLINE_COLOR;
            label.style.color = VALID_LABEL_COLOR;
        }

        return true;
    }
}

/**
 * Validate email input
 * 
 * @param {HTMLInputElement} element input element
 * @param {HTMLLabelElement} label label element for the input
 * @param {boolean} highlight whether highlight the label & borders or not
 * @returns true if email validation satisfied, false otherwise
 */
export const validateEmail = (element, label, highlight = false) => {
    const emailRegex = new RegExp("(^[a-z0-9\_]+[a-z0-9\_\.]*\@[a-z]+\.[a-z]{2,}$)|(^[a-z0-9\_]+[a-z0-9\_\.]*\@[a-z]+\.[a-z]{2,}\.[a-z]{2}$)", "ig");

    if(toString.call(element.value) !== "[object String]" || !emailRegex.test(element.value.trim())) {
        if(highlight) {
            element.style.color = ERROR_COLOR;
            element.style.borderColor = ERROR_COLOR;
            element.style.outlineColor = ERROR_COLOR;
            label.style.color = ERROR_COLOR;
        }

        return false;
    } else {
        if(highlight) {
            event.target.style.color = VALID_COLOR;
            event.target.style.borderColor = VALID_BORDER_COLOR;
            event.target.style.outlineColor = VALID_OUTLINE_COLOR;
            label.style.color = VALID_LABEL_COLOR;
        }

        return true;
    }
}

/**
 * Validate user type selection
 * 
 * @param {HTMLSelectElement} element select element
 * @param {HTMLLabelElement} label label element for the select
 * @param {boolean} highlight whether highlight the label & borders or not
 * @returns true if user type selection validation satisfied, false otherwise
 */
export const validateUserType = (element, label, highlight = false) => {
    if(toString.call(element.value) !== "[object String]") {
        return false;
    }

    switch(element.value.trim()) {
        case UserType.STUDENT:
        case UserType.HOBBYIST:
        case UserType.DEVELOPER:
        case UserType.MANAGER:
            if(highlight) {
                element.style.color = VALID_COLOR;
                element.style.borderColor = VALID_BORDER_COLOR;
                element.style.outlineColor = VALID_OUTLINE_COLOR;
                label.style.color = VALID_LABEL_COLOR;
            }

            return true;
        default:
            if(highlight) {
                element.style.color = ERROR_COLOR;
                element.style.borderColor = ERROR_COLOR;
                element.style.outlineColor = ERROR_COLOR;
                label.style.color = ERROR_COLOR;
            }

            return false;
    }
}

/**
 * Validate password input
 * 
 * @param {HTMLInputElement} element input element
 * @param {HTMLLabelElement} label label element for the input
 * @param {boolean} highlight whether highlight the label & borders or not
 * @returns true if password validation satisfied, false otherwise
 */
export const validatePassword = (element, label, highlight = false) => {
    if(toString.call(element.value) === "[object String]" && element.value.trim().length >= VALID_PASSWORD_LENGTH) {
        if(highlight) {
            element.style.color = VALID_COLOR;
            element.style.borderColor = VALID_BORDER_COLOR;
            element.style.outlineColor = VALID_OUTLINE_COLOR;
            label.style.color = VALID_LABEL_COLOR;
        }

        return true;
    } else {
        if(highlight) {
            element.style.color = ERROR_COLOR;
            element.style.borderColor = ERROR_COLOR;
            element.style.outlineColor = ERROR_COLOR;
            label.style.color = ERROR_COLOR;
        }

        return false;
    }
}

/**
 * Enable submit button if all validation satisfied
 * 
 * @param {HTMLButtonElement} submitButton the button to be enabled
 * @param {HTMLInputElement} inputName name input will be validated
 * @param {HTMLInputElement} inputEmail email input will be validated
 * @param {HTMLSelectElement} selectUserType user type select will be validated
 * @param {HTMLInputElement} inputPassword password input will be validated
 * @returns true if all validation satisfied and the button enabled, false otherwise
 */
export const enabledSubmitButton = (submitButton, inputName, inputEmail, selectUserType, inputPassword) => {
    if(validateName(inputName)) {
        if(validateEmail(inputEmail)) {
            if(validateUserType(selectUserType)) {
                if(validatePassword(inputPassword)) {
                    submitButton.removeAttribute("disabled");
                    submitButton.classList.remove("disabled-button");
                    submitButton.classList.add("active-button");

                    return true;
                }
            }
        }
    }

    submitButton.setAttribute("disabled", "");
    submitButton.classList.add("disabled-button");
    submitButton.classList.remove("active-button");

    return false;
}
