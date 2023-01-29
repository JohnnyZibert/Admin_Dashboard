import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/Notifications'
import PersonModeOutlinedIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import SettingsModeOutlinedIcon from '@mui/icons-material/Settings'
import { Box, IconButton, InputBase, useTheme } from '@mui/material'
import { useContext } from 'react'
import React from 'react'

import { ColorModeContext, tokens } from '../../theme'

const TopBar = () => {
  const theme = useTheme()
  const color = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/*SEARCH BAR*/}
      <Box display="flex" bgcolor={color.primary['400']} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search"></InputBase>
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {/*ICONS*/}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsModeOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonModeOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default TopBar
