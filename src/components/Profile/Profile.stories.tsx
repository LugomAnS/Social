import type { Meta, StoryObj } from '@storybook/react';

import Profile from './Profile';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Profile> = {
  component: Profile,
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const ProfileBase: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};