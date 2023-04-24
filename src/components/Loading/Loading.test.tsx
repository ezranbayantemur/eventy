import React from 'react';
import {render} from '@testing-library/react-native';
import Loading from './Loading';

describe('Button unit tests', () => {
  it('should not render text when it is not given', () => {
    const wrapper = render(<Loading />);

    const text = wrapper.queryByTestId('loading-text');

    expect(text).toBeNull();
  });

  it('should render text when it is given', () => {
    const wrapper = render(<Loading text="loading.." />);

    const text = wrapper.queryByText('loading..');

    expect(text).not.toBeNull();
  });
});
