import styles from "./Modal.module.css";

import { useState } from "react";

export default function EditChartsModal({ initialData, onSave, onCancel }: { initialData: any[], onSave: (data: any) => void, onCancel: () => void }) {
    const [data, setData] = useState(initialData);
    const updateValue = (index: number, value: number) => {
        const updated = data.map((item, i) =>
            i === index ? { ...item, calls: value } : item
        );
        setData(updated);
    };
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h3>Edit Weekly Call Data</h3>

                {data.map((item, index) => (
                    <div key={item.day}>
                        <label>{item.day}</label>
                        <input
                            type="number"
                            value={item.calls}
                            onChange={(e) =>
                                updateValue(index, Number(e.target.value))
                            }
                        />
                    </div>
                ))}

                <button onClick={() => onSave(data)}>Save</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
}
