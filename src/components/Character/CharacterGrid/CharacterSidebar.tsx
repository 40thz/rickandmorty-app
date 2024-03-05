import { InputColumnFilter, SelectorColumnFilter } from '@@/components/shared/Table';
import { genderOptionData, statusOptionData } from '@@/constants/character';
import { useAppSelector } from '@@/store/hooks';
import { setOptions } from '@@/store/slices/characterSlice';

export const CharacterSidebar = () => {
  const { name, gender, species, type, status } = useAppSelector((state) => state.character.options);

  return (
    <form className="flex flex-col gap-3 w-[80%]">
      <InputColumnFilter value={name} setOptions={setOptions} prop="name" label="Name" />
      <SelectorColumnFilter
        value={gender}
        setOptions={setOptions}
        data={genderOptionData}
        prop="gender"
        placeholder="Gender not selected"
        label="Gender"
      />
      <SelectorColumnFilter
        value={status}
        setOptions={setOptions}
        data={statusOptionData}
        prop="status"
        placeholder="Status not selected"
        label="Status"
      />
      <InputColumnFilter value={species} setOptions={setOptions} prop="species" label="Species" />
      <InputColumnFilter value={type} setOptions={setOptions} prop="type" label="Type" />
    </form>
  );
};
