import React from "react";
import { AppView, NavigationProps } from "../types";

export const Login: React.FC<NavigationProps> = ({ navigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[1200px] h-[800px] max-h-[90vh] bg-white dark:bg-[#1a2632] rounded-2xl shadow-xl overflow-hidden flex flex-row">
        {/* Left Side: Login Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-12 py-16 lg:px-20 relative">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">
                  warehouse
                </span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#111418] dark:text-white">
                SSW
              </span>
            </div>
            <p className="text-sm font-medium text-[#60758a] dark:text-[#93adc8] tracking-wide uppercase">
              Soares Smart Warehousing
            </p>
          </div>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#111418] dark:text-white mb-2">
              Login Corporativo
            </h1>
            <p className="text-[#60758a] dark:text-[#93adc8]">
              Entre com suas credenciais para acessar o painel de controle.
            </p>
          </div>
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              navigate(AppView.DASHBOARD);
            }}
          >
            {/* User Input */}
            <div className="space-y-2">
              <label
                className="block text-sm font-medium text-[#111418] dark:text-gray-200"
                htmlFor="input-usuario"
              >
                Usuário
              </label>
              <div className="relative">
                <input
                  className="block w-full h-12 px-4 rounded-lg border border-[#dbe0e6] dark:border-[#344152] bg-white dark:bg-[#101922] text-[#111418] dark:text-white placeholder:text-[#60758a] focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200 outline-none"
                  id="input-usuario"
                  placeholder="ex: nome.sobrenome"
                  type="text"
                  defaultValue="ricardo.soares"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#60758a] pointer-events-none">
                  <span className="material-symbols-outlined text-[20px]">
                    person
                  </span>
                </span>
              </div>
            </div>
            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  className="block text-sm font-medium text-[#111418] dark:text-gray-200"
                  htmlFor="input-senha"
                >
                  Senha
                </label>
              </div>
              <div className="relative group">
                <input
                  className="block w-full h-12 pl-4 pr-12 rounded-lg border border-[#dbe0e6] dark:border-[#344152] bg-white dark:bg-[#101922] text-[#111418] dark:text-white placeholder:text-[#60758a] focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200 outline-none"
                  id="input-senha"
                  placeholder="Digite sua senha"
                  type="password"
                  defaultValue="password"
                />
                <button
                  aria-label="Mostrar senha"
                  className="absolute right-0 top-0 h-full px-3 flex items-center justify-center text-[#60758a] hover:text-[#111418] dark:hover:text-white transition-colors cursor-pointer rounded-r-lg focus:outline-none"
                  id="btn-toggle-senha"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    visibility
                  </span>
                </button>
              </div>
              <div className="flex justify-end pt-1">
                <a
                  className="text-sm font-medium text-primary hover:text-primary-dark hover:underline transition-colors"
                  href="#"
                  id="link-esqueceu-senha"
                >
                  Esqueceu sua senha?
                </a>
              </div>
            </div>
            {/* Submit Button */}
            <button
              className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 group"
              id="btn-acessar"
              type="submit"
            >
              <span>Acessar Sistema</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </form>
          <div className="mt-auto pt-10 text-center lg:text-left">
            <p className="text-xs text-[#93adc8]">
              © 2024 Soares Smart Warehousing v2.1. Todos os direitos reservados.
            </p>
          </div>
        </div>
        {/* Right Side: Visual / Branding */}
        <div className="hidden lg:flex w-1/2 relative bg-[#f0f4f8] dark:bg-[#0d141c] items-center justify-center overflow-hidden">
          {/* Abstract shapes/gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 opacity-50 z-0"></div>
          {/* Replaced Image with working Unsplash link */}
          <img
            alt="Modern automated warehouse interior with shelves and packages"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 z-10"
            src="https://picsum.photos/id/192/1200/1800"
          />
          <div className="relative z-20 p-12 max-w-lg">
            <div className="bg-white/80 dark:bg-black/40 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
              <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">inventory_2</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">
                    local_shipping
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-[#111418] dark:text-white mb-3">
                Eficiência Logística em Tempo Real
              </h2>
              <p className="text-[#60758a] dark:text-gray-300 leading-relaxed">
                Gerencie seu estoque, rastreie remessas e otimize operações com
                nossa plataforma RPA-friendly de última geração.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-[#60758a] dark:text-gray-400">
                <span className="material-symbols-outlined text-green-500 text-lg">
                  check_circle
                </span>
                <span>
                  Sistema Operacional:{" "}
                  <span className="font-semibold text-[#111418] dark:text-white">
                    Online
                  </span>
                </span>
              </div>
            </div>
          </div>
          {/* Decorational abstract grid - keeping pattern or removing if invalid URL */}
          <div className="absolute inset-0 opacity-20 z-10 mix-blend-soft-light pointer-events-none bg-slate-900"></div>
        </div>
      </div>
    </div>
  );
};
