import TableBodyComponent from "./TableBody";

const DataTable = (props: TableProps) => {
  return (
    <div>
      <TableBodyComponent {...props} />
    </div>
  );
};

export default DataTable;

export type Columns = {
  Header: string;
  accessor: string;
  Cell?: (row: any) => JSX.Element | string;
  HeaderCell?: (header: any) => JSX.Element | string;
};

export type TableProps = {
  data: any[];
  column: Columns[];
};
