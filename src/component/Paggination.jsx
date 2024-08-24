import React from "react";
import { useGlobalContext } from "../context";

const Paggination = () => {
  const { page, nbPages, getPrevsPage, getNextPage } = useGlobalContext();

  return (
    <>
      <div className="pagination-btn">
        <button onClick={() => getPrevsPage()}>Prev</button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button onClick={() => getNextPage()}>Next</button>
      </div>
    </>
  );
};

export default Paggination;
