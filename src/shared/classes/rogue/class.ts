import { BenefitType, Class, ClassType } from '../../models'

export const rogue: Class = {
  name: 'Ladino',
  type: ClassType.rogue,
  hitDie: 8,
  features: [
    {
      title: 'Especialização',
      valuesToShow: {
        skill: {
          label: 'Perícias',
          values: [],
        },
      },
      benefits: [
        {
          type: BenefitType.item,
          text: 'O dobro de bônus de proficiência em qualquer teste de habilidade que fizer com elas.',
        },
      ],
    },
    {
      title: 'Ataque furtivo',
      benefits: [
        {
          type: BenefitType.item,
          text: 'Concede uma ver por turno 1d6 nas jogadas de dano contra qualquer criatura que acertar, desde que tenha vantagem nas jogadas de ataque (o ataque deve ser com uma arma de acuidade ou à distância)',
        },
        {
          type: BenefitType.item,
          text: 'Não é necessário ter vantagem nas jogadas de ataque se outro inimigo do seu alvo estiver a 1,5 metro de distância dele, desde que este inimigo não esteja incapacitado e você não possua desvantagem nas jogadas de ataque',
        },
      ],
    },
    {
      title: 'Gíria de ladrão',
      benefits: [
        {
          type: BenefitType.item,
          text: 'Você entende um conjunto de sinais secretos e símbolos usados para transmitir mensagens curtas e simples, como saber se uma área é perigosa ou se é território de uma guilda de ladrões',
        },
      ],
    },
  ],
}
