import * as reduxHooks from 'react-redux';
import * as actions from '@@/store/slices/characterSlice/slice';
import { fireEvent, render, screen } from '@testing-library/react';
import { InputColumnFilter } from '../';

jest.mock('react-redux');

describe('InputColumnFilter component', () => {
  const mockedDispath = jest.spyOn(reduxHooks, 'useDispatch');

  it('Should be render', () => {
    const mockedSetOptions = jest.spyOn(actions, 'setOptions');
    jest.spyOn(reduxHooks, 'useDispatch');

    const component = render(<InputColumnFilter setOptions={mockedSetOptions as never} prop="name" value="123" />);

    expect(component).toMatchSnapshot();
  });

  it('Should dispath action setOptions', () => {
    const dispath = jest.fn();
    mockedDispath.mockReturnValue(dispath);
    const mockedSetOptions = jest.spyOn(actions, 'setOptions');

    render(<InputColumnFilter setOptions={mockedSetOptions as never} prop="name" value="123" type="checkbox" />);

    fireEvent.click(screen.getByRole('checkbox'));

    expect(dispath).toHaveBeenCalledTimes(1);
    expect(mockedSetOptions).toHaveBeenCalledWith({ name: '123' });
  });
});
