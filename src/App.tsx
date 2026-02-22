import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
