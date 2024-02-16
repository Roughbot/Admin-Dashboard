import { useGetCustomerDataQuery } from "../../state/getDataApi";
import { DataGrid } from "@mui/x-data-grid";

const Customers = () => {
  const { data, isLoading } = useGetCustomerDataQuery();
  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    { field: "name", headerName: "Name", flex: 0.5 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 1,
      renderCell: (params) => {
        return params.value
          ? params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
          : "";
      },
    },
    { field: "country", headerName: "Country", flex: 0.4 },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
  ];

  return (
    <div>
      <div className="mx-8 my-4">
        <div>
          <h1 className="text-4xl font-bold text-blue-500">Customers</h1>
          <p className="text-blue-400 ">List of all the customers</p>
        </div>
        <div className="border-solid border-4 border-black mt-6">
          <DataGrid
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={data || []}
            columns={columns}
          />
        </div>
      </div>
    </div>
  );
};

export default Customers;
