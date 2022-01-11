import React from 'react'

export type MatchParams = {
  id: string
}

export type selectType = {
  value: string
  name: string
}

export interface IMainTemplateProps extends ClassesAndChildren {
  onLogout?: () => void
}

export interface ClassesAndChildren {
  children?: React.ReactNode
  classes?: string
}

export interface IPickerProps extends IInputProps {
  data?: selectType[]
}

export interface IInputProps extends ClassesAndChildren {
  id?: string
  name?: string
  label?: string
  value?: string
  onChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | { value: unknown }
  >
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
}
