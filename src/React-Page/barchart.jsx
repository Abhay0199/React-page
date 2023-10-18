import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label, LabelList } from 'recharts';

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-event-4k1bd';

    state = {
        data: [
            {
                name: 'Jan',
                uv: 4000,
                pv: 2400,
                amt: 2400,
            },
            {
                name: 'Feb',
                uv: 3000,
                pv: 1398,
                amt: 2210,
            },
            {
                name: 'Mar',
                uv: 2000,
                pv: 9800,
                amt: 2290,
            },
            {
                name: 'Apr',
                uv: 2780,
                pv: 3908,
                amt: 2000,
            },
            {
                name: 'May',
                uv: 1890,
                pv: 4800,
                amt: 2181,
            },
            {
                name: 'Jun',
                uv: 2390,
                pv: 3800,
                amt: 2500,
            },
            {
                name: 'Jul',
                uv: 2290,
                pv: 4300,
                amt: 2100,
            },
            {
                name: 'Aug',
                uv: 3200,
                pv: 4300,
                amt: 2000,
            },
            {
                name: 'Sep',
                uv: 2400,
                pv: 4300,
                amt: 2000,
            },
            {
                name: 'Oct',
                uv: 2090,
                pv: 4300,
                amt: 1600,
            },
            {
                name: 'Nov',
                uv: 1990,
                pv: 4300,
                amt: 1900,
            },
            {
                name: 'Dec',
                uv: 2490,
                pv: 4300,
                amt: 1100,
            },
        ],
        activeIndex: 0,
    };

    handleClick = (data, index) => {
        this.setState({
            activeIndex: index,
        });
    };

    render() {
        const { activeIndex, data } = this.state;
        const activeItem = data[activeIndex];

        return (
            <div className="mt-4" style={{ width: '100%', height: "100%", borderRadius: "50%" }}>
                <ResponsiveContainer width="100%" height="100%" borderRadius="50%" >
                    <BarChart width={150} height={80} data={data}>
                        <Bar dataKey="uv">
                            {data.map((entry, index) => (
                                <Cell fill={index === 7 ? '#0093af' : '#e0ffff'} key={`cell-${index}`} />
                            ))}
                        </Bar>
                        <XAxis dataKey="name" />

                    </BarChart>
                </ResponsiveContainer>

            </div>
        );
    }
}
