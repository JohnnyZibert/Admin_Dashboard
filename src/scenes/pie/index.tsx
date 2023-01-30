import { Box } from '@mui/material'
import React from 'react'

import PieCharts from '../../components/BarChart'
import Header from '../../components/Header'

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="BAR CHART" subTitle="Simple Bar Chart" />
      <Box height="75vh">
        <PieCharts />
      </Box>
    </Box>
  )
}

export default Pie
