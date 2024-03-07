import { useState } from 'react';
import { Character, Episode, Location } from '@@/containers';
import { localStorageService } from '@@/utils';
import { Menu } from '@@/components/shared/Menu';
import { AppContext, TAB_VALUES } from './context';

const currentTabFromStorage: TAB_VALUES = localStorageService.getStorageItem('tab') as TAB_VALUES;

const component = {
  [TAB_VALUES.CHARACTERS]: <Character />,
  [TAB_VALUES.EPISODES]: <Episode />,
  [TAB_VALUES.LOCATIONS]: <Location />,
};

export const App = () => {
  const [currentTab, setCurrentTab] = useState<TAB_VALUES>(currentTabFromStorage);

  return (
    <AppContext.Provider value={{ currentTab, setCurrentTab }}>
      <main className="container m-auto h-full py-40">
        {!currentTab && <Menu className="m-auto" />}

        {currentTab && component[currentTab]}
      </main>
    </AppContext.Provider>
  );
};
