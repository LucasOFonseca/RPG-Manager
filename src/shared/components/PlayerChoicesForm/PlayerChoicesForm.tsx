import { useEffect, useState } from 'react'
import { PlayerChoices, PlayerChoicesFormProps as Fields } from '../../models'
import { CantripsInput } from '../CantripsInput'
import { EnemyTypesSelector } from '../EnemyTypesSelector'
import { LanguagesSelector } from '../LanguagesSelector'
import { SkillsSelector } from '../SkillsSelector'

interface PlayerChoicesFormProps {
  fields: Fields
  playerChoices?: PlayerChoices
  handleChangePlayerChoices: (value: PlayerChoices) => void
  handleChangeIsValidSubmit: (isValid: boolean) => void
}

export const PlayerChoicesForm: React.FC<PlayerChoicesFormProps> = ({
  fields,
  playerChoices,
  handleChangePlayerChoices,
  handleChangeIsValidSubmit,
}) => {
  const fieldsArray = Object.values(fields)

  const [choices, setChoices] = useState<{ [key: string]: any[] }>(
    playerChoices ?? {}
  )
  const [fieldValidations, setFieldValidations] = useState<
    Array<{ required: boolean; isValid: boolean }>
  >(
    fieldsArray.map((f) => ({
      required: !f.optional,
      isValid: false,
    }))
  )

  const inputs: { [key: string]: React.FC<any> } = {
    languages: LanguagesSelector,
    cantrips: CantripsInput,
    enemyType: EnemyTypesSelector,
    skills: SkillsSelector,
  }

  const handleValidate = (isValid: boolean, index: number) => {
    const newValidationsArray = fieldValidations
    newValidationsArray[index].isValid = isValid

    if (newValidationsArray.some((value) => !value.isValid && value.required)) {
      handleChangeIsValidSubmit(false)
    } else {
      handleChangeIsValidSubmit(true)
    }

    setFieldValidations(newValidationsArray)
  }

  const handleChange = (values: any[], type: string) => {
    const newChoices = choices
    newChoices[type] = values
    setChoices(newChoices)

    handleChangePlayerChoices(choices)
  }

  useEffect(() => {
    if (fieldValidations.some((value) => !value.isValid && value.required)) {
      handleChangeIsValidSubmit(false)
    } else {
      handleChangeIsValidSubmit(true)
    }
  })

  return (
    <>
      {fieldsArray.map((field, index) => {
        const Input = inputs[field.type]

        if (Input) {
          return (
            <Input
              key={field.type}
              initialValues={playerChoices?.[field.type as string]}
              quantity={field.quantity}
              values={field.values}
              onChange={(values: any[]) => handleChange(values, field.type)}
              handleValidate={(isValid: boolean) =>
                handleValidate(isValid, index)
              }
            />
          )
        }

        return null
      })}
    </>
  )
}
