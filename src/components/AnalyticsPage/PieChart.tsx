import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Book } from '../../data/data';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
            borderWidth: 1
        }
    ]
};
interface IPieChartProps {
    books: Book[];
}

export const PieChart: React.FC<IPieChartProps> = ({ books }) => {
    const [labels, setLabel] = useState([]);
    useEffect(() => {
        let labels: { genre: string; count: number }[] = [];
        books.forEach((x) => {
            x.genre.forEach((each) => {
                let exists = labels.find((x) => x.genre === each);
                if (!exists) {
                    labels.push({ genre: each, count: 1 });
                } else {
                    labels.forEach((x) => {
                        if (x.genre === exists.genre) {
                            x.count++;
                        }
                    });
                }
            });
        });
        // to split {genre, count} into their own array
    }, [books]);
    return <Pie data={data} />;
};
