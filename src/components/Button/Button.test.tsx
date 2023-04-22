import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from './Button';

describe('Button unit tests', () => {
  it('should render text when it is given', () => {
    const wrapper = render(<Button text="Button" />);

    const text = wrapper.getByTestId('button-text').children[0];

    expect(text).toBe('Button');
  });

  it('should trigger onPress when pressed', () => {
    const mockPress = jest.fn();
    const wrapper = render(<Button text="Button" onPress={mockPress} />);
    const touchable = wrapper.getByTestId('button-pressable');

    fireEvent(touchable, 'onPress');
    expect(mockPress).toBeCalled();
  });
});
