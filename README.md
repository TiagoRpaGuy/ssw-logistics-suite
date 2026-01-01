# 🚚 SSW Logistics Suite - Soares Smart Warehousing

Sistema de simulação logística desenvolvido para demonstrar capacidades de **automação via RPA** (Power Automate, UiPath, etc.). A aplicação é uma SPA (Single Page Application) construída em React + TypeScript com foco em **estabilidade de IDs HTML** para facilitar a automação robótica.

---

## 📋 Funcionalidades

| Módulo | Descrição |
|--------|-----------|
| **Login** | Tela de autenticação mock (usuário: `ricardo.soares`, senha: `password`) |
| **Dashboard** | Visão geral de KPIs operacionais: entregas, custos, frota e faturamento |
| **Frota - Simulação de Custos** | Wizard de 2 etapas para simular custos de transporte rodoviário |
| **Pedidos** | Formulário para cadastro de ordens de coleta |

---

## 🚀 Como Executar

### Pré-requisitos
- **Node.js** 18+ instalado
- **npm** ou **yarn**

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ssw-logistics-suite.git

# Entre na pasta do projeto
cd ssw-logistics-suite

# Instale as dependências
npm install
```

### Executar em Modo Desenvolvimento

```bash
npm run dev
```

O sistema estará disponível em: **http://localhost:5173**

### Build para Produção

```bash
npm run build
npm run preview
```

---

## 🔧 Estrutura do Projeto

```
ssw-logistics-suite/
├── components/
│   ├── Dashboard.tsx          # Painel de KPIs
│   ├── FleetSimulationStep1.tsx  # Wizard Frota - Etapa 1
│   ├── FleetSimulationStep2.tsx  # Wizard Frota - Etapa 2
│   ├── LoadingOverlay.tsx     # Tela de carregamento
│   ├── Login.tsx              # Tela de login
│   └── OrderEntry.tsx         # Cadastro de pedidos
├── App.tsx                    # Roteamento principal
├── index.html                 # Entry point HTML
├── index.tsx                  # Entry point React
├── types.ts                   # Tipos TypeScript
├── vite.config.ts             # Configuração Vite
└── package.json
```

---

## 🤖 IDs para Automação RPA

Este sistema foi projetado com **IDs HTML estáticos e consistentes** para facilitar a automação:

### Tela de Login
| Elemento | ID |
|----------|-----|
| Campo Usuário | `input-usuario` |
| Campo Senha | `input-senha` |
| Botão Acessar | `btn-acessar` |
| Toggle Senha | `btn-toggle-senha` |

### Dashboard
| Elemento | ID |
|----------|-----|
| Menu Lateral | `sidebar` |
| Perfil do Usuário | `user-profile` |
| Botão Exportar | `btn-export` |
| Botão Novo Pedido | `btn-new-order` |

### Wizard de Frota (Step 1)
| Elemento | ID |
|----------|-----|
| Origem | `step1-origem` |
| Destino | `step1-destino` |
| Distância | `step1-distancia` |
| Data Saída | `step1-data-saida` |
| Previsão Chegada | `step1-prev-chegada` |
| Tipo Veículo | `step1-tipo-veiculo` |
| Tipo Carroceria | `step1-tipo-carroceria` |
| Preço Diesel | `step1-preco-diesel` |
| Botão Processar | `btn-processar-pre-calculo` |

### Wizard de Frota (Step 2)
| Elemento | ID |
|----------|-----|
| Pedágio | `step2-pedagio` |
| Alimentação | `step2-alimentacao` |
| Diária | `step2-diaria` |
| Ajudantes | `step2-ajudantes` |
| Taxa de Carga | `step2-taxa-carga` |
| ICMS | `step2-icms` |
| Valor NF | `step2-valor-nf` |
| Ad Valorem | `step2-ad-valorem` |
| GRIS | `step2-gris` |
| Rota Perigosa | `step2-rota-perigosa` |
| Horário Comercial | `step2-horario-comercial` |
| Escolta Armada | `step2-escolta-armada` |
| Botão Gerar Relatório | `btn-gerar-relatorio` |

### Cadastro de Pedidos
| Elemento | ID |
|----------|-----|
| CNPJ Remetente | `input-cnpj-remetente` |
| Razão Social | `input-razao-social` |
| Número NF | `input-nf` |
| Valor Mercadoria | `input-valor-mercadoria` |
| Prioridade Normal | `radio-prioridade-normal` |
| Prioridade Urgente | `radio-prioridade-urgente` |
| Prioridade Crítico | `radio-prioridade-critico` |
| Observações | `textarea-observacoes` |
| Botão Confirmar | `btn-confirmar-booking` |

---

## 🎨 Tecnologias Utilizadas

- **React 19** + **TypeScript**
- **Vite** (bundler)
- **TailwindCSS** (via CDN)
- **Google Material Symbols** (ícones)
- **Manrope** (tipografia)

---

## 📄 Licença

© 2024 Soares Smart Warehousing. Todos os direitos reservados.
