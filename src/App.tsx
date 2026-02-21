import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
