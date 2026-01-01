import React from "react";
import { AppView, NavigationProps } from "../types";
import { Layout } from "./Layout";

export const Dashboard: React.FC<NavigationProps> = ({ navigate }) => {
  return (
    <Layout navigate={navigate} activeView={AppView.DASHBOARD}>
      <div className="container mx-auto max-w-7xl p-6 md:p-10 flex flex-col gap-8">
        {/* Page Heading & Actions */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2
              className="text-[#111418] dark:text-white text-3xl font-bold tracking-tight"
              id="page-title"
            >
              Dashboard
            </h2>
            <p
              className="text-[#637588] dark:text-[#94a3b8] text-base font-medium"
              id="page-subtitle"
            >
              Visão geral das operações logísticas em tempo real
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg border border-[#dce0e5] dark:border-[#2a3b4d] bg-white dark:bg-[#1A2633] text-[#111418] dark:text-white text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#2a3b4d]/80 transition-colors shadow-sm"
              id="btn-export"
            >
              <span className="material-symbols-outlined text-[20px]">
                download
              </span>
              Exportar
            </button>
            <button
              className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm"
              id="btn-new-order"
              onClick={() => navigate(AppView.ORDER_ENTRY)}
            >
              <span className="material-symbols-outlined text-[20px]">
                add
              </span>
              Novo Pedido
            </button>
          </div>
        </header>
        {/* KPI Cards Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Card 1: Entregas Realizadas */}
          <div className="flex flex-col gap-1 rounded-xl bg-white dark:bg-[#1A2633] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-none border border-transparent dark:border-[#2a3b4d] hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center size-10 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400">
                <span className="material-symbols-outlined text-[24px]">
                  check_circle
                </span>
              </div>
              <p className="text-[#637588] dark:text-[#94a3b8] text-sm font-medium">
                Entregas Realizadas
              </p>
            </div>
            <div className="flex items-baseline gap-2 mt-auto">
              <p className="text-[#111418] dark:text-white text-3xl font-bold tracking-tight">
                1,245
              </p>
              <div className="flex items-center text-green-600 dark:text-green-400 text-sm font-semibold bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                <span className="material-symbols-outlined text-[16px] mr-0.5">
                  trending_up
                </span>
                12%
              </div>
            </div>
            <p className="text-[#637588] dark:text-[#64748b] text-xs font-medium mt-1">
              vs. mês anterior
            </p>
          </div>
          {/* Card 2: Custo Médio/km */}
          <div className="flex flex-col gap-1 rounded-xl bg-white dark:bg-[#1A2633] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-none border border-transparent dark:border-[#2a3b4d] hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary">
                <span className="material-symbols-outlined text-[24px]">
                  paid
                </span>
              </div>
              <p className="text-[#637588] dark:text-[#94a3b8] text-sm font-medium">
                Custo Médio/km
              </p>
            </div>
            <div className="flex items-baseline gap-2 mt-auto">
              <p className="text-[#111418] dark:text-white text-3xl font-bold tracking-tight">
                R$ 4,50
              </p>
              <div className="flex items-center text-red-500 dark:text-red-400 text-sm font-semibold bg-red-50 dark:bg-red-900/30 px-2 py-0.5 rounded-full">
                <span className="material-symbols-outlined text-[16px] mr-0.5">
                  trending_up
                </span>
                2%
              </div>
            </div>
            <p className="text-[#637588] dark:text-[#64748b] text-xs font-medium mt-1">
              vs. mês anterior
            </p>
          </div>
          {/* Card 3: Veículos Disponíveis */}
          <div className="flex flex-col gap-1 rounded-xl bg-white dark:bg-[#1A2633] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-none border border-transparent dark:border-[#2a3b4d] hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center size-10 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400">
                <span className="material-symbols-outlined text-[24px]">
                  local_shipping
                </span>
              </div>
              <p className="text-[#637588] dark:text-[#94a3b8] text-sm font-medium">
                Veículos Disponíveis
              </p>
            </div>
            <div className="flex items-baseline gap-2 mt-auto">
              <p className="text-[#111418] dark:text-white text-3xl font-bold tracking-tight">
                42
                <span className="text-[#94a3b8] text-2xl font-normal ml-1">
                  /50
                </span>
              </p>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 mt-2 overflow-hidden">
              <div
                className="bg-orange-500 h-1.5 rounded-full"
                style={{ width: "84%" }}
              ></div>
            </div>
            <p className="text-[#637588] dark:text-[#64748b] text-xs font-medium mt-1">
              84% da frota ativa
            </p>
          </div>
          {/* Card 4: Faturamento Mensal */}
          <div className="flex flex-col gap-1 rounded-xl bg-white dark:bg-[#1A2633] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-none border border-transparent dark:border-[#2a3b4d] hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center size-10 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400">
                <span className="material-symbols-outlined text-[24px]">
                  account_balance_wallet
                </span>
              </div>
              <p className="text-[#637588] dark:text-[#94a3b8] text-sm font-medium">
                Faturamento Mensal
              </p>
            </div>
            <div className="flex items-baseline gap-2 mt-auto">
              <p className="text-[#111418] dark:text-white text-3xl font-bold tracking-tight">
                R$ 350k
              </p>
              <div className="flex items-center text-green-600 dark:text-green-400 text-sm font-semibold bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                <span className="material-symbols-outlined text-[16px] mr-0.5">
                  trending_up
                </span>
                5%
              </div>
            </div>
            <p className="text-[#637588] dark:text-[#64748b] text-xs font-medium mt-1">
              vs. mês anterior
            </p>
          </div>
        </section>
        {/* Chart Section */}
        <section className="flex flex-col gap-4">
          <div className="w-full rounded-xl bg-white dark:bg-[#1A2633] shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-none border border-transparent dark:border-[#2a3b4d] p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-[#111418] dark:text-white text-lg font-bold">
                  Volume de Cargas
                </h3>
                <p className="text-[#637588] dark:text-[#94a3b8] text-sm">
                  Monitoramento de toneladas transportadas nos últimos 30 dias
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#111418] dark:text-white text-2xl font-bold">
                  15.4k{" "}
                  <span className="text-sm font-normal text-[#637588] dark:text-[#94a3b8]">
                    Tons
                  </span>
                </span>
                <div className="flex items-center text-green-600 dark:text-green-400 text-sm font-semibold bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-lg">
                  <span className="material-symbols-outlined text-[16px] mr-1">
                    trending_up
                  </span>
                  +8.5%
                </div>
              </div>
            </div>
            {/* Chart Visualization */}
            <div className="relative w-full h-[300px] flex flex-col justify-end pb-8">
              {/* SVG Chart */}
              <svg
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
                viewBox="0 0 1000 300"
              >
                <defs>
                  <linearGradient id="gradient-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor="#0d7ff2"
                      stopOpacity="0.2"
                    ></stop>
                    <stop
                      offset="100%"
                      stopColor="#0d7ff2"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
                {/* Grid Lines */}
                <line
                  className="dark:stroke-gray-700"
                  stroke="#e5e7eb"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                  x1="0"
                  x2="1000"
                  y1="0"
                  y2="0"
                ></line>
                <line
                  className="dark:stroke-gray-700"
                  stroke="#e5e7eb"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                  x1="0"
                  x2="1000"
                  y1="75"
                  y2="75"
                ></line>
                <line
                  className="dark:stroke-gray-700"
                  stroke="#e5e7eb"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                  x1="0"
                  x2="1000"
                  y1="150"
                  y2="150"
                ></line>
                <line
                  className="dark:stroke-gray-700"
                  stroke="#e5e7eb"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                  x1="0"
                  x2="1000"
                  y1="225"
                  y2="225"
                ></line>
                <line
                  className="dark:stroke-gray-700"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  x1="0"
                  x2="1000"
                  y1="300"
                  y2="300"
                ></line>
                {/* Filled Area */}
                <path
                  d="M0,220 C100,200 150,250 200,180 S300,100 400,140 S500,200 600,160 S700,80 800,100 S900,120 1000,50 V300 H0 Z"
                  fill="url(#gradient-fill)"
                ></path>
                {/* Line */}
                <path
                  d="M0,220 C100,200 150,250 200,180 S300,100 400,140 S500,200 600,160 S700,80 800,100 S900,120 1000,50"
                  fill="none"
                  stroke="#0d7ff2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                ></path>
                {/* Data Points */}
                <circle
                  className="cursor-pointer hover:r-6 transition-all"
                  cx="200"
                  cy="180"
                  fill="#ffffff"
                  r="4"
                  stroke="#0d7ff2"
                  strokeWidth="2"
                ></circle>
                <circle
                  className="cursor-pointer hover:r-6 transition-all"
                  cx="400"
                  cy="140"
                  fill="#ffffff"
                  r="4"
                  stroke="#0d7ff2"
                  strokeWidth="2"
                ></circle>
                <circle
                  className="cursor-pointer hover:r-6 transition-all"
                  cx="600"
                  cy="160"
                  fill="#ffffff"
                  r="4"
                  stroke="#0d7ff2"
                  strokeWidth="2"
                ></circle>
                <circle
                  className="cursor-pointer hover:r-6 transition-all"
                  cx="800"
                  cy="100"
                  fill="#ffffff"
                  r="4"
                  stroke="#0d7ff2"
                  strokeWidth="2"
                ></circle>
                <circle
                  className="cursor-pointer hover:r-6 transition-all"
                  cx="1000"
                  cy="50"
                  fill="#ffffff"
                  r="4"
                  stroke="#0d7ff2"
                  strokeWidth="2"
                ></circle>
              </svg>
              {/* X Axis Labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-[#637588] dark:text-[#94a3b8] translate-y-6 font-medium px-2">
                <span>01 Set</span>
                <span>08 Set</span>
                <span>15 Set</span>
                <span>22 Set</span>
                <span>29 Set</span>
              </div>
            </div>
          </div>
        </section>
        {/* Recent Activity Table */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[#111418] dark:text-white text-lg font-bold">
              Entregas Recentes
            </h3>
            <a
              className="text-primary text-sm font-semibold hover:text-primary/80"
              href="#"
            >
              Ver tudo
            </a>
          </div>
          <div className="w-full overflow-x-auto rounded-xl border border-[#dce0e5] dark:border-[#2a3b4d] bg-white dark:bg-[#1A2633]">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 dark:bg-[#202e3d] text-[#637588] dark:text-[#94a3b8]">
                <tr>
                  <th className="px-6 py-4 font-semibold">ID Pedido</th>
                  <th className="px-6 py-4 font-semibold">Destino</th>
                  <th className="px-6 py-4 font-semibold">Veículo</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold text-right">Valor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dce0e5] dark:divide-[#2a3b4d] text-[#111418] dark:text-white">
                <tr className="hover:bg-gray-50 dark:hover:bg-[#202e3d]/50 transition-colors">
                  <td className="px-6 py-4 font-medium">#ORD-7829</td>
                  <td className="px-6 py-4">São Paulo, SP</td>
                  <td className="px-6 py-4">Volvo FH 540</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      <span className="size-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>
                      Entregue
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-medium">
                    R$ 1.250,00
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#202e3d]/50 transition-colors">
                  <td className="px-6 py-4 font-medium">#ORD-7830</td>
                  <td className="px-6 py-4">Curitiba, PR</td>
                  <td className="px-6 py-4">Scania R450</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                      <span className="size-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                      Em Trânsito
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-medium">
                    R$ 3.400,00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Layout>
  );
};
