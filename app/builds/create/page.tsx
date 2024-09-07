import Builder from "./Builder";

export default function CharacterBuildPage() {
  return (
    <div className="container mx-auto p-4 bg-gray-900 text-yellow-100">
      <h1 className="text-3xl font-bold mb-6 text-yellow-500">Create Build</h1>
      <Builder />
    </div>
  );
}
