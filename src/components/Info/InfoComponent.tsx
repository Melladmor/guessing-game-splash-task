import { Box, Typography } from "@mui/material";

type Props = {
  icon: React.ReactNode;
  value: string | number;
};

const InfoComponent = (props: Props) => {
  const { icon, value } = props;
  return (
    <Box
      display="flex"
      gap="50px"
      alignItems="center"
      alignContent="center"
      sx={{
        backgroundImage: `linear-gradient(to right, #232526, #414345)`,
      }}
      padding="17px"
      borderRadius="10px"
      width="100%">
      {!!icon && <Box>{icon}</Box>}
      <Typography fontSize="16px" fontWeight="bold" color="white">
        {value}
      </Typography>
    </Box>
  );
};

export default InfoComponent;
