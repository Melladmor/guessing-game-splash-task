import { Box, Typography, useTheme } from "@mui/material";

type Props = {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

const HeaderLayout = (props: Props) => {
  const { children, title, icon } = props;
  const theme = useTheme();
  return (
    <Box marginBottom="1rem">
      <Box display="flex" flexWrap="nowrap" gap="10px">
        {!!icon && <Box>{icon}</Box>}
        <Typography color={theme.palette.text.primary}>{title}</Typography>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default HeaderLayout;
