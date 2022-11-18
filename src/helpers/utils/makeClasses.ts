import { BenefitType, Class } from '../../shared/models'

interface Classes {
  [key: string]: Class
}

export const makeClasses = (): Classes => ({
  ranger: {
    name: 'Patrulheiro',
    hitDie: 10,
    spellcasting: true,
    features: [
      {
        title: 'Inimigo favorito',
        valuesToShow: {
          enemy: {
            label: 'Tipo de inimigo',
            values: [],
          },
        },
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
        ],
      },
      {
        title: 'Explorador natural',
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
            text: 'Após viajar por uma hora ou mais:',
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
  },
})
