import styled from 'styled-components'

export const LoginAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f9f9f9')};
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 450px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
`

export const LoginWebsiteLogo = styled.img`
  width: 180px;
  margin-bottom: 35px;
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 25px;
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#475569')};
`

export const UserInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  padding: 8px 16px;
  margin-top: 5px;
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#475569')};
  background-color: transparent;
  outline: none;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 15px;
`

export const CheckboxInput = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 8px;
`

export const CheckboxLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
`

export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  margin-top: 30px;
  cursor: pointer;
  outline: none;
`

export const ErrorMessage = styled.p`
  align-self: flex-start;
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0000;
  margin-top: 8px;
`
