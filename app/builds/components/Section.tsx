import { Section } from "../../types";

interface Props {
  section: Section;
  onSave: () => void;
}

export default function SectionArea(props: Props) {
  console.log(props);
  const { onSave, section } = props;
  const { editMode, title, text } = section;
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave();
  };
  return (
    <>
      {editMode ? (
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              name="title"
              placeholder="title"
            />
            <div></div>
            <textarea
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="text"
              placeholder="Description"
              rows={6}
            />
          </div>
          <button onClick={(e) => handleSave(e)}>Save</button>
        </form>
      ) : (
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>
          <div></div>
          <p className="text-gray-700 dark:text-gray-300">{text}</p>
        </div>
      )}
    </>
  );
}
