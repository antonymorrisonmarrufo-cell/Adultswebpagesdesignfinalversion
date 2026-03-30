import { useState, useEffect } from "react";
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

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    window.location.hash.slice(1) || "/adult-social-care",
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(
        window.location.hash.slice(1) || "/adult-social-care",
      );
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () =>
      window.removeEventListener(
        "hashchange",
        handleHashChange,
      );
  }, []);

  const renderPage = () => {
    // Main site routes
    switch (currentPath) {
      case "/":
        return <HomePage />;
      case "/adult-social-care":
        return <AdultSocialCarePage />;
      case "/adult-social-care/specialist-services":
        return <SpecialistServicesPage />;

      // Dementia
      case "/adult-social-care/specialist-services/dementia-support":
        return <DementiaSupportPage />;
      case "/adult-social-care/specialist-services/dementia/get-help":
        return <DementiaGetHelpPage />;
      case "/adult-social-care/specialist-services/dementia/hub":
        return <DementiaHubPage />;
      case "/adult-social-care/specialist-services/dementia/memory-service":
        return <DementiaMemoryServicePage />;
      case "/adult-social-care/specialist-services/dementia/activities":
        return <DementiaActivitiesPage />;
      case "/adult-social-care/specialist-services/dementia/adviser":
        return <DementiaAdviserPage />;
      case "/adult-social-care/specialist-services/dementia/idos":
        return <DementiaIdosPage />;
      case "/adult-social-care/specialist-services/dementia/carers":
        return <DementiaCarersPage />;
      case "/adult-social-care/specialist-services/dementia/planning-ahead":
        return <DementiaPlanningPage />;

      // Safeguarding
      case "/adult-social-care/protecting-adults-at-risk":
        return <ProtectingAdultsPage />;
      case "/adult-social-care/report-abuse-or-neglect":
        return <ReportAbusePage />;
      case "/adult-social-care/professionals-and-providers":
        return <ProfessionalsPage />;
      case "/adult-social-care/professional-guidance":
        return <ProfessionalGuidancePage />;
      case "/adult-social-care/marac":
        return <MaracPage />;
      case "/adult-social-care/abuse-and-neglect":
        return <AbuseAndNeglectPage />;
      case "/adult-social-care/what-happens-after-you-report":
        return <WhatHappensAfterPage />;
      case "/adult-social-care/safeguarding-adults-board":
        return <SafeguardingBoardPage />;
      case "/adult-social-care/resources-to-improve-practice":
        return <ResourcesImprovePracticePage />;
      case "/children-and-families/report-concern-about-child":
        return <ReportChildConcernPage />;

      // Specialist services
      case "/adult-social-care/specialist-services/learning-disabilities":
      case "/adult-social-care/learning-disability-support":
        return <LearningDisabilitySupportPage />;
      case "/adult-social-care/learning-disability-support/ask-for-support":
        return <LDAskForSupportPage />;
      case "/adult-social-care/learning-disability-support/support-for-carers-and-families":
        return <LDSupportForCarersPage />;
      case "/adult-social-care/learning-disability-support/preparing-for-adulthood":
        return <LDPreparingForAdulthoodPage />;
      case "/adult-social-care/learning-disability-support/easy-read-information-and-resources":
        return <LDEasyReadResourcesPage />;
      case "/adult-social-care/learning-disability-support/professional-referral":
        return <LDProfessionalReferralPage />;
      case "/adult-social-care/learning-disability-support/request-support":
        return <LDRequestSupportPage />;
      case "/adult-social-care/learning-disability-support/housing-and-support-options":
        return <LDHousingAndSupportOptionsPage />;
      case "/adult-social-care/learning-disability-support/housing/living-with-family":
        return <LDHousingLivingWithFamilyPage />;
      case "/adult-social-care/learning-disability-support/housing/supported-living":
        return <LDHousingSupportedLivingPage />;
      case "/adult-social-care/learning-disability-support/housing/residential-care":
        return <LDHousingResidentialCarePage />;
      case "/adult-social-care/learning-disability-support/housing/shared-lives":
        return <LDHousingSharedLivesPage />;
      case "/adult-social-care/learning-disability-support/housing/independent-living":
        return <LDHousingIndependentLivingPage />;
      case "/adult-social-care/specialist-services/autism-support":
        return <AutismSupportPage />;
      case "/adult-social-care/specialist-services/visual-and-hearing-impairments":
        return <VisualHearingPage />;
      case "/adult-social-care/specialist-services/physical-disabilities":
        return <PhysicalDisabilitiesPage />;
      case "/adult-social-care/specialist-services/long-term-conditions":
        return <LongTermConditionsPage />;
      case "/adult-social-care/work-and-disability":
        return <WorkDisabilityPage />;
      case "/adult-social-care/specialist-services/power-attorney-deputyship-and-appointeeship":
        return <PowerOfAttorneyPage />;

      // Travel and transport
      case "/adult-social-care/travel-and-transport":
        return <TravelTransportPage />;
      case "/adult-social-care/travel-and-transport/blue-badge":
        return <BlueBadgePage />;
      case "/adult-social-care/travel-and-transport/freedom-pass-disabled":
        return <FreedomPassDisabledPage />;
      case "/adult-social-care/travel-and-transport/freedom-pass-older":
        return <FreedomPassOlderPage />;
      case "/adult-social-care/travel-and-transport/taxicard":
        return <TaxicardPage />;
      case "/adult-social-care/travel-and-transport/transport-mobility-support":
        return <TransportMobilityPage />;
      case "/adult-social-care/travel-and-transport/blue-badge-organisations":
        return <BlueBadgeOrgsPage />;

      // Live independently at home
      case "/adult-social-care/live-independently-at-home":
        return <LiveIndependentlyPage />;
      case "/adult-social-care/live-independently-at-home/home-adaptations-and-occupational-therapy":
        return <HomeAdaptationsPage />;
      case "/adult-social-care/live-independently-at-home/equipment-and-assistive-technology":
        return <EquipmentPage />;
      case "/adult-social-care/live-independently-at-home/help-at-home-and-personal-care":
        return <HelpAtHomePage />;
      case "/adult-social-care/live-independently-at-home/falls-prevention-and-reablement":
        return <FallsPreventionPage />;
      case "/adult-social-care/live-independently-at-home/telecare-and-community-alarm":
        return <TelecarePage />;
      case "/adult-social-care/live-independently-at-home/keeping-safe-at-home":
        return <KeepingSafePage />;
      case "/adult-social-care/live-independently-at-home/keeping-safe-at-home/callers-to-your-door":
        return <CallersToYourDoorPage />;
      case "/adult-social-care/live-independently-at-home/keeping-safe-at-home/online-email-or-postal-fraud":
        return <OnlineEmailPostalFraudPage />;
      case "/adult-social-care/live-independently-at-home/keeping-safe-at-home/fraud-over-the-phone":
        return <FraudOverPhonePage />;
      case "/adult-social-care/live-independently-at-home/keeping-safe-at-home/fire-safety-advice-for-your-home":
        return <FireSafetyPage />;
      case "/adult-social-care/live-independently-at-home/keeping-safe-at-home/further-information-about-keeping-your-home-safe":
        return <FurtherInfoSafetyPage />;
      case "/adult-social-care/live-independently-at-home/homeshare":
        return <HomesharePage />;
      case "/adult-social-care/live-independently-at-home/social-prescribing":
        return <SocialPrescribingPage />;
      case "/adult-social-care/live-independently-at-home/request-home-independence-assessment":
        return <RequestHomeAssessmentForm />;
      case "/adult-social-care/live-independently-at-home/request-telecare-or-community-alarm":
        return <RequestTelecareForm />;
      case "/adult-social-care/live-independently-at-home/professional-referral-home-independence":
        return <ProfessionalReferralForm />;

      // Care homes and supported living
      case "/adult-social-care/care-homes-and-supported-living":
        return <CareHomesHubPage />;
      case "/adult-social-care/care-homes-and-supported-living/care-homes-and-nursing-homes":
        return <CareHomesNursingHomesPage />;
      case "/adult-social-care/care-homes-and-supported-living/supported-living":
        return <CHSupportedLivingPage />;
      case "/adult-social-care/care-homes-and-supported-living/shared-lives":
        return <CHSharedLivesPage />;
      case "/adult-social-care/care-homes-and-supported-living/extra-care-housing":
        return <ExtraCareHousingPage />;
      case "/adult-social-care/care-homes-and-supported-living/sheltered-housing":
        return <ShelteredHousingPage />;
      case "/adult-social-care/care-homes-and-supported-living/alliston-house":
        return <AllistonHousePage />;
      case "/adult-social-care/care-homes-and-supported-living/george-mason-lodge":
        return <GeorgeMasonLodgePage />;
      case "/adult-social-care/care-homes-and-supported-living/mapleton-road":
        return <MapletonRoadPage />;
      case "/adult-social-care/care-homes-and-supported-living/request-housing-care-support":
        return <RequestHousingCareSupportPage />;

      // Paying for care
      case "/adult-social-care/paying-for-care":
        return <PayingForCareHubPage />;
      case "/adult-social-care/paying-for-care/how-care-costs-are-worked-out":
        return <HowCareCostsWorkedOutPage />;
      case "/adult-social-care/paying-for-care/financial-assessment":
        return <FinancialAssessmentPage />;
      case "/adult-social-care/paying-for-care/benefits-and-help-with-costs":
        return <BenefitsAndHelpPage />;
      case "/adult-social-care/paying-for-care/direct-payments-and-personal-budgets":
        return <DirectPaymentsPersonalBudgetsPage />;
      case "/adult-social-care/paying-for-care/paying-for-a-care-home":
        return <PayingForCareHomePage />;
      case "/adult-social-care/paying-for-care/get-financial-advice":
        return <GetFinancialAdvicePage />;
      case "/adult-social-care/paying-for-care/deferred-payment-agreements":
        return <DeferredPaymentAgreementsPage />;

      // How adult social care works
      case "/adult-social-care/how-adult-social-care-works":
        return <HowAdultSocialCareWorksHubPage />;
      case "/adult-social-care/how-adult-social-care-works/what-is-adult-social-care":
        return <WhatIsAdultSocialCarePage />;
      case "/adult-social-care/how-adult-social-care-works/who-can-get-help":
        return <WhoCanGetHelpPage />;

      // How to get support
      case "/adult-social-care/how-to-get-support":
        return <HowToGetSupportHubPage />;
      case "/adult-social-care/how-to-get-support/check-your-situation-online":
        return <CheckSituationOnlinePage />;
      case "/adult-social-care/how-to-get-support/contact-us":
        return <ContactUsPage />;
      case "/adult-social-care/how-to-get-support/request-an-assessment":
        return <RequestAssessmentPage />;
      case "/adult-social-care/how-to-get-support/what-happens-during-your-assessment":
        return <WhatHappensDuringYourAssessmentPage />;
      case "/adult-social-care/how-to-get-support/getting-your-care-and-support-plan":
        return <GettingCareAndSupportPlanPage />;

      // Mental health and wellbeing
      case "/adult-social-care/mental-health-wellbeing":
        return <MentalHealthWellbeingHubPage />;
      case "/adult-social-care/mental-health-wellbeing/urgent-mental-health-support":
        return <UrgentMentalHealthSupportPage />;
      case "/adult-social-care/mental-health-wellbeing/looking-after-your-mental-wellbeing":
        return <LookingAfterMentalWellbeingPage />;
      case "/adult-social-care/mental-health-wellbeing/talking-therapies-and-professional-support":
        return <TalkingTherapiesProfessionalSupportPage />;
      case "/adult-social-care/mental-health-wellbeing/adult-social-care-and-mental-health":
        return <AdultSocialCareMentalHealthPage />;
      case "/adult-social-care/mental-health-wellbeing/local-mental-health-support-services":
        return <LocalMentalHealthSupportServicesPage />;

      // Complaints and compliments
      case "/adult-social-care/complaints-compliments":
        return <ComplaintsComplimentsHubPage />;
      case "/adult-social-care/complaints-compliments/make-a-complaint":
        return <MakeComplaintPage />;
      case "/adult-social-care/complaints-compliments/send-us-a-compliment":
        return <SendComplimentPage />;
      case "/adult-social-care/complaints-compliments/help-shape-our-services":
        return <HelpShapeServicesPage />;
      case "/adult-social-care/complaints-compliments/independent-help-and-advocacy":
        return <IndependentHelpAdvocacyPage />;

      // Our Policies
      case "/adult-social-care/our-policies":
        return <OurPoliciesHubPage />;
      case "/adult-social-care/our-policies/charging-and-financial-policies":
        return <ChargingFinancialPoliciesPage />;
      case "/adult-social-care/our-policies/safeguarding-policies-reports":
        return <SafeguardingPoliciesReportsPage />;
      case "/adult-social-care/our-policies/market-sustainability-commissioning":
        return <MarketSustainabilityCommissioningPage />;
      case "/adult-social-care/our-policies/privacy-and-data":
        return <PrivacyAndDataPage />;
      case "/adult-social-care/our-policies/consultations":
        return <ConsultationsPage />;

      // Understand Your Rights
      case "/adult-social-care/understand-your-rights":
        return <UnderstandYourRightsHubPage />;
      case "/adult-social-care/understand-your-rights/your-rights-under-the-care-act":
        return <YourRightsUnderCareActPage />;
      case "/adult-social-care/understand-your-rights/independent-advocacy":
        return <IndependentAdvocacyPage />;
      case "/adult-social-care/understand-your-rights/mental-capacity-and-decision-making":
        return <MentalCapacityDecisionMakingPage />;
      case "/adult-social-care/understand-your-rights/your-rights-as-a-carer":
        return <YourRightsAsCarerPage />;
      case "/adult-social-care/understand-your-rights/challenging-decisions-raising-concerns":
        return <ChallengingDecisionsRaisingConcernsPage />;

      // Information for Professionals
      case "/adult-social-care/information-for-professionals":
        return <InformationForProfessionalsHubPage />;
      case "/adult-social-care/information-for-professionals/how-to-make-referral":
        return <HowToMakeReferralPage />;
      case "/adult-social-care/information-for-professionals/safeguarding-adults":
        return <SafeguardingAdultsProfessionalsPage />;
      case "/adult-social-care/information-for-professionals/practice-guidance-resources":
        return <PracticeGuidanceResourcesPage />;
      case "/adult-social-care/information-for-professionals/commissioning-provider-information":
        return <CommissioningProviderInformationPage />;
      case "/adult-social-care/information-for-professionals/key-teams-contact-details":
        return <KeyTeamsContactDetailsPage />;

      // Being a Carer
      case "/adult-social-care/being-carer":
        return <BeingCarerPage />;
      case "/adult-social-care/being-carer/carers-assessment-and-rights":
        return <CarersAssessmentRightsPage />;
      case "/adult-social-care/being-carer/support-for-carers":
        return <SupportForCarersPage />;
      case "/adult-social-care/being-carer/support-for-carers/financial-support":
        return <FinancialSupportPage />;
      case "/adult-social-care/being-carer/support-for-carers/taking-a-break":
      case "/adult-social-care/being-carer/support-for-carers/taking-break":
        return <TakingBreakPage />;
      case "/adult-social-care/being-carer/support-for-carers/carer-emergency-plan":
        return <CarerEmergencyPlanPage />;
      case "/adult-social-care/being-carer/support-for-carers/health-and-wellbeing":
        return <HealthWellbeingPage />;
      case "/adult-social-care/being-carer/support-for-carers/local-groups-and-services":
        return <LocalGroupsServicesPage />;
      case "/adult-social-care/being-carer/support-for-carers/training-and-workshops":
        return <TrainingWorkshopsPage />;
      case "/adult-social-care/being-carer/support-for-carers/carers-feedback":
        return <CarersFeedbackPage />;
      case "/adult-social-care/being-carer/support-for-carers/useful-contacts":
        return <UsefulContactsPage />;
      case "/adult-social-care/being-carer/young-carers":
        return <YoungCarersPage />;
      case "/adult-social-care/being-carer/parent-carers":
        return <ParentCarersPage />;
      case "/adult-social-care/being-carer/work-and-education":
        return <WorkEducationPage />;
      case "/adult-social-care/being-carer/support-after-caring":
        return <SupportAfterCaringPage />;
      case "/adult-social-care/being-carer/strategy-and-council-duties":
        return <StrategyCouncilDutiesPage />;

      default:
        return <AdultSocialCarePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
    </div>
  );
}
