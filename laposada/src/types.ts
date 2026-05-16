import type { IconType } from 'react-icons'

export interface TitleProps {
  subtitle: string
  title: string
}

export interface WelcomeCard {
  src: string
  alt: string
  caption: string
}

export type DishCategory = 'Aperitivos' | 'Platos Principales' | 'Postres'
export type GastronomyFilter = 'Todos' | DishCategory

export interface Dish {
  src: string
  text: string
  category: DishCategory
}

export interface MenuSection {
  heading: string
  content: string
}

export interface MenuItem {
  name: string
  price: number
  note?: string
  sections: MenuSection[]
  recommended?: boolean
}

export interface ContactEntry {
  Icon: IconType
  iconClass: string
  lines: string[]
  href?: string
  ariaLabel?: string
}

export interface SocialLink {
  href: string
  ariaLabel: string
  Icon: IconType
  hoverClass: string
}
