import './WiggleText.scss';
import { motion } from 'framer-motion';

interface WiggleTextProps {
    text: string,
}

export default function WiggleText({text}: WiggleTextProps) {
    return (
        <motion.div className="wiggle-text-container">
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
}
