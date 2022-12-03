import {
  AbilityType,
  ArmorType,
  BenefitType,
  ClassSummary,
  ClassType,
  PlayerChoiceType,
  Skill,
  WeaponType,
} from '../../models'

export const rogue: ClassSummary = {
  type: ClassType.rogue,
  name: 'Ladino',
  summary:
    'Ldinos contam com sua perícia, furtividade e as vulnerabilidades de seus inimigos para obter vantagem em qualquer situação. Eles possuem uma habilidade especial para encontrar a solução para praticamente qualquer problema, demonstrando desenvoltura e versatilidade, a chave de qualquer grupo aventureiro de sucesso.',
  initialHitPoints: 8,
  equipment: [
    'Uma rapieira ou uma espada longa',
    'Um arco curto e uma aljava com 20 flechas ou uma espada curta',
    'Um pacote de assaltante ou um pacote de aventureiro ou um pacote de explorador',
    'Armadura de couro, duas adagas e ferramentas de ladrão',
  ],
  features: [
    {
      title: 'Especialização',
      description:
        'Escolha entre duas perícias que seja proficiente para receber o seguinte benefício:',
      benefits: [
        {
          type: BenefitType.item,
          text: 'O dobro de bônus de proficiência em qualquer teste de habilidade que fizer com elas.',
        },
      ],
      playerChoices: {
        skills: {
          type: PlayerChoiceType.skills,
          quantity: 2,
          values: [
            Skill.acrobatics,
            Skill.athletics,
            Skill.performance,
            Skill.deception,
            Skill.stealth,
            Skill.intimidation,
            Skill.insight,
            Skill.investigation,
            Skill.perception,
            Skill.persuasion,
            Skill.sleightOfHand,
          ],
        },
      },
    },
    {
      title: 'Ataque furtivo',
      description:
        'Você sabe como atacar sutilmente e explorar a distração de seus inimigos.',
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
      description:
        'Durante seu treinamento você aprendeu as gírias de ladrão, um misto de dialeto, jargão e códigos secretos que permitem você passar mensagens secretas durante uma conversa aparentemente normal. Somente outra criatura que conheça essas gírias de ladrão entende as mensagens.',
      benefits: [
        {
          type: BenefitType.item,
          text: 'Você entende um conjunto de sinais secretos e símbolos usados para transmitir mensagens curtas e simples, como saber se uma área é perigosa ou se é território de uma guilda de ladrões',
        },
      ],
    },
  ],
  proficiencies: {
    armors: [ArmorType.light],
    weapons: [
      WeaponType.simple,
      'bestas de mão',
      'espadas longas',
      'rapieiras',
      'espadas curtas',
    ],
    tools: ['Ferramentas de ladrão'],
    savingThrows: [AbilityType.dexterity, AbilityType.intelligence],
  },
  playerChoices: {
    skills: {
      type: PlayerChoiceType.skills,
      quantity: 4,
      values: [
        Skill.acrobatics,
        Skill.athletics,
        Skill.performance,
        Skill.deception,
        Skill.stealth,
        Skill.intimidation,
        Skill.insight,
        Skill.investigation,
        Skill.perception,
        Skill.persuasion,
        Skill.sleightOfHand,
      ],
    },
  },
}
