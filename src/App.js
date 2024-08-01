import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import HomePage from "./screens/HomePage";
import DriversScreen from "./screens/DriversScreen";
import TeamsScreen from "./screens/TeamsScreen";
import DriversDetail from "./screens/DriversDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="DriversScreen" element={<DriversScreen />} />
        <Route path="TeamsScreen" element={<TeamsScreen />} />
        <Route path="driver/:name" element={<DriversDetail />} /> {/* Dynamic Route */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
