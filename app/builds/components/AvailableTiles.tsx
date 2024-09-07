"use client";

import React from "react";
import Tile from "./Tile";

export default function AvailableTiles({ tiles }) {
  return (
    <div className="bg-gray-100 p-4 rounded">
      {tiles.map((tile) => (
        <Tile key={tile.id} id={tile.id} content={tile.content} />
      ))}
    </div>
  );
}
