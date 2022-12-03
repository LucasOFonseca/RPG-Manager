import { ranger } from '../../shared/classes/ranger/summary'
import { ClassSummary } from '../../shared/models'

interface ClassSummaries {
  [key: string]: ClassSummary
}

export const makeClassSummaries = (): ClassSummaries => ({
  ranger,
})
