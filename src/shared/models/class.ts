export enum BenefitType {
  item = 'item',
  description = 'description',
}

export interface Benefit {
  type: BenefitType
  text: string
}

export interface ClassFeatureValueToShow {
  label: string
  values: any[]
}

export interface ClassFeature {
  title: string
  valuesToShow?: { [key: string]: ClassFeatureValueToShow }
  benefits: Benefit[]
}

export interface Class {
  name: string
  spellcasting?: boolean
  hitDie: number
  features: ClassFeature[]
}
