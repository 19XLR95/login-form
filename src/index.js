import "./index.scss";
import "font-awesome/css/font-awesome.min.css";
import * as UserType from "./constants/UserType";
import * as Steps from "./utils/Steps";
import * as Validation from "./utils/Validation";

document.body.onload = (event) => {
    Steps.nextStep();

    const submitButton = document.getElementById("submit-button");
    const signUpForm = document.getElementById("sign-up-form");

    // Operations on name input
    const inputName = document.getElementById("name");
    const labelName = document.getElementById("label-name");
    inputName.onkeyup = (event) => {
        Validation.validateName(event.target, labelName, true);

        Validation.enabledSubmitButton(submitButton, inputName, inputEmail, selectUserType, inputPassword);
    }
    inputName.onfocus = (event) => {
        labelFloatUp(labelName);
    }
    inputName.onblur = (event) => {
        if(event.target.value === "") {
            labelFloatDown(labelName);
        }

        Validation.validateName(event.target, labelName, true);

        Validation.enabledSubmitButton(submitButton, inputName, inputEmail, selectUserType, inputPassword);
    }

    // Operations on email input
    const inputEmail = document.getElementById("email");
    const labelEmail = document.getElementById("label-email");
    inputEmail.onkeyup = (event) => {
        Validation.validateEmail(event.target, labelEmail, true);

        Validation.enabledSubmitButton(submitButton, inputName, inputEmail, selectUserType, inputPassword);
    }
    inputEmail.onfocus = (event) => {
        labelFloatUp(labelEmail);
    }
    inputEmail.onblur = (event) => {
        if(event.target.value === "") {
            labelFloatDown(labelEmail);
        }

        Validation.validateEmail(event.target, labelEmail, true);

        Validation.enabledSubmitButton(submitButton, inputName, inputEmail, selectUserType, inputPassword);
    }
    
    // Operations on user type selection
    const selectUserType = document.getElementById("user-type");
    const labelUserType = document.getElementById("label-user-type");
    selectUserType.onchange = (event) => {
        Validation.validateUserType(event.target, labelUserType, true);

        Validation.enabledSubmitButton(submitButton, inputName, inputEmail, selectUserType, inputPassword);
    }
    selectUserType.onfocus = (event) => {
        labelFloatUp(labelUserType);
    }
    selectUserType.onblur = (event) => {
        if(event.target.value === "" || event.target.value === UserType.NONE) {
            labelFloatDown(labelUserType);
        }

        Validation.validateUserType(event.target, labelUserType, true);

        Validation.enabledSubmitButton(submitButton, inputName, inputEmail, selectUserType, inputPassword);
    }

    // Operations on password input
    const inputPassword = document.getElementById("password");
    const labelPassword = document.getElementById("label-password");
    inputPassword.onkeyup = (event) => {
        Validation.validatePassword(event.target, labelPassword, true);

        Validation.enabledSubmitButton(submitButton, inputName, inputEmail, selectUserType, inputPassword);
    }
    inputPassword.onfocus = (event) => {
        labelFloatUp(labelPassword);
    }
    inputPassword.onblur = (event) => {
        if(event.target.value === "") {
            labelFloatDown(labelPassword);
        }

        Validation.validatePassword(event.target, labelPassword, true);

        Validation.enabledSubmitButton(submitButton, inputName, inputEmail, selectUserType, inputPassword);
    }

    // Operations on form submit
    signUpForm.onsubmit = (event) => {
        event.preventDefault();

        let validationSuccessful = true;

        // Validate all field before submit or going to next step (BEGIN)
        if(!Validation.validateName(inputName, labelName, true)) {
            validationSuccessful = false;
        }

        if(!Validation.validateEmail(inputEmail, labelEmail, true)) {
            validationSuccessful = false;
        }
        
        if(!Validation.validateUserType(selectUserType, labelUserType, true)) {
            validationSuccessful = false;
        }
        
        if(!Validation.validatePassword(inputPassword, labelPassword, true)) {
            validationSuccessful = false;
        }
        // Validate all field before submit or going to next step (END)

        if(validationSuccessful) {
            // TODO: GOTO NEXT STEP OR POST REQUEST TO SERVER
            console.log("SUCCESS!");
        }
    }

    /**
     * Float a label to up
     * 
     * @param {HTMLLabelElement} element label element
     */
    const labelFloatUp = (element) => {
        element.style.transformOrigin = "0 0";
        element.style.top = "11px";
        element.style.left = "10px";
        element.style.fontWeight = "300";
        element.style.transform = "scale(0.8)";
        element.style.backgroundColor = "#ffffff";
    }
    
    /**
     * Float a label to down
     * 
     * @param {HTMLLabelElement} element label element
     */
    const labelFloatDown = (element) => {
        element.style.transformOrigin = "0 0";
        element.style.top = "29px";
        element.style.left = "10px";
        element.style.fontWeight = "400";
        element.style.transform = "scale(1)";
        element.style.backgroundColor = "transparent";
    }

    // Password display toggle button/icon
    const togglePasswordDisplay = document.getElementById("toggle-password-display");
    
    // Operations on password display toggling (reveal/hide password)
    togglePasswordDisplay.onclick = () => {
        if(inputPassword.getAttribute("type") == "" || inputPassword.getAttribute("type") == "password") {
            inputPassword.setAttribute("type", "text");

            togglePasswordDisplay.classList.remove("fa-eye");
            togglePasswordDisplay.classList.add("fa-eye-slash");
        } else {
            inputPassword.setAttribute("type", "password");

            togglePasswordDisplay.classList.remove("fa-eye-slash");
            togglePasswordDisplay.classList.add("fa-eye");
        }
    }
}
