import 'react-pro-sidebar/dist/css/styles.css'

import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import CalendarOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Menu, MenuItem, ProSidebar } from 'react-pro-sidebar'

import photoUser from '../../assets/img/user.png'
import { Item } from '../../components/MenuItems'
import { tokens } from '../../theme'

const Sidebar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setCollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')
  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `${colors.primary['400']} !important`,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item: hover': {
          color: '#868bfd !important',
        },
        '& .pro-menu-item.active': {
          color: '6870fa !important',
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              color: colors.grey[100],
            }}
          ></MenuItem>
          {!isCollapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Typography variant={'h3'} color={colors.grey[100]}>
                ADMINIS
              </Typography>
              <IconButton onClick={() => setCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}

          {/*USER*/}
          {!isCollapsed && (
            <Box sx={{ mb: '25px' }}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src={photoUser}
                  alt="photo"
                  height="100px"
                  width="100px"
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey['100']}
                  sx={{ m: '10px 0 0 0' }}
                  fontWeight="bold"
                >
                  Eugeniu Zgirdan
                </Typography>
                <Typography variant="h2" color={colors.greenAccent[500]}>
                  Fancy admin
                </Typography>
              </Box>
            </Box>
          )}
          {/*MENU ITEMS*/}
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              selected={selected}
              setSelected={setSelected}
              title="Dashboard"
              icon={<HomeOutlinedIcon />}
              to="/"
            />
            <Typography
              variant="h6"
              color={colors.grey['300']}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Data
            </Typography>
            <Item
              selected={selected}
              setSelected={setSelected}
              title="Manage Team"
              icon={<PeopleOutlinedIcon />}
              to="/team"
            />
            <Item
              selected={selected}
              setSelected={setSelected}
              title="Contacts Information"
              icon={<ContactsOutlinedIcon />}
              to="/contacts"
            />
            <Item
              selected={selected}
              setSelected={setSelected}
              title="Invoices Balances"
              icon={<ReceiptOutlinedIcon />}
              to="/invoices"
            />
            <Typography
              variant="h6"
              color={colors.grey['300']}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Pages
            </Typography>
            <Item
              selected={selected}
              setSelected={setSelected}
              title="Profile Form"
              icon={<PersonOutlinedIcon />}
              to="/form"
            />{' '}
            <Item
              selected={selected}
              setSelected={setSelected}
              title="Calendar"
              icon={<CalendarOutlinedIcon />}
              to="/calendar"
            />
            <Item
              selected={selected}
              setSelected={setSelected}
              title="FAQ"
              icon={<HelpOutlinedIcon />}
              to="/faq"
            />
            <Typography
              variant="h6"
              color={colors.grey['300']}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Charts
            </Typography>
            <Item
              selected={selected}
              setSelected={setSelected}
              title="Bar Chart"
              icon={<BarChartOutlinedIcon />}
              to="/bar"
            />
            <Item
              selected={selected}
              setSelected={setSelected}
              title="Pie Chart"
              icon={<PieChartOutlinedIcon />}
              to="/pie"
            />
            <Item
              selected={selected}
              setSelected={setSelected}
              title="Line Chart"
              icon={<TimelineOutlinedIcon />}
              to="/line"
            />
            <Item
              selected={selected}
              setSelected={setSelected}
              title="Geography Chart"
              icon={<MapOutlinedIcon />}
              to="/geography"
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar
