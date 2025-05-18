import { useEffect, useState } from "react";

type Keypress = {
    key: string,
    tick: number
}

export function useKeyPress() {
    const [state, setState] = useState<Keypress>({key: "", tick: 0})

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key.length !== 1) return;

            setState(prev => ({
                key: event.key,
                tick: prev.tick + 1
            }));
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return state;
}