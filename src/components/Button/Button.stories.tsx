import {Alert} from 'react-native';
import Button, {type ButtonProps} from './Button';
import type {Meta, StoryObj} from '@storybook/react-native';

const ButtonMeta: Meta<ButtonProps> = {
  argTypes: {
    onPress: {
      action: 'on press',
    },
  },
  args: {
    text: 'Button',
    onPress: () => Alert.alert('Button', 'Pressed action'),
  },
  title: 'Button',
  component: Button,
};

export default ButtonMeta;

export const Basic: StoryObj<ButtonProps> = {};
