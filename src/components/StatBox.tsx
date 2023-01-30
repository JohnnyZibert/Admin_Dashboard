import { Box, Typography, useTheme } from '@mui/material'
import React, { FC, ReactNode } from 'react'

import { tokens } from '../theme'
import ProgressCircle from './ProgressCircle'

interface IProps {
  title: string
  subTitle: string
  icon: ReactNode
  progress: string
  increase: string
}

const StatBox: FC<IProps> = ({ title, subTitle, icon, progress, increase }) => {
  const theme = useTheme()
  const color = tokens(theme.palette.mode)
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: color.grey['100'] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" sx={{ color: color.greenAccent['500'] }}>
          {subTitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: color.greenAccent['600'] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  )
}

export default StatBox
