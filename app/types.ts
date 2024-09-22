type Character = "Abrams" | "Bebop";

interface Item {
  name: string;
}

export interface Section {
  editMode: boolean;
  title: string;
  text: string;
  items: Item[];
}

export interface CharacterBuild {
  character?: Character;
  intro?: string;
  sections: Section[];
}
