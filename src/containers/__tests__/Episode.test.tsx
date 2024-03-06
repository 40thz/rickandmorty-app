import * as reduxHooks from 'react-redux';
import { initialState } from '@@/store/slices/episodeSlice';
import * as actions from '@@/store/slices/episodeSlice/slice';
import { EpisodeState } from '@@/store/slices/episodeSlice/types';
import { DATA_MODE } from '@@/store/slices/types';
import { fireEvent, render, screen } from '@testing-library/react';
import { Episode } from '../Episode';

jest.mock('react-redux');

const state: EpisodeState = initialState;

describe('Episode component', () => {
  const mockedDispath = jest.spyOn(reduxHooks, 'useDispatch');

  it('Should be render', () => {
    jest.spyOn(reduxHooks, 'useDispatch');
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(state);

    const component = render(<Episode />);

    expect(component).toMatchSnapshot();
  });

  it('Should dispath action setDataMode', () => {
    const dispath = jest.fn();
    mockedDispath.mockReturnValue(dispath);

    const mockedSetDataMode = jest.spyOn(actions, 'setDataMode');

    render(<Episode />);

    fireEvent.click(screen.getByTitle('TABLE MODE'));

    expect(dispath).toHaveBeenCalledTimes(1);
    expect(mockedSetDataMode).toHaveBeenCalledWith(DATA_MODE.TABLE);

    fireEvent.click(screen.getByTitle('GRID MODE'));

    expect(dispath).toHaveBeenCalledTimes(2);
    expect(mockedSetDataMode).toHaveBeenCalledWith(DATA_MODE.GRID);
  });
});
