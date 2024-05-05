import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid, Typography,
} from "@mui/material";
import {PrimaryButton} from "../hoc";
import {ReactNode, useCallback, useMemo, useState} from "react";
import nameUI from "../steps/nameUI.tsx";
import ageUI from "../steps/ageUI.tsx";

export type RenderStepFunctionType<D> = (stepState: D | undefined, setStepState: (newState: D) => void, setIsInvalid: (isInvalid: boolean) => void) => ReactNode

const steps: RenderStepFunctionType<any>[] = [
    nameUI,
    ageUI
]

interface StepperModalProps {
    closeModalFunction: () => void;
}

const StepperModal = ({closeModalFunction}: StepperModalProps) => {
    const totalSteps = steps.length + 1

    const [formState, setFormState] = useState<any[]>(Array(steps.length))

    const [step, setStep] = useState<number>(0)
    const validateStep = (input: number): boolean => (input > -1 && input <= totalSteps)

    const stepState = useMemo(() => formState[step], [formState, step])
    const setStepState = useCallback((newState: any) => {
        setFormState(prev => {
            const updatedState = [...prev];
            updatedState[step] = newState;
            return updatedState;
        });
    }, [setFormState, step])

    const [isCurrentStepInvalid, setIsCurrentStepInvalid] = useState(true)

    const moveBackwards = () => setStep(prevStep => prevStep - 1)
    const moveForwards = () => setStep(prevStep => prevStep + 1)
    const finish = () => {
        localStorage.setItem('data', JSON.stringify(formState));
        closeModalFunction()
    }

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
            {step === totalSteps - 1 ?
                <Typography>Stringified Summery: {JSON.stringify(formState)}</Typography>
                : currentStep(stepState, setStepState, (isInvalid) => setIsCurrentStepInvalid(isInvalid))}
        </DialogContent>
        <DialogActions>
            <Grid container justifyContent="space-around">
                <Grid item>
                    <PrimaryButton disabled={validateStep(step - 1) === false}
                                   onClick={moveBackwards}>Back</PrimaryButton>
                </Grid>
                {step !== totalSteps - 1 ?
                    <Grid item>
                        <PrimaryButton disabled={(validateStep(step + 1) === false) || isCurrentStepInvalid}
                                       onClick={moveForwards}>Next</PrimaryButton>
                    </Grid>
                    : <Grid item>
                        <PrimaryButton onClick={finish}>Finish</PrimaryButton>
                    </Grid>}
            </Grid></DialogActions>
    </Dialog>
}


export default StepperModal
