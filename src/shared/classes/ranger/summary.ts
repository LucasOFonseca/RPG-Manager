import {
  AbilityType,
  ArmorType,
  BenefitType,
  ClassSummary,
  ClassType,
  EnemyType,
  PlayerChoiceType,
  Skill,
  WeaponType,
} from '../../models'

export const ranger: ClassSummary = {
  type: ClassType.ranger,
  name: 'Patrulheiro',
  summary:
    'Longe do alvoroço das cidades e vilas, passando das divisas que abrigam as fazendas mais longínquas dos horrores do ermo, entre as árvores densas de florestas sem trilhas e através das vastas planícies vazias, os patrulheiros mantém sua vigília interminável.',
  initialHitPoints: 10,
  equipment: [
    'Brunea ou armadura de couro',
    'Duas espadas curtas ou duas armas simples corpo-a-corpo',
    'Um pacote de explorador ou um pacote de aventureiro',
    'Um arco longo e uma aljava com 20 flechas',
  ],
  features: [
    {
      title: 'Inimigo favorito',
      description: [
        'Você possui experiência significativa estudando, rastreando, caçando e, até mesmo, falando com certos tipos de inimigos. Escolha um tipo de inimigo favorito.',
        'Você receberá os seguintes benefícios sobre o tipo escolhido:',
      ],
      benefits: [
        {
          type: BenefitType.item,
          text: '+2 em jogadas de dano com ataques com armas',
        },
        {
          type: BenefitType.item,
          text: 'Vantagem em testes de Sobrevivência para rastrear seus inimigos favoritos',
        },
        {
          type: BenefitType.item,
          text: 'Vantagem em testes de Inteligência para lembrar informações sobre eles',
        },
        {
          type: BenefitType.item,
          text: 'Aprende um idioma adicional a sua escolha falado pelos seus inimigos, caso falem algum',
        },
      ],
      playerChoices: {
        enemyType: {
          type: PlayerChoiceType.enemyType,
          values: [
            EnemyType.beasts,
            EnemyType.fairies,
            EnemyType.humanoids,
            EnemyType.undead,
          ],
        },
        languages: {
          optional: true,
          type: PlayerChoiceType.languages,
        },
      },
    },
    {
      title: 'Explorador natural',
      description:
        'Você é um mestre na navegação pelo mundo natural e reage de forma rápida e decisiva ao ser atacado.Isso fornece a você os seguintes benefícios:',
      benefits: [
        {
          type: BenefitType.item,
          text: 'Terrenos difíceis são ignorados',
        },
        {
          type: BenefitType.item,
          text: 'Vantagem em rolagens de iniciativa',
        },
        {
          type: BenefitType.item,
          text: 'No seu primeiro turno de combate, você possui vantagem nas jogadas de ataque contra criaturas que ainda não tenham agido',
        },
        {
          type: BenefitType.description,
          text: 'Além disso, você é perito em navegar pelo ambiente selvagem, o que concede os seguintes benefícios após viajar por uma hora ou mais:',
        },
        {
          type: BenefitType.item,
          text: 'Terreno difícil não atrasa a viagem do grupo',
        },
        {
          type: BenefitType.item,
          text: 'Seu grupo não pode se perder (apenas por meios mágicos)',
        },
        {
          type: BenefitType.item,
          text: 'Você permanece sempre alerta',
        },
        {
          type: BenefitType.item,
          text: 'Caso esteja viajando sozinho poderá se mover furtivamente mantendo o ritmo de viagem normal',
        },
        {
          type: BenefitType.item,
          text: 'Ao forragear você encontra o dobro de comida que o normal',
        },
        {
          type: BenefitType.item,
          text: 'Enquanto rastreia uma criatura você descobre o número exato delas, seus tamanhos e há quanto tempo elas passaram pela área',
        },
      ],
    },
  ],
  proficiencies: {
    armors: [ArmorType.light, ArmorType.medium, ArmorType.shields],
    weapons: [WeaponType.simple, WeaponType.martial],
    savingThrows: [AbilityType.strength, AbilityType.dexterity],
  },
  playerChoices: {
    skills: {
      type: PlayerChoiceType.skills,
      quantity: 3,
      values: [
        Skill.animalHandling,
        Skill.athletics,
        Skill.insight,
        Skill.investigation,
        Skill.nature,
        Skill.perception,
        Skill.stealth,
        Skill.survival,
      ],
    },
  },
}
