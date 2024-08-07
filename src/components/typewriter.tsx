import { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string;
    delay: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Reset currentText and currentIndex when text changes
        setCurrentText('');
        setCurrentIndex(0);
    }, [text]);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <h1 className='text-5xl'>{currentText}</h1>;
};

export default Typewriter;
