const TOTAL_STEPS = 3;
const STEPS_PARENT = "steps";

let currentStep = 0;

/**
 * Move the step to next or previous state.
 * From first step to current step, all steps will be highlighted.
 */
const moveStep = () => {
    if(currentStep <= 0 || currentStep > TOTAL_STEPS) {
        return;
    }

    const stepsParent = document.getElementById(STEPS_PARENT);

    const steps = stepsParent.children;

    for(let i = 1; i < steps.length; i++) {
        if(i <= currentStep) {
            steps[i].style.backgroundColor = "rgba(0, 0, 0, 1)";
        } else {
            steps[i].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        }
    }
}

/**
 * Increase the current step
 */
export const nextStep = () => {
    currentStep++;

    moveStep();
}

/**
 * Decrease the current step
 */
export const previousStep = () => {
    currentStep--;

    moveStep();
}

/**
 * Retrieve the current step
 */
export const getCurrentStep = () => {
    return currentStep + 1;
}
