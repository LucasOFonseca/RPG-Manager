import { Box, Typography } from '@mui/material'
import React from 'react'
import { PlayerChoicesForm } from '../../../../../../../../../../shared/components/PlayerChoicesForm'
import {
  BenefitType,
  ClassFeatureSummary,
  PlayerChoices,
} from '../../../../../../../../../../shared/models'

interface ClassFeatureProps {
  feature: ClassFeatureSummary
  playerChoices?: PlayerChoices
  handleChangeIsValidSubmit: (isValid: boolean) => void
  handleChangePlayerChoices: (value: PlayerChoices) => void
}

export const ClassFeature: React.FC<ClassFeatureProps> = ({
  feature,
  playerChoices,
  handleChangeIsValidSubmit,
  handleChangePlayerChoices,
}) => {
  return (
    <Box marginY={2}>
      <Typography
        variant="h6"
        style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: 8 }}
      >
        {feature.title}
      </Typography>

      {typeof feature.description === 'string' ? (
        <Typography>{feature.description}</Typography>
      ) : (
        <>
          {feature.description.map((paragraph, index) => (
            <Typography key={index}>{paragraph}</Typography>
          ))}
        </>
      )}

      <Box mt={1} display="flex" flexDirection="column" gap={1}>
        {feature.benefits.map((benefit, index) => (
          <React.Fragment key={index}>
            {benefit.type === BenefitType.description ? (
              <Typography style={{ marginTop: 8 }}>{benefit.text}</Typography>
            ) : (
              <Typography style={{ fontWeight: 500 }}>
                {benefit.text}
              </Typography>
            )}
          </React.Fragment>
        ))}
      </Box>

      {feature.playerChoices && (
        <Box mt={2} display="flex" flexDirection="column" gap={2}>
          <PlayerChoicesForm
            playerChoices={playerChoices}
            fields={feature.playerChoices}
            handleChangeIsValidSubmit={handleChangeIsValidSubmit}
            handleChangePlayerChoices={handleChangePlayerChoices}
          />
        </Box>
      )}
    </Box>
  )
}
