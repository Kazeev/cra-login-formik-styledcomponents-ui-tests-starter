import styled from 'styled-components';


// Forms, inputs, buttons
export const MainTheme = styled.form`
  width: 300px;
  display: flex;
  margin-left: auto;
  margin-right: auto; 
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: #e60028;
  border: none;
  color: #fff;
`;

// Text

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  text-align: center;
  color: #4d4d4d;
  font-size: 2.2em;
`;


export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#4d4d4d'}
`;