import {
  BackgroundSummary,
  BackgroundType,
  PlayerChoiceType,
  Skill,
} from '../../shared/models'

interface ClassSummaries {
  [key: string]: BackgroundSummary
}

export const makeBackgroundSummaries = (): ClassSummaries => ({
  outlander: {
    type: BackgroundType.outlander,
    name: 'Forasteiro',
    summary:
      'Você cresceu em uma área selvagem, longe da civilização e dos confortos da cidade e tecnologia. Você testemunhou a migração de manadas maiores que florestas, sobreviveu à climas mais extremos que qualquer citadino poderia compreender e é apto da solidão de ser a única criatura pensante em quilômetros, em qualquer direção. O isolamento está no seu sangue, quer você seja um nômade, um explorador, um recluso, um forrageador ou mesmo um saqueador. Mesmo em lugares que você não conheça as características específicas do terreno, você vai conseguir se virar.',
    feature: {
      title: 'Andarilho',
      description:
        'Você tem uma memória excelente para mapas e geografia, e você sempre pode recobrar o plano geral de terrenos, assentamentos ou outras características ao seu redor. Além disso, você pode encontrar comida e água fresca para você e mais cinco outras pessoas a cada dia.',
    },
    equipment: [
      'Um bordão',
      'Uma armadilha de caça',
      'Um fetiche de um animal que você matou',
      'Um conjunto de roupas de viajante',
      'Uma algibeira contendo 10 po',
    ],
    proficiencies: {
      skills: [Skill.athletics, Skill.survival],
    },
    playerChoices: {
      tools: {
        type: PlayerChoiceType.tools,
        label: 'Instrumento musical',
      },
      languages: {
        type: PlayerChoiceType.languages,
      },
    },
  },
})
