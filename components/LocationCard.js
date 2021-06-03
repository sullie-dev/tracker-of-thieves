import React from "react";

export default function LocationCard(props) {
  const { name, grid, region, type } = props;

  return (
    <span>
      <h4>{name}</h4>
      <h6>{grid}</h6>
      <h6>{region}</h6>
      <h6>{type}</h6>
    </span>
  );
}
