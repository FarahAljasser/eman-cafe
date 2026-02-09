"use client";

import { motion } from "framer-motion";

export function MenuGridMotion({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.06 } }
      }}
    >
      {Array.isArray(children)
        ? children.map((child, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.28 } }
              }}
            >
              {child}
            </motion.div>
          ))
        : (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.28 } }
            }}
          >
            {children}
          </motion.div>
        )}
    </motion.div>
  );
}
