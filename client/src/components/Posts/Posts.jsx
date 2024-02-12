import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Collapse,
  Button,
  useMediaQuery,
  Divider,
} from "@mui/material";

import { useState } from "react";
import PostCard from "./PostCard";
import { useGetDataQuery } from "../../state/getDataApi";
const Posts = () => {
  const { data, isLoading } = useGetDataQuery();
  console.log(data);
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

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
        {data || !isLoading ? (
          data.map((item) => {
            return <PostCard key={item._id} props={item} />;
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Posts;
