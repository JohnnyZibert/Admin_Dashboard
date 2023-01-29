import { Box, Typography, useTheme } from '@mui/material'
import React, { FC } from 'react'

import { tokens } from '../theme'

interface IProps {
  title: string
  subTitle: string
}

const Header: FC<IProps> = ({ title, subTitle }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box mb={'30px'}>
      <Typography
        variant="h3"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: '5px' }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent['400']}>
        {subTitle}
      </Typography>
    </Box>
  )
}

export default Header
