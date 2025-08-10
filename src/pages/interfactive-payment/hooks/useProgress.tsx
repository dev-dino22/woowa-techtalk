import { useState } from "react";

export const useProgressive = () => {
    const [progress, setProgress] = useState(1);

    const handleProgressPlus = () => {
        setProgress((prev) => prev + 1);
    }

    return {
        progress,
        handleProgressPlus
    }
}

