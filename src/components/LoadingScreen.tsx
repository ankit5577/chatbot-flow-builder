import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-900 text-slate-200 font-montserrat">
      <div className="text-center">
        <div className="animate-spin-slow rounded-full h-32 w-32 border-t-4 border-white mb-4 mx-auto"></div>
        <h2 className="text-4xl font-bold animate-pulse">Welcome to</h2>
        <h1 className="text-6xl mt-2 font-bold animate-pulse text-teal-400">
          {" "}
          XYZ: Chat-flow
        </h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
