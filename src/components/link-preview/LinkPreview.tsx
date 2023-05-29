import { ReactNode } from "react";
import styles from "./LinkPreview.module.scss"
import { clsx } from 'clsx';

export interface LinkPreviewProps {
    preview: ReactNode,
    className?: string,
}

export function LinkPreview({
    preview,
    className,
}:LinkPreviewProps) {
    return (
        <div className={clsx(styles.card, className)}>
            <div className={styles.preview}>
                {preview}
            </div>
        </div>
    )
}