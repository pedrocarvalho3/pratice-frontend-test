import { useState } from "react";
import AppNavbar from "./components/AppNavBar";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import { ProductProvider } from "./context/product-context";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <ProductProvider>
      <div className="min-vh-100 bg-light pt-4">
        <AppNavbar currentPage={currentPage} onPageChange={setCurrentPage} />
        {currentPage === "home" ? <HomePage /> : <Dashboard />}
      </div>
    </ProductProvider>
  );
};

export default App;
