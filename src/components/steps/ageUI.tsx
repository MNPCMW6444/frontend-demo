import {RenderStepFunctionType, ValidateStepFunctionType} from "../forms/StepperModal.tsx";
import {Grid, TextField} from "@mui/material";

interface AgeStepState {
    age?: number;
}

export const renderAgeUI: RenderStepFunctionType<AgeStepState> = (stepState, setStepState) => (
    <Grid container direction="column" rowSpacing={2}>
        <Grid item>
            <TextField label="Age" type="number" value={stepState?.age || ""}
                       onChange={(e) => setStepState({...(stepState || {}), age: parseFloat(e.target.value)})}/>
        </Grid>
    </Grid>
)


export const validateAge: ValidateStepFunctionType<AgeStepState> = (stepState) => !stepState?.age || stepState.age < 1



