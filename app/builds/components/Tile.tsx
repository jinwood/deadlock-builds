"use client";

import React from "react";
import { useDrag, DragSourceMonitor } from "react-dnd";

interface Props {
  id: number;
  content: string;
}

interface DragItem {
  id: number;
  type: string;
}

export default function Tile({ id, content }: Props) {
  const [{ isDragging }, drag] = useDrag<
    DragItem,
    unknown,
    { isDragging: boolean }
  >(() => ({
    type: "tile",
    item: { id, type: "tile" },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return drag(
    <div
      className={`p-2 m-1 bg-blue-200 rounded cursor-move ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {content}
    </div>,
  );
}
