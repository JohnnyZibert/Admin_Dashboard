import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Bar from './components/BarChart'
import PieCharts from './components/PieCharts'
import Calendar from './scenes/calendar'
import Contacts from './scenes/contacts'
// import Bar from './scenes/Bar'
// import Calendar from './scenes/Calendar'
// import Contacts from './scenes/Contacts'
import Dashboard from './scenes/dashboard'
import Faq from './scenes/faq'
import Form from './scenes/Form/Form'
import Geography from './scenes/geography'
// import FAQ from './scenes/Faq'
import SideBar from './scenes/global/Sidebar'
// import Form from './scenesForm'
// import Geography from './scenes/geography'
// import Invoices from './scenesInvoice'
// import Line from './scenesLine'
// import Pie from './scenesPie'
// import Team from './scenesTeam'
import TopBar from './scenes/global/Topbar'
import Invoices from './scenes/invoices'
import Line from './scenes/line'
import Team from './scenes/team'
import { ColorModeContext, useMode } from './theme'

function App() {
  const [theme, colorMode] = useMode()
  return (
    // @ts-ignore
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path={'/'} element={<Dashboard />} />
              <Route path={'/team'} element={<Team />} />
              <Route path={'/contacts'} element={<Contacts />} />
              <Route path={'/invoices'} element={<Invoices />} />
              <Route path={'/form'} element={<Form />} />
              <Route path={'/calendar'} element={<Calendar />} />
              <Route path={'/faq'} element={<Faq />} />
              <Route path={'/bar'} element={<Bar />} />
              <Route path={'/pie'} element={<PieCharts />} />
              <Route path={'/line'} element={<Line />} />
              <Route path={'/geography'} element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
