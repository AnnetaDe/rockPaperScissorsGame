import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useAppDispatch } from '../redux/hooks';
import { showResultsModal } from '../redux/gameSlice';
import { motion, AnimatePresence } from "framer-motion";



interface ModalPortalProps {
    title: string;
    children: ReactNode;
}

const ModalPortal: React.FC<ModalPortalProps> = ({ title, children }) => {
    const modalRoot = document.getElementById('modal-root') as HTMLElement;
    const dispatch = useAppDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(showResultsModal(false));
        }, 2000);
        const closeOnEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                dispatch(showResultsModal(false));
            }
        };
        document.addEventListener('keydown', closeOnEscape);
        return () => {
            clearTimeout(timer);
            document.removeEventListener('keydown', closeOnEscape);
        };

    }, [dispatch]);

    if (!modalRoot) return null;


    return ReactDOM.createPortal(
        <AnimatePresence>

            <motion.div
                className="fixed inset-0 backdrop-blur-xs flex justify-center items-center z-50"
                onClick={() => dispatch(showResultsModal(false))}
            >
                <motion.div
                    className="border border-gray-600 rounded-lg shadow-lg p-6 relative w-96 max-w-full"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >


                    <h2 className="text-xl font-semibold mb-4">{title}</h2>

                    <div className="mb-4">{children}</div>
                </motion.div>
            </motion.div>,
        </AnimatePresence>,
        modalRoot
    );
};

export default ModalPortal;
