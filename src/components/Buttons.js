import styled from 'styled-components'
import { defaultTheme } from '../utils'

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  min-width: 100px;
`

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: white;
  border: none;
`

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};
`

export const TertiaryButton = styled(Button)`
  background: none;
  border: none;
  color: ${defaultTheme.primaryColor};
`
