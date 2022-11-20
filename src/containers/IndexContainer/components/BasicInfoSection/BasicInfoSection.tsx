import { Box, Divider, Typography } from '@mui/material';
import { getTranslatedLanguage } from '../../../../helpers/utils';
import { useCharSheet } from '../../../../stores/useCharSheet';

export const BasicInfoSection: React.FC = () => {
  const { character } = useCharSheet()

  return (
    <Box mt={2}>
      <Typography
        variant="h6"
        style={{ fontSize: '1.125rem', fontWeight: 700 }}
      >
        Informações Básicas
      </Typography>
      
      <Divider />

      <Box mt={1}>
        <Typography>
          <strong>Deslocamento base:</strong>{' '}
          {character?.basicInfo.baseMovement} metros
        </Typography>

        <Typography style={{ marginTop: 8 }}>
          <strong>Idiomas:</strong>{' '}
          {character?.basicInfo.languages
            .map((language) => getTranslatedLanguage(language))
            .join(' - ')}
        </Typography>
      </Box>
    </Box>
  )
}
