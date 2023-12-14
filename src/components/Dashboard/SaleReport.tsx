import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';
import Title from '../common/Title';

const options: ApexOptions = {
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 2,
    dashArray: 0,
  },

  chart: {
    type: 'line',
    height: 380,
    toolbar: {
      show: true,
      tools: {
        zoom: false,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: false,
        download: false,
      },
    },
    id: 'sale-report',
  },
  tooltip: {
    enabled: true,
  },
  noData: {
    text: 'There is no data at this moment',
    align: 'center',
    style: {
      fontSize: '1.5rem',
    },
  },

  xaxis: {
    categories: [
      'Jan 10',
      'Jan 11',
      'Jan 12',
      'Jan 13',
      'Jan 14',
      'Jan 15',
      'Jan 16',
      'Jan 17',
      'Jan 18',
    ],
  },
};
const data = [
  {
    name: 'online sale',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
  },
  {
    name: 'marketing sale',
    data: [20, 40, 50, 49, 60, 70, 91, 125, 150],
  },
];

const SaleReport = () => {
  return (
    <div className="grid-item-border xl:col-span-2 ">
      <Title>Sale Report</Title>
      <div>
        <Chart options={options} series={data} />
      </div>
    </div>
  );
};

export default SaleReport;
