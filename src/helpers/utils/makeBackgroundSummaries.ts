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
  criminal: {
    type: BackgroundType.criminal,
    name: 'Criminoso',
    summary:
      'Você é um criminoso experiênte com um histórico de contravenções. Você gastou um bom tempo entre outros criminosos e ainda mantém contato com eles e com o submundo do crime. Você está mais perto do que a maioria do submundo do assassinato, roubo e violência que prevalece no ventre da sociedade, e você sobreviveu até esse ponto desprezando a lei e os regulamentos da sociedade.',
    feature: {
      title: 'Contato criminal',
      description:
        'Você possui contatos de confiança que agem como seus informantes em uma rede criminosa. Você sabe como se comunicar com eles mesmo em grandes distâncias. Você conhece em especial os mensageiros locais, mestres de caravana corruptos, e marinheiros escusos que podem transmitir seus recados.',
    },
    equipment: [
      'Um pé de cabra',
      'Um conjunto de roupas escuras comuns com capuz',
      'Uma algibeira contendo 15 po',
    ],
    proficiencies: {
      skills: [Skill.deception, Skill.stealth],
      tools: ['Kit de jogo', 'Ferramentas de ladrão'],
    },
  },
})
