import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [
    { name: 'Page A', uv: 400, pv: 300, amt: 2400 },
    { name: 'Page A', uv: 300, pv: 300, amt: 2400 },
    { name: 'Page A', uv: 200, pv: 400, amt: 2400 },
    { name: 'Page A', uv: 400, pv: 100, amt: 2400 }

];

function RenderLineChart() {
    return (
        <LineChart width={480} height={350} data={data} margin={{ top: 50, right: 20, bottom: 5, left: -30 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#ffffff"  />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" opacity={0.5}/>
            <XAxis dataKey="name"  />
            <YAxis />
            <Tooltip />
        </LineChart>
    )
}

export default RenderLineChart;