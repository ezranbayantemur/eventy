import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import EventCard from './EventCard';
import eventdata from '__mocks__/event.json';
import type {Event} from '@types';

const mockData = eventdata as Event;

describe('EventCard unit tests', () => {
  it('should trigger onSelect when pressed', () => {
    const mockSelect = jest.fn();
    const wrapper = render(<EventCard data={mockData} onSelect={mockSelect} />);
    const touchable = wrapper.getByTestId('eventcard-touchable');

    fireEvent(touchable, 'onPress');
    expect(mockSelect).toBeCalled();
  });

  it('should render free badge when event is free', () => {
    const wrapper = render(
      <EventCard data={{...mockData, UcretsizMi: true}} onSelect={jest.fn} />,
    );
    const badge = wrapper.queryByTestId('eventcard-free-badge');

    expect(badge).not.toBeNull();
  });

  it('should not render free badge when event is not free', () => {
    const wrapper = render(<EventCard data={mockData} onSelect={jest.fn} />);
    const badge = wrapper.queryByTestId('eventcard-free-badge');

    expect(badge).toBeNull();
  });

  it('should render genre badge', () => {
    const wrapper = render(<EventCard data={mockData} onSelect={jest.fn} />);
    const genre = wrapper.queryByTestId('eventcard-genre-badge-title')
      ?.children[0];

    expect(genre).toBe(mockData.Tur);
  });
});
