import {Button, ButtonProps, Typography, TypographyProps} from "@mui/material";

export const Header = (props: TypographyProps) => (
    <Typography
        variant="h3"
        {...props}
    >
        {props.children}
    </Typography>
);

export const PrimaryButton = (props: ButtonProps) => (
    <Button
        variant="contained"
        {...props}
    >
        {props.children}
    </Button>
);
