import Loading, {type LoadingProps} from './Loading';
import type {Meta, StoryObj} from '@storybook/react-native';

const LoadingMeta: Meta<LoadingProps> = {
  title: 'Loading',
  component: Loading,
};

export default LoadingMeta;

export const Basic: StoryObj<LoadingProps> = {};

export const WithText: StoryObj<LoadingProps> = {
  args: {
    text: 'Loading..',
  },
};
