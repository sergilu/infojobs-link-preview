import { ReactNode } from "react";
import styles from "./LinkPreview.module.scss"
import { clsx } from 'clsx';

export interface LinkPreviewProps {
    preview: ReactNode,
    title: string,
    description: string,
    domain: string,
    className?: string,
}

export function LinkPreview({
    preview,
    title,
    description,
    domain,
    className,
}:LinkPreviewProps) {
    return (
        <div className={clsx(styles.card, className)}>
            <div className={styles.preview}>
                {preview}
            </div>
            <div className={styles.info}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.description}>
                   {description}
                </div>
                <div className={styles.domain}>
                   {domain}
                </div> 
            </div>
        </div>
    )
}