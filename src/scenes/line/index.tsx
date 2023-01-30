import { Box } from '@mui/material'
import React from 'react'

import Header from '../../components/Header'
import LineCharts from '../../components/LineCharts'

const Line = () => {
  return (
    <Box m="20px">
      <Header title="BAR CHART" subTitle="Simple Bar Chart" />
      <Box height="75vh">
        <LineCharts />
      </Box>
    </Box>
  )
}

export default Line
