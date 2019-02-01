import * as React from 'react';
import styled from '@emotion/styled';

interface Props {
  label: string;
  onClick?: (event: any) => void;
}

const StyledButton = styled.button`
  display: inline-block;
  min-width: 230px;
  height: 60px;
  line-height: 1;
  padding: 17px 25px;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 30px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    opacity: 0.5;
  }
`;

const Button: React.SFC<Props> = ({ label, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
