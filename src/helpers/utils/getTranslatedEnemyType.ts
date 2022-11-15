import { EnemyType } from '../../shared/models'

interface Translations {
  [key: string]: string
}

export const getTranslatedEnemyType = (enemyType: EnemyType) => {
  const translations: Translations = {
    [EnemyType.beasts]: 'Bestas',
    [EnemyType.fairies]: 'Fadas',
    [EnemyType.humanoids]: 'Humanoides',
    [EnemyType.undead]: 'Mortos-Vivos',
  }

  return translations[enemyType]
}
