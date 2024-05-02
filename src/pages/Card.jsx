import React from "react";

const Card = ({ item }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <p className="font-bold">Active: {item.active}</p>
      <p className="font-bold">Category: {item.Category}</p>
      <p className="font-bold">Sub Category: {item.SubCategory}</p>
      <p className="font-bold">Brand: {item.Brand}</p>
      <p className="font-bold">Icon: {item.Icon}</p>
      <p className="font-bold">Product: {item.Product}</p>
      <p className="font-bold">Pack Size: {item.PackSize}</p>
      <p className="font-bold">Similar Size: {item.SimilarSize}</p>
      <p className="font-bold">Pack Type: {item.PackType}</p>
      <p className="font-bold">Similar Type: {item.SimilarType}</p>
      <p className="font-bold">%: {item.Percentage}</p>
      <p className="font-bold">Stores: {item.StoresData}</p>
    </div>
  );
};

export default Card;
