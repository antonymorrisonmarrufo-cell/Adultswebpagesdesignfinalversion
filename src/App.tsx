import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Main site pages
import HomePage from "@/pages/HomePage";
import AdultSocialCarePage from "@/pages/AdultSocialCarePage";
import SpecialistServicesPage from "@/pages/SpecialistServicesPage";
import DementiaSupportPage from "@/pages/DementiaSupportPage";
import DementiaGetHelpPage from "@/pages/dementia/GetHelpPage";
import DementiaHubPage from "@/pages/dementia/HubPage";
import DementiaMemoryServicePage from "@/pages/dementia/MemoryServicePage";
import DementiaActivitiesPage from "@/pages/dementia/ActivitiesPage";
import DementiaAdviserPage from "@/pages/dementia/AdviserPage";
import DementiaIdosPage from "@/pages/dementia/IdosPage";
import DementiaCarersPage from "@/pages/dementia/CarersPage";
import DementiaPlanningPage from "@/pages/dementia/PlanningPage";
import LearningDisabilitySupportPage from "@/pages/learning-disability/LearningDisabilitySupportPage";
import LDAskForSupportPage from "@/pages/learning-disability/AskForSupportPage";
import LDSupportForCarersPage from "@/pages/learning-disability/SupportForCarersPage";
import LDPreparingForAdulthoodPage from "@/pages/learning-disability/PreparingForAdulthoodPage";
import LDEasyReadResourcesPage from "@/pages/learning-disability/EasyReadResourcesPage";
import LDProfessionalReferralPage from "@/pages/learning-disability/ProfessionalReferralPage";
import LDRequestSupportPage from "@/pages/learning-disability/RequestSupportPage";
import LDHousingAndSupportOptionsPage from "@/pages/learning-disability/HousingAndSupportOptionsPage";
import LDHousingLivingWithFamilyPage from "@/pages/learning-disability/housing/LivingWithFamilyPage";
import LDHousingSupportedLivingPage from "@/pages/learning-disability/housing/SupportedLivingPage";
import LDHousingResidentialCarePage from "@/pages/learning-disability/housing/ResidentialCarePage";
import LDHousingSharedLivesPage from "@/pages/learning-disability/housing/SharedLivesPage";
import LDHousingIndependentLivingPage from "@/pages/learning-disability/housing/IndependentLivingPage";
import AutismSupportPage from "@/pages/AutismSupportPage";
import VisualHearingPage from "@/pages/VisualHearingPage";
import PhysicalDisabilitiesPage from "@/pages/PhysicalDisabilitiesPage";
import LongTermConditionsPage from "@/pages/LongTermConditionsPage";
import WorkDisabilityPage from "@/pages/WorkDisabilityPage";
import PowerOfAttorneyPage from "@/pages/PowerOfAttorneyPage";

// Travel and transport pages
import TravelTransportPage from "@/pages/transport/TravelTransportPage";
import BlueBadgePage from "@/pages/transport/BlueBadgePage";
import FreedomPassDisabledPage from "@/pages/transport/FreedomPassDisabledPage";
import FreedomPassOlderPage from "@/pages/transport/FreedomPassOlderPage";
import TaxicardPage from "@/pages/transport/TaxicardPage";
import TransportMobilityPage from "@/pages/transport/TransportMobilityPage";
import BlueBadgeOrgsPage from "@/pages/transport/BlueBadgeOrgsPage";

// Live independently at home pages
import LiveIndependentlyPage from "@/pages/live-independently/LiveIndependentlyPage";
import HomeAdaptationsPage from "@/pages/live-independently/HomeAdaptationsPage";
import EquipmentPage from "@/pages/live-independently/EquipmentPage";
import HelpAtHomePage from "@/pages/live-independently/HelpAtHomePage";
import FallsPreventionPage from "@/pages/live-independently/FallsPreventionPage";
import TelecarePage from "@/pages/live-independently/TelecarePage";
import KeepingSafePage from "@/pages/live-independently/KeepingSafePage";
import CallersToYourDoorPage from "@/pages/live-independently/keeping-safe/CallersToYourDoorPage";
import OnlineEmailPostalFraudPage from "@/pages/live-independently/keeping-safe/OnlineEmailPostalFraudPage";
import FraudOverPhonePage from "@/pages/live-independently/keeping-safe/FraudOverPhonePage";
import FireSafetyPage from "@/pages/live-independently/keeping-safe/FireSafetyPage";
import FurtherInfoSafetyPage from "@/pages/live-independently/keeping-safe/FurtherInfoSafetyPage";
import HomesharePage from "@/pages/live-independently/HomesharePage";
import SocialPrescribingPage from "@/pages/live-independently/SocialPrescribingPage";
import RequestHomeAssessmentForm from "@/pages/live-independently/RequestHomeAssessmentForm";
import RequestTelecareForm from "@/pages/live-independently/RequestTelecareForm";
import ProfessionalReferralForm from "@/pages/live-independently/ProfessionalReferralForm";

// Care homes and supported living pages
import CareHomesHubPage from "@/pages/care-homes/CareHomesHubPage";
import CareHomesNursingHomesPage from "@/pages/care-homes/CareHomesNursingHomesPage";
import CHSupportedLivingPage from "@/pages/care-homes/SupportedLivingPage";
import CHSharedLivesPage from "@/pages/care-homes/SharedLivesPage";
import ExtraCareHousingPage from "@/pages/care-homes/ExtraCareHousingPage";
import ShelteredHousingPage from "@/pages/care-homes/ShelteredHousingPage";
import AllistonHousePage from "@/pages/care-homes/AllistonHousePage";
import GeorgeMasonLodgePage from "@/pages/care-homes/GeorgeMasonLodgePage";
import MapletonRoadPage from "@/pages/care-homes/MapletonRoadPage";
import RequestHousingCareSupportPage from "@/pages/care-homes/RequestHousingCareSupportPage";

// Paying for care pages
import PayingForCareHubPage from "@/pages/paying-for-care/PayingForCareHubPage";
import HowCareCostsWorkedOutPage from "@/pages/paying-for-care/HowCareCostsWorkedOutPage";
import FinancialAssessmentPage from "@/pages/paying-for-care/FinancialAssessmentPage";
import BenefitsAndHelpPage from "@/pages/paying-for-care/BenefitsAndHelpPage";
import DirectPaymentsPersonalBudgetsPage from "@/pages/paying-for-care/DirectPaymentsPersonalBudgetsPage";
import PayingForCareHomePage from "@/pages/paying-for-care/PayingForCareHomePage";
import GetFinancialAdvicePage from "@/pages/paying-for-care/GetFinancialAdvicePage";
import DeferredPaymentAgreementsPage from "@/pages/paying-for-care/DeferredPaymentAgreementsPage";

// How adult social care works pages
import HowAdultSocialCareWorksHubPage from "@/pages/how-adult-social-care-works/HowAdultSocialCareWorksHubPage";
import WhatIsAdultSocialCarePage from "@/pages/how-adult-social-care-works/WhatIsAdultSocialCarePage";
import WhoCanGetHelpPage from "@/pages/how-adult-social-care-works/WhoCanGetHelpPage";

// How to get support pages
import HowToGetSupportHubPage from "@/pages/how-to-get-support/HowToGetSupportHubPage";
import CheckSituationOnlinePage from "@/pages/how-to-get-support/CheckSituationOnlinePage";
import ContactUsPage from "@/pages/how-to-get-support/ContactUsPage";
import RequestAssessmentPage from "@/pages/how-to-get-support/RequestAssessmentPage";
import WhatHappensDuringYourAssessmentPage from "@/pages/how-to-get-support/WhatHappensDuringYourAssessmentPage";
import GettingCareAndSupportPlanPage from "@/pages/how-to-get-support/GettingCareAndSupportPlanPage";

// Mental health and wellbeing pages
import MentalHealthWellbeingHubPage from "@/pages/mental-health/MentalHealthWellbeingHubPage";
import UrgentMentalHealthSupportPage from "@/pages/mental-health/UrgentMentalHealthSupportPage";
import LookingAfterMentalWellbeingPage from "@/pages/mental-health/LookingAfterMentalWellbeingPage";
import TalkingTherapiesProfessionalSupportPage from "@/pages/mental-health/TalkingTherapiesProfessionalSupportPage";
import AdultSocialCareMentalHealthPage from "@/pages/mental-health/AdultSocialCareMentalHealthPage";
import LocalMentalHealthSupportServicesPage from "@/pages/mental-health/LocalMentalHealthSupportServicesPage";

// Complaints and compliments pages
import ComplaintsComplimentsHubPage from "@/pages/complaints-compliments/ComplaintsComplimentsHubPage";
import MakeComplaintPage from "@/pages/complaints-compliments/MakeComplaintPage";
import SendComplimentPage from "@/pages/complaints-compliments/SendComplimentPage";
import HelpShapeServicesPage from "@/pages/complaints-compliments/HelpShapeServicesPage";
import IndependentHelpAdvocacyPage from "@/pages/complaints-compliments/IndependentHelpAdvocacyPage";

// Our Policies pages
import OurPoliciesHubPage from "@/pages/our-policies/OurPoliciesHubPage";
import ChargingFinancialPoliciesPage from "@/pages/our-policies/ChargingFinancialPoliciesPage";
import SafeguardingPoliciesReportsPage from "@/pages/our-policies/SafeguardingPoliciesReportsPage";
import MarketSustainabilityCommissioningPage from "@/pages/our-policies/MarketSustainabilityCommissioningPage";
import PrivacyAndDataPage from "@/pages/our-policies/PrivacyAndDataPage";
import ConsultationsPage from "@/pages/our-policies/ConsultationsPage";

// Understand Your Rights pages
import UnderstandYourRightsHubPage from "@/pages/understand-your-rights/UnderstandYourRightsHubPage";
import YourRightsUnderCareActPage from "@/pages/understand-your-rights/YourRightsUnderCareActPage";
import IndependentAdvocacyPage from "@/pages/understand-your-rights/IndependentAdvocacyPage";
import MentalCapacityDecisionMakingPage from "@/pages/understand-your-rights/MentalCapacityDecisionMakingPage";
import YourRightsAsCarerPage from "@/pages/understand-your-rights/YourRightsAsCarerPage";
import ChallengingDecisionsRaisingConcernsPage from "@/pages/understand-your-rights/ChallengingDecisionsRaisingConcernsPage";

// Information for Professionals pages
import InformationForProfessionalsHubPage from "@/pages/information-for-professionals/InformationForProfessionalsHubPage";
import HowToMakeReferralPage from "@/pages/information-for-professionals/HowToMakeReferralPage";
import SafeguardingAdultsProfessionalsPage from "@/pages/information-for-professionals/SafeguardingAdultsProfessionalsPage";
import PracticeGuidanceResourcesPage from "@/pages/information-for-professionals/PracticeGuidanceResourcesPage";
import CommissioningProviderInformationPage from "@/pages/information-for-professionals/CommissioningProviderInformationPage";
import KeyTeamsContactDetailsPage from "@/pages/information-for-professionals/KeyTeamsContactDetailsPage";

// Safeguarding pages
import ProtectingAdultsPage from "@/pages/safeguarding/ProtectingAdultsPage";
import ReportAbusePage from "@/pages/safeguarding/ReportAbusePage";
import ProfessionalsPage from "@/pages/safeguarding/ProfessionalsPage";
import ProfessionalGuidancePage from "@/pages/safeguarding/ProfessionalGuidancePage";
import MaracPage from "@/pages/safeguarding/MaracPage";
import AbuseAndNeglectPage from "@/pages/safeguarding/AbuseAndNeglectPage";
import WhatHappensAfterPage from "@/pages/safeguarding/WhatHappensAfterPage";
import SafeguardingBoardPage from "@/pages/safeguarding/SafeguardingBoardPage";
import ResourcesImprovePracticePage from "@/pages/safeguarding/ResourcesImprovePracticePage";
import ReportChildConcernPage from "@/pages/safeguarding/ReportChildConcernPage";

// Being a Carer pages (new comprehensive section)
import BeingCarerPage from "@/pages/carers/BeingCarerPage";
import CarersAssessmentRightsPage from "@/pages/carers/CarersAssessmentRightsPage";
import SupportForCarersPage from "@/pages/carers/SupportForCarersPage";
import FinancialSupportPage from "@/pages/carers/support/FinancialSupportPage";
import TakingBreakPage from "@/pages/carers/support/TakingBreakPage";
import CarerEmergencyPlanPage from "@/pages/carers/support/CarerEmergencyPlanPage";
import HealthWellbeingPage from "@/pages/carers/support/HealthWellbeingPage";
import LocalGroupsServicesPage from "@/pages/carers/support/LocalGroupsServicesPage";
import TrainingWorkshopsPage from "@/pages/carers/support/TrainingWorkshopsPage";
import CarersFeedbackPage from "@/pages/carers/support/CarersFeedbackPage";
import UsefulContactsPage from "@/pages/carers/support/UsefulContactsPage";
import YoungCarersPage from "@/pages/carers/YoungCarersPage";
import ParentCarersPage from "@/pages/carers/ParentCarersPage";
import WorkEducationPage from "@/pages/carers/WorkEducationPage";
import SupportAfterCaringPage from "@/pages/carers/SupportAfterCaringPage";
import StrategyCouncilDutiesPage from "@/pages/carers/StrategyCouncilDutiesPage";
import CarersHubPage from "@/pages/carers/CarersHubPage";
import IAFlowPage from "@/pages/carers/IAFlowPage";
import AdultCarersHub from "@/pages/carers/hubs/AdultCarersHub";
import ParentCarersHub from "@/pages/carers/hubs/ParentCarersHub";
import UniversalOfferHub from "@/pages/carers/hubs/UniversalOfferHub";
import YoungCarersHub from "@/pages/carers/hubs/YoungCarersHub";
import CarerTaskAssessmentPage from "@/pages/carers/tasks/AssessmentPage";
import CarerTaskBreaksRespitePage from "@/pages/carers/tasks/BreaksRespitePage";
import CarerTaskEmergencyHelpPage from "@/pages/carers/tasks/EmergencyHelpPage";
import CarerTaskMoneyBenefitsPage from "@/pages/carers/tasks/MoneyBenefitsPage";

// How adult social care works - additional pages
import HowToAskForHelpPage from "@/pages/how-adult-social-care-works/HowToAskForHelpPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adult-social-care" element={<AdultSocialCarePage />} />
          <Route path="/adult-social-care/specialist-services" element={<SpecialistServicesPage />} />

          {/* Dementia */}
          <Route path="/adult-social-care/specialist-services/dementia-support" element={<DementiaSupportPage />} />
          <Route path="/adult-social-care/specialist-services/dementia/get-help" element={<DementiaGetHelpPage />} />
          <Route path="/adult-social-care/specialist-services/dementia/hub" element={<DementiaHubPage />} />
          <Route path="/adult-social-care/specialist-services/dementia/memory-service" element={<DementiaMemoryServicePage />} />
          <Route path="/adult-social-care/specialist-services/dementia/activities" element={<DementiaActivitiesPage />} />
          <Route path="/adult-social-care/specialist-services/dementia/adviser" element={<DementiaAdviserPage />} />
          <Route path="/adult-social-care/specialist-services/dementia/idos" element={<DementiaIdosPage />} />
          <Route path="/adult-social-care/specialist-services/dementia/carers" element={<DementiaCarersPage />} />
          <Route path="/adult-social-care/specialist-services/dementia/planning-ahead" element={<DementiaPlanningPage />} />

          {/* Safeguarding */}
          <Route path="/adult-social-care/protecting-adults-at-risk" element={<ProtectingAdultsPage />} />
          <Route path="/adult-social-care/report-abuse-or-neglect" element={<ReportAbusePage />} />
          <Route path="/adult-social-care/professionals-and-providers" element={<ProfessionalsPage />} />
          <Route path="/adult-social-care/professional-guidance" element={<ProfessionalGuidancePage />} />
          <Route path="/adult-social-care/marac" element={<MaracPage />} />
          <Route path="/adult-social-care/abuse-and-neglect" element={<AbuseAndNeglectPage />} />
          <Route path="/adult-social-care/what-happens-after-you-report" element={<WhatHappensAfterPage />} />
          <Route path="/adult-social-care/safeguarding-adults-board" element={<SafeguardingBoardPage />} />
          <Route path="/adult-social-care/resources-to-improve-practice" element={<ResourcesImprovePracticePage />} />
          <Route path="/children-and-families/report-concern-about-child" element={<ReportChildConcernPage />} />

          {/* Specialist services */}
          <Route path="/adult-social-care/specialist-services/learning-disabilities" element={<LearningDisabilitySupportPage />} />
          <Route path="/adult-social-care/learning-disability-support" element={<LearningDisabilitySupportPage />} />
          <Route path="/adult-social-care/learning-disability-support/ask-for-support" element={<LDAskForSupportPage />} />
          <Route path="/adult-social-care/learning-disability-support/support-for-carers-and-families" element={<LDSupportForCarersPage />} />
          <Route path="/adult-social-care/learning-disability-support/preparing-for-adulthood" element={<LDPreparingForAdulthoodPage />} />
          <Route path="/adult-social-care/learning-disability-support/easy-read-information-and-resources" element={<LDEasyReadResourcesPage />} />
          <Route path="/adult-social-care/learning-disability-support/professional-referral" element={<LDProfessionalReferralPage />} />
          <Route path="/adult-social-care/learning-disability-support/request-support" element={<LDRequestSupportPage />} />
          <Route path="/adult-social-care/learning-disability-support/housing-and-support-options" element={<LDHousingAndSupportOptionsPage />} />
          <Route path="/adult-social-care/learning-disability-support/housing/living-with-family" element={<LDHousingLivingWithFamilyPage />} />
          <Route path="/adult-social-care/learning-disability-support/housing/supported-living" element={<LDHousingSupportedLivingPage />} />
          <Route path="/adult-social-care/learning-disability-support/housing/residential-care" element={<LDHousingResidentialCarePage />} />
          <Route path="/adult-social-care/learning-disability-support/housing/shared-lives" element={<LDHousingSharedLivesPage />} />
          <Route path="/adult-social-care/learning-disability-support/housing/independent-living" element={<LDHousingIndependentLivingPage />} />
          <Route path="/adult-social-care/specialist-services/autism-support" element={<AutismSupportPage />} />
          <Route path="/adult-social-care/specialist-services/visual-and-hearing-impairments" element={<VisualHearingPage />} />
          <Route path="/adult-social-care/specialist-services/physical-disabilities" element={<PhysicalDisabilitiesPage />} />
          <Route path="/adult-social-care/specialist-services/long-term-conditions" element={<LongTermConditionsPage />} />
          <Route path="/adult-social-care/work-and-disability" element={<WorkDisabilityPage />} />
          <Route path="/adult-social-care/specialist-services/power-attorney-deputyship-and-appointeeship" element={<PowerOfAttorneyPage />} />

          {/* Travel and transport */}
          <Route path="/adult-social-care/travel-and-transport" element={<TravelTransportPage />} />
          <Route path="/adult-social-care/travel-and-transport/blue-badge" element={<BlueBadgePage />} />
          <Route path="/adult-social-care/travel-and-transport/freedom-pass-disabled" element={<FreedomPassDisabledPage />} />
          <Route path="/adult-social-care/travel-and-transport/freedom-pass-older" element={<FreedomPassOlderPage />} />
          <Route path="/adult-social-care/travel-and-transport/taxicard" element={<TaxicardPage />} />
          <Route path="/adult-social-care/travel-and-transport/transport-mobility-support" element={<TransportMobilityPage />} />
          <Route path="/adult-social-care/travel-and-transport/blue-badge-organisations" element={<BlueBadgeOrgsPage />} />

          {/* Live independently at home */}
          <Route path="/adult-social-care/live-independently-at-home" element={<LiveIndependentlyPage />} />
          <Route path="/adult-social-care/live-independently-at-home/home-adaptations-and-occupational-therapy" element={<HomeAdaptationsPage />} />
          <Route path="/adult-social-care/live-independently-at-home/equipment-and-assistive-technology" element={<EquipmentPage />} />
          <Route path="/adult-social-care/live-independently-at-home/help-at-home-and-personal-care" element={<HelpAtHomePage />} />
          <Route path="/adult-social-care/live-independently-at-home/falls-prevention-and-reablement" element={<FallsPreventionPage />} />
          <Route path="/adult-social-care/live-independently-at-home/telecare-and-community-alarm" element={<TelecarePage />} />
          <Route path="/adult-social-care/live-independently-at-home/keeping-safe-at-home" element={<KeepingSafePage />} />
          <Route path="/adult-social-care/live-independently-at-home/keeping-safe-at-home/callers-to-your-door" element={<CallersToYourDoorPage />} />
          <Route path="/adult-social-care/live-independently-at-home/keeping-safe-at-home/online-email-or-postal-fraud" element={<OnlineEmailPostalFraudPage />} />
          <Route path="/adult-social-care/live-independently-at-home/keeping-safe-at-home/fraud-over-the-phone" element={<FraudOverPhonePage />} />
          <Route path="/adult-social-care/live-independently-at-home/keeping-safe-at-home/fire-safety-advice-for-your-home" element={<FireSafetyPage />} />
          <Route path="/adult-social-care/live-independently-at-home/keeping-safe-at-home/further-information-about-keeping-your-home-safe" element={<FurtherInfoSafetyPage />} />
          <Route path="/adult-social-care/live-independently-at-home/homeshare" element={<HomesharePage />} />
          <Route path="/adult-social-care/live-independently-at-home/social-prescribing" element={<SocialPrescribingPage />} />
          <Route path="/adult-social-care/live-independently-at-home/request-home-independence-assessment" element={<RequestHomeAssessmentForm />} />
          <Route path="/adult-social-care/live-independently-at-home/request-telecare-or-community-alarm" element={<RequestTelecareForm />} />
          <Route path="/adult-social-care/live-independently-at-home/professional-referral-home-independence" element={<ProfessionalReferralForm />} />

          {/* Care homes and supported living */}
          <Route path="/adult-social-care/care-homes-and-supported-living" element={<CareHomesHubPage />} />
          <Route path="/adult-social-care/care-homes-and-supported-living/care-homes-and-nursing-homes" element={<CareHomesNursingHomesPage />} />
          <Route path="/adult-social-care/care-homes-and-supported-living/supported-living" element={<CHSupportedLivingPage />} />
          <Route path="/adult-social-care/care-homes-and-supported-living/shared-lives" element={<CHSharedLivesPage />} />
          <Route path="/adult-social-care/care-homes-and-supported-living/extra-care-housing" element={<ExtraCareHousingPage />} />
          <Route path="/adult-social-care/care-homes-and-supported-living/sheltered-housing" element={<ShelteredHousingPage />} />
          <Route path="/adult-social-care/care-homes-and-supported-living/alliston-house" element={<AllistonHousePage />} />
          <Route path="/adult-social-care/care-homes-and-supported-living/george-mason-lodge" element={<GeorgeMasonLodgePage />} />
          <Route path="/adult-social-care/care-homes-and-supported-living/mapleton-road" element={<MapletonRoadPage />} />
          <Route path="/adult-social-care/care-homes-and-supported-living/request-housing-care-support" element={<RequestHousingCareSupportPage />} />

          {/* Paying for care */}
          <Route path="/adult-social-care/paying-for-care" element={<PayingForCareHubPage />} />
          <Route path="/adult-social-care/paying-for-care/how-care-costs-are-worked-out" element={<HowCareCostsWorkedOutPage />} />
          <Route path="/adult-social-care/paying-for-care/financial-assessment" element={<FinancialAssessmentPage />} />
          <Route path="/adult-social-care/paying-for-care/benefits-and-help-with-costs" element={<BenefitsAndHelpPage />} />
          <Route path="/adult-social-care/paying-for-care/direct-payments-and-personal-budgets" element={<DirectPaymentsPersonalBudgetsPage />} />
          <Route path="/adult-social-care/paying-for-care/paying-for-a-care-home" element={<PayingForCareHomePage />} />
          <Route path="/adult-social-care/paying-for-care/get-financial-advice" element={<GetFinancialAdvicePage />} />
          <Route path="/adult-social-care/paying-for-care/deferred-payment-agreements" element={<DeferredPaymentAgreementsPage />} />

          {/* How adult social care works */}
          <Route path="/adult-social-care/how-adult-social-care-works" element={<HowAdultSocialCareWorksHubPage />} />
          <Route path="/adult-social-care/how-adult-social-care-works/what-is-adult-social-care" element={<WhatIsAdultSocialCarePage />} />
          <Route path="/adult-social-care/how-adult-social-care-works/who-can-get-help" element={<WhoCanGetHelpPage />} />

          {/* How to get support */}
          <Route path="/adult-social-care/how-to-get-support" element={<HowToGetSupportHubPage />} />
          <Route path="/adult-social-care/how-to-get-support/check-your-situation-online" element={<CheckSituationOnlinePage />} />
          <Route path="/adult-social-care/how-to-get-support/contact-us" element={<ContactUsPage />} />
          <Route path="/adult-social-care/how-to-get-support/request-an-assessment" element={<RequestAssessmentPage />} />
          <Route path="/adult-social-care/how-to-get-support/what-happens-during-your-assessment" element={<WhatHappensDuringYourAssessmentPage />} />
          <Route path="/adult-social-care/how-to-get-support/getting-your-care-and-support-plan" element={<GettingCareAndSupportPlanPage />} />

          {/* Mental health and wellbeing */}
          <Route path="/adult-social-care/mental-health-wellbeing" element={<MentalHealthWellbeingHubPage />} />
          <Route path="/adult-social-care/mental-health-wellbeing/urgent-mental-health-support" element={<UrgentMentalHealthSupportPage />} />
          <Route path="/adult-social-care/mental-health-wellbeing/looking-after-your-mental-wellbeing" element={<LookingAfterMentalWellbeingPage />} />
          <Route path="/adult-social-care/mental-health-wellbeing/talking-therapies-and-professional-support" element={<TalkingTherapiesProfessionalSupportPage />} />
          <Route path="/adult-social-care/mental-health-wellbeing/adult-social-care-and-mental-health" element={<AdultSocialCareMentalHealthPage />} />
          <Route path="/adult-social-care/mental-health-wellbeing/local-mental-health-support-services" element={<LocalMentalHealthSupportServicesPage />} />

          {/* Complaints and compliments */}
          <Route path="/adult-social-care/complaints-compliments" element={<ComplaintsComplimentsHubPage />} />
          <Route path="/adult-social-care/complaints-compliments/make-a-complaint" element={<MakeComplaintPage />} />
          <Route path="/adult-social-care/complaints-compliments/send-us-a-compliment" element={<SendComplimentPage />} />
          <Route path="/adult-social-care/complaints-compliments/help-shape-our-services" element={<HelpShapeServicesPage />} />
          <Route path="/adult-social-care/complaints-compliments/independent-help-and-advocacy" element={<IndependentHelpAdvocacyPage />} />

          {/* Our Policies */}
          <Route path="/adult-social-care/our-policies" element={<OurPoliciesHubPage />} />
          <Route path="/adult-social-care/our-policies/charging-and-financial-policies" element={<ChargingFinancialPoliciesPage />} />
          <Route path="/adult-social-care/our-policies/safeguarding-policies-reports" element={<SafeguardingPoliciesReportsPage />} />
          <Route path="/adult-social-care/our-policies/market-sustainability-commissioning" element={<MarketSustainabilityCommissioningPage />} />
          <Route path="/adult-social-care/our-policies/privacy-and-data" element={<PrivacyAndDataPage />} />
          <Route path="/adult-social-care/our-policies/consultations" element={<ConsultationsPage />} />

          {/* Understand Your Rights */}
          <Route path="/adult-social-care/understand-your-rights" element={<UnderstandYourRightsHubPage />} />
          <Route path="/adult-social-care/understand-your-rights/your-rights-under-the-care-act" element={<YourRightsUnderCareActPage />} />
          <Route path="/adult-social-care/understand-your-rights/independent-advocacy" element={<IndependentAdvocacyPage />} />
          <Route path="/adult-social-care/understand-your-rights/mental-capacity-and-decision-making" element={<MentalCapacityDecisionMakingPage />} />
          <Route path="/adult-social-care/understand-your-rights/your-rights-as-a-carer" element={<YourRightsAsCarerPage />} />
          <Route path="/adult-social-care/understand-your-rights/challenging-decisions-raising-concerns" element={<ChallengingDecisionsRaisingConcernsPage />} />

          {/* Information for Professionals */}
          <Route path="/adult-social-care/information-for-professionals" element={<InformationForProfessionalsHubPage />} />
          <Route path="/adult-social-care/information-for-professionals/how-to-make-referral" element={<HowToMakeReferralPage />} />
          <Route path="/adult-social-care/information-for-professionals/safeguarding-adults" element={<SafeguardingAdultsProfessionalsPage />} />
          <Route path="/adult-social-care/information-for-professionals/practice-guidance-resources" element={<PracticeGuidanceResourcesPage />} />
          <Route path="/adult-social-care/information-for-professionals/commissioning-provider-information" element={<CommissioningProviderInformationPage />} />
          <Route path="/adult-social-care/information-for-professionals/key-teams-contact-details" element={<KeyTeamsContactDetailsPage />} />

          {/* Being a Carer */}
          <Route path="/adult-social-care/being-carer" element={<BeingCarerPage />} />
          <Route path="/adult-social-care/being-carer/carers-assessment-and-rights" element={<CarersAssessmentRightsPage />} />
          <Route path="/adult-social-care/being-carer/support-for-carers" element={<SupportForCarersPage />} />
          <Route path="/adult-social-care/being-carer/support-for-carers/financial-support" element={<FinancialSupportPage />} />
          <Route path="/adult-social-care/being-carer/support-for-carers/taking-a-break" element={<TakingBreakPage />} />
          <Route path="/adult-social-care/being-carer/support-for-carers/taking-break" element={<TakingBreakPage />} />
          <Route path="/adult-social-care/being-carer/support-for-carers/carer-emergency-plan" element={<CarerEmergencyPlanPage />} />
          <Route path="/adult-social-care/being-carer/support-for-carers/health-and-wellbeing" element={<HealthWellbeingPage />} />
          <Route path="/adult-social-care/being-carer/support-for-carers/local-groups-and-services" element={<LocalGroupsServicesPage />} />
          <Route path="/adult-social-care/being-carer/support-for-carers/training-and-workshops" element={<TrainingWorkshopsPage />} />
          <Route path="/adult-social-care/being-carer/support-for-carers/carers-feedback" element={<CarersFeedbackPage />} />
          <Route path="/adult-social-care/being-carer/support-for-carers/useful-contacts" element={<UsefulContactsPage />} />
          <Route path="/adult-social-care/being-carer/young-carers" element={<YoungCarersPage />} />
          <Route path="/adult-social-care/being-carer/parent-carers" element={<ParentCarersPage />} />
          <Route path="/adult-social-care/being-carer/work-and-education" element={<WorkEducationPage />} />
          <Route path="/adult-social-care/being-carer/support-after-caring" element={<SupportAfterCaringPage />} />
          <Route path="/adult-social-care/being-carer/strategy-and-council-duties" element={<StrategyCouncilDutiesPage />} />
          <Route path="/adult-social-care/being-carer/carers-hub" element={<CarersHubPage />} />
          <Route path="/adult-social-care/being-carer/ia-flow" element={<IAFlowPage />} />
          <Route path="/adult-social-care/being-carer/hubs/adult-carers" element={<AdultCarersHub />} />
          <Route path="/adult-social-care/being-carer/hubs/parent-carers" element={<ParentCarersHub />} />
          <Route path="/adult-social-care/being-carer/hubs/universal-offer" element={<UniversalOfferHub />} />
          <Route path="/adult-social-care/being-carer/hubs/young-carers" element={<YoungCarersHub />} />
          <Route path="/adult-social-care/being-carer/tasks/assessment" element={<CarerTaskAssessmentPage />} />
          <Route path="/adult-social-care/being-carer/tasks/breaks-respite" element={<CarerTaskBreaksRespitePage />} />
          <Route path="/adult-social-care/being-carer/tasks/emergency-help" element={<CarerTaskEmergencyHelpPage />} />
          <Route path="/adult-social-care/being-carer/tasks/money-benefits" element={<CarerTaskMoneyBenefitsPage />} />

          {/* How adult social care works - additional */}
          <Route path="/adult-social-care/how-adult-social-care-works/how-to-ask-for-help" element={<HowToAskForHelpPage />} />

          {/* Default fallback */}
          <Route path="*" element={<Navigate to="/adult-social-care" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
