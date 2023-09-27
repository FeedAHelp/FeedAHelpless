import React, { useState } from 'react'
import { Styled } from './PasswordInput.styled'
import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye'

type PasswordInputProps = {
  placeholder: string;
  strengthCheck?: boolean;
  password: string;
  setPassword: (newPassword: string) => void;
};

export function PasswordInput({ placeholder, password, setPassword }) {

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

  const isStrongPassword = (pass) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return regex.test(pass);
  };

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
        {password && (
          <Styled.StrengthIndicator>
            <div className={`strength-bar ${isStrongPassword(password) ? 'strong' : 'weak'}`}></div>
            <div className={`strength-text ${isStrongPassword(password) ? 'strong' : 'weak'}`}>
              {isStrongPassword(password) ? 'Strong' : 'Weak'}
            </div>
          </Styled.StrengthIndicator>
        )}
      </Styled.Field>
    </>
  )
}
