import React from 'react';
import {render} from '@testing-library/react-native';
import EventDetailField from './EventDetailField';

describe('EventDetailField unit tests', () => {
  it('should render label when it is given', () => {
    const wrapper = render(<EventDetailField label="test label" content="" />);
    const label = wrapper.queryByText('test label');

    expect(label).not.toBeNull();
  });
});
