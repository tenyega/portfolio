import { useState, useEffect } from 'react';

interface CounterProps {
    targetNumber: number;
    delay: number;
}

const Counter: React.FC<CounterProps> = ({ targetNumber, delay }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count < targetNumber) {
            const interval = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, delay);

            return () => clearInterval(interval);
        }
    }, [count, targetNumber, delay]);

    return   <h1 className='w-1/4 text-8xl'>0{count}</h1>;
};

export default Counter;
