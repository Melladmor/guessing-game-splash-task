import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import { Columns, TableProps } from "./DataTable";
import { useSelector } from "react-redux";
import { gameState } from "../../redux/slices/gameSlice";

type Props = TableProps;

const TableBodyComponent = (props: Props) => {
  const { data, column } = props;
  const theme = useTheme();
  const isAnimate = useSelector(gameState).animation;
  return (
    <TableContainer
      component={Paper}
      className="scroll-bar"
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        borderRadius: "0.5rem",
        overflowY: "scroll",
        maxHeight: "30vh",
      }}>
      <Table aria-label="simple table">
        <TableHead
          sx={{
            bgcolor: theme.palette.primary.main,
          }}>
          <TableRow
            sx={{
              height: "15px",
            }}>
            {column?.map((el: Columns) => {
              if (el?.HeaderCell) {
                return (
                  <TableCell
                    key={el?.accessor}
                    sx={{
                      fontSize: "12px",
                      padding: "2px 8px",
                      fontWeight: "bold",
                      color: "#757575",
                      border: "none",
                    }}>
                    {el?.HeaderCell(el)}
                  </TableCell>
                );
              } else {
                return (
                  <TableCell
                    key={el?.accessor}
                    sx={{
                      fontSize: "12px",
                      padding: "2px 8px",
                      fontWeight: "bold",
                      color: "#757575",
                      border: "none",
                    }}>
                    {el?.Header}
                  </TableCell>
                );
              }
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((el: any, index: number) => {
            const isOddRow = index % 2 === 0;
            return (
              <TableRow
                key={el?.id ? el?.id : index}
                sx={{
                  backgroundColor:
                    !isAnimate && el?.name === "You"
                      ? theme.palette.primary.light
                      : isOddRow
                      ? theme.palette.primary.main
                      : theme.palette.secondary.main,
                }}>
                {column?.map((col: Columns) => {
                  if (col?.Cell) {
                    return (
                      <TableCell
                        sx={{
                          fontSize: "12px",
                          padding: "6px 8px",
                          fontWeight: "normal",
                          color: "#f5f5f5",
                          border: "none",
                        }}
                        key={col?.accessor}>
                        {col?.Cell(el)}
                      </TableCell>
                    );
                  } else {
                    return (
                      <TableCell
                        sx={{
                          fontSize: "12px",
                          padding: "6px 8px",
                          fontWeight: "normal",
                          color: "#f5f5f5",
                          border: "none",
                        }}
                        key={col?.accessor}>
                        {el[col?.accessor]}
                      </TableCell>
                    );
                  }
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableBodyComponent;
