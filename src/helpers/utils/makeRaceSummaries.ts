import {
  AbilityType,
  Language,
  PlayerChoiceType,
  RaceSummary,
  RaceType,
} from '../../shared/models'

interface RaceSummaries {
  [key: string]: RaceSummary
}

export const makeRaceSummaries = (): RaceSummaries => ({
  elf: {
    type: RaceType.elf,
    name: 'Elfo',
    summary:
      'Elfos são um povo mágico de graça sobrenatural, vivendo no mundo sem pertencer diretamente à ele. Eles vivem em lugares de beleza etérea, no meio de antigas florestas ou em torres prateadas brilhando com luz feérica, onde uma música suave ecoa através do ar e fragrâncias suaves flutuam na brisa. Elfos amam a natureza e a magia, a arte e o estudo, a música e a poesia, e as coisas boas do mundo.',
    racialTraits: {
      physicalDescription:
        'De graça sobrenatural e traços finos, os elfos parecem assustadoramente belos para os humanos. Sua altura varia entre 1,50 metro até 1,80 metro pesando entre 50kg e 72kg.',
      ageDescription:
        'Atingem a maturidade física praticamente na mesma idade que os humanos, mas são considerados adultos apenas após os 100 anos podendo viver até 750 anos.',
      languages: [Language.common, Language.elvish],
      baseMovement: 9,
      abilityEnhancements: [
        {
          ability: AbilityType.dexterity,
          value: 2,
        },
      ],
      otherTraits: [
        {
          title: 'Visão no escuro',
          description:
            'Você pode enxergar na penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na penumbra. No escuro não é capaz de discernir cores, apenas tons de cinza.',
        },
        {
          title: 'Sentidos aguçados',
          description: 'Concede proficiência em Percepção.',
        },
        {
          title: 'Ancestral feérico',
          description:
            'Concede vantagem para resistir a feitiços e magias e não pode ser colocado para dormir.',
        },
        {
          title: 'Transe',
          description:
            'Elfos não precisam dormir. Ao invés disso meditam profundamente, permanecendo semiconscientes, durante 4 horas por dia. Esse descanso equivale a 8 horas de sono para os humanos.',
        },
      ],
    },
    subRaces: [
      {
        type: 'highElf',
        name: 'Alto Elfo',
        traits: [
          {
            title: 'Treinamento élfico com armas',
            description:
              'Concede proficiência com espadas longas, espadas curtas, arcos longos e arcos curtos.',
          },
          {
            title: 'Truque',
            description:
              'Você conhece um truque, à sua escolha, da lista de truques do mago. Use inteligência para conjurar esse truque.',
          },
          {
            title: 'Idioma adicional',
            description:
              'Concede fluência em um idioma adicional à sua escolha.',
          },
        ],
        abilityEnhancements: [
          {
            ability: AbilityType.intelligence,
            value: 1,
          },
        ],
        playerChoices: {
          cantrips: {
            type: PlayerChoiceType.cantrips,
          },
          languages: {
            type: PlayerChoiceType.languages,
            values: [
              Language.draconic,
              Language.dwarvish,
              Language.giant,
              Language.gnomish,
              Language.goblin,
              Language.halfling,
              Language.infernal,
              Language.orc,
            ],
          },
        },
      },
      {
        type: 'woodElf',
        name: 'Elfo da Floresta',
        traits: [
          {
            title: 'Treinamento élfico com armas',
            description:
              'Concede proficiência com espadas longas, espadas curtas, arcos longos e arcos curtos.',
          },
          {
            title: 'Pés ligeiros',
            description: 'Deslocamento base aumenta para 10,5 metros.',
          },
          {
            title: 'Máscara da natureza',
            description:
              'Pode tentar se esconder mesmo estando levemente obscurecido por folhagens, chuva forte, ou qualquer outro fenômeno natural.',
          },
        ],
        abilityEnhancements: [
          {
            ability: AbilityType.wisdom,
            value: 1,
          },
        ],
      },
    ],
  },
  human: {
    type: RaceType.human,
    name: 'Humano',
    summary:
      'Nos confins da maioria dos mundos, os humanos são a mais jovem das raças comuns, se comparados aos anões, elfos e dragões. Talvez seja por causa de suas vidas mais curtas que eles se esforçam para alcançar o máximo que podem nos anos que têm.',
    racialTraits: {
      physicalDescription:
        'Não há um humano típico. Um indivíduo pode ter entre 1,65 metro a 1,90 metro de altura e pesar entre 62,5 kg e 125 kg.',
      ageDescription:
        'Atingem a idade adulta no fim da adolescência e vivem menos de um século.',
      languages: [Language.common],
      baseMovement: 9,
      abilityEnhancements: [
        { ability: AbilityType.charisma, value: 1 },
        { ability: AbilityType.constitution, value: 1 },
        { ability: AbilityType.dexterity, value: 1 },
        { ability: AbilityType.intelligence, value: 1 },
        { ability: AbilityType.strength, value: 1 },
        { ability: AbilityType.wisdom, value: 1 },
      ],
    },
    playerChoices: {
      languages: {
        type: PlayerChoiceType.languages,
        values: [
          Language.draconic,
          Language.dwarvish,
          Language.elvish,
          Language.giant,
          Language.gnomish,
          Language.goblin,
          Language.halfling,
          Language.infernal,
          Language.orc,
        ],
      },
    },
  },
})
