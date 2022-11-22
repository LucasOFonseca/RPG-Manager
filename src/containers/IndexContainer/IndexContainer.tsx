import { Box, Divider, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useCharSheet } from '../../stores/useCharSheet'
import { AbilitiesSection } from './components/AbilitiesSection'
import { ArmorClassIndicator } from './components/ArmorClassIndicator'
import { BasicInfoSection } from './components/BasicInfoSection'
import { ClassFeaturesSection } from './components/ClassFeaturesSection'
import { CreateCharacterDialog } from './components/CreateCharacterDialog'
import { HitPointsBar } from './components/HitPointsBar'
import { LevelProgressBar } from './components/LevelProgressBar'
import { ProficienciesSection } from './components/ProficienciesSection'
import { RacialTraitsSection } from './components/RacialTraitsSection'

const Index: NextPage = () => {
  const { character, charClass, race } = useCharSheet()

  const [showCharSheet, setShowCharSheet] = useState(false)

  useEffect(() => {
    if (character && charClass && race) {
      setShowCharSheet(true)
    }
  }, [character, charClass, race])

  return (
    <>
      <CreateCharacterDialog open={!character} />

      {showCharSheet && character && charClass && race ? (
        <Box display="flex" justifyContent="center">
          <Box width="100%" maxWidth={600}>
            <Box mb={1}>
              <Typography variant="h6" style={{ fontWeight: 700 }}>
                {character.basicInfo.name}
              </Typography>

              <Typography style={{ fontSize: '.875rem' }}>
                {race.name} - {charClass.name}
              </Typography>
            </Box>

            <Divider />

            <LevelProgressBar />

            <Box
              mt={1}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <HitPointsBar />

              <ArmorClassIndicator />
            </Box>

            <AbilitiesSection />

            <BasicInfoSection />

            <RacialTraitsSection />

            <ProficienciesSection />

            <ClassFeaturesSection />
          </Box>
        </Box>
      ) : null}
    </>
  )
}

export default Index
