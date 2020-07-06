import React from 'react'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton
} from './components/Buttons'

export const ExampleComponent = ({ text }) => {
  return (
    <div>
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <TertiaryButton>Tertiary Button</TertiaryButton>
    </div>
  )
}
