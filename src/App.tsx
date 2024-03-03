import { useState } from 'react';
import { Menu } from '@components/shared/Menu';
import { localStorageService } from '@/utils/LocalStorageService';
import { Character } from './containers/Character';
import { AppContext, TAB_VALUES } from './context/AppContext';

const currentTabFromStorage: TAB_VALUES = localStorageService.getStorageItem('tab') as TAB_VALUES;

const component = {
  [TAB_VALUES.CHARACTERS]: <Character />,
  [TAB_VALUES.EPISODES]: <div>episodes</div>,
  [TAB_VALUES.LOCATIONS]: <div>locations</div>,
};

export const App = () => {
  const [currentTab, setCurrentTab] = useState<TAB_VALUES>(currentTabFromStorage);

  return (
    <AppContext.Provider value={{ currentTab, setCurrentTab }}>
      <div className="flex justify-center items-center h-full">
        {!currentTab && <Menu />}
        {component[currentTab]}
      </div>
    </AppContext.Provider>
  );
};
