"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 5 : 100));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
      <h1 className="text-2xl font-semibold mb-4">Loading...</h1>
      <div className="w-64 h-4 bg-white rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        />
      </div>
      <p className="mt-2 text-sm">{progress}%</p>
    </div>
  );
};

export default Loading;
