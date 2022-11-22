import { Box, Divider, Typography } from '@mui/material'
import { useCharSheet } from '../../../../stores/useCharSheet'
import { ClassFeatureCard } from './components/ClassFeatureCard'

export const ClassFeaturesSection: React.FC = () => {
  const { charClass } = useCharSheet()

  return (
    <Box mt={2}>
      <Typography
        variant="h6"
        style={{ fontSize: '1.125rem', fontWeight: 700 }}
      >
        Habilidades de Classe
      </Typography>

      <Divider />

      <Box mt={1} display="flex" flexDirection="column" gap={2}>
        {charClass?.features.map((feature) => (
          <ClassFeatureCard key={feature.title} feature={feature} />
        ))}
      </Box>
    </Box>
  )
}
