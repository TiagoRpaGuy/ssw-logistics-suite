import React from "react";
import { AppView, NavigationProps } from "../types";

interface LayoutProps extends NavigationProps {
    children: React.ReactNode;
    activeView?: AppView;
}

export const Layout: React.FC<LayoutProps> = ({ navigate, children, activeView }) => {
    const isActive = (view: AppView) => activeView === view;

    const navButtonClass = (view: AppView) =>
        isActive(view)
            ? "flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary group transition-colors w-full text-left"
            : "flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#637588] dark:text-[#94a3b8] hover:bg-gray-100 dark:hover:bg-[#2a3b4d] hover:text-[#111418] dark:hover:text-white transition-colors group w-full text-left";

    const navTextClass = (view: AppView) =>
        isActive(view) ? "text-sm font-semibold leading-normal" : "text-sm font-medium leading-normal";

    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-[#111418] dark:text-white overflow-hidden transition-colors duration-200 h-screen flex">
            {/* Sidebar Navigation */}
            <nav
                className="flex flex-col w-64 h-full bg-white dark:bg-[#1A2633] border-r border-[#e5e7eb] dark:border-[#2a3b4d] shrink-0"
                id="sidebar"
            >
                {/* Logo Section */}
                <div className="p-5 flex items-center gap-3 border-b border-[#e5e7eb] dark:border-[#2a3b4d]">
                    <div className="bg-primary/10 flex items-center justify-center rounded-lg size-10 shrink-0">
                        <span className="material-symbols-outlined text-primary text-[24px]">
                            local_shipping
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-[#111418] dark:text-white text-base font-bold leading-tight tracking-tight">
                            SSW Logistics
                        </h1>
                        <p className="text-[#637588] dark:text-[#94a3b8] text-xs font-medium">
                            Enterprise Suite
                        </p>
                    </div>
                </div>
                {/* Navigation Links */}
                <div className="flex flex-col gap-1 p-4 grow overflow-y-auto">
                    <button
                        id="nav-dashboard"
                        onClick={() => navigate(AppView.DASHBOARD)}
                        className={navButtonClass(AppView.DASHBOARD)}
                    >
                        <span className="material-symbols-outlined text-[20px] group-hover:scale-105 transition-transform">
                            dashboard
                        </span>
                        <p className={navTextClass(AppView.DASHBOARD)}>Dashboard</p>
                    </button>
                    <button
                        id="nav-frota"
                        onClick={() => navigate(AppView.FLEET_STEP_1)}
                        className={navButtonClass(AppView.FLEET_STEP_1)}
                    >
                        <span className="material-symbols-outlined text-[20px] group-hover:scale-105 transition-transform">
                            local_shipping
                        </span>
                        <p className={navTextClass(AppView.FLEET_STEP_1)}>Frota</p>
                    </button>
                    <button
                        id="nav-pedidos"
                        onClick={() => navigate(AppView.ORDER_ENTRY)}
                        className={navButtonClass(AppView.ORDER_ENTRY)}
                    >
                        <span className="material-symbols-outlined text-[20px] group-hover:scale-105 transition-transform">
                            inventory_2
                        </span>
                        <p className={navTextClass(AppView.ORDER_ENTRY)}>Pedidos</p>
                    </button>
                    <button
                        id="nav-relatorios"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#637588] dark:text-[#94a3b8] hover:bg-gray-100 dark:hover:bg-[#2a3b4d] hover:text-[#111418] dark:hover:text-white transition-colors group w-full text-left"
                    >
                        <span className="material-symbols-outlined text-[20px] group-hover:scale-105 transition-transform">
                            description
                        </span>
                        <p className="text-sm font-medium leading-normal">Relatórios</p>
                    </button>
                    <div className="h-px bg-[#e5e7eb] dark:bg-[#2a3b4d] my-2"></div>
                    <button
                        id="nav-configuracoes"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#637588] dark:text-[#94a3b8] hover:bg-gray-100 dark:hover:bg-[#2a3b4d] hover:text-[#111418] dark:hover:text-white transition-colors group w-full text-left"
                    >
                        <span className="material-symbols-outlined text-[20px] group-hover:scale-105 transition-transform">
                            settings
                        </span>
                        <p className="text-sm font-medium leading-normal">Configurações</p>
                    </button>
                </div>
                {/* User Profile (Bottom Sidebar) */}
                <div className="p-4 border-t border-[#e5e7eb] dark:border-[#2a3b4d]">
                    <div
                        className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-[#2a3b4d] p-2 rounded-lg transition-colors"
                        id="user-profile"
                        onClick={() => navigate(AppView.LOGIN)}
                    >
                        <div
                            className="bg-center bg-no-repeat bg-cover rounded-full size-10 border border-gray-200 dark:border-gray-600"
                            style={{
                                backgroundImage: `url("https://picsum.photos/id/64/100/100")`,
                            }}
                        ></div>
                        <div className="flex flex-col overflow-hidden">
                            <h1 className="text-[#111418] dark:text-white text-sm font-semibold leading-normal truncate">
                                Ricardo Soares
                            </h1>
                            <p className="text-[#637588] dark:text-[#94a3b8] text-xs font-normal leading-normal truncate">
                                Admin Logístico
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Main Content Area */}
            <main className="flex-1 h-full overflow-y-auto bg-background-light dark:bg-background-dark">
                {children}
            </main>
        </div>
    );
};
