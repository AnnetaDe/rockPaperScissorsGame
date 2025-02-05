import { motion, AnimatePresence } from "framer-motion";

export type TAnimatedNumberProps = {
    value: number;
};
export function AnimatedNumber({ value }: TAnimatedNumberProps) {
    return (
        <div
            className="inline-block relative overflow-hidden bg-cyan-500 rounded-lg"
            style={{ width: "7ch", height: "4em" }}
        >
            <AnimatePresence mode="popLayout">

                <motion.span
                    key={value}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 3 }}
                    className="absolute text-5xl w-full h-full flex items-center justify-center "
                >
                    {value}
                </motion.span>
            </AnimatePresence>
        </div>
    );
}