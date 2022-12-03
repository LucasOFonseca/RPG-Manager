import { Language, Race, Skill } from '../../shared/models'

interface Races {
  [key: string]: Race
}

export const makeRaces = (): Races => ({
  elf: {
    name: 'Elfo',
    baseMovement: 9,
    languages: [Language.common, Language.elvish],
    proficiencies: {
      skills: [Skill.perception],
    },
    traits: [
      {
        title: 'Visão no escuro',
        description:
          'Você pode enxergar na penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na penumbra. No escuro não é capaz de discernir cores, apenas tons de cinza.',
      },
      {
        title: 'Ancestral feérico',
        description:
          'Concede vantagem para resistir a feitiços e magias e não pode ser colocado para dormir.',
      },
    ],
    subRaces: {
      highElf: {
        name: 'Alto Elfo',
        proficiencies: {
          weapons: [
            'Espadas longas',
            'Espadas curtas',
            'Arcos longos',
            'Arcos curtos',
          ],
        },
      },
      woodElf: {
        name: 'Elfo da Floresta',
        baseMovement: 10.5,
        proficiencies: {
          weapons: [
            'Espadas longas',
            'Espadas curtas',
            'Arcos longos',
            'Arcos curtos',
          ],
        },
        traits: [
          {
            title: 'Máscara da natureza',
            description:
              'Pode tentar se esconder mesmo estando levemente obscurecido por folhagens, chuva forte, ou qualquer outro fenômeno natural.',
          },
        ],
      },
    },
  },
  human: {
    name: 'Humano',
    baseMovement: 9,
    languages: [Language.common],
  },
})
