import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const Barchart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            const newChartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {
                            label: 'Children',
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
                            hoverBorderColor: 'rgba(255, 99, 132, 1)',
                            data: [12, 19, 3, 5, 2, 3, 7, 8, 5, 4, 6, 9],
                        },
                        {
                            label: 'Mature',
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
                            hoverBorderColor: 'rgba(54, 162, 235, 1)',
                            data: [5, 9, 7, 8, 4, 6, 3, 2, 5, 7, 8, 10],
                        },
                        {
                            label: 'Student',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
                            hoverBorderColor: 'rgba(75, 192, 192, 1)',
                            data: [8, 5, 6, 4, 9, 10, 12, 6, 7, 5, 4, 8],
                        },
                    ],
                },
                options: {
                    maintainAspectRatio: false,
                },
            });

            return () => {
                newChartInstance.destroy();
            };
        }
    }, []);

    return <canvas ref={chartRef} />;
};

export default Barchart;
