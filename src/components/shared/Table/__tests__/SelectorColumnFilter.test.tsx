import * as reduxHooks from 'react-redux';
import * as actions from '@@/store/slices/characterSlice/slice';
import { render } from '@testing-library/react';
import { genderOptionData } from '@@/constants/character';
import { SelectorColumnFilter } from '../';

jest.mock('react-redux');

describe('SelectorColumnFilter component', () => {
  it('Should be render', () => {
    const mockedSetOptions = jest.spyOn(actions, 'setOptions');
    jest.spyOn(reduxHooks, 'useDispatch');

    const component = render(
      <SelectorColumnFilter data={genderOptionData} setOptions={mockedSetOptions as never} prop="name" value="123" />,
    );

    expect(component).toMatchSnapshot();
  });
});
