import React, {useContext} from 'react'
import ApexCharts from 'react-apexcharts'
import AppContext from '../context/AppContext'

const Chart = () => {
  const {series} = useContext(AppContext)

  const options = {
    chart: {
      height: 350,
      type: 'area',
      foreColor: "#ccc",
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
    },
    colors: ["#00BAEC"],
    stroke: {
      width: 3,
      curve: 'smooth',
    },
    grid: {
      borderColor: "#555",
      clipMarkers: false,
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      gradient: {
        enabled: true,
        opacityFrom: 0.55,
        opacityTo: 0
      }
    },
    tooltip: {
      theme: "dark"
    },
    yaxis: {
      forceNiceScale: true
    },
    xaxis: {
      forceNiceScale: true
    }
  }

  return (
    <div className="Chart">
      <ApexCharts 
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  )
}

export default Chart
