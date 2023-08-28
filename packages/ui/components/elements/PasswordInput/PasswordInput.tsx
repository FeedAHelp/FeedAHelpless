import React, { useState } from 'react'
import { Styled } from './PasswordInput.styled'
import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye'
import PasswordStrengthBar from 'react-password-strength-bar'

type PasswordInputProps = {
  placeholder: string
  strengthCheck?: boolean
}

export function PasswordInput({ placeholder, strengthCheck }: PasswordInputProps) {
  const [password, setPassword] = useState('')
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

  const handlePassword = (passwordValue) => {
    setPassword(passwordValue)
  }

  return (
    <>
      <Styled.Field>
        <Styled.LoginInput
          type={type}
          placeholder={placeholder}
          value={password}
          onChange={(e) => (!strengthCheck ? setPassword(e.target.value) : handlePassword(e.target.value))}
          autoComplete='current-password'
        />
        <span onClick={handleToggle}>
          <Icon icon={icon} size={30} />
        </span>
        <PasswordStrengthBar
          password={password}
          shortScoreWord='No Password'
          scoreWords={['ok', 'fine', 'cool', 'too much', 'fuck off']}
        />
      </Styled.Field>
    </>
  )
}
