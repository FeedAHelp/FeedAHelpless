import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { GenericButton } from './Button'

export default {
  title: 'ATOMS/GenericButton',
  component: GenericButton
} as ComponentMeta<typeof GenericButton>

const Template: ComponentStory<typeof GenericButton> = (args) => <GenericButton {...args} />

export const ButtonComponent = Template.bind({})

ButtonComponent.args = {
  text: 'Clicked',
  isdisabled: false,
  variant: 'filled',
  size: 'large',
  backgroundcolor: '#180364',
  textcolor: '#fff',
  shape: '10px'
}
