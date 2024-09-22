import { useState } from "react";
import { Section } from "../../types";

interface Props {
  section: Section;
  onSave: (id: string, updatedSection: Section) => void;
}

export default function SectionArea(props: Props) {
  const { onSave, section } = props;
  const [sectionState, setSectionState] = useState<Section>(section);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setSectionState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(section.id, sectionState);
  };
  return (
    <>
      {section.editMode ? (
        <form onSubmit={handleSave}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              name="title"
              value={sectionState.title}
              placeholder="title"
              onChange={handleChange}
            />
            <div></div>
            <textarea
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="text"
              placeholder="Description"
              rows={6}
              value={sectionState.text}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      ) : (
        <div className="grid gap-6 mb-6 md:grid-cols-2 h-20">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {sectionState.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {sectionState.text}
          </p>
        </div>
      )}
    </>
  );
}
