import { Button, ButtonProps, SxProps, useTheme } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
type Props = {
  buttonProps?: ButtonProps;
  sxProps?: SxProps;
  type: "top" | "down";
};

const TopAndDownButton = (props: Props) => {
  const theme = useTheme();
  const { buttonProps, sxProps, type } = props;
  return (
    <Button
      sx={{
        minWidth: "20px",
        width: "40px",
        height: "20px",
        border: `1px solid ${theme.palette.secondary.main}`,
        background: theme.palette.secondary.light,
        padding: "15px",
        borderRadius:"10px",
        ...sxProps,
      }}
      variant="contained"
      size="small"
      {...buttonProps}>
      {type === "top" ? (
        <PlayArrowIcon sx={{ transform: "rotate(-90deg)", color: "white" }} />
      ) : (
        <PlayArrowIcon sx={{ transform: "rotate(90deg)", color: "white" }} />
      )}
    </Button>
  );
};

export default TopAndDownButton;
