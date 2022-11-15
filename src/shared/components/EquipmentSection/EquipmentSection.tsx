import { Box, Typography } from '@mui/material'

interface EquipmentSectionProps {
  equipments: string[]
}

export const EquipmentSection: React.FC<EquipmentSectionProps> = ({
  equipments,
}) => {
  return (
    <Box mt={2}>
      <Typography
        variant="h6"
        style={{ fontSize: '1.125rem', fontWeight: 700 }}
      >
        Equipamento inicial:
      </Typography>

      <Box mt={1} display="flex" flexDirection="column" gap={1}>
        {equipments.map((equipment) => (
          <Typography key={equipment} style={{ fontWeight: 500 }}>
            {equipment}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}
