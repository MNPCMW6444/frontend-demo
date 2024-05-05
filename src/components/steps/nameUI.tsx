import {RenderStepFunctionType} from "../forms/StepperModal.tsx";
import {Grid, TextField} from "@mui/material";
import {useEffect} from "react";

interface NameStepState {
    firstName?: string;
    lastName?: string
}

const renderNameUI: RenderStepFunctionType<NameStepState> = (stepState, setStepState, setIsInvalid) => {
    useEffect(() => {
        setIsInvalid(!stepState?.firstName || !stepState?.lastName)
    }, [stepState]);

    return <Grid container direction="column" rowSpacing={2}>
        <Grid item>
            <TextField label="First Name" value={stepState?.firstName || ""}
                       onChange={(e) => setStepState({...(stepState || {}), firstName: e.target.value})}/>
        </Grid>
        <Grid item>
            <TextField label="Last Name" value={stepState?.lastName || ""}
                       onChange={(e) => setStepState({...(stepState || {}), lastName: e.target.value})}/>
        </Grid>
    </Grid>
}

export default renderNameUI


