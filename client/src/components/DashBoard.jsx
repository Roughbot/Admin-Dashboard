import { useGetDataQuery } from "../state/api";

const DashBoard = () => {
  const { data, error } = useGetDataQuery();

  console.log(data);
  console.log(error);
  return <div>DashBoard</div>;
};

export default DashBoard;
