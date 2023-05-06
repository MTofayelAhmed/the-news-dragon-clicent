import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://the-new-dragon-clone-server-mtofayelahmed.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
    <h4>All categories</h4>
    <div className="ps-4">
      {
        categories.map(category => <p key={category.id}><Link to={`/category/${category.id}`} className="text-decoration-none text-black">{category.name}</Link></p>)
      }
    </div>
    </div>
  );
};

export default LeftNav;
