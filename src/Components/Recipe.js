import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import marked from "marked";

import "./Recipe.css";

export const Recipe = () => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    client
      .getEntry(id)
      .then((response) => {
        setArticle(response);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading) return "Loading...";
  const postDescription = marked(article.fields.description);
  return (
    <div className="posts" id='singlePost'>
      <h2 className="title" id='recipeTitle'>{article.fields.name}</h2>
      {article.fields.featuredImage.fields.file.url && (
        <img
          className="featuredImage"
          id='recipeImage'
          src={article.fields.featuredImage.fields.file.url}
          alt={article.fields.name}
          title={article.fields.name}
        />
      )}

      <section id='recipe' dangerouslySetInnerHTML={{ __html: postDescription }} />
    </div>
  );
};
