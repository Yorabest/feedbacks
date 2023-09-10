import styled from 'styled-components'

export const Form = styled.form`
display: flex;
gap: 15px;
align-items: center;
margin: 5px;
`
export const Label = styled.label`
display: flex;
gap: 5px;
align-items: center;
`

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 25px;
  border-radius: 5px;
  border: none;
  background-color: ${p=>p.theme.colors.button};
  color:${p=>p.theme.colors.bgColor};
  font-size: 18px;

  &:hover{
    background-color: ${p=>p.theme.colors.accent};
  }
`