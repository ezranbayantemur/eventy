import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SessionCard from './SessionCard';
import type {Session} from '@types';
import session from '../../../__mocks__/session.json';
const mockSession = session as Session;
import RNCalendarEvents from 'react-native-calendar-events';

jest.mock('react-native-calendar-events', () => {
  return {
    checkPermissions: jest.fn(() => Promise.resolve('authorized')),
    requestPermissions: jest.fn(() => Promise.resolve('authorized')),
    saveEvent: jest.fn(() => Promise.resolve()),
  };
});

const checkPermissionsSpy = jest.spyOn(RNCalendarEvents, 'checkPermissions');
const requestPermissionsSpy = jest.spyOn(RNCalendarEvents, 'checkPermissions');
const saveEventSpy = jest.spyOn(RNCalendarEvents, 'checkPermissions');

describe('SessionCard unit tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly for available session', () => {
    const wrapper = render(
      <SessionCard
        eventName="testEvent"
        data={{...mockSession, DolulukOranı: 50}}
      />,
    );
    const day = wrapper.queryByText('04 May 2023');
    const sellDate = wrapper.queryByText('Bilet Satış: 18 Apr 15:00');
    const time = wrapper.queryByText('20:00 - 22:00');
    const button = wrapper.getByText('Takvime Ekle');

    fireEvent.press(button);

    expect(day).not.toBeNull();
    expect(sellDate).not.toBeNull();
    expect(time).not.toBeNull();
    expect(checkPermissionsSpy).toBeCalled();
    expect(requestPermissionsSpy).toBeCalled();
    expect(saveEventSpy).toBeCalled();
  });

  it('should render correctly for unavailable session', () => {
    const wrapper = render(
      <SessionCard eventName="testEvent" data={mockSession} />,
    );
    const day = wrapper.queryByText('04 May 2023');
    const sellDate = wrapper.queryByText('Bilet Satış: 18 Apr 15:00');
    const time = wrapper.queryByText('20:00 - 22:00');
    const button = wrapper.getByText('Takvime Ekle');

    fireEvent.press(button);
    expect(day).not.toBeNull();
    expect(sellDate).not.toBeNull();
    expect(time).not.toBeNull();
    expect(checkPermissionsSpy).not.toBeCalled();
    expect(requestPermissionsSpy).not.toBeCalled();
    expect(saveEventSpy).not.toBeCalled();
  });
});
