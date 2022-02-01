export type DetailMenuItem = {
  label: string
  slug: string
  click: () => void
}

export const SECTION_TYPE = {
  INDEX: 'INDEX',
  MENU: 'MENU',
  STYLIST: 'STYLIST',
  REVIEW: 'REVIEW'
} as const
