import * as reduxHooks from 'react-redux';
import { initialState } from '@@/store/slices/locationSlice';
import { LocationState } from '@@/store/slices/locationSlice/types';
import { render } from '@testing-library/react';
import { Location } from '../Location';

jest.mock('react-redux');

const state: LocationState = initialState;

describe('Location component', () => {
  it('Should be render', () => {
    jest.spyOn(reduxHooks, 'useDispatch');
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(state);

    const component = render(<Location />);

    expect(component).toMatchSnapshot();
  });
});
