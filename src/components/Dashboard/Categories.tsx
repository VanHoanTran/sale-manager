import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';
import Title from '../common/Title';

const options: ApexOptions = {
  chart: {
    width: 580,
    type: 'donut',
    toolbar: {
      show: true,
      tools: {
        download: false,
      },
    },
  },
  plotOptions: {
    pie: {
      donut: {
        size: '70%',
        labels: {
          show: true,
          name: {
            show: true,
            formatter: legend => {
              return legend;
            },
          },
          value: {
            show: true,
            formatter: val => {
              return val;
            },
          },
          total: {
            show: true,
            label: 'Total',
            formatter: () => {
              return `145`;
            },
          },
        },
      },
    },
  },
  noData: {
    text: 'There is no data at this moment',
    align: 'center',
    style: {
      fontSize: '1.5rem',
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return `${Math.round(Number(val))}%`;
    },
  },
  labels: ['shoes', 'bags', 'hat', 'others'],
  legend: {
    position: 'bottom',
  },
};

const data = [44, 55, 13, 33];
const Categories = () => {
  return (
    <div className="grid-item-border ">
      <Title>Categories</Title>
      {/* <div className=" flex h-full items-center justify-center"> */}
      <div className="mt-8">
        <Chart options={options} series={data} type="donut" height={320} />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Categories;
