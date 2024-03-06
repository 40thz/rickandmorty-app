import * as reduxHooks from 'react-redux';
import { initialState } from '@@/store/slices/characterSlice';
import { CharacterState } from '@@/store/slices/characterSlice/types';
import { render } from '@testing-library/react';
import { Character } from '../Character';

jest.mock('react-redux');

const state: CharacterState = initialState;

describe('Character component', () => {
  it('Should be render', () => {
    jest.spyOn(reduxHooks, 'useDispatch');
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(state);

    const component = render(<Character />);

    expect(component).toMatchSnapshot();
  });
});
