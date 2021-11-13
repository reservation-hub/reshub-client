import React from 'react'

export interface IButtonProps {
  children?: React.ReactNode
  classes?: string
  disabled?: boolean
  onClick?: () => void
}

export interface ISearchBarProps {
  search?: () => void
  searchFromArea?: () => void
  searchFromStation?: () => void
  searchFromRanking?: () => void
  searchFromDays?: () => void
}

export interface ISearchButtonProps {
  onClick?: () => void
  children?: React.ReactNode
  icon?: boolean
  text?: string
}

export interface IInputProps {
  classes?: string
  value?: string
  type?: 'text' | 'number' | 'file' | 'password'
  placebolder?: string
  required?: boolean
  name?: string
  error?: boolean
  errorText?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  autoComplete?: 'on' | 'off'
  id?: string
  fullWidth?: boolean
}

export interface IErrorMessageProps {
  classes?: string
  errorMessage?: string
}

export interface ICardProps {
  
}