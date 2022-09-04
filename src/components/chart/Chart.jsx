import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const data = [
        { name: "January", Total: 1100 },
        { name: "Feburary", Total: 800 },
        { name: "March", Total: 2100 },
        { name: "April", Total: 1200 },
        { name: "May", Total: 2900 },
        { name: "June", Total: 1000 },
        { name: "July", Total: 870 }
    ]
    return (
        <div className="chart">
            <p className="title">Last 6 month (income)</p>
            <ResponsiveContainer className="area-chart" width={1100} height={400}>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="gray" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>

        </div>
    )
}

export default Chart
