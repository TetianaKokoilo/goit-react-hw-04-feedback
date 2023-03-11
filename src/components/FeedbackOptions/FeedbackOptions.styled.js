import styled from 'styled-components';

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  
`;
export const StyledButton = styled.button`
background: linear-gradient(321.69deg, #ff6a64 0%, #ffb199 100%);
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-radius: 30px;
  border: none;
  color: #ffffff;
  width: 100px;
  height: 40px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: rgba(255, 106, 100, 0.1);
    color: #333333;
    transition: 1.4s;
  }
`;
