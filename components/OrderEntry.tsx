import React from "react";
import { AppView, NavigationProps } from "../types";
import { Layout } from "./Layout";

export const OrderEntry: React.FC<NavigationProps> = ({ navigate }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(AppView.BOOKING_SUCCESS);
  };

  return (
    <Layout navigate={navigate} activeView={AppView.ORDER_ENTRY}>
      <div className="container mx-auto max-w-7xl p-6 md:p-10 flex flex-col gap-6">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <h1 className="text-[#111418] dark:text-white text-2xl font-bold leading-tight tracking-tight">
                Emissão de Ordem de Coleta
              </h1>
              <span className="px-2 py-0.5 rounded text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                Rascunho
              </span>
            </div>
            <p className="text-[#637588] dark:text-gray-400 text-sm">
              Preencha os dados abaixo para gerar o CT-e e notificar a
              expedição.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => navigate(AppView.DASHBOARD)}
              className="px-4 py-2 rounded-lg border border-[#e5e7eb] dark:border-[#2a3b4d] bg-white dark:bg-[#1A2633] hover:bg-gray-50 dark:hover:bg-[#2a3b4d]/80 text-[#111418] dark:text-white text-sm font-medium transition-colors"
            >
              Cancelar
            </button>
            <button className="px-4 py-2 rounded-lg border border-[#e5e7eb] dark:border-[#2a3b4d] bg-white dark:bg-[#1A2633] hover:bg-gray-50 dark:hover:bg-[#2a3b4d]/80 text-[#111418] dark:text-white text-sm font-medium flex items-center gap-2 transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                save
              </span>
              Salvar Rascunho
            </button>
          </div>
        </header>

        {/* Form Content */}
        <div className="bg-white dark:bg-[#1A2633] rounded-xl shadow-sm border border-[#e5e7eb] dark:border-[#2a3b4d] p-6">
          <form onSubmit={handleSubmit}>
            {/* 3 Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Column 1: Dados do Cliente */}
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2 border-b border-[#e5e7eb] dark:border-[#2a3b4d] pb-2 mb-1">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: "20px" }}>
                    business
                  </span>
                  <h3 className="text-[#111418] dark:text-white font-bold text-base">
                    Dados do Cliente
                  </h3>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[#111418] dark:text-gray-200 text-sm font-semibold"
                    htmlFor="input-cnpj-remetente"
                  >
                    CNPJ do Cliente (Remetente)
                  </label>
                  <div className="relative flex w-full">
                    <input
                      className="h-10 w-full rounded-lg border border-[#d1d5db] dark:border-[#374151] bg-white dark:bg-[#101922] text-[#111418] dark:text-white focus:ring-1 focus:ring-primary focus:border-primary text-sm pl-3 pr-10"
                      id="input-cnpj-remetente"
                      placeholder="00.000.000/0000-00"
                      type="text"
                    />
                    <button
                      type="button"
                      className="absolute right-0 top-0 bottom-0 px-3 text-[#9ca3af] hover:text-primary transition-colors flex items-center"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                        search
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[#111418] dark:text-gray-200 text-sm font-semibold"
                    htmlFor="input-razao-social"
                  >
                    Razão Social
                  </label>
                  <input
                    className="h-10 w-full rounded-lg border border-[#d1d5db] dark:border-[#374151] bg-white dark:bg-[#101922] text-[#111418] dark:text-white focus:ring-1 focus:ring-primary focus:border-primary text-sm px-3"
                    id="input-razao-social"
                    placeholder="Nome da empresa"
                    type="text"
                  />
                </div>
              </div>

              {/* Column 2: Especificações da Carga */}
              <div className="flex flex-col gap-5 border-t lg:border-t-0 lg:border-l border-[#e5e7eb] dark:border-[#2a3b4d] pt-5 lg:pt-0 lg:pl-8">
                <div className="flex items-center gap-2 border-b border-[#e5e7eb] dark:border-[#2a3b4d] pb-2 mb-1">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: "20px" }}>
                    package_2
                  </span>
                  <h3 className="text-[#111418] dark:text-white font-bold text-base">
                    Especificações da Carga
                  </h3>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[#111418] dark:text-gray-200 text-sm font-semibold"
                    htmlFor="input-nf"
                  >
                    Número da Nota Fiscal
                  </label>
                  <input
                    className="h-10 w-full rounded-lg border border-[#d1d5db] dark:border-[#374151] bg-white dark:bg-[#101922] text-[#111418] dark:text-white focus:ring-1 focus:ring-primary focus:border-primary text-sm px-3"
                    id="input-nf"
                    placeholder="Ex: 45092"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[#111418] dark:text-gray-200 text-sm font-semibold"
                    htmlFor="input-valor-mercadoria"
                  >
                    Valor da Mercadoria (R$)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af] text-sm">
                      R$
                    </span>
                    <input
                      className="h-10 w-full rounded-lg border border-[#d1d5db] dark:border-[#374151] bg-white dark:bg-[#101922] text-[#111418] dark:text-white focus:ring-1 focus:ring-primary focus:border-primary text-sm pl-9 pr-3"
                      id="input-valor-mercadoria"
                      placeholder="0,00"
                      type="number"
                    />
                  </div>
                </div>
              </div>

              {/* Column 3: SLA */}
              <div className="flex flex-col gap-5 border-t lg:border-t-0 lg:border-l border-[#e5e7eb] dark:border-[#2a3b4d] pt-5 lg:pt-0 lg:pl-8">
                <div className="flex items-center gap-2 border-b border-[#e5e7eb] dark:border-[#2a3b4d] pb-2 mb-1">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: "20px" }}>
                    warning
                  </span>
                  <h3 className="text-[#111418] dark:text-white font-bold text-base">
                    SLA e Risco
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#111418] dark:text-gray-200 text-sm font-semibold">
                    Prioridade
                  </label>
                  <div className="flex rounded-lg bg-gray-50 dark:bg-[#101922] p-1 border border-[#e5e7eb] dark:border-[#374151]">
                    <label className="flex-1 text-center cursor-pointer">
                      <input
                        defaultChecked
                        className="peer sr-only"
                        id="radio-prioridade-normal"
                        name="prioridade"
                        type="radio"
                      />
                      <span className="block px-3 py-1.5 rounded text-xs font-medium text-[#637588] peer-checked:bg-white dark:peer-checked:bg-[#1A2633] peer-checked:text-[#111418] dark:peer-checked:text-white peer-checked:shadow-sm transition-all">
                        Normal
                      </span>
                    </label>
                    <label className="flex-1 text-center cursor-pointer">
                      <input
                        className="peer sr-only"
                        id="radio-prioridade-urgente"
                        name="prioridade"
                        type="radio"
                      />
                      <span className="block px-3 py-1.5 rounded text-xs font-medium text-[#637588] peer-checked:bg-amber-100 peer-checked:text-amber-800 dark:peer-checked:bg-amber-900 dark:peer-checked:text-amber-100 peer-checked:shadow-sm transition-all">
                        Urgente
                      </span>
                    </label>
                    <label className="flex-1 text-center cursor-pointer">
                      <input
                        className="peer sr-only"
                        id="radio-prioridade-critico"
                        name="prioridade"
                        type="radio"
                      />
                      <span className="block px-3 py-1.5 rounded text-xs font-medium text-[#637588] peer-checked:bg-red-100 peer-checked:text-red-800 dark:peer-checked:bg-red-900 dark:peer-checked:text-red-100 peer-checked:shadow-sm transition-all">
                        Crítico
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-[#e5e7eb] dark:border-[#2a3b4d]">
              <div className="flex flex-col gap-4">
                <label
                  className="text-[#111418] dark:text-gray-200 text-sm font-semibold"
                  htmlFor="textarea-observacoes"
                >
                  Observações para o Motorista
                </label>
                <textarea
                  className="w-full rounded-lg border border-[#d1d5db] dark:border-[#374151] bg-white dark:bg-[#101922] text-[#111418] dark:text-white focus:ring-1 focus:ring-primary focus:border-primary text-sm p-3 resize-none"
                  id="textarea-observacoes"
                  placeholder="Instruções de acesso, EPIs necessários, horários de restrição, etc..."
                  rows={3}
                ></textarea>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2 transform active:scale-95"
                  id="btn-confirmar-booking"
                  type="submit"
                >
                  <span>Confirmar Booking e Gerar CT-e</span>
                  <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                    check_circle
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
