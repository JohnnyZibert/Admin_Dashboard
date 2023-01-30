import { Box, useTheme } from '@mui/material'
import React from 'react'

import GeographyCharts from '../../components/GeographyCharts'
import Header from '../../components/Header'
import { tokens } from '../../theme'

const Geography = () => {
  const theme = useTheme()
  const color = tokens(theme.palette.mode)
  return (
    <Box m="20px">
      <Header title="BAR CHART" subTitle="Simple Bar Chart" />
      <Box
        height="75vh"
        border={`1px solid ${color.grey['100']}`}
        borderRadius="4px"
      >
        <GeographyCharts />
      </Box>
    </Box>
  )
}

export default Geography
