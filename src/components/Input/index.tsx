import React from 'react'
import { Controller } from 'react-hook-form';
import { IInput } from './types';

import {InputContainer, InputText, IconContainer, ErrorText } from './styles';

export const Input = ({leftIcon, name, control, errorMessage, ...rest}: IInput) => {
  return (
    <>
      <InputContainer>
          {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
          <Controller 
            name = {name}
            control = {control}
            rules = {{required: true}}
            render = {({ field }) => <InputText {...field}{...rest}/>}
          />  
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}
