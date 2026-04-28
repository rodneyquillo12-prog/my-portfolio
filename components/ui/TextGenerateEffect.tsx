"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
    words,
    className,
}: {
    words: string;
    className?: string;
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 2,
                delay: stagger(0.2),
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        const firstLineWords = wordsArray.slice(0, 4);
        const secondLineWords = wordsArray.slice(4);
        
        return (
            <motion.div ref={scope} className="flex flex-col items-center">
                <div>
                    {firstLineWords.map((word, idx) => (
                        <motion.span
                            key={word + idx}
                            className="dark:text-white text-black opacity-0"
                        >
                            {word}{" "}
                        </motion.span>
                    ))}
                </div>
                <div>
                    {secondLineWords.map((word, idx) => (
                        <motion.span
                            key={word + idx}
                            className="text-purple opacity-0"
                        >
                            {word}{" "}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="my-4">
                <div className=" dark:text-white text-black leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
