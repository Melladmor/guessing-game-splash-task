import HeaderLayout from "../HeaderLayout.tsx/HeaderLayout";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import DataTable, { Columns } from "../Table/DataTable";

import { Typography } from "@mui/material";
type Props = {
  autoPlayerGenerated: Player[];
};
const Round = (props: Props) => {
  const { autoPlayerGenerated } = props;
  const column: Columns[] = [
    {
      accessor: "name",
      Header: "Name",
      Cell: (data) => {
        return (
          <Typography
            fontSize="10px"
            color={
              data?.point > 0
                ? "#15803d"
                : data?.point === 0
                ? "#dc2626"
                : "white"
            }>
            {data?.name}
          </Typography>
        );
      },
    },
    {
      accessor: "point",
      Header: "Point",
      Cell: (data) => {
        return (
          <Typography
            fontSize="10px"
            color={
              data?.point > 0
                ? "#15803d"
                : data?.point === 0
                ? "#dc2626"
                : "white"
            }>
            {data?.point}
          </Typography>
        );
      },
    },
    {
      accessor: "multiplier",
      Header: "Multiplier",
      Cell: (data) => {
        return (
          <Typography
            fontSize="10px"
            color={
              data?.point > 0
                ? "#15803d"
                : data?.point === 0
                ? "#dc2626"
                : "white"
            }>
            {data?.multiplier}
          </Typography>
        );
      },
    },
  ];

  return (
    <HeaderLayout
      title="Current Round"
      icon={<EmojiEventsIcon sx={{ color: "#FF00FF" }} />}>
      <DataTable column={column} data={autoPlayerGenerated} />
    </HeaderLayout>
  );
};

export default Round;
