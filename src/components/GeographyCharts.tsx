import { useTheme } from '@mui/material'
import { ResponsiveChoropleth } from '@nivo/geo'
import React from 'react'

import { geoFeatures } from '../data/geoData'
import { mockGeographyData as data } from '../data/mockData'
import { tokens } from '../theme'

const GeographyCharts = ({ isDashboard = false }) => {
  const theme = useTheme()
  const color = tokens(theme.palette.mode)
  return (
    <ResponsiveChoropleth
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: color.grey['100'],
            },
          },
          legend: {
            text: {
              fill: color.grey['100'],
            },
          },
          ticks: {
            line: {
              stroke: color.grey['100'],
              strokeWidth: 1,
            },
            text: {
              fill: color.grey['100'],
            },
          },
        },
        legends: {
          text: {
            fill: color.grey['100'],
          },
        },
        tooltip: {
          container: {
            color: color.primary['500'],
          },
        },
      }}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      // colors="nivo"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      // добавил проверку
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      // размер карты
      projectionScale={isDashboard ? 40 : 150}
      projectionRotation={[0, 0, 0]}
      // enableGraticule={true}
      // graticuleLineColor="#dddddd"
      borderWidth={1.5}
      //обводка стран
      borderColor="#ffffff"
      // defs={[
      //   {
      //     id: 'dots',
      //     type: 'patternDots',
      //     background: 'inherit',
      //     color: '#38bcb2',
      //     size: 4,
      //     padding: 1,
      //     stagger: true,
      //   },
      //   {
      //     id: 'lines',
      //     type: 'patternLines',
      //     background: 'inherit',
      //     color: '#eed312',
      //     rotation: -45,
      //     lineWidth: 6,
      //     spacing: 10,
      //   },
      //   {
      //     id: 'gradient',
      //     type: 'linearGradient',
      //     colors: [
      //       {
      //         offset: 0,
      //         color: '#000',
      //       },
      //       {
      //         offset: 100,
      //         color: 'inherit',
      //       },
      //     ],
      //   },
      // ]}
      // fill={[
      //   {
      //     match: {
      //       id: 'CAN',
      //     },
      //     id: 'dots',
      //   },
      //   {
      //     match: {
      //       id: 'CHN',
      //     },
      //     id: 'lines',
      //   },
      //   {
      //     match: {
      //       id: 'ATA',
      //     },
      //     id: 'gradient',
      //   },
      // ]}
      legends={
        //не будет на дашбоард
        isDashboard
          ? undefined
          : [
              {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                //цвет текста колонки сбоку карты
                itemTextColor: color.grey['100'],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      //цвет наведения на текст на колонке цветов сбоку карты
                      itemTextColor: '#ffffff',
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
      }
    />
  )
}

export default GeographyCharts
