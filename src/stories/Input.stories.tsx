import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'components/Input/index.tsx',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const FilledInput: Story = {
  render: () => <Input />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByLabelText('text-input');

    await userEvent.type(input, '이게 입력되어야 합니다', { delay: 100 });
  },
};
