import { ranger } from '../../shared/classes/ranger/class'
import { rogue } from '../../shared/classes/rogue/class'
import { Class } from '../../shared/models'

interface Classes {
  [key: string]: Class
}

export const makeClasses = (): Classes => ({
  ranger,
  rogue,
})
