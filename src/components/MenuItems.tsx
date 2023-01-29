import { Typography, useTheme } from '@mui/material'
import React, { FC, ReactNode } from 'react'
import { MenuItem } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'

import { tokens } from '../theme'

interface IProps {
  title: string
  icon: ReactNode
  to: string
  selected: string
  setSelected: (title: string) => void
}

export const Item: FC<IProps> = ({
  title,
  icon,
  to,
  selected,
  setSelected,
}) => {
  const theme = useTheme()
  const color = tokens(theme.palette.mode)
  return (
    <MenuItem
      active={selected === title}
      style={{ color: color.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}
