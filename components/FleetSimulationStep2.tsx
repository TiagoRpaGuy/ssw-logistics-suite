import React from "react";
import { AppView, NavigationProps } from "../types";
import { Layout } from "./Layout";

export const FleetSimulationStep2: React.FC<NavigationProps> = ({ navigate }) => {
  return (
    <Layout navigate={navigate} activeView={AppView.FLEET_STEP_1}>
      <div className="container mx-auto max-w-[960px] p-6 md:p-10 flex flex-col gap-8">
        {/* Page Heading & Wizard Progress */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-[#111418] dark:text-white mb-1">
                Simulação de Custos de Rota
              </h1>
              <p className="text-[#637588] dark:text-gray-400 text-base">
                Wizard de configuração para análise de rentabilidade
              </p>
            </div>
            <div className="text-right hidden md:block">
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                Etapa 2
              </span>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-[#111418] dark:text-white">Progresso da Simulação</span>
              <span className="text-primary font-bold">Step 2 of 2</span>
            </div>
            <div className="h-2 w-full bg-[#e5e7eb] dark:bg-[#2a3b4d] rounded-full overflow-hidden">
              <div
                className="h-full bg-primary w-full transition-all duration-500 ease-out"
                style={{ width: "100%" }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-[#637588] dark:text-gray-500">
              <span>Definição de Rota</span>
              <span>Refinamento de Custos</span>
            </div>
          </div>
        </div>
        {/* Form Container */}
        <form
          className="bg-white dark:bg-[#1A2633] rounded-xl border border-[#e5e7eb] dark:border-[#2a3b4d] shadow-sm p-6 md:p-8 flex flex-col gap-8"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(AppView.SIMULATION_RESULT);
          }}
        >
          {/* Section 1: Custos Variáveis */}
          <section>
            <div className="flex items-center gap-2 mb-6 border-b border-[#e5e7eb] dark:border-[#2a3b4d] pb-3">
              <span className="material-symbols-outlined text-primary">
                payments
              </span>
              <h3 className="text-lg font-bold text-[#111418] dark:text-white">
                Custos Variáveis
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-[#111418] dark:text-gray-200">
                  Valor do Pedágio (R$)
                </span>
                <input
                  className="w-full rounded-lg text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-[#d1d5db] dark:border-[#374151] bg-white dark:bg-[#101922] focus:border-primary h-14 placeholder:text-[#9ca3af] p-4 text-base font-normal transition-all duration-200"
                  id="step2-pedagio"
                  placeholder="0,00"
                  type="text"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-[#111418] dark:text-gray-200">
                  Custo de Alimentação Motorista
                </span>
                <input
                  className="w-full rounded-lg text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-[#d1d5db] dark:border-[#374151] bg-white dark:bg-[#101922] focus:border-primary h-14 placeholder:text-[#9ca3af] p-4 text-base font-normal transition-all duration-200"
                  id="step2-alimentacao"
                  placeholder="0,00"
                  type="text"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-[#111418] dark:text-gray-200">
                  Diária Motorista
                </span>
                <input
                  className="w-full rounded-lg text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-[#d1d5db] dark:border-[#374151] bg-white dark:bg-[#101922] focus:border-primary h-14 placeholder:text-[#9ca3af] p-4 text-base font-normal transition-all duration-200"
                  id="step2-diaria"
                  placeholder="0,00"
                  type="text"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-[#111418] dark:text-gray-200">
                  Custo de Ajudantes
                </span>
                <input
                  className="w-full rounded-lg text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-[#d1d5db] dark:border-[#374151] bg-white dark:bg-[#101922] focus:border-primary h-14 placeholder:text-[#9ca3af] p-4 text-base font-normal transition-all duration-200"
                  id="step2-ajudantes"
                  placeholder="0,00"
                  type="text"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-[#111418] dark:text-gray-200">
                  Taxa de Carga/Descarga
                </span>
                <input
                  className="w-full rounded-lg text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-[#d1d5db] dark:border-[#374151] bg-white dark:bg-[#101922] focus:border-primary h-14 placeholder:text-[#9ca3af] p-4 text-base font-normal transition-all duration-200"
                  id="step2-taxa-carga"
                  placeholder="0,00"
                  type="text"
                />
              </label>
            </div>
          </section>
          {/* Section 2: Impostos e Seguros */}
          <section>
            <div className="flex items-center gap-2 mb-6 border-b border-[#e5e7eb] dark:border-[#2a3b4d] pb-3">
              <span className="material-symbols-outlined text-primary">
                account_balance
              </span>
              <h3 className="text-lg font-bold text-[#111418] dark:text-white">
                Impostos e Seguros
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-[#111418] dark:text-gray-200">
                  Alíquota ICMS (%)
                </span>
                <input
                  className="w-full rounded-lg text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-[#d1d5db] dark:border-[#374151] bg-white dark:bg-[#101922] focus:border-primary h-14 placeholder:text-[#9ca3af] p-4 text-base font-normal transition-all duration-200"
                  id="step2-icms"
                  placeholder="0%"
                  type="text"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-[#111418] dark:text-gray-200">
                  Valor NF Carga (R$)
                </span>
                <input
                  className="w-full rounded-lg text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-[#d1d5db] dark:border-[#374151] bg-white dark:bg-[#101922] focus:border-primary h-14 placeholder:text-[#9ca3af] p-4 text-base font-normal transition-all duration-200"
                  id="step2-valor-nf"
                  placeholder="0,00"
                  type="text"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-[#111418] dark:text-gray-200">
                  Ad Valorem (%)
                </span>
                <input
                  className="w-full rounded-lg text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-[#d1d5db] dark:border-[#374151] bg-white dark:bg-[#101922] focus:border-primary h-14 placeholder:text-[#9ca3af] p-4 text-base font-normal transition-all duration-200"
                  id="step2-ad-valorem"
                  placeholder="0,00"
                  type="text"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-[#111418] dark:text-gray-200">
                  Taxa GRIS (%)
                </span>
                <input
                  className="w-full rounded-lg text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-[#d1d5db] dark:border-[#374151] bg-white dark:bg-[#101922] focus:border-primary h-14 placeholder:text-[#9ca3af] p-4 text-base font-normal transition-all duration-200"
                  id="step2-gris"
                  placeholder="0,00"
                  type="text"
                />
              </label>
            </div>
          </section>
          {/* Section 3: Adicionais */}
          <section>
            <div className="flex items-center gap-2 mb-6 border-b border-[#e5e7eb] dark:border-[#2a3b4d] pb-3">
              <span className="material-symbols-outlined text-primary">
                add_road
              </span>
              <h3 className="text-lg font-bold text-[#111418] dark:text-white">
                Adicionais de Rota
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <label
                className="flex items-center gap-3 p-4 rounded-lg border border-transparent hover:bg-gray-50 dark:hover:bg-[#2a3b4d]/50 hover:border-[#e5e7eb] dark:hover:border-[#2a3b4d] transition-all cursor-pointer bg-gray-50/50 dark:bg-[#1a2632]"
                htmlFor="step2-rota-perigosa"
              >
                <input
                  className="h-5 w-5 rounded border-[#d1d5db] dark:border-[#374151] text-primary focus:ring-primary focus:ring-offset-0 bg-white dark:bg-[#101922]"
                  id="step2-rota-perigosa"
                  type="checkbox"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#111418] dark:text-white">
                    Rota Perigosa
                  </span>
                  <span className="text-xs text-[#637588] dark:text-gray-500">
                    Aplica sobretaxa de seguro
                  </span>
                </div>
              </label>
              <label
                className="flex items-center gap-3 p-4 rounded-lg border border-transparent hover:bg-gray-50 dark:hover:bg-[#2a3b4d]/50 hover:border-[#e5e7eb] dark:hover:border-[#2a3b4d] transition-all cursor-pointer bg-gray-50/50 dark:bg-[#1a2632]"
                htmlFor="step2-horario-comercial"
              >
                <input
                  className="h-5 w-5 rounded border-[#d1d5db] dark:border-[#374151] text-primary focus:ring-primary focus:ring-offset-0 bg-white dark:bg-[#101922]"
                  id="step2-horario-comercial"
                  type="checkbox"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#111418] dark:text-white">
                    Horário Comercial
                  </span>
                  <span className="text-xs text-[#637588] dark:text-gray-500">
                    Restrição de entrega
                  </span>
                </div>
              </label>
              <label
                className="flex items-center gap-3 p-4 rounded-lg border border-transparent hover:bg-gray-50 dark:hover:bg-[#2a3b4d]/50 hover:border-[#e5e7eb] dark:hover:border-[#2a3b4d] transition-all cursor-pointer bg-gray-50/50 dark:bg-[#1a2632]"
                htmlFor="step2-escolta-armada"
              >
                <input
                  className="h-5 w-5 rounded border-[#d1d5db] dark:border-[#374151] text-primary focus:ring-primary focus:ring-offset-0 bg-white dark:bg-[#101922]"
                  id="step2-escolta-armada"
                  type="checkbox"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#111418] dark:text-white">
                    Escolta Armada
                  </span>
                  <span className="text-xs text-[#637588] dark:text-gray-500">
                    Exige contratação extra
                  </span>
                </div>
              </label>
            </div>
          </section>
          {/* Action Area */}
          <div className="mt-8 pt-6 border-t border-[#e5e7eb] dark:border-[#2a3b4d] flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
            <button
              className="w-full sm:w-auto px-6 py-3 rounded-lg text-[#111418] dark:text-white font-bold text-sm border border-[#e5e7eb] dark:border-[#2a3b4d] bg-white dark:bg-[#1A2633] hover:bg-gray-50 dark:hover:bg-[#2a3b4d]/80 transition-colors flex items-center justify-center gap-2"
              type="button"
              onClick={() => navigate(AppView.FLEET_STEP_1)}
            >
              <span className="material-symbols-outlined text-[18px]">
                arrow_back
              </span>
              Voltar para Rota
            </button>
            <button
              className="w-full sm:w-auto px-8 py-3 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              id="btn-gerar-relatorio"
              type="submit"
            >
              <span className="material-symbols-outlined text-[20px]">
                analytics
              </span>
              Gerar Relatório de Lucratividade
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
