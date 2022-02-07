import React from 'react'
import { Control } from 'react-hook-form'

export type OptionsType = {
  label: string
  value: string
}

export type MatchParams = {
  id: string
}

export interface ClassesAndChildren {
  children?: React.ReactNode
  classes?: string
}

export interface HasURL extends ClassesAndChildren {
  url: string
}

export interface TextProps extends ClassesAndChildren {
  text?: string
}

export interface PickerProps extends InputProps {
  item?: OptionsType[]
}

export interface InputProps extends ClassesAndChildren {
  id?: string
  name: string
  value?: string
  label?: string
  control?: Control<any>
  autoComplete?: 'on' | 'off'
  placeholder?: string
  error?: boolean
  errorText?: string
  required?: boolean
  fullWidth?: boolean
  onChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | { value: unknown }
  >
}

export interface ListDetailProps<T> extends ClassesAndChildren {
  cell: { type?: string; column?: string; key: keyof T }[]
  items?: T[]
  item?: T
}
