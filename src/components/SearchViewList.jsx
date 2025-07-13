import React from "react";
import { ListElementPreviw } from "./ListElement";
import { useSelector } from "react-redux";
import ShimmerListElement from "./ShimmerListElement";

const SearchViewList = () => {
  const newSearchNumberList = useSelector(
    (store) => store.newsearch.newSearchNumberList
  );

  if (newSearchNumberList.length == 0) {
    return;
    // return <ShimmerListElement />;
  }

  return (
    <div>
      {newSearchNumberList.map((profile) => (
        <ListElementPreviw key={profile._id} data={profile} />
      ))}

      {/* <ListElementPreviw />
      <ListElementPreviw />
      <ListElementPreviw /> */}
    </div>
  );
};

export default SearchViewList;
