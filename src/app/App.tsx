import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import { Toaster } from './components/ui/sonner';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import TemplatesPage from './pages/TemplatesPage';
import ChannelsPage from './pages/ChannelsPage';
import PricingPage from './pages/PricingPage';
import DocsPage from './pages/DocsPage';
import LoginPage from './pages/LoginPage';
import ChatAgentsPage from './pages/ChatAgentsPage';
import VoiceAgentsPage from './pages/VoiceAgentsPage';
import EmailAgentsPage from './pages/EmailAgentsPage';
import WhatsAppAgentsPage from './pages/WhatsAppAgentsPage';
import FlowBuilderPage from './pages/FlowBuilderPage';
import AgentsPage from './pages/AgentsPage';
import ChannelsMenuPage from './pages/ChannelsMenuPage';
import UnifiedInboxPage from './pages/UnifiedInboxPage';
import DataKnowledgePage from './pages/DataKnowledgePage';
import IntegrationsPage from './pages/IntegrationsPage';
import ModelsPage from './pages/ModelsPage';
import SecurityPage from './pages/SecurityPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ApiAccessPage from './pages/ApiAccessPage';
import AutomationAgentPage from './pages/AutomationAgentPage';
import SupportAgentPage from './pages/SupportAgentPage';
import CustomAgentPage from './pages/CustomAgentPage';
import BookingSchedulingPage from './pages/BookingSchedulingPage';
import OrderManagementPage from './pages/OrderManagementPage';
import CustomerSupportPage from './pages/CustomerSupportPage';
import LeadCapturePage from './pages/LeadCapturePage';
import RealEstatePage from './pages/RealEstatePage';
import EducationPage from './pages/EducationPage';
import AutomotivePage from './pages/AutomotivePage';
import LegalPage from './pages/LegalPage';
import FinancialPage from './pages/FinancialPage';
import HomeServicesPage from './pages/HomeServicesPage';
import HealthcarePage from './pages/HealthcarePage';
import FitnessPage from './pages/FitnessPage';
import TravelPage from './pages/TravelPage';
import EventManagementPage from './pages/EventManagementPage';
import LogisticsPage from './pages/LogisticsPage';
import BlogsPage from './pages/BlogsPage';
import BlogArticlePage from './pages/BlogArticlePage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import HelpCenter from './pages/HelpCenter';
import ApiReferencePage from './pages/ApiReferencePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import TechnicalOverviewPage from './pages/TechnicalOverviewPage';
import DeploymentPage from './pages/DeploymentPage';

export default function App() {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/channels" element={<ChannelsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
        <Route path="/agents/chat" element={<ChatAgentsPage />} />
        <Route path="/agents/voice" element={<VoiceAgentsPage />} />
        <Route path="/agents/email" element={<EmailAgentsPage />} />
        <Route path="/agents/whatsapp" element={<WhatsAppAgentsPage />} />
        <Route path="/agents/automation" element={<AutomationAgentPage />} />
        <Route path="/agents/support" element={<SupportAgentPage />} />
        <Route path="/agents/custom" element={<CustomAgentPage />} />
        <Route path="/solutions/booking" element={<BookingSchedulingPage />} />
        <Route path="/solutions/order" element={<OrderManagementPage />} />
        <Route path="/solutions/support" element={<CustomerSupportPage />} />
        <Route path="/solutions/leads" element={<LeadCapturePage />} />
        <Route path="/solutions/real-estate" element={<RealEstatePage />} />
        <Route path="/solutions/education" element={<EducationPage />} />
        <Route path="/solutions/automotive" element={<AutomotivePage />} />
        <Route path="/solutions/legal" element={<LegalPage />} />
        <Route path="/solutions/financial" element={<FinancialPage />} />
        <Route path="/solutions/home-services" element={<HomeServicesPage />} />
        <Route path="/solutions/healthcare" element={<HealthcarePage />} />
        <Route path="/solutions/fitness" element={<FitnessPage />} />
        <Route path="/solutions/travel" element={<TravelPage />} />
        <Route path="/solutions/events" element={<EventManagementPage />} />
        <Route path="/solutions/logistics" element={<LogisticsPage />} />
        <Route path="/product/flow-builder" element={<FlowBuilderPage />} />
        <Route path="/product/agents" element={<AgentsPage />} />
        <Route path="/product/channels" element={<ChannelsMenuPage />} />
        <Route path="/product/inbox" element={<UnifiedInboxPage />} />
        <Route path="/product/data" element={<DataKnowledgePage />} />
        <Route path="/product/integrations" element={<IntegrationsPage />} />
        <Route path="/product/models" element={<ModelsPage />} />
        <Route path="/product/security" element={<SecurityPage />} />
        <Route path="/product/analytics" element={<AnalyticsPage />} />
        <Route path="/product/api" element={<ApiAccessPage />} />
        <Route path="/product/deployment" element={<DeploymentPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-study/:slug" element={<CaseStudyDetailPage />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/api-reference" element={<ApiReferencePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
        <Route path="/technical-overview" element={<TechnicalOverviewPage />} />
        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}