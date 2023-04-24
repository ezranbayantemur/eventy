import Error, {type ErrorProps} from './Error';
import type {Meta, StoryObj} from '@storybook/react-native';

const ErrorMeta: Meta<ErrorProps> = {
  title: 'Error',
  component: Error,
};

export default ErrorMeta;

export const Basic: StoryObj<ErrorProps> = {};

export const WithText: StoryObj<ErrorProps> = {
  args: {
    text: 'Veriler çekilirken bir hata oluştu!',
  },
};
