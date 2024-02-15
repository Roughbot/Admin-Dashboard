import { Divider } from "@mui/material";

import PostCard from "./PostCard";
import { useGetDataQuery } from "../../state/getDataApi";
import { Pagination } from "@mui/material";
import { useState } from "react";

const Posts = () => {
  const { data, isLoading } = useGetDataQuery();
  const [page, setPage] = useState(1);
  const itemsPerPage = 15;

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = data
    ? data.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="flex flex-col bg-zinc-200 w-full h-full">
      <div className="mb-5 mt-3">
        <h2 className="font-semibold text-blue-500 text-4xl ml-3 ">POSTS</h2>
        <p className="text-blue-500 ml-3 font-mono text-sm">
          List of All the posts
        </p>
      </div>
      <Divider />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 pt-6 ml-6 mr-6">
        {currentItems.map((item) => {
          return <PostCard key={item._id} props={item} />;
        })}
      </div>
      {!data && <p className="font-semibold text-xl text-center">Loading...</p>}
      <div className="flex justify-center mt-10">
        <Pagination
          shape="rounded"
          variant="outlined"
          count={totalPages}
          page={page}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Posts;
