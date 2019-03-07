import * as React from 'react';
import styled from '@emotion/styled';

interface Props {
  id: string;
  type?: string;
  name: string;
  label: string;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  onClick?: (event: any) => void;
  onChange?: (event: any) => void;
  onFocus?: (event: any) => void;
  onBlur?: (event: any) => void;
}

const Textfield: React.SFC<Props> = ({
  id,
  type,
  name,
  label,
  defaultValue,
  value,
  placeholder,
  required,
  onClick,
  onChange,
  onFocus,
  onBlur,
}) => {
  const Label = styled.label<{required?: boolean}>`
    font-weight: bold;
    &:after {
      display: ${props => props.required ? 'inline' : 'none'};
      content: "*";
      position: relative;
      top: 5px;
      margin-left: 5px;
      color: #500e5d;
      font-size: 150%;
      font-weight: normal;
    }
  `;

  const Input = styled.input`
    display: block;
    width: 100%;
    height: 42px;
    padding: 0 10px;
    background: #ffd4d4;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    color: #333;
    transition: all 0.2s ease;

    &:focus {
      box-shadow: 0 0 10px #dc3545;
    }
  `;

  return (
    <>
      <Label htmlFor={id} required={required}>{label}</Label>
      <Input
        id={id}
        type={type || 'text'}
        name={name}
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        onClick={onClick}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
      />
    </>
  );
};

export default Textfield;
