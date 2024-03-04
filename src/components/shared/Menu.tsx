import { useContext } from 'react';
import { AppContext, TAB_VALUES } from '@@/context/AppContext';
import { localStorageService } from '@@/utils/LocalStorageService';
import { Button } from './ui/Button';

type MenuProps = {
  showLabel?: boolean;
};

export const Menu = ({ showLabel = true }: MenuProps) => {
  const { setCurrentTab } = useContext(AppContext);

  const handleClick = (tab: TAB_VALUES) => {
    localStorageService.setStorageItem('tab', tab);
    setCurrentTab(tab);
  };

  return (
    <div className="flex flex-col items-center gap-3 max-w-[400px] w-full mt-20 bg-dark/85 px-3 py-5 rounded-xl">
      {showLabel && <div className="text-white font-bold uppercase">Please select the category</div>}
      <div className="flex justify-center gap-4">
        <Button onClick={() => handleClick(TAB_VALUES.CHARACTERS)}>{TAB_VALUES.CHARACTERS}</Button>
        <Button onClick={() => handleClick(TAB_VALUES.EPISODES)}>{TAB_VALUES.EPISODES}</Button>
        <Button onClick={() => handleClick(TAB_VALUES.LOCATIONS)}>{TAB_VALUES.LOCATIONS}</Button>
      </div>
    </div>
  );
};
