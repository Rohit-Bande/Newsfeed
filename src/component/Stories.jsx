import React from "react";
import { useGlobalContext } from "../context";

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();

  if (isLoading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <>
      <div className="stories-div hide-scrollbar">
        {hits.map((currPost) => {
          const { title, author, objectID, num_comments, url } = currPost;

          return (
            <>
              <div className="card" key={objectID}>
                <h2>{title}</h2>
                <p>
                  By <span>{author}</span> | <span>{num_comments}</span>{" "}
                  Comments
                </p>
                <div className="card-button">
                  <a href={url} target="_blank">
                    Read more
                  </a>
                  <a href="" onClick={() => removePost(objectID)}>
                    Remove
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Stories;
