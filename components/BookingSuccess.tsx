import React from "react";
import { AppView, NavigationProps } from "../types";
import { Layout } from "./Layout";

export const BookingSuccess: React.FC<NavigationProps> = ({ navigate }) => {
    // Mock generated data
    const cteNumber = "39902";
    const trackingCode = "TRK-BR-99";
    const timestamp = new Date().toLocaleString("pt-BR");

    return (
        <Layout navigate={navigate} activeView={AppView.ORDER_ENTRY}>
            <div className="container mx-auto max-w-4xl p-6 md:p-10 flex flex-col items-center justify-center min-h-[80vh] gap-8">
                {/* Success Icon */}
                <div className="relative">
                    <div className="size-32 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center animate-pulse">
                        <div className="size-24 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                            <span className="material-symbols-outlined text-white text-6xl">
                                check
                            </span>
                        </div>
                    </div>
                    {/* Decorative rings */}
                    <div className="absolute inset-0 size-32 rounded-full border-4 border-green-200 dark:border-green-800 animate-ping opacity-30"></div>
                </div>

                {/* Success Message */}
                <div className="text-center">
                    <h1
                        id="txt-titulo-sucesso"
                        className="text-[#111418] dark:text-white text-3xl md:text-4xl font-extrabold tracking-tight mb-3"
                    >
                        Ordem de Coleta Enviada com Sucesso!
                    </h1>
                    <p className="text-[#637588] dark:text-gray-400 text-lg">
                        Sua solicitação foi processada e os documentos fiscais foram gerados.
                    </p>
                </div>

                {/* Generated Data Cards */}
                <div className="flex flex-col sm:flex-row gap-6 w-full max-w-xl">
                    <div className="flex-1 bg-white dark:bg-[#1A2633] rounded-xl p-6 shadow-sm border border-[#e5e7eb] dark:border-[#2a3b4d] text-center">
                        <div className="size-12 mx-auto mb-3 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-2xl">
                                receipt_long
                            </span>
                        </div>
                        <p className="text-[#637588] dark:text-gray-400 text-sm mb-1">
                            CT-e Gerado
                        </p>
                        <p
                            id="txt-cte-gerado"
                            className="text-[#111418] dark:text-white text-2xl font-bold"
                        >
                            #{cteNumber}
                        </p>
                    </div>
                    <div className="flex-1 bg-white dark:bg-[#1A2633] rounded-xl p-6 shadow-sm border border-[#e5e7eb] dark:border-[#2a3b4d] text-center">
                        <div className="size-12 mx-auto mb-3 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                            <span className="material-symbols-outlined text-2xl">
                                qr_code_2
                            </span>
                        </div>
                        <p className="text-[#637588] dark:text-gray-400 text-sm mb-1">
                            Código de Rastreio
                        </p>
                        <p
                            id="txt-rastreio"
                            className="text-[#111418] dark:text-white text-2xl font-bold"
                        >
                            {trackingCode}
                        </p>
                    </div>
                </div>

                {/* Timestamp */}
                <p className="text-[#9ca3af] dark:text-gray-500 text-sm">
                    Emitido em: <span className="font-medium">{timestamp}</span>
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
                    <button
                        id="btn-imprimir-etiqueta"
                        className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl border-2 border-[#e5e7eb] dark:border-[#2a3b4d] bg-white dark:bg-[#1A2633] text-[#111418] dark:text-white font-semibold hover:border-primary hover:bg-primary/5 transition-all"
                    >
                        <span className="material-symbols-outlined text-[24px]">print</span>
                        Imprimir Etiqueta
                    </button>
                    <button
                        id="btn-baixar-xml"
                        className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl border-2 border-[#e5e7eb] dark:border-[#2a3b4d] bg-white dark:bg-[#1A2633] text-[#111418] dark:text-white font-semibold hover:border-primary hover:bg-primary/5 transition-all"
                    >
                        <span className="material-symbols-outlined text-[24px]">
                            download
                        </span>
                        Baixar XML
                    </button>
                    <button
                        id="btn-novo-pedido"
                        onClick={() => navigate(AppView.ORDER_ENTRY)}
                        className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold shadow-md hover:shadow-lg transition-all"
                    >
                        <span className="material-symbols-outlined text-[24px]">add</span>
                        Novo Pedido
                    </button>
                </div>

                {/* Back to Dashboard Link */}
                <button
                    onClick={() => navigate(AppView.DASHBOARD)}
                    className="text-primary hover:text-primary-dark font-medium flex items-center gap-2 transition-colors"
                >
                    <span className="material-symbols-outlined text-[18px]">
                        arrow_back
                    </span>
                    Voltar ao Dashboard
                </button>
            </div>
        </Layout>
    );
};
