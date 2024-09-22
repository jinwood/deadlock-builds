"use client";

import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BuildNotes from "../components/BuildNotes";
import { useCharacterBuild } from "@/app/context/BuildContext";
import SectionArea from "../components/Section";

export default function CharacterBuildClient() {
  const { build, setBuild, addSection } = useCharacterBuild();
  const [notes, setNotes] = useState("");

  const handleAddSection = () => {
    addSection({
      editMode: true,
      title: "",
      text: "",
      items: [],
    });
  };

  const handleSave = () => {
    console.log("Saving build:", { build, notes });
    setBuild({
      ...build,
    });
  };

  console.log(build.sections);
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mx-auto px-4">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
            Sections
          </h2>
          <button
            onClick={handleAddSection}
            className="flex items-center justify-center p-3 bg-green-200 text-black rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200 h-2 w-2 mb-4"
          >
            +
          </button>
        </div>
      </div>
      {build.sections.map((section, i) => (
        <div key={i}>
          <SectionArea section={section} onSave={handleSave} />
        </div>
      ))}
      <button
        onClick={handleSave}
        className="mt-6 bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-100 transition duration-300 ease-in-out"
      >
        Save Build
      </button>
    </DndProvider>
  );
}
