import { Link } from "react-router-dom";

const PostCard = ({ props }) => {
  const { title, url, country, topic, sector, published } = props;

  let dateObject = new Date(published);
  let normalDate = dateObject.toLocaleDateString();
  return (
    <div className="bg-white flex flex-col justify-between rounded-xl shadow-md overflow-hidden py-2 px-2">
      <div>
        <div>
          <p className="font-medium uppercase ml-4 mt-2 ">{topic}</p>
          <p className="font-normal ml-4">{sector}</p>
        </div>

        <h1 className="text-wrap m-3 line-clamp-3 ">
          <span className="font-bold text-sm uppercase">Topic:</span>
          {title}
        </h1>
        <div className="ml-4 mb-4">
          <p className="">{country}</p>
        </div>
      </div>
      <div>
        <p className="text-thin text-xs text-center">{normalDate}</p>
      </div>
    </div>
  );
};

export default PostCard;
