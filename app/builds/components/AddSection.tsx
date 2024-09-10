import React, { useState } from "react";
import { Section } from "@/app/types";

interface Props {
  addSectionCallback: (section: Section) => void;
}

export default function AddSection({ addSectionCallback }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleCreate = () => {
    console.log("Creating section with title:", title);
    setIsOpen(false);
    setTitle("");
    addSectionCallback({
      title,
      text,
      items: [],
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 mt-6 bg-yellow-300 text-gray-900 rounded-lg hover:bg-yellow-100 transition duration-300 ease-in-out"
      >
        Add Section
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Section</h2>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Text
              </label>
              <input
                type="text"
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
            </div>

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-red-100 transition duration-300 ease-in-out"
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                className="mt-6 bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg hover:bg-green-100 transition duration-300 ease-in-out"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
