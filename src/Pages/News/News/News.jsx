import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
  const detailNews= useLoaderData()
  return (
    <div>
      <h2>this is newsDetails</h2>
    </div>
  );
};

export default News;