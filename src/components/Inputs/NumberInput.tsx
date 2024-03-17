import { Box, TextField, Typography, useTheme } from "@mui/material";
import TopAndDownButton from "../Buttons/TopAndDownButton";

type Props = {
  title: string;
  value: number;
  onChange: (value: number) => void;
  plus: () => void;
  minus: () => void;
  disabled?: boolean;
};

const NumberInput = (props: Props) => {
  const { title, value, minus, onChange, plus, disabled } = props;
  const theme = useTheme();
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(Number(value));
  };

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to right, #232526, #414345)`,
      }}
      padding="8px"
      borderRadius="10px">
      <Typography
        width="100%"
        textAlign="center"
        color="#757575"
        fontSize="10px"
        fontWeight="bold">
        {title}
      </Typography>
      <Box display="flex" gap="0.5rem" alignItems="center">
        <TopAndDownButton
          type="down"
          buttonProps={{
            onClick: () => minus(),
            disabled: disabled,
          }}
        />
        <TextField
          hiddenLabel
          variant="filled"
          size="small"
          type="number"
          sx={{
            ".MuiInputBase-input": {
              height: "30px",
              paddingTop: 0,
              paddingBottom: 0,
            },
            ".MuiFilledInput-root": {
              borderRadius: "10px",
            },
            ".MuiInputBase-root": {
              background: theme.palette.primary.main,
            },
            "& .MuiInputBase-input.Mui-disabled": {
              WebkitTextFillColor: "white",
            },
            pattern: "[0-9]*",
          }}
          InputProps={{
            disableUnderline: true,
          }}
          value={value}
          onChange={onChangeValue}
          disabled={disabled}
        />
        <TopAndDownButton
          type="top"
          buttonProps={{
            onClick: () => plus(),
            disabled: disabled,
          }}
        />
      </Box>
    </Box>
  );
};

export default NumberInput;
