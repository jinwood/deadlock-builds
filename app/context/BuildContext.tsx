"use client";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { CharacterBuild, Section } from "../types";

interface CharacterBuildContextType {
  build: CharacterBuild;
  addSection: (section: Section) => void;
  setBuild: React.Dispatch<React.SetStateAction<CharacterBuild>>;
}

const CharacterBuildContext = createContext<
  CharacterBuildContextType | undefined
>(undefined);

export const CharacterBuildProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [build, setBuild] = useState<CharacterBuild>({
    sections: [],
  });

  const addSection = useCallback((newSection: Section) => {
    setBuild((prevBuild) => ({
      ...prevBuild,
      sections: [...prevBuild.sections, newSection],
    }));
  }, []);

  return (
    <CharacterBuildContext.Provider value={{ build, setBuild, addSection }}>
      {children}
    </CharacterBuildContext.Provider>
  );
};

export const useCharacterBuild = () => {
  const context = useContext(CharacterBuildContext);
  if (context === undefined) {
    throw new Error("useBuild must be used with appropriate provider");
  }
  return context;
};
