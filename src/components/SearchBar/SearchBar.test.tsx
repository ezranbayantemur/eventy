import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SearchBar from './SearchBar';

describe('SearchCard unit tests', () => {
  it('should trigger onSearch when typed', () => {
    const mockSearch = jest.fn();
    const wrapper = render(<SearchBar onSearch={mockSearch} />);
    const input = wrapper.getByTestId('searchbar-input');

    fireEvent(input, 'onChangeText', 'test');
    expect(mockSearch).toBeCalledWith('test');
  });

  it('should render icon by default', () => {
    const wrapper = render(<SearchBar onSearch={jest.fn} />);
    const icon = wrapper.queryByTestId('searchbar-icon');

    expect(icon).not.toBeNull();
  });

  it('should not render icon when showIcon is given false', () => {
    const wrapper = render(<SearchBar showIcon={false} onSearch={jest.fn} />);
    const icon = wrapper.queryByTestId('searchbar-icon');

    expect(icon).toBeNull();
  });

  it('should draw bottom line by default', () => {
    const wrapper = render(<SearchBar onSearch={jest.fn} />);
    const container = wrapper.queryByTestId('searchbar-container');

    expect(container?.props.style[1]).toMatchObject({borderBottomWidth: 1});
  });

  it('should not have bottom line when lineless is given true', () => {
    const wrapper = render(<SearchBar lineless={true} onSearch={jest.fn} />);
    const container = wrapper.queryByTestId('searchbar-container');

    expect(container?.props.style[1]).toBe(false);
  });
});
