import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from "recharts";
import styles from "./AnalyticsCharts.module.css";

type Props = {
    data: { time: string; duration: number; }[]
};

export default function CallDurationChart({ data }: Props) {
    return (
        <div className={styles.card}>
            <h2 className={styles.heading}>Call Duration Analysis</h2>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorDuration" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#60a5fa" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" opacity={0.3} />
                    <XAxis
                        dataKey="time"
                        stroke="#9ca3af"
                        tick={{ fill: '#9ca3af', fontSize: 12 }}
                    />
                    <YAxis
                        stroke="#9ca3af"
                        tick={{ fill: '#9ca3af', fontSize: 12 }}
                        label={{ value: 'Minutes', angle: -90, position: 'insideLeft', fill: '#9ca3af' }}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#1f2937',
                            border: 'none',
                            borderRadius: '8px',
                            color: '#e5e7eb',
                            padding: '8px 12px'
                        }}
                        labelStyle={{ color: '#9ca3af', marginBottom: '4px' }}
                    />
                    <Area
                        type="monotone"
                        dataKey="duration"
                        stroke="#60a5fa"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorDuration)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
