import { Box, SxProps, useTheme } from "@mui/material";
type Props = {
  children: React.ReactNode;
  sx?: SxProps;
};

const CustomBox = (props: Props) => {
  const { children, sx } = props;
  const theme = useTheme();
  return (
    <Box
      sx={sx}
      bgcolor={theme.palette.secondary.main}
      color={theme.palette.text.primary}
      borderRadius="0.5rem"
      border={`0.1px solid ${theme.palette.secondary.light}`}
      minHeight="22vh"
      height="22vh"
      padding="0.5rem">
      {children}
    </Box>
  );
};

export default CustomBox;
