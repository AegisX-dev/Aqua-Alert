import { useState } from 'react';
import LandingPage from "./pages/LandingPage.jsx";
import SignupPage from "./pages/UserSignup.jsx";
import LoginPage from "./pages/UserLogin.jsx";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing', 'signup', 'login'

  // Navigation functions
  const navigateToSignup = () => {
    setCurrentPage('signup');
  };

  const navigateToLanding = () => {
    setCurrentPage('landing');
  };

  const navigateToLogin = () => {
    setCurrentPage('login');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'signup':
        return (
          <SignupPage 
            onNavigateToLanding={navigateToLanding}
            onNavigateToLogin={navigateToLogin}
          />
        );
      case 'login':
        return (
          <LoginPage 
            onNavigateToLanding={navigateToLanding}
            onNavigateToSignup={navigateToSignup}
          />
        );
      case 'landing':
      default:
        return (
          <LandingPage 
            onNavigateToSignup={navigateToSignup}
            onNavigateToLogin={navigateToLogin}
          />
        );
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;