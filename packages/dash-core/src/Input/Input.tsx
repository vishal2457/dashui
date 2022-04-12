
import React from 'react'
import { InputVariantsProps, StyledInput } from './Input.styles'
import { StyledInputWrapper } from './InputWrapper.styles';
import type * as Stitches from '@stitches/react';
import { useId } from '@dash/utils';
import Label from '../Label/Label';
interface Props {
  size?: string;
  label?: string
  position?: "left"|"right"|"center"
  parentCSS?: Stitches.CSS
}

type NativeAttrs = Omit<React.InputHTMLAttributes<unknown>, keyof Props>;
type InputProps = NativeAttrs & InputVariantsProps & Props;


function Input(props: InputProps) {
  const {label, children, ...rest} = props;
  const inputID = useId(rest.id)

  return (
    <StyledInputWrapper position={rest.position} css={rest.parentCSS}  >
    {label ?  <Label htmlFor={inputID} label={label} required={props.required} /> : null }
    <StyledInput {...rest} id={inputID} /> 
    </StyledInputWrapper>
  )
}

export default Input