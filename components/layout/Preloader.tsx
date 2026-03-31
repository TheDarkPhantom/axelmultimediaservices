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
    }, 2500);

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
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black"
          onAnimationComplete={(definition) => {
            if ((definition as { opacity: number }).opacity === 0) {
              setShow(false);
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              src="/logo.png"
              alt="Axel Multimedia Services"
              width={320}
              height={80}
              className="h-auto w-full max-w-xs"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
