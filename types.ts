export enum AppView {
    LOGIN = 'LOGIN',
    DASHBOARD = 'DASHBOARD',
    FLEET_STEP_1 = 'FLEET_STEP_1',
    FLEET_LOADING = 'FLEET_LOADING',
    FLEET_STEP_2 = 'FLEET_STEP_2',
    ORDER_ENTRY = 'ORDER_ENTRY',
    SIMULATION_RESULT = 'SIMULATION_RESULT',
    BOOKING_SUCCESS = 'BOOKING_SUCCESS'
}

export interface NavigationProps {
    currentView: AppView;
    navigate: (view: AppView) => void;
}