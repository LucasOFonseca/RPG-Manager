import { ranger } from '../../shared/classes/ranger/summary'
import { rogue } from '../../shared/classes/rogue/summary'
import { ClassSummary } from '../../shared/models'

interface ClassSummaries {
  [key: string]: ClassSummary
}

export const makeClassSummaries = (): ClassSummaries => ({
  ranger,
  rogue,
})
