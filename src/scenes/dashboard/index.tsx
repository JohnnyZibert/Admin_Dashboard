import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import EmailIcon from '@mui/icons-material/Email'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import TrafficIcon from '@mui/icons-material/Traffic'
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import React from 'react'

import BarChart from '../../components/BarChart'
import GeographyCharts from '../../components/GeographyCharts'
import Header from '../../components/Header'
import LineCharts from '../../components/LineCharts'
import ProgressCircle from '../../components/ProgressCircle'
import StatBox from '../../components/StatBox'
import { mockTransactions } from '../../data/mockData'
import { tokens } from '../../theme'

const Dashboard = () => {
  const theme = useTheme()
  const color = tokens(theme.palette.mode)
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subTitle="Welcome to your dashboard" />
      </Box>
      <Box>
        <Button
          sx={{
            backgroundColor: color.blueAccent['700'],
            color: color.grey['100'],
            fontSize: '14px',
            fontWeight: 'bold',
            padding: '10px 20px',
          }}
        >
          Downloads Reports
        </Button>
      </Box>
      {/*GRID AND CHARTS*/}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/*ROW 1*/}
        <Box
          gridColumn="span 3"
          display="flex"
          bgcolor={color.primary['400']}
          justifyContent="center"
          alignItems="center"
        >
          <StatBox
            title="12361"
            subTitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: color.greenAccent['600'], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          display="flex"
          bgcolor={color.primary['400']}
          justifyContent="center"
          alignItems="center"
        >
          <StatBox
            title="431.225"
            subTitle="Sales Obtained"
            progress="0.5"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: color.greenAccent['600'], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          display="flex"
          bgcolor={color.primary['400']}
          justifyContent="center"
          alignItems="center"
        >
          <StatBox
            title="32.441"
            subTitle="New Clients"
            progress="0.3"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: color.greenAccent['600'], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          display="flex"
          bgcolor={color.primary['400']}
          justifyContent="center"
          alignItems="center"
        >
          <StatBox
            title="1.352.441"
            subTitle="Traffic Inbound"
            progress="0.46"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: color.greenAccent['600'], fontSize: '26px' }}
              />
            }
          />
        </Box>
        {/*ROW 2*/}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          bgcolor={color.primary['400']}
        >
          <Box
            mt="20px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                color={color.grey['100']}
                fontWeight="600"
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                color={color.greenAccent['500']}
                fontWeight="bold"
              >
                $59,342,32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: '26px', color: color.greenAccent['500'] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box mt="-20px" height="250px">
            <LineCharts isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={color.primary['400']}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderBottom={`4px solid ${color.primary['500']}`}
            color={color.grey['100']}
            p="15px"
          >
            <Typography color={color.grey['100']} variant="h5" fontWeight="600">
              Recent transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              key={`${transaction.txId}-${i}`}
              borderBottom={`4px solid ${color.primary['500']}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={color.greenAccent['500']}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={color.grey['100']}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={color.grey['100']}>{transaction.date}</Box>
              <Box
                bgcolor={color.greenAccent['500']}
                borderRadius="4px"
                p="5px 10px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        {/*ROW 3*/}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={color.primary['400']}
          p="30px"
          mb="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={color.greenAccent['500']}
              sx={{ mt: '15px' }}
            >
              $48,532 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        {/*ROW 4*/}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={color.primary['400']}
          mb="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ p: '30px 30px 0 30px' }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          mb="30px"
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={color.primary['400']}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" sx={{ mb: '15px' }}>
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyCharts isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard
