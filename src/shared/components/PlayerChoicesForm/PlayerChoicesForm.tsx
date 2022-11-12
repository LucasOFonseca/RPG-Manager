import { useState } from 'react'
import { PlayerChoices, PlayerChoicesFormProps as Fields } from '../../models'
import { CantripsInput } from '../CantripsInput'
import { LanguagesSelector } from '../LanguagesSelector'

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
  const [fieldValidations, setFieldValidations] = useState(
    fieldsArray.map(() => false)
  )

  const inputs: { [key: string]: React.FC<any> } = {
    languages: LanguagesSelector,
    cantrips: CantripsInput,
  }

  const handleValidate = (isValid: boolean, index: number) => {
    const newValidationsArray = fieldValidations
    newValidationsArray[index] = isValid

    if (newValidationsArray.some((value) => !value)) {
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

  return (
    <>
      {fieldsArray.map((field, index) => {
        const Input = inputs[field.type]

        if (Input) {
          return (
            <Input
              key={field.type}
              initialValues={playerChoices?.[field.type as string]}
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
