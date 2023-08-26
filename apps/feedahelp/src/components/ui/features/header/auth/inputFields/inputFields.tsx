import { FC, useState } from "react";
import {  Checkbox, PasswordWrapper } from "../login/login.styled";

interface InputFieldProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type: string;
  disabled?: boolean;
  required?: boolean;
}

export const TextInputField: FC<InputFieldProps> = ({
  label,
  disabled,
  onChange,
  placeholder,
  type,
  value,
  required,
}) => {
  return (
    <div className="inputContainer">
      <label htmlFor={label} className="formLabel">
        {required && <sup className="text-primary">*</sup>} {label}
      </label>
      <input
        type={type}
        className="formInput"
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => {
          return onChange && onChange(e.target.value);
        }}
        value={value}
      />
    </div>
  );
};

export const PasswordInputField: FC<InputFieldProps> = ({
  label,
  disabled,
  onChange,
  placeholder,
  type,
  value,
  required,
}) => {
  return (
    <div className="inputContainer">
      <label htmlFor={label} className="formLabel">
        {required && <sup className="text-primary">*</sup>} {label}
      </label>
      <PasswordWrapper>
        <input
          type={type}
          className=""
          placeholder={placeholder}
          disabled={disabled}
          // onChange={(e) => onChange(e.target.value)}
          value={value}
        />
        {/* eye for see password  */}
        {/* //todo make it toggle later when click */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M3.75 3.125L16.25 16.875"
            stroke="#8A8A8A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.1019 12.3122C11.4887 12.8696 10.6791 13.1606 9.85124 13.1211C9.02342 13.0817 8.24518 12.715 7.6877 12.1018C7.13021 11.4885 6.83915 10.679 6.87853 9.85114C6.91792 9.02332 7.28452 8.24504 7.8977 7.6875"
            stroke="#8A8A8A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.78082 5.35889C2.59572 6.97182 1.25 10 1.25 10C1.25 10 3.75 15.6244 10 15.6244C11.4644 15.6361 12.9105 15.2988 14.2186 14.6405"
            stroke="#8A8A8A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.2972 13.211C18.0005 11.6855 18.7496 10.0001 18.7496 10.0001C18.7496 10.0001 16.2496 4.37452 9.99959 4.37452C9.45828 4.37364 8.91782 4.41765 8.38379 4.5061"
            stroke="#8A8A8A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.5879 6.93018C11.2521 7.05772 11.857 7.39717 12.312 7.89762C12.7669 8.39808 13.0473 9.03254 13.1112 9.70586"
            stroke="#8A8A8A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </PasswordWrapper>
    </div>
  );
};

export const RememberDevice = () => {
    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="">
       <Checkbox bg="#ed500d" checked={isChecked} onChange={handleCheckboxChange}>
       Keep me <span className="text-primary">signed in</span> uncheck if using a public device
      </Checkbox>
    </div>
  );
};


