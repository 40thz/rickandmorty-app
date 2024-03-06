import * as reduxHooks from 'react-redux';
import { initialState } from '@@/store/slices/characterSlice';
import * as actions from '@@/store/slices/characterSlice/slice';
import { CharacterState } from '@@/store/slices/characterSlice/types';
import { DATA_MODE } from '@@/store/slices/types';
import { fireEvent, render, screen } from '@testing-library/react';
import { Character } from '../Character';

jest.mock('react-redux');

const state: CharacterState = initialState;

describe('Character component', () => {
  const mockedDispath = jest.spyOn(reduxHooks, 'useDispatch');

  it('Should be render', () => {
    jest.spyOn(reduxHooks, 'useDispatch');
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(state);

    const component = render(<Character />);

    expect(component).toMatchSnapshot();
  });

  it('Should dispath action setDataMode', () => {
    const dispath = jest.fn();
    mockedDispath.mockReturnValue(dispath);

    const mockedSetDataMode = jest.spyOn(actions, 'setDataMode');

    render(<Character />);

    fireEvent.click(screen.getByTitle('TABLE MODE'));

    expect(dispath).toHaveBeenCalledTimes(1);
    expect(mockedSetDataMode).toHaveBeenCalledWith(DATA_MODE.TABLE);

    fireEvent.click(screen.getByTitle('GRID MODE'));

    expect(dispath).toHaveBeenCalledTimes(2);
    expect(mockedSetDataMode).toHaveBeenCalledWith(DATA_MODE.GRID);
  });
});
