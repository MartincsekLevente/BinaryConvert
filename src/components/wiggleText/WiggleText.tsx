import './WiggleText.scss';
import { motion } from 'framer-motion';

interface WiggleTextProps {
    text: string,
}

export default function WiggleText({text}: WiggleTextProps) {
    return (
        <div className="wiggle-text-container">
            {text.split("").map((char, index) => (
                <motion.span
                    className="wiggle-text-char"
                    key={index}
                    animate={{
                        y: [0, 10, 0, -10, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.9,
                        delay: index * 0.05,
                        ease: "linear"
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </div>
    );
}
