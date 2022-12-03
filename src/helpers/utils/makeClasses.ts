import { ranger } from '../../shared/classes/ranger/class'
import { Class } from '../../shared/models'

interface Classes {
  [key: string]: Class
}

export const makeClasses = (): Classes => ({
  ranger,
})
