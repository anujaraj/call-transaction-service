import AnalyticsCharts from "../components/AnalyticsCharts";
import CallDurationChart from "../components/CallDurationChart";
import SadPathChart from "../components/SadPathChart";
import { useState } from "react";

import EmailModal from "../components/EmailModal";
import EditChartsModal from "../components/EditChartsModal";
import OverwriteModal from "../components/OverwriteModal";

import { callData, callDurationData, sadPathData } from "../data/dummydata";
import { supabase } from "../supabase/client";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
    const [emailModalData, setEmailModalData] = useState<string | null>(null);
    const [previousData, setPreviousData] = useState<any>(null);

    const [editChartsModalData, setEditChartsModalData] = useState(callData);

    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
    const [isEditChartsModalOpen, setIsEditChartsModalOpen] = useState(false);
    const [isOverwriteModalOpen, setIsOverwriteModalOpen] = useState(false);

    async function handleEmailSubmit(userEmail: string) {
        setEmailModalData(userEmail);
        setIsEmailModalOpen(false);

        const { data } = await supabase
            .from("chart_data")
            .select("values")
            .eq("email", userEmail)
            .eq("chart_name", "weekly_calls")
            .single();

        if (data) {
            setPreviousData(data.values);
            setIsOverwriteModalOpen(true);
        } else {
            setIsEditChartsModalOpen(true);
        }
    }

    async function saveChartData(newData: any) {
        await supabase.from("chart_data").upsert({
            email: emailModalData,
            chart_name: "weekly_calls",
            values: newData,
        });

        setEditChartsModalData(newData);
        setIsEditChartsModalOpen(false);
        setIsOverwriteModalOpen(false);
    }
    return (
        <div className={styles.dashboard}>
            <div className={styles.header}>
                <h1>Voice Agent Analytics Dashboard</h1>
                <p className={styles.subtitle}>Real-time insights into your voice agent performance</p>
            </div>


            <button onClick={() => setIsEmailModalOpen(true)}>Your Email Id to Edit the Weekly Call Volume Chart</button>

            <div className={styles.chartsGrid}>
                <AnalyticsCharts data={editChartsModalData} />
                <CallDurationChart data={callDurationData} />
                <SadPathChart data={sadPathData} />

                {isEmailModalOpen && (
                    <EmailModal
                        onSubmit={handleEmailSubmit}
                    />
                )}

                {isOverwriteModalOpen && (
                    <OverwriteModal
                        previousData={previousData}
                        onConfirm={() => {
                            setIsOverwriteModalOpen(false);
                            setIsEditChartsModalOpen(true);
                        }}
                        onCancel={() => setIsOverwriteModalOpen(false)}
                    />
                )}

                {isEditChartsModalOpen && (
                    <EditChartsModal
                        initialData={editChartsModalData}
                        onSave={saveChartData}
                        onCancel={() => setIsEditChartsModalOpen(false)}
                    />
                )
                }
            </div>
        </div>
    );
}