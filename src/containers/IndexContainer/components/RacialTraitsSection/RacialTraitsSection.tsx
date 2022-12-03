import { Box, Divider, Typography } from '@mui/material'
import { useCharSheet } from '../../../../stores/useCharSheet'

export const RacialTraitsSection: React.FC = () => {
  const { race } = useCharSheet()

  return (
    <>
      {race?.traits && (
        <Box mt={2}>
          <Typography
            variant="h6"
            style={{ fontSize: '1.125rem', fontWeight: 700 }}
          >
            Traços Raciais
          </Typography>

          <Divider />

          <Box mt={1} display="flex" flexDirection="column" gap={1}>
            {race?.traits.map((trait) => (
              <Typography key={trait.title}>
                <strong>{trait.title}:</strong> {trait.description}
              </Typography>
            ))}
          </Box>
        </Box>
      )}
    </>
  )
}
