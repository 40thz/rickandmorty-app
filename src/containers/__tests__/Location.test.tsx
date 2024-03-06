import * as reduxHooks from 'react-redux';
import { initialState } from '@@/store/slices/locationSlice';
import * as actions from '@@/store/slices/locationSlice/slice';
import { LocationState } from '@@/store/slices/locationSlice/types';
import { DATA_MODE } from '@@/store/slices/types';
import { fireEvent, render, screen } from '@testing-library/react';
import { Location } from '../Location';

jest.mock('react-redux');

const state: LocationState = initialState;

describe('Location component', () => {
  const mockedDispath = jest.spyOn(reduxHooks, 'useDispatch');

  it('Should be render', () => {
    jest.spyOn(reduxHooks, 'useDispatch');
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(state);

    const component = render(<Location />);

    expect(component).toMatchSnapshot();
  });

  it('Should dispath action setDataMode', () => {
    const dispath = jest.fn();
    mockedDispath.mockReturnValue(dispath);

    const mockedSetDataMode = jest.spyOn(actions, 'setDataMode');

    render(<Location />);

    fireEvent.click(screen.getByTitle('TABLE MODE'));

    expect(dispath).toHaveBeenCalledTimes(1);
    expect(mockedSetDataMode).toHaveBeenCalledWith(DATA_MODE.TABLE);

    fireEvent.click(screen.getByTitle('GRID MODE'));

    expect(dispath).toHaveBeenCalledTimes(2);
    expect(mockedSetDataMode).toHaveBeenCalledWith(DATA_MODE.GRID);
  });
});
