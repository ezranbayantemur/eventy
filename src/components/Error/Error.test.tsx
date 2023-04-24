import React from 'react';
import {render} from '@testing-library/react-native';
import Error from './Error';

describe('Error unit tests', () => {
  it('should render default text when text props is not given', () => {
    const wrapper = render(<Error />);

    const text = wrapper.queryByText('Bir hata oluştu!');

    expect(text).not.toBeNull();
  });

  it('should render text when it is given', () => {
    const wrapper = render(<Error text="test error text" />);

    const text = wrapper.queryByText('test error text');

    expect(text).not.toBeNull();
  });
});
