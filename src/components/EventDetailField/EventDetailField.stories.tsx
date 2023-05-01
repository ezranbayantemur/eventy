import EventDetailField, {type EventDetailFieldProps} from './EventDetailField';
import type {Meta, StoryObj} from '@storybook/react-native';

const EventCardMeta: Meta<EventDetailFieldProps> = {
  args: {
    content: '<p>Test content</p>',
    label: 'Test label',
  },
  title: 'EventDetailField',
  component: EventDetailField,
};

export default EventCardMeta;

export const Basic: StoryObj<EventDetailFieldProps> = {};
