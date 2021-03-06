import { Post } from "./Post";
import './Posts.css'

export const Posts = ({ posts }) => {
  return (
      <div className="posts">
        {posts.map((article, index) => (
           <Post article={article} key={index} />
        ))}
      </div>
  );
};

// client.getEntry(id);
// set up router with the new page the chosen post
// from post.js on click = call router with 2 parameters (name of page, :article.sys.id)
// in chosen post get id from url and call client.getEntry(id)
// then render like previously done
