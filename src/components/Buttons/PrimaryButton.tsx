import { Button, ButtonProps, SxProps, useTheme } from "@mui/material";

type Props = {
  children: React.ReactNode;
  sxProps?: SxProps;
  buttonProps?: ButtonProps;
};

function PrimaryButton(props: Props) {
  const { children, sxProps, buttonProps } = props;
  const theme = useTheme();
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{
        marginTop: "10px",
        backgroundImage: "linear-gradient(to left, #FF00FF, #E33434)",

        "&:disabled": {
          backgroundImage: theme.palette.secondary.light,
        },
        "& .MuiButton-label": {
          color: "white",
        },
        textTransform: "capitalize",
        ...sxProps,
      }}
      {...buttonProps}>
      {children}
    </Button>
  );
}

export default PrimaryButton;
