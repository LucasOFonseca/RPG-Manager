import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Paper,
  styled,
  Typography,
} from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import {
  calculateAbilityModifier,
  getAbilityEnhancements,
  getAllProficiencies,
  makeBackgroundSummaries,
  makeClasses,
  makeClassSummaries,
  makeRaces,
} from '../../../../helpers/utils'
import { Character, CharacterForm, RaceType } from '../../../../shared/models'
import { useCharSheet } from '../../../../stores/useCharSheet'
import { AbilitiesStep } from './components/AbilitiesStep'
import { BasicInfoStep } from './components/BasicInfoStep'

const DialogPaper = styled(Paper)(({ theme }) => ({
  width: 415,
  margin: '0 !important',
  borderRadius: 8,

  [theme.breakpoints.down(416)]: {
    width: '100%',
    height: '100%',
    maxHeight: 'unset',
    borderRadius: 0,
  },
}))

interface CreateCharacterDialogProps {
  open: boolean
}

export const CreateCharacterDialog: React.FC<CreateCharacterDialogProps> = ({
  open,
}) => {
  const { setCharacter, setRace, setClass } = useCharSheet()

  const [currentStep, setCurrentStep] = useState(0)

  const initialValues: CharacterForm = {
    name: '',
    abilities: {
      charisma: 0,
      constitution: 0,
      dexterity: 0,
      intelligence: 0,
      strength: 0,
      wisdom: 0,
    },
  }

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      let valuesToUse: Character = {
        basicInfo: {
          name: values.name,
          baseMovement: 0,
          languages: [],
        },
        abilities: values.abilities,
        armorClass: 0,
        currentExperience: 0,
        currentHitPoints: 0,
        level: 1,
        maxHitPoints: 0,
        proficiencies: {
          bonus: 2,
        },
      }

      const race = makeRaces()[values.race?.type ?? '']
      const subRace = race.subRaces
        ? race.subRaces[values.subRace?.type ?? '']
        : undefined
      const charClass = makeClasses()[values.class?.type ?? '']
      const classSummary = makeClassSummaries()[values.class?.type ?? '']
      const backgroundSummary =
        makeBackgroundSummaries()[values.background?.type ?? '']

      charClass.features = charClass.features.map((feature, index) => {
        const feat = feature
        const featPlayerChoices = values.class?.features?.[index].playerChoices

        if (featPlayerChoices) {
          delete featPlayerChoices.languages

          if (featPlayerChoices.enemyType && feat.valuesToShow) {
            feat.valuesToShow.enemy.values = featPlayerChoices.enemyType
          }
        }

        return feat
      })

      valuesToUse.basicInfo.baseMovement = subRace?.baseMovement
        ? subRace.baseMovement
        : race.baseMovement
      valuesToUse.basicInfo.languages = [
        ...race.languages,
        ...(values.background?.playerChoices?.languages ?? []),
        ...(values.class?.playerChoices?.languages ?? []),
        ...(values.class?.features.map(
          (feature) => feature.playerChoices?.languages
        ) ?? []),
        ...(values.subRace?.playerChoices?.languages ?? []),
      ]

      const enhancements = getAbilityEnhancements(
        values.race?.type ?? ('' as RaceType),
        values.subRace?.type
      )

      valuesToUse.abilities = {
        charisma: values.abilities.charisma + (enhancements.charisma ?? 0),
        constitution:
          values.abilities.constitution + (enhancements.constitution ?? 0),
        dexterity: values.abilities.dexterity + (enhancements.dexterity ?? 0),
        intelligence:
          values.abilities.intelligence + (enhancements.intelligence ?? 0),
        strength: values.abilities.strength + (enhancements.strength ?? 0),
        wisdom: values.abilities.wisdom + (enhancements.wisdom ?? 0),
      }

      const initialHitPoints =
        classSummary.initialHitPoints +
        calculateAbilityModifier(valuesToUse.abilities.constitution)

      valuesToUse.maxHitPoints = initialHitPoints
      valuesToUse.currentHitPoints = initialHitPoints

      valuesToUse.proficiencies = {
        ...valuesToUse.proficiencies,
        ...getAllProficiencies(
          race.proficiencies,
          subRace?.proficiencies,
          classSummary.proficiencies,
          backgroundSummary.proficiencies,
          {
            skills: [
              ...(values.background?.playerChoices?.skills ?? []),
              ...(values.class?.playerChoices?.skills ?? []),
              ...(values.subRace?.playerChoices?.skills ?? []),
            ],
            tools: [
              ...(values.background?.playerChoices?.tools ?? []),
              ...(values.class?.playerChoices?.tools ?? []),
              ...(values.subRace?.playerChoices?.tools ?? []),
            ],
          }
        ),
      }

      setCharacter(valuesToUse)
      setRace({
        type: values.race?.type ?? ('' as RaceType),
        name: subRace ? subRace.name : race.name,
        traits: subRace?.traits
          ? [...race.traits, ...subRace.traits]
          : race.traits,
      })
      setClass(charClass)
    },
  })

  const { values, handleSubmit } = formik

  return (
    <Dialog open={open} PaperComponent={DialogPaper}>
      <Box padding="24px 16px 0">
        <Typography
          variant="h6"
          style={{ fontWeight: 700, textAlign: 'center' }}
        >
          Criar personagem
        </Typography>

        <Typography
          variant="h6"
          style={{ fontSize: '1.125rem', fontWeight: 700, textAlign: 'center' }}
        >
          {currentStep === 0 && 'Informações básicas'}
          {currentStep === 1 && 'Habilidades'}
        </Typography>
      </Box>

      <DialogContent style={{ padding: '24px 16px 0' }}>
        {currentStep === 0 && <BasicInfoStep formik={formik} />}
        {currentStep === 1 && <AbilitiesStep formik={formik} />}
      </DialogContent>

      <DialogActions
        disableSpacing
        style={{ display: 'block', padding: '24px 16px' }}
      >
        {currentStep === 1 && (
          <Typography
            style={{
              fontSize: '.875rem',
              textAlign: 'center',
              marginBottom: 8,
            }}
          >
            (Os aprimoramentos raciais serão adicionados ao salvar)
          </Typography>
        )}
        <Button
          fullWidth
          disableElevation
          disabled={
            (currentStep === 0 &&
              (!values.name ||
                !values.race ||
                !values.class ||
                !values.background)) ||
            (currentStep === 1 &&
              (!values.abilities.charisma ||
                !values.abilities.constitution ||
                !values.abilities.dexterity ||
                !values.abilities.intelligence ||
                !values.abilities.strength ||
                !values.abilities.wisdom))
          }
          variant="contained"
          onClick={() => {
            if (currentStep < 1) {
              setCurrentStep(currentStep + 1)
            } else {
              handleSubmit()
            }
          }}
        >
          {currentStep === 0 ? 'próximo' : 'salvar'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
