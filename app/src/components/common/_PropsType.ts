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

export interface IInputProps {
  classes?: string
  value?: string
  type?: 'text' | 'number' | 'file' | 'password'
  placebolder?: string
  required?: boolean
  name?: string
}