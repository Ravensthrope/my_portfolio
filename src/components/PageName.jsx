import React from "react";

const PageName = ({ name }) => {
  return (
    <>
      <div className="font-bold md:text-5xl text-3xl text-black dark:text-white">
        {name}
        {"."}
      </div>
    </>
  );
};

export default PageName;
