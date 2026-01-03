import React from "react";
import { AppView, NavigationProps } from "../types";
import { Layout } from "./Layout";

export const FleetSimulationStep1: React.FC<NavigationProps> = ({ navigate }) => {
  return (
    <Layout navigate={navigate} activeView={AppView.FLEET_STEP_1}>
      <div className="container mx-auto max-w-[1200px] p-6 md:p-10 flex flex-col gap-6">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 text-sm">
          <button
            onClick={() => navigate(AppView.DASHBOARD)}
            className="text-[#60758a] dark:text-gray-400 font-medium hover:text-primary transition-colors"
          >
            Home
          </button>
          <span className="text-[#60758a] dark:text-gray-500">/</span>
          <span className="text-[#60758a] dark:text-gray-400 font-medium">
            Frota
          </span>
          <span className="text-[#60758a] dark:text-gray-500">/</span>
          <span className="text-[#111418] dark:text-white font-semibold">
            Simulação de Custos
          </span>
        </div>
        {/* Page Heading & Progress */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-[#e5e7eb] dark:border-[#2a3642]">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#111418] dark:text-white text-3xl font-extrabold tracking-tight">
              Simulação de Custos de Rota
            </h1>
            <p className="text-[#60758a] dark:text-gray-400 text-base">
              Etapa 1: Dados da Carga e Rota - Preencha os dados iniciais para
              gerar a previsão.
            </p>
          </div>
          {/* Stepper */}
          <div className="w-full md:w-1/3 min-w-[300px]">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-bold text-primary">Etapa 1</span>
              <span className="text-xs font-medium text-[#60758a] dark:text-gray-500">
                Etapa 2
              </span>
            </div>
            <div className="h-2 w-full bg-[#e5e7eb] dark:bg-[#2a3642] rounded-full overflow-hidden">
              <div className="h-full bg-primary w-1/2 rounded-full"></div>
            </div>
            <div className="flex justify-between mt-1 text-xs text-[#60758a] dark:text-gray-500">
              <span>Dados Iniciais</span>
              <span>Custos &amp; Resultados</span>
            </div>
          </div>
        </div>
        {/* Main Form Card */}
        <div className="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-[#e5e7eb] dark:border-[#2a3642] overflow-hidden">
          <form
            className="flex flex-col"
            onSubmit={(e) => {
              e.preventDefault();
              navigate(AppView.FLEET_LOADING);
            }}
          >
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#e5e7eb] dark:divide-[#2a3642]">
              {/* Column 1: Rota */}
              <div className="p-6 flex flex-col gap-5">
                <div className="flex items-center gap-2 pb-2 border-b border-dashed border-[#e5e7eb] dark:border-[#2a3642]">
                  <span className="material-symbols-outlined text-primary text-xl">
                    map
                  </span>
                  <h3 className="text-xs font-bold text-[#60758a] dark:text-gray-400 tracking-wider uppercase">
                    Dados da Rota
                  </h3>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-sm font-semibold text-[#111418] dark:text-gray-200"
                    htmlFor="step1-origem"
                  >
                    Cidade Origem
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#9ca3af] text-[20px]">
                      trip_origin
                    </span>
                    <input
                      className="w-full pl-10 pr-3 py-2 bg-white dark:bg-[#101922] border border-[#d1d5db] dark:border-[#374151] rounded-md text-sm text-[#111418] dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400"
                      id="step1-origem"
                      placeholder="Ex: São Paulo, SP"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-sm font-semibold text-[#111418] dark:text-gray-200"
                    htmlFor="step1-destino"
                  >
                    Cidade Destino
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#9ca3af] text-[20px]">
                      location_on
                    </span>
                    <input
                      className="w-full pl-10 pr-3 py-2 bg-white dark:bg-[#101922] border border-[#d1d5db] dark:border-[#374151] rounded-md text-sm text-[#111418] dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400"
                      id="step1-destino"
                      placeholder="Ex: Curitiba, PR"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-sm font-semibold text-[#111418] dark:text-gray-200"
                    htmlFor="step1-distancia"
                  >
                    Distância Estimada (km)
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#9ca3af] text-[20px]">
                      straighten
                    </span>
                    <input
                      className="w-full pl-10 pr-3 py-2 bg-white dark:bg-[#101922] border border-[#d1d5db] dark:border-[#374151] rounded-md text-sm text-[#111418] dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400"
                      id="step1-distancia"
                      placeholder="0"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              {/* Column 2: Logística */}
              <div className="p-6 flex flex-col gap-5">
                <div className="flex items-center gap-2 pb-2 border-b border-dashed border-[#e5e7eb] dark:border-[#2a3642]">
                  <span className="material-symbols-outlined text-primary text-xl">
                    schedule
                  </span>
                  <h3 className="text-xs font-bold text-[#60758a] dark:text-gray-400 tracking-wider uppercase">
                    Logística
                  </h3>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-sm font-semibold text-[#111418] dark:text-gray-200"
                    htmlFor="step1-data-saida"
                  >
                    Data de Saída
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#9ca3af] text-[20px]">
                      calendar_today
                    </span>
                    <input
                      className="w-full pl-10 pr-3 py-2 bg-white dark:bg-[#101922] border border-[#d1d5db] dark:border-[#374151] rounded-md text-sm text-[#111418] dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400 [color-scheme:light] dark:[color-scheme:dark]"
                      id="step1-data-saida"
                      type="date"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-sm font-semibold text-[#111418] dark:text-gray-200"
                    htmlFor="step1-prev-chegada"
                  >
                    Previsão de Chegada
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#9ca3af] text-[20px]">
                      event_available
                    </span>
                    <input
                      className="w-full pl-10 pr-3 py-2 bg-white dark:bg-[#101922] border border-[#d1d5db] dark:border-[#374151] rounded-md text-sm text-[#111418] dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400 [color-scheme:light] dark:[color-scheme:dark]"
                      id="step1-prev-chegada"
                      type="date"
                    />
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-md mt-auto">
                  <div className="flex gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">
                      info
                    </span>
                    <p className="text-xs text-[#60758a] dark:text-gray-400 leading-relaxed">
                      Os tempos de parada e descanso serão calculados
                      automaticamente com base na legislação vigente na próxima
                      etapa.
                    </p>
                  </div>
                </div>
              </div>
              {/* Column 3: Veículo */}
              <div className="p-6 flex flex-col gap-5">
                <div className="flex items-center gap-2 pb-2 border-b border-dashed border-[#e5e7eb] dark:border-[#2a3642]">
                  <span className="material-symbols-outlined text-primary text-xl">
                    local_shipping
                  </span>
                  <h3 className="text-xs font-bold text-[#60758a] dark:text-gray-400 tracking-wider uppercase">
                    Veículo
                  </h3>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-sm font-semibold text-[#111418] dark:text-gray-200"
                    htmlFor="step1-tipo-veiculo"
                  >
                    Tipo de Veículo
                  </label>
                  <div className="relative">
                    <select
                      className="w-full pl-3 pr-10 py-2 bg-white dark:bg-[#101922] border border-[#d1d5db] dark:border-[#374151] rounded-md text-sm text-[#111418] dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
                      id="step1-tipo-veiculo"
                      defaultValue=""
                    >
                      <option disabled value="">
                        Selecione...
                      </option>
                      <option value="truck_light">Caminhão Leve (3/4)</option>
                      <option value="truck_medium">Caminhão Toco</option>
                      <option value="truck_heavy">
                        Carreta (Cavalo Mecânico)
                      </option>
                      <option value="van">Utilitário / Van</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-2.5 text-[#9ca3af] pointer-events-none text-[20px]">
                      expand_more
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-sm font-semibold text-[#111418] dark:text-gray-200"
                    htmlFor="step1-tipo-carroceria"
                  >
                    Tipo de Carroceria
                  </label>
                  <div className="relative">
                    <select
                      className="w-full pl-3 pr-10 py-2 bg-white dark:bg-[#101922] border border-[#d1d5db] dark:border-[#374151] rounded-md text-sm text-[#111418] dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
                      id="step1-tipo-carroceria"
                      defaultValue=""
                    >
                      <option disabled value="">
                        Selecione...
                      </option>
                      <option value="bau">Baú Fechado</option>
                      <option value="sider">Sider</option>
                      <option value="graneleiro">Graneleiro</option>
                      <option value="refrigerado">Refrigerado</option>
                      <option value="tanque">Tanque</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-2.5 text-[#9ca3af] pointer-events-none text-[20px]">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Highlighted Input Section: Preço Diesel */}
            <div className="bg-primary/5 dark:bg-primary/10 border-t border-[#e5e7eb] dark:border-[#2a3642] p-6">
              <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
                <div className="flex gap-4 items-start md:items-center max-w-xl">
                  <div className="size-10 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">
                      local_gas_station
                    </span>
                  </div>
                  <div>
                    <h4 className="text-[#111418] dark:text-white font-bold text-lg leading-tight">
                      Variável Crítica de Custo
                    </h4>
                    <p className="text-sm text-[#60758a] dark:text-gray-400 mt-1">
                      O valor do combustível impacta diretamente em 40-60% do
                      custo final do frete. Certifique-se de que o valor está
                      atualizado.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 w-full md:w-auto min-w-[240px]">
                  <label
                    className="text-sm font-bold text-primary dark:text-blue-400"
                    htmlFor="step1-preco-diesel"
                  >
                    Preço Atual do Diesel (R$)
                  </label>
                  <div className="relative group">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#111418] dark:text-white font-bold text-lg">
                      R$
                    </span>
                    <input
                      className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#101922] border-2 border-primary/30 group-hover:border-primary rounded-lg text-lg font-bold text-[#111418] dark:text-white focus:outline-none focus:border-primary focus:ring-0 transition-all shadow-sm"
                      id="step1-preco-diesel"
                      placeholder="0,00"
                      step="0.01"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Footer / Actions */}
            <div className="bg-[#f8fafc] dark:bg-[#15202b] px-6 py-5 border-t border-[#e5e7eb] dark:border-[#2a3642] flex items-center justify-between">
              <button
                className="text-[#60758a] dark:text-gray-400 font-bold text-sm px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                type="button"
                onClick={() => navigate(AppView.DASHBOARD)}
              >
                Cancelar
              </button>
              <button
                className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white text-base font-bold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-95"
                id="btn-processar-pre-calculo"
                type="submit"
              >
                Processar Pré-Cálculo
                <span className="material-symbols-outlined text-[20px]">
                  double_arrow
                </span>
              </button>
            </div>
          </form>
        </div>
        {/* Helper text */}
        <p className="text-center text-xs text-[#9ca3af] dark:text-gray-600">
          SSW Systems © 2024. Todos os direitos reservados. ID da Sessão:{" "}
          <span className="font-mono">8X92-LK99</span>
        </p>
      </div>
    </Layout>
  );
};
