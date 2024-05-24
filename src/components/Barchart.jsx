import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Children',
            data: [45, 54, 57, 50, 60, 43, 28, 75],
            borderColor: 'rgb(252, 92, 101)',
            backgroundColor: 'rgba(252, 92, 101, 0.8)',
            borderWidth: 1,
        },
        {
            label: 'Mature',
            data: [40, 48, 53, 40, 45, 33, null, null],
            borderColor: 'rgb(165, 195, 153)',
            backgroundColor: 'rgba(165, 195, 153, 0.8)',
            borderWidth: 1,
        },
        {
            label: 'Students',
            data: [35, 43, 30, 37, 39, 25, null, null],
            borderColor: 'rgb(255, 190, 157)',
            backgroundColor: 'rgba(255, 190, 157, 0.8)',
            borderWidth: 1,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: false,
            max: 100,
            ticks: {
                maxRotation: 0,
                minRotation: 0,
            },
            grid: {
                display: true,
            },
        },
    },
    plugins: {
        legend: {
            position: 'top',
            align: 'end', // Aligns legend to the right
        },
    },
};

export default function DiagramBatang() {
    return (
        <div className="w-full h-full">
            <Bar data={data} options={options} />
        </div>
    );
}
