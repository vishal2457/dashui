import { StyledInput } from './Input.styles'
import { StyledInputWrapper } from './InputWrapper.styles';
import {useId} from "@dash/utils"
import Label from '../Label/Label';

export const Input = (props: any) => {
  const {label, children, ...rest} = props;
  const inputID = useId(rest.id);

  return (
    <StyledInputWrapper>
    {label ?  <Label htmlFor={inputID} label={label} required={props.required} /> : null }
    <StyledInput {...rest} id={inputID} /> 
    </StyledInputWrapper>
  )
}

