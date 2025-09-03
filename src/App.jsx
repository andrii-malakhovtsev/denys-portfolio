import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsLayout from "./pages/projects/ProjectsLayout";
import CncLathe from "./pages/projects/CncLathe";
import Header from "./components/Header";
import RadiatorForLEDLamp from "./pages/projects/RadiatorForLEDLamp";
import MetalRingsWeldingMachine from "./pages/projects/MetalRingsWeldingMachine";
import MetalStripsMachine from "./pages/projects/MetalStripsMachine";
import CncWoodMillingMachine from "./pages/projects/CncWoodMillingMachine";

function AppContent() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsLayout />}>
          <Route index element={<div>I've selected a couple of projects I am allowed
             to show and that I love for you to see up on top</div>} />
          <Route path="cnc-lathe" element={<CncLathe />} />
          <Route path="radiator-led-lamp" element={<RadiatorForLEDLamp />} />
          <Route path="metal-rings-welding-machine" element={<MetalRingsWeldingMachine />} />
          <Route path="metal-strips-machine" element={<MetalStripsMachine />} />
          <Route path="cnc-wood-milling-machine" element={<CncWoodMillingMachine />} />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
