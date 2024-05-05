import {Header, PrimaryButton} from "../hoc";
import {Grid} from "@mui/material";
import {useState} from "react";
import StepperModal from "../forms/StepperModal.tsx";


const StepperPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)
    
    return <Grid padding="5%" container direction="column" rowSpacing={10} alignItems="center">
        {isModalOpen ?
            <Grid item>
                <StepperModal closeModalFunction={closeModal}/>
            </Grid> :
            <>
                <Grid item>
                    <Header>Welcome!</Header>
                </Grid>
                <Grid item>
                    <PrimaryButton onClick={openModal}>Open Form</PrimaryButton>
                </Grid>
            </>}
    </Grid>
}

export default StepperPage
