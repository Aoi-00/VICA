import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartData } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Book } from '../../data/data';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const
        },
        title: {
            display: true,
            text: 'Books by Year Published'
        }
    }
};

interface ILineChartProps {
    books: Book[];
}

export const LineChart: React.FC<ILineChartProps> = ({ books }) => {
    const [data, setData] = useState<ChartData<'line', number[], string>>({} as ChartData<'line', number[], string>);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let labels: { year: string; count: number }[] = [];
        books.forEach((each) => {
            let exists = labels.find((x) => x.year === each.year);
            if (!exists) {
                labels.push({ year: each.year, count: 1 });
            } else {
                labels.forEach((x) => {
                    if (x.year === exists.year) {
                        x.count++;
                    }
                });
            }
        });
        // to split {genre, count} into their own array
        let year = labels
            .map((x) => {
                return x.year;
            })
            .sort(function (a, b) {
                return parseInt(a) - parseInt(b);
            });
        let count = labels.map((x) => {
            return x.count;
        });
        setData({
            ...data,
            labels: year,
            datasets: [
                {
                    label: 'Books Published',
                    data: count,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                    borderWidth: 1
                }
            ]
        });
    }, [books]);

    useEffect(() => {
        if (Object.keys(data).length) {
            setLoading(false);
        }
    }, [data]);

    return <div>{!loading && <Line options={options} data={data} />}</div>;
};
