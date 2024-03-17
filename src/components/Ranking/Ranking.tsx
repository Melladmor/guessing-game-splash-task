import { useSelector } from "react-redux";
import HeaderLayout from "../HeaderLayout.tsx/HeaderLayout";
import DataTable, { Columns } from "../Table/DataTable";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useMemo } from "react";
import { gameState } from "../../redux/slices/gameSlice";

const initialData = [
  {
    id: 1,
    no: "1",
    name: "-",
    score: "-",
  },
  {
    id: 2,
    no: "2",
    name: "-",
    score: "-",
  },
  {
    id: 3,
    no: "3",
    name: "-",
    score: "-",
  },
  {
    id: 4,
    no: "4",
    name: "-",
    score: "-",
  },
  {
    id: 5,
    no: "5",
    name: "-",
    score: "-",
  },
];
const Ranking = () => {
  const gameStateValues = useSelector(gameState);
  const ranking = gameStateValues.ranking;
  const arrayRanking = [...ranking];

  const columns: Columns[] = [
    {
      accessor: "no",
      Header: "No",
    },
    {
      accessor: "name",
      Header: "Name",
    },
    {
      accessor: "score",
      Header: "Score",
    },
  ];
  const rankData = useMemo(() => {
    return arrayRanking?.length > 0
      ? arrayRanking
          ?.sort((a, b) => b.score - a.score)
          .map((rank) => {
            return {
              no: rank.id,
              name: rank.name,
              score: rank.score,
            };
          })
      : initialData;
  }, [arrayRanking]);

  return (
    <HeaderLayout title="Ranking" icon={<StarOutlineIcon color="warning" />}>
      <DataTable column={columns} data={rankData} />
    </HeaderLayout>
  );
};

export default Ranking;
