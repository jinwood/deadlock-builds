import { createContext, ReactNode, useContext, useState } from "react";
import { CharacterBuild } from "../types";

interface CharacterBuildContextType {
  build: CharacterBuild;
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

  return (
    <CharacterBuildContext.Provider value={{ build, setBuild }}>
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
