import {RenderStepFunctionType, ValidateStepFunctionType} from "../forms/StepperModal.tsx";
import {Grid, TextField} from "@mui/material";

interface NameStepState {
    firstName?: string;
    lastName?: string
}

export const renderNameUI: RenderStepFunctionType<NameStepState> = (stepState, setStepState) => <Grid
    container direction="column" rowSpacing={2}>
    <Grid item>
        <TextField label="First Name" value={stepState?.firstName || ""}
                   onChange={(e) => setStepState({...(stepState || {}), firstName: e.target.value})}/>
    </Grid>
    <Grid item>
        <TextField label="Last Name" value={stepState?.lastName || ""}
                   onChange={(e) => setStepState({...(stepState || {}), lastName: e.target.value})}/>
    </Grid>
</Grid>


export const validateName: ValidateStepFunctionType<NameStepState> = (stepState) => !stepState || !stepState.firstName || !stepState.lastName



