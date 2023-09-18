import React, { useState } from 'react'
import { Styled } from './PasswordInput.styled'
import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye'
import PasswordStrengthBar from 'react-password-strength-bar'

type PasswordInputProps = {
  placeholder: string;
  strengthCheck?: boolean;
  password: string;
  setPassword: (newPassword: string) => void;
};

export function PasswordInput({ placeholder, strengthCheck, password, setPassword }) {

  const [type, setType] = useState('password')
  const [icon, setIcon] = useState(eyeOff)

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye)
      setType('text')
    } else {
      setIcon(eyeOff)
      setType('password')
    }
  }

  return (
    <>
      <Styled.Field>
        <Styled.LoginInput
          type={type}
          placeholder={placeholder}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete='current-password'
          required
        />
        <span onClick={handleToggle}>
          <Icon icon={icon} size={30} />
        </span>
        {strengthCheck && (
          <PasswordStrengthBar
            password={password}
            shortScoreWord='No Password'
            scoreWords={['ok', 'fine', 'cool', 'enough', 'hard enough']}
          />
        )}
      </Styled.Field>
    </>
  )
}
