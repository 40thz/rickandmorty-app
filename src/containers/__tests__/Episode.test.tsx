import * as reduxHooks from 'react-redux';
import { initialState } from '@@/store/slices/episodeSlice';
import { EpisodeState } from '@@/store/slices/episodeSlice/types';
import { render } from '@testing-library/react';
import { Episode } from '../Episode';

jest.mock('react-redux');

const state: EpisodeState = initialState;

describe('Episode component', () => {
  it('Should be render', () => {
    jest.spyOn(reduxHooks, 'useDispatch');
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(state);

    const component = render(<Episode />);

    expect(component).toMatchSnapshot();
  });
});
