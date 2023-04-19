import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import EventCard from './EventCard';

describe('EventCard unit tests', () => {
  it('should trigger onSelect when pressed', () => {
    const mockSelect = jest.fn();
    const wrapper = render(<EventCard data={{}} onSelect={mockSelect} />);

    const touchable = wrapper.getByTestId('eventcard-touchable');

    fireEvent(touchable, 'onPress');
    expect(mockSelect).toBeCalled();
  });

  it('should render free badge when event is free', () => {
    const wrapper = render(<EventCard data={{}} />);

    const badge = wrapper.queryByTestId('eventcard-free-badge');

    expect(badge).not.toBeNull();
  });

  it('should not render free badge when event is not free', () => {
    const wrapper = render(<EventCard data={{}} />);

    const badge = wrapper.queryByTestId('eventcard-free-badge');

    expect(badge).toBeNull();
  });
});
