import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { BenefitType, ClassFeature } from '../../../../../../shared/models'

interface ClassFeatureCardProps {
  feature: ClassFeature
}

export const ClassFeatureCard: React.FC<ClassFeatureCardProps> = ({
  feature,
}) => {
  const valuesToShow = Object.values(feature.valuesToShow ?? {})

  return (
    <Card variant="outlined" style={{ padding: 16, borderRadius: 8 }}>
      <Typography
        variant="h6"
        style={{ fontSize: '1.125rem', fontWeight: 700 }}
      >
        {feature.title}
      </Typography>

      {valuesToShow &&
        valuesToShow.map((value) => (
          <Typography key={value.label}>
            <strong>{value.label}:</strong> {value.values.join(' - ')}
          </Typography>
        ))}

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
    </Card>
  )
}
