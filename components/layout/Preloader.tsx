"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export function Preloader() {
  const [show, setShow] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    try {
      if (sessionStorage.getItem("axel-visited")) return;
    } catch {
      return;
    }

    setShow(true);

    timeoutRef.current = setTimeout(() => {
      dismiss();
    }, 3000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function dismiss() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setFadeOut(true);
    try {
      sessionStorage.setItem("axel-visited", "true");
    } catch {
      // sessionStorage unavailable
    }
  }

  if (!show) return null;

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black"
          onAnimationComplete={(definition) => {
            if ((definition as { opacity: number }).opacity === 0) {
              setShow(false);
            }
          }}
        >
          {/* Subtle radial glow behind logo */}
          <motion.div
            className="absolute h-80 w-80 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          <div className="relative">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Image
                src="/logo.png"
                alt="Axel Multimedia Services"
                width={320}
                height={320}
                className="h-auto w-full max-w-[220px] md:max-w-xs"
                priority
              />
            </motion.div>

            {/* Gold shimmer sweep */}
            <motion.div
              className="pointer-events-none absolute inset-0 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-y-0 w-1/3"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)",
                }}
                initial={{ left: "-33%" }}
                animate={{ left: "133%" }}
                transition={{
                  delay: 0.8,
                  duration: 1.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
