import { useState } from "react";
import styles from "./Modal.module.css";

type Props = {
    onSubmit: (email: string) => void;
    onCancel: () => void;
};

export default function EmailModal({ onSubmit, onCancel }: Props) {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        if (!email.trim()) {
            setError("Email is required");
            return;
        }

        setError("");
        onSubmit(email);

    }
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Submit Email Id to Edit the Chart</h2>
                <input value={email} onChange={(e) => { setEmail(e.target.value); setError("") }} placeholder="Enter recipient email" />
                {error && <p className={styles.error}>{error}</p>}

                <div className={styles.actions}>
                    <button onClick={onCancel} className={styles.cancelButton}>Cancel</button>
                    <button onClick={handleSubmit}>Continue</button>
                </div>
            </div>
        </div>
    );
}
