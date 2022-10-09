import React from "react";
import Skeleton from "react-loading-skeleton";
import "../styles/cardSkeleton.css";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, ind) => (
      <div className="card-skeleton" key={ind}>
        <div className="top-section">
          <Skeleton height={170} />
        </div>
        <div className="bottom-section">
          <Skeleton count={4} style={{ marginBottom: ".6rem" }} />
        </div>
      </div>
    ));
};

export default CardSkeleton;
