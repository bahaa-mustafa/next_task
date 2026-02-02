import { useEffect, useState } from "react";

export default function useDebounce(value, delay = 3000) {
    // console.log("useDebounce rendered");
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            // console.log("useDebounce useEffect");
            // console.log(value);
            setDebouncedValue(value);
        }, delay);
        return () => clearTimeout(handler);
    }, [value, delay]);
    return debouncedValue;
}