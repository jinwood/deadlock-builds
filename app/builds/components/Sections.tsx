import { Section } from "@/app/types";

interface Props {
  sections: Section[];
}

export default function Sections({ sections }: Props) {
  return (
    <div>
      {sections.map((section) => {
        return <p key={section.title}>{section.title}</p>;
      })}
    </div>
  );
}
