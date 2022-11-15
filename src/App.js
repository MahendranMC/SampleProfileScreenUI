import LayoutProvider from "./layouts/LayoutProvider";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <LayoutProvider />
    </Router>
  );
}
