"use client";

import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BuildArea from "../components/BuildArea";
import AvailableTiles from "../components/AvailableTiles";
import BuildNotes from "../components/BuildNotes";
import { Build, Section } from "@/app/types";
import AddSection from "../components/AddSection";

export default function CharacterBuildClient() {
  const [build, setBuild] = useState<Build>({
    sections: [
      {
        text: "Enter your text",
        items: [],
      },
    ],
  });
  const [notes, setNotes] = useState("");

  const handleDrop = () => {
    const newSection: Section = { text: "", items: [] };
    const updatedSections = [...(build.sections ?? []), newSection];
    // add a new section
    setBuild({
      ...build,
      sections: updatedSections,
    });
  };

  const handleSave = () => {
    // Implement save functionality here
    console.log("Saving build:", { build, notes });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-2">Build Area</h2>
          <BuildArea build={build} onDrop={handleDrop} />
        </div>
        <div>
          <AddSection />
        </div>
      </div>
      <BuildNotes notes={notes} setNotes={setNotes} />
      <button
        onClick={handleSave}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save Build
      </button>
    </DndProvider>
  );
}
