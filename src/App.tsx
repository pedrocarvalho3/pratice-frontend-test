import { useState } from "react";
import AppNavbar from "./components/AppNavBar";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-vh-100 bg-light pt-4">
      <AppNavbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <HomePage />
    </div>
  );
};

export default App;
