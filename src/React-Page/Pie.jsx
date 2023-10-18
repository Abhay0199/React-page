import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

    render() {
        return (
            <div style={{ width: '100%', maxWidth: '500px' }}>
                <PieChart width={500} height={400} onMouseEnter={this.onPieEnter}>
                    <Pie
                        data={data}
                        cx={Math.min(250, window.innerWidth / 2)}
                        cy={150}
                        innerRadius={80}
                        outerRadius={120}
                        fill="#8884d8"
                        paddingAngle={9}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
        );
    }
}
