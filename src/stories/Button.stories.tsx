import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'components/button/index.tsx',
  component: Button,
  parameters: { backgrounds: { default: 'dark' } },
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button label="Button" primary />,
  parameters: { backgrounds: { default: 'dark' } },
};

export const Docs: Story = {
  args: { label: '기본 값' },
};

export const Default: Story = {
  render: () => <Button label="button" />,
};
