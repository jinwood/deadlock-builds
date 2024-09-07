"use client";

import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BuildNotes from "../components/BuildNotes";
import { Build, Section } from "@/app/types";
import AddSection from "../components/AddSection";
import Sections from "../components/Sections";

export default function CharacterBuildClient() {
  const [build, setBuild] = useState<Build>({
    sections: [
      {
        title: "",
        text: "Enter your text",
        items: [],
      },
    ],
  });
  const [notes, setNotes] = useState("");

  const addSection = (newSection: Section) => {
    const updatedSections = [...(build.sections ?? []), newSection];
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
          <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
            Sections
          </h2>
          <Sections sections={build.sections} />
        </div>
        <div>
          <AddSection addSectionCallback={addSection} />
        </div>
      </div>
      <BuildNotes notes={notes} setNotes={setNotes} />
      <button
        onClick={handleSave}
        className="mt-6 bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-100 transition duration-300 ease-in-out"
      >
        Save Build
      </button>
    </DndProvider>
  );
}
