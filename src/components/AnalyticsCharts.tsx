import { XAxis, YAxis, ResponsiveContainer, AreaChart, Area, Tooltip, CartesianGrid } from "recharts";
import styles from "./AnalyticsCharts.module.css";


type Props = {
    data: { day: string; calls: number; }[]
};

export default function AnalyticsCharts({ data }: Props) {
    return (
        <div className={styles.card}>
            <h2 className={styles.heading}>Weekly Call Volume</h2>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4ade80" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#4ade80" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                    <XAxis dataKey="day" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#1f2937',
                            border: 'none',
                            borderRadius: '8px',
                            color: '#e5e7eb'
                        }}
                    />
                    <Area
                        type="monotone"
                        dataKey="calls"
                        stroke="#4ade80"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorCalls)"
                    />
                </AreaChart>
            </ResponsiveContainer>

        </div>
    );
}