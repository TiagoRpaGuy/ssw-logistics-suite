import React from "react";
import { AppView, NavigationProps } from "../types";
import { Layout } from "./Layout";

export const SimulationResult: React.FC<NavigationProps> = ({ navigate }) => {
    // Mock data for demonstration
    const lucroLiquido = 12450.00;
    const receita = 28500.00;
    const despesas = 16050.00;

    const custos = [
        { nome: "Combustível", valor: 6850, cor: "#0d7ff2", percent: 42.7 },
        { nome: "Pessoal", valor: 4200, cor: "#10b981", percent: 26.2 },
        { nome: "Impostos", valor: 3150, cor: "#f59e0b", percent: 19.6 },
        { nome: "Outros", valor: 1850, cor: "#8b5cf6", percent: 11.5 },
    ];

    return (
        <Layout navigate={navigate} activeView={AppView.FLEET_STEP_1}>
            <div className="container mx-auto max-w-7xl p-6 md:p-10 flex flex-col gap-8">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap gap-2 text-sm">
                    <button
                        onClick={() => navigate(AppView.DASHBOARD)}
                        className="text-[#60758a] dark:text-gray-400 font-medium hover:text-primary transition-colors"
                    >
                        Home
                    </button>
                    <span className="text-[#60758a] dark:text-gray-500">/</span>
                    <button
                        onClick={() => navigate(AppView.FLEET_STEP_1)}
                        className="text-[#60758a] dark:text-gray-400 font-medium hover:text-primary transition-colors"
                    >
                        Frota
                    </button>
                    <span className="text-[#60758a] dark:text-gray-500">/</span>
                    <span className="text-[#111418] dark:text-white font-semibold">
                        Resultado da Simulação
                    </span>
                </div>

                {/* Page Header */}
                <header className="flex flex-col gap-2">
                    <h1 className="text-[#111418] dark:text-white text-3xl font-extrabold tracking-tight">
                        Relatório Analítico de Custo
                    </h1>
                    <p className="text-[#60758a] dark:text-gray-400 text-base">
                        Rota: São Paulo, SP → Curitiba, PR | 408 km | Carreta Baú
                    </p>
                </header>

                {/* Scorecard Principal */}
                <section className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="size-16 rounded-full bg-white/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-4xl">
                                    trending_up
                                </span>
                            </div>
                            <div>
                                <p className="text-green-100 text-sm font-medium uppercase tracking-wide">
                                    Lucro Líquido Previsto
                                </p>
                                <p
                                    id="txt-lucro-final"
                                    className="text-white text-5xl font-extrabold tracking-tight"
                                >
                                    R$ {lucroLiquido.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="text-center">
                                <p className="text-green-100 text-xs font-medium">Margem</p>
                                <p id="txt-margem" className="text-white text-2xl font-bold">
                                    43.7%
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-green-100 text-xs font-medium">ROI Previsto</p>
                                <p id="txt-roi" className="text-white text-2xl font-bold">
                                    77.6%
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Charts Grid */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Receita vs Despesas - Bar Chart */}
                    <div className="bg-white dark:bg-[#1A2633] rounded-xl p-6 shadow-sm border border-[#e5e7eb] dark:border-[#2a3b4d]">
                        <h3 className="text-[#111418] dark:text-white text-lg font-bold mb-6">
                            Receita vs Despesas
                        </h3>
                        <div className="flex items-end justify-center gap-12 h-64">
                            {/* Receita Bar */}
                            <div className="flex flex-col items-center gap-2">
                                <span
                                    id="txt-receita-valor"
                                    className="text-[#111418] dark:text-white font-bold text-lg"
                                >
                                    R$ {receita.toLocaleString("pt-BR")}
                                </span>
                                <div
                                    className="w-24 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all"
                                    style={{ height: "200px" }}
                                ></div>
                                <span className="text-[#637588] dark:text-gray-400 text-sm font-medium">
                                    Receita
                                </span>
                            </div>
                            {/* Despesas Bar */}
                            <div className="flex flex-col items-center gap-2">
                                <span
                                    id="txt-despesas-valor"
                                    className="text-[#111418] dark:text-white font-bold text-lg"
                                >
                                    R$ {despesas.toLocaleString("pt-BR")}
                                </span>
                                <div
                                    className="w-24 bg-gradient-to-t from-red-500 to-orange-400 rounded-t-lg transition-all"
                                    style={{ height: `${(despesas / receita) * 200}px` }}
                                ></div>
                                <span className="text-[#637588] dark:text-gray-400 text-sm font-medium">
                                    Despesas
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Breakdown de Custos - Donut Chart */}
                    <div className="bg-white dark:bg-[#1A2633] rounded-xl p-6 shadow-sm border border-[#e5e7eb] dark:border-[#2a3b4d]">
                        <h3 className="text-[#111418] dark:text-white text-lg font-bold mb-6">
                            Breakdown de Custos
                        </h3>
                        <div className="flex items-center justify-center gap-8">
                            {/* Donut Chart SVG */}
                            <div className="relative">
                                <svg viewBox="0 0 36 36" className="w-40 h-40">
                                    {/* Combustível */}
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="15.915"
                                        fill="transparent"
                                        stroke="#0d7ff2"
                                        strokeWidth="3"
                                        strokeDasharray="42.7 57.3"
                                        strokeDashoffset="25"
                                    />
                                    {/* Pessoal */}
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="15.915"
                                        fill="transparent"
                                        stroke="#10b981"
                                        strokeWidth="3"
                                        strokeDasharray="26.2 73.8"
                                        strokeDashoffset={25 - 42.7}
                                    />
                                    {/* Impostos */}
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="15.915"
                                        fill="transparent"
                                        stroke="#f59e0b"
                                        strokeWidth="3"
                                        strokeDasharray="19.6 80.4"
                                        strokeDashoffset={25 - 42.7 - 26.2}
                                    />
                                    {/* Outros */}
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="15.915"
                                        fill="transparent"
                                        stroke="#8b5cf6"
                                        strokeWidth="3"
                                        strokeDasharray="11.5 88.5"
                                        strokeDashoffset={25 - 42.7 - 26.2 - 19.6}
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-[#111418] dark:text-white text-xl font-bold">
                                        100%
                                    </span>
                                </div>
                            </div>
                            {/* Legend */}
                            <div className="flex flex-col gap-3">
                                {custos.map((custo) => (
                                    <div key={custo.nome} className="flex items-center gap-3">
                                        <div
                                            className="size-3 rounded-full"
                                            style={{ backgroundColor: custo.cor }}
                                        ></div>
                                        <span className="text-[#637588] dark:text-gray-400 text-sm w-24">
                                            {custo.nome}
                                        </span>
                                        <span className="text-[#111418] dark:text-white text-sm font-semibold">
                                            R$ {custo.valor.toLocaleString("pt-BR")}
                                        </span>
                                        <span className="text-[#637588] dark:text-gray-500 text-xs">
                                            ({custo.percent}%)
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Actions */}
                <section className="flex flex-wrap items-center justify-end gap-4 pt-4 border-t border-[#e5e7eb] dark:border-[#2a3b4d]">
                    <button
                        id="btn-exportar-pdf"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[#dce0e5] dark:border-[#2a3b4d] bg-white dark:bg-[#1A2633] text-[#111418] dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-[#2a3b4d]/80 transition-colors"
                    >
                        <span className="material-symbols-outlined text-[20px]">
                            picture_as_pdf
                        </span>
                        Exportar PDF
                    </button>
                    <button
                        id="btn-enviar-email"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[#dce0e5] dark:border-[#2a3b4d] bg-white dark:bg-[#1A2633] text-[#111418] dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-[#2a3b4d]/80 transition-colors"
                    >
                        <span className="material-symbols-outlined text-[20px]">email</span>
                        Enviar por E-mail
                    </button>
                    <button
                        id="btn-aprovar-rota"
                        className="flex items-center gap-2 px-8 py-3 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold shadow-md hover:shadow-lg transition-all"
                    >
                        <span className="material-symbols-outlined text-[20px]">
                            check_circle
                        </span>
                        Aprovar Rota
                    </button>
                </section>

                {/* Footer */}
                <p className="text-center text-xs text-[#9ca3af] dark:text-gray-600 pt-4">
                    SSW Systems © 2024. Relatório gerado em {new Date().toLocaleString("pt-BR")}
                </p>
            </div>
        </Layout>
    );
};
