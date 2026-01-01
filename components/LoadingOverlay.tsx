import React, { useEffect, useState } from "react";
import { AppView, NavigationProps } from "../types";

export const LoadingOverlay: React.FC<NavigationProps> = ({ navigate }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          navigate(AppView.FLEET_STEP_2);
          return 100;
        }
        return prev + 2; // Speed up for demo
      });
    }, 50);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111418]/60 backdrop-blur-custom p-4">
      <div className="relative w-full max-w-[520px] bg-white dark:bg-surface-dark rounded-xl shadow-2xl overflow-hidden flex flex-col items-center pt-10 pb-8 px-8 md:px-12 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
        {/* Icon/Visual Indicator */}
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-pulse">
          <span className="material-symbols-outlined text-primary text-[40px]">
            local_shipping
          </span>
        </div>
        {/* Header Text */}
        <div className="text-center mb-8">
          <h2 className="text-[#111418] dark:text-white tracking-tight text-[24px] md:text-[28px] font-bold leading-tight pb-2">
            Simulando Custos de Rota
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
            SSW Intelligence
          </p>
        </div>
        {/* Progress Section */}
        <div className="w-full flex flex-col gap-3 mb-8">
          {/* Progress Header */}
          <div className="flex justify-between items-end px-1">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Progresso
            </span>
            <span
              className="text-[#111418] dark:text-white text-sm font-bold leading-normal font-mono"
              id="progress-percentage"
            >
              {progress}%
            </span>
          </div>
          {/* Progress Bar Component */}
          <div className="relative w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            >
              {/* Glossy effect */}
              <div className="absolute top-0 left-0 right-0 h-[40%] bg-white/20 rounded-t-full"></div>
            </div>
          </div>
          {/* Dynamic Status Text */}
          <div className="flex justify-center mt-2 h-6">
            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal text-center animate-pulse">
              Calculando Tabela de Frete...
            </p>
          </div>
        </div>
        {/* Cancel Action */}
        <div className="flex justify-center w-full border-t border-gray-100 dark:border-gray-700 pt-6">
          <button
            onClick={() => navigate(AppView.FLEET_STEP_1)}
            className="group flex items-center justify-center gap-2 px-6 py-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-[#111418] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer"
          >
            <span className="text-sm font-bold leading-normal tracking-[0.015em]">
              Cancelar Simulação
            </span>
          </button>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-12 -mb-12 pointer-events-none"></div>
      </div>
    </div>
  );
};
