import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  Divider,
  Typography,
} from '@mui/material'
import { useFormik } from 'formik'
import { useCharSheet } from '../../../../../stores/useCharSheet'
import { useSpells } from '../../../../../stores/useSpells'
import { AddSpellsForm } from '../../../../components/AddSpellsForm'
import { BenefitType } from '../../../../models'
import { ItemCard } from './components/ItemCard'

export const RangerLevelTwo: React.FC = () => {
  const { setClass, charClass, setCharacter, character, resetOnLevelUp } =
    useCharSheet()
  const { addSpells } = useSpells()

  const initialValues = {
    fightingStyle: '',
    spells: [
      {
        name: '',
        level: 1,
      },
      {
        name: '',
        level: 1,
      },
    ],
  }

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      if (!charClass || !character) {
        return
      }

      if (values.fightingStyle === 'archery') {
        setClass({
          ...charClass,
          features: [
            ...charClass.features,
            {
              title: 'Arquearia',
              benefits: [
                {
                  type: BenefitType.item,
                  text: '+2 em jogadas de ataque usando uma arma de ataque a distância',
                },
              ],
            },
          ],
        })
      } else if (values.fightingStyle === 'twoWeaponFighting') {
        setClass({
          ...charClass,
          features: [
            ...charClass.features,
            {
              title: 'Combate com duas armas',
              benefits: [
                {
                  type: BenefitType.item,
                  text: 'Quando estiver engajado em uma luta com duas armas, você pode adicionar o seu modificador de habilidade na jogada de dano do seu segundo ataque',
                },
              ],
            },
          ],
        })
      } else if (values.fightingStyle === 'defense') {
        setCharacter({ ...character, acBonusWithArmor: 1 })
      } else if (values.fightingStyle === 'dueling') {
        setClass({
          ...charClass,
          features: [
            ...charClass.features,
            {
              title: 'Duelismo',
              benefits: [
                {
                  type: BenefitType.item,
                  text: '+2 nas jogas de dano se estiver empunhando uma arma de ataque corpo-a-corpo de uma mão e nenhuma outra arma',
                },
              ],
            },
          ],
        })
      }

      addSpells(values.spells)
      resetOnLevelUp()
      localStorage.removeItem('currentStep')
    },
  })

  const { values, setFieldValue, handleSubmit } = formik

  return (
    <>
      <DialogContent style={{ padding: 16 }}>
        <Typography>
          A partir de agora você adota um estilo de combate particular que será
          sua especialidade. Escolha uma das opções a baixo:
        </Typography>

        <Box marginY={3} display="flex" flexDirection="column" gap={2}>
          <ItemCard
            selected={values.fightingStyle === 'archery'}
            title="Arquearia"
            description="Você ganha +2 de bonus nas jogadas de ataque usando uma arma de ataque a distância"
            onClick={() => setFieldValue('fightingStyle', 'archery')}
          />

          <ItemCard
            selected={values.fightingStyle === 'twoWeaponFighting'}
            title="Combate com duas armas"
            description="Quando estiver engajado em uma luta com duas armas, você pode adicionar o seu modificador de habilidade na jogada de dano do seu segundo ataque"
            onClick={() => setFieldValue('fightingStyle', 'twoWeaponFighting')}
          />

          <ItemCard
            selected={values.fightingStyle === 'defense'}
            title="Defesa"
            description="Enquanto estiver usando armadura você ganha +1 de bônus de CA"
            onClick={() => setFieldValue('fightingStyle', 'defense')}
          />

          <ItemCard
            selected={values.fightingStyle === 'dueling'}
            title="Duelismo"
            description="Enquanto empunha uma arma de ataque corpo-a-corpo de uma mão e nenhuma outra arma, você ganha +2 de bônus nas jogadas de dano com essa arma"
            onClick={() => setFieldValue('fightingStyle', 'dueling')}
          />
        </Box>

        <Divider />

        <Box mt={3}>
          <AddSpellsForm
            values={values.spells}
            onChange={(value, index) =>
              setFieldValue(`spells[${index}]`, value)
            }
          />
        </Box>
      </DialogContent>

      <DialogActions style={{ padding: '8px 16px 24px' }}>
        <Button
          fullWidth
          disableElevation
          disabled={
            !values.fightingStyle || values.spells.some((spell) => !spell.name)
          }
          variant="contained"
          onClick={() => handleSubmit()}
        >
          salvar
        </Button>
      </DialogActions>
    </>
  )
}
