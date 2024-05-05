import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
} from "@mui/material";
import {PrimaryButton} from "../hoc";
import {ReactNode, useState} from "react";

export  type StepState<D> = (D & { invalid: boolean })

interface StepperModalProps {
    closeModalFunction: () => void;
}

const StepperModal = ({closeModalFunction}: StepperModalProps) => {
    const [formSate, setFormSate] = useState()
    const [steps, setSteps] = useState<{ stepState: StepState<unknown>, UI: ReactNode }[]>()

    const totalSteps = steps.length + 1
    const validateStep = (input: number): boolean => (input > -1 && input <= totalSteps)

    const [step, setStep] = useState<number>(0)

    const moveBackwards = () => setStep(prevStep => prevStep - 1)
    const moveForwards = () => setStep(prevStep => prevStep + 1)
    const finish = () => closeModalFunction()

    const currentStep = steps[step]
    return <Dialog
        open
        onClose={closeModalFunction}
        PaperProps={{
            component: 'form',
        }}
    >
        <DialogTitle>Tell us about yourself</DialogTitle>
        <DialogContent>
            {currentStep.UI}
        </DialogContent>
        <DialogActions>
            <Grid container justifyContent="space-around">
                <Grid item>
                    <PrimaryButton disabled={validateStep(step - 1) === false}
                                   onClick={moveBackwards}>Back</PrimaryButton>
                </Grid>
                {step !== totalSteps - 1 ?
                    <Grid item>
                        <PrimaryButton disabled={(validateStep(step + 1) === false) || currentStep.stepState.invalid}
                                       onClick={moveForwards}>Next</PrimaryButton>
                    </Grid>
                    : <Grid item>
                        <PrimaryButton onClick={finish}>Finish</PrimaryButton>
                    </Grid>}
            </Grid></DialogActions>
    </Dialog>
}


export default StepperModal
