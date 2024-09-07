"use client";

import React from "react";
import { useDrop } from "react-dnd";
import Tile from "./Tile";
import { Build } from "@/app/types";

export default function BuildArea({
  build,
  onDrop,
}: {
  build: Build;
  onDrop: any;
}) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "tile",
    drop: (item: { id: number }) => onDrop(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return drop(
    <div
      className={`p-4 border-2 border-dashed rounded min-h-[200px] ${
        isOver ? "border-green-500 bg-green-100" : "border-gray-300"
      }`}
    >
      {build.sections.map((tile, index) => (
        <Tile key={`${tile.id}-${index}`} id={tile.id} content={tile.content} />
      ))}
      {build.length === 0 && (
        <p className="text-gray-500">
          Drag and drop tiles here to create your build
        </p>
      )}
    </div>,
  );
}
