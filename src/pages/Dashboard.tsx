import { useState, useEffect } from 'react';
import Dashboard from '../layouts/dashboard';
import { useTranslation } from 'react-i18next';
import Card from '../components/core/Card';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import faker from 'faker';
import { useNavigate } from 'react-router-dom';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labelshaha = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const datahaha = {
    labels: labelshaha,
    datasets: [
        {
            label: 'Dataset 1',
            data: labelshaha.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: '#59ddaa',
        },
        {
            label: 'Dataset 2',
            data: labelshaha.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: '#fe3a82',
        },
        {
            label: 'Dataset 3',
            data: labelshaha.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: '#fe4a02',
        },
    ],
};

ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function About() {
    const [stockName, setStockName] = useState<any>('RELIANCE.NS');
    const navigate = useNavigate();
    const [MonthlyDifference, set30DayDifference] = useState<any>(0);

    useEffect(() => {
        if (localStorage.getItem('AuthToken') == null) {
            navigate('/');
        }
    }, []);

    return (
        <Dashboard>
            <div className="flex items-center justify-center w-full h-full ">
                <section className="w-full p-4 space-y-4 ">
                    <div className="flex flex-wrap w-full space-x-4 space-y-4 text-slate-500 dark:text-slate-300 rtl:space-x-reverse ">
                        <Card className="flex-1 first:mt-4 first:ml-4">
                            <div className="flex items-center h-32 space-x-4 rtl:space-x-reverse">
                                <div className="flex items-center justify-center p-2 bg-green-300 rounded-full w-14 h-14">
                                    <span i="carbon-ticket" className="text-2xl text-green-700"></span>
                                </div>
                                <div className="text-center">
                                    <h1 className="text-4xl font-black">
                                        Rs. {Number.isNaN(MonthlyDifference) ? '0' : MonthlyDifference}
                                    </h1>
                                    <span className="text-xs">30 Day</span>
                                </div>
                            </div>
                        </Card>
                        {/* ... (existing code) */}
                    </div>
                    {/* ... (existing code) */}
                </section>
            </div>
        </Dashboard>
    );
}