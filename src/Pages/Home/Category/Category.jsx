import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
  const { id } = useParams();

  const categoryNews = useLoaderData();
  console.log(categoryNews);
  return (
    <div>
      <h2>this is category{categoryNews}</h2>
  {categoryNews.map(news=> <NewsCard id= {news._id} news= {news}></NewsCard>)}
    </div>
  );
};

export default Category;
