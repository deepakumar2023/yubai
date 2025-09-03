import "./App.css";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import HeroSection from "./pages/HeroSection";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Private from "./pages/Private";
import Contact from "./pages/Contact";
import BecomePartner from "./pages/becomePartner/BecomePartner";
import PrivacyPolicy from "./pages/privatepolicy/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions/TermsConditions";
import PageNotFound from "./pages/PagenotFound";
import About from "./pages/about/About";
import RefundReturn from "./pages/Refund&return";
import YubaiFAQAccordion from "./pages/Faq";
import ProductSearch from "./pages/ProductSearch";
import Support from "./pages/Support/Support";
import ThankYou from "./component/ThankYou";
import PaymentFail from "./pages/paymentfail/PaymentFail";
import CancellationPolicy from "./pages/CancellationPolicy";
import PrivacyPolicyweb from "./pages/PrivacyPolicyweb";
import TermsConditionweb from "./pages/TermsConditionweb";
import CancellationPolicyweb from "./pages/CancellationPolicyweb";
import RefundReturnweb from "./pages/RefundReturnweb";

function Layout() {
  const location = useLocation();
  const hideFooterRoutes = ["/thankyou","/payment-fail","/privacy-policy","/terms-condition","/cancellation-policy","/refund-return"];

  const hideHeaderRoutes = ["/thankyou","/payment-fail",];

  return (
    <div className="App">

      {!hideHeaderRoutes.includes(location.pathname) &&    <Header />}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/private" element={<Private />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partner" element={<BecomePartner />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacypolicy" element={<PrivacyPolicyweb />} />
        <Route path="/terms-condition" element={<TermsConditions />} />
        <Route path="/termscondition" element={<TermsConditionweb />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/about-page" element={<About />} />
        <Route path="/refund-return" element={<RefundReturn />} />
        <Route path="/refundreturn" element={<RefundReturnweb />} />
        <Route path="/yubai-faq" element={<YubaiFAQAccordion />} />
        <Route path="/amazon-shop" element={<ProductSearch />} />
        <Route path="/support" element={<Support />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/payment-fail" element={<PaymentFail />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        <Route path="/cancellationpolicy" element={<CancellationPolicyweb />} />
      </Routes>

      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
