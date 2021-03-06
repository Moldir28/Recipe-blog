import { Link } from "react-router-dom";
import "./Post.css";


export const Post = ({ article, key }) => {
  const { name, featuredImage, recipeIntro } = article.fields;
  console.log(article);
  return (
    <div className="post__home">
    <div className='recipeContent'>
      {featuredImage && (
        <img
          className="featuredImage"
          src={featuredImage.fields.file.url}
          alt={name}
          title={name}
        />
      )}
      <div id='recipeDescription'>
      <Link to={`/recipe/${article.sys.id}`}> 
          <h2 className="title">{name}</h2>
      </Link>
      <p>{recipeIntro}</p>
      </div>
    </div>
    </div>
  );
};
