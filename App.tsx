import React, { useState } from "react";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { FleetSimulationStep1 } from "./components/FleetSimulationStep1";
import { LoadingOverlay } from "./components/LoadingOverlay";
import { FleetSimulationStep2 } from "./components/FleetSimulationStep2";
import { OrderEntry } from "./components/OrderEntry";
import { SimulationResult } from "./components/SimulationResult";
import { BookingSuccess } from "./components/BookingSuccess";
import { AppView } from "./types";

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>(AppView.LOGIN);

  const navigate = (view: AppView) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  switch (currentView) {
    case AppView.LOGIN:
      return <Login currentView={currentView} navigate={navigate} />;
    case AppView.DASHBOARD:
      return <Dashboard currentView={currentView} navigate={navigate} />;
    case AppView.FLEET_STEP_1:
      return <FleetSimulationStep1 currentView={currentView} navigate={navigate} />;
    case AppView.FLEET_LOADING:
      return <LoadingOverlay currentView={currentView} navigate={navigate} />;
    case AppView.FLEET_STEP_2:
      return <FleetSimulationStep2 currentView={currentView} navigate={navigate} />;
    case AppView.ORDER_ENTRY:
      return <OrderEntry currentView={currentView} navigate={navigate} />;
    case AppView.SIMULATION_RESULT:
      return <SimulationResult currentView={currentView} navigate={navigate} />;
    case AppView.BOOKING_SUCCESS:
      return <BookingSuccess currentView={currentView} navigate={navigate} />;
    default:
      return <Login currentView={currentView} navigate={navigate} />;
  }
}
