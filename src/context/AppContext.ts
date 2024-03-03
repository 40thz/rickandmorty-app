import React, { createContext } from 'react';

export enum TAB_VALUES {
  CHARACTERS = 'Characters',
  EPISODES = 'Episodes',
  LOCATIONS = 'Locations',
}

type AppContextValues = {
  currentTab: TAB_VALUES | null;
  setCurrentTab: React.Dispatch<React.SetStateAction<TAB_VALUES>>;
};

export const AppContext = createContext({} as AppContextValues);
