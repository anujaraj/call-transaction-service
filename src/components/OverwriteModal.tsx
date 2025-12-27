import styles from "./Modal.module.css";

export default function OverwriteModal({
    previousData,
    onConfirm,
    onCancel,
}: {
    previousData: any;
    onConfirm: () => void;
    onCancel: () => void;
}) {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h3>Previous data found</h3>
                <p>Do you want to overwrite your existing values?</p>

                <pre style={{ fontSize: "12px", color: "#9ca3af" }}>
                    {JSON.stringify(previousData, null, 2)}
                </pre>

                <button onClick={onConfirm}>Overwrite</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
}
