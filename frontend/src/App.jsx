import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/UserSignup';
import LoginPage from './pages/UserLogin';
import PrivacyPage from './components/ui/Landing/Privacy';
import TermsPage from './components/ui/Landing/Terms';
import SupportPage from './components/ui/Landing/Support';
import LearnMorePage from './components/ui/Landing/LearnMore';

function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing', 'signup', 'login', 'privacy', 'terms', 'support', 'learnmore'

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

  const navigateToPrivacy = () => {
    setCurrentPage('privacy');
  };

  const navigateToTerms = () => {
    setCurrentPage('terms');
  };

  const navigateToSupport = () => {
    setCurrentPage('support');
  };

  const navigateToLearnMore = () => {
    setCurrentPage('learnmore');
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
      case 'privacy':
        return (
          <PrivacyPage 
            onNavigateToLanding={navigateToLanding}
            onNavigateToSignup={navigateToSignup}
            onNavigateToTerms={navigateToTerms}
          />
        );
      case 'terms':
        return (
          <TermsPage 
            onNavigateToLanding={navigateToLanding}
            onNavigateToSignup={navigateToSignup}
            onNavigateToPrivacy={navigateToPrivacy}
          />
        );
      case 'support':
        return (
          <SupportPage 
            onNavigateToLanding={navigateToLanding}
            onNavigateToSignup={navigateToSignup}
            onNavigateToPrivacy={navigateToPrivacy}
            onNavigateToTerms={navigateToTerms}
          />
        );
      case 'learnmore':
        return (
          <LearnMorePage 
            onNavigateToLanding={navigateToLanding}
            onNavigateToSignup={navigateToSignup}
            onNavigateToLogin={navigateToLogin}
            onNavigateToPrivacy={navigateToPrivacy}
            onNavigateToTerms={navigateToTerms}
            onNavigateToSupport={navigateToSupport}
          />
        );
      case 'landing':
      default:
        return (
          <LandingPage 
            onNavigateToSignup={navigateToSignup}
            onNavigateToLogin={navigateToLogin}
            onNavigateToPrivacy={navigateToPrivacy}
            onNavigateToTerms={navigateToTerms}
            onNavigateToSupport={navigateToSupport}
            onNavigateToLearnMore={navigateToLearnMore}
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