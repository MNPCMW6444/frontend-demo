import {RenderStepFunctionType} from "../forms/StepperModal.tsx";
import {Grid, TextField} from "@mui/material";
import {useEffect} from "react";

interface AgeStepState {
    age?: number;
}

const renderAgeUI: RenderStepFunctionType<AgeStepState> = (stepState, setStepState, setIsInvalid) => {
    useEffect(() => {
        setIsInvalid(!stepState?.age || stepState.age < 1)
    }, [stepState]);

    return <Grid container direction="column" rowSpacing={2}>
        <Grid item>
            <TextField label="Age" type="number" value={stepState?.age || ""}
                       onChange={(e) => setStepState({...(stepState || {}), age: parseFloat(e.target.value)})}/>
        </Grid>

    </Grid>
}

export default renderAgeUI


