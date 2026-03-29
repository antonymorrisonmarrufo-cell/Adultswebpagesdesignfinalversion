import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ---------- Lazy-loaded pages ---------- */

// Home & top-level
const HomePage = lazy(() => import("@/pages/HomePage"));
const AdultSocialCarePage = lazy(() => import("@/pages/AdultSocialCarePage"));
const SpecialistServicesPage = lazy(() => import("@/pages/SpecialistServicesPage"));
const ReportAbusePage = lazy(() => import("@/pages/ReportAbusePage"));

// Standalone topic pages
const AutismSupportPage = lazy(() => import("@/pages/AutismSupportPage"));
const VisualHearingPage = lazy(() => import("@/pages/VisualHearingPage"));
const PhysicalDisabilitiesPage = lazy(() => import("@/pages/PhysicalDisabilitiesPage"));
const LongTermConditionsPage = lazy(() => import("@/pages/LongTermConditionsPage"));
const WorkDisabilityPage = lazy(() => import("@/pages/WorkDisabilityPage"));
const PowerOfAttorneyPage = lazy(() => import("@/pages/PowerOfAttorneyPage"));

// Dementia
const DementiaSupportPage = lazy(() => import("@/pages/DementiaSupportPage"));
const DementiaGetHelpPage = lazy(() => import("@/pages/dementia/GetHelpPage"));
const DementiaHubPage = lazy(() => import("@/pages/dementia/HubPage"));
const DementiaMemoryServicePage = lazy(() => import("@/pages/dementia/MemoryServicePage"));
const DementiaActivitiesPage = lazy(() => import("@/pages/dementia/ActivitiesPage"));
const DementiaAdviserPage = lazy(() => import("@/pages/dementia/AdviserPage"));
const DementiaIdosPage = lazy(() => import("@/pages/dementia/IdosPage"));
const DementiaCarersPage = lazy(() => import("@/pages/dementia/CarersPage"));
const DementiaPlanningPage = lazy(() => import("@/pages/dementia/PlanningPage"));

// Learning Disability
const LearningDisabilitySupportPage = lazy(() => import("@/pages/learning-disability/LearningDisabilitySupportPage"));
const LDAskForSupportPage = lazy(() => import("@/pages/learning-disability/AskForSupportPage"));
const LDSupportForCarersPage = lazy(() => import("@/pages/learning-disability/SupportForCarersPage"));
const LDPreparingForAdulthoodPage = lazy(() => import("@/pages/learning-disability/PreparingForAdulthoodPage"));
const LDEasyReadResourcesPage = lazy(() => import("@/pages/learning-disability/EasyReadResourcesPage"));
const LDProfessionalReferralPage = lazy(() => import("@/pages/learning-disability/ProfessionalReferralPage"));
const LDRequestSupportPage = lazy(() => import("@/pages/learning-disability/RequestSupportPage"));
const LDHousingAndSupportOptionsPage = lazy(() => import("@/pages/learning-disability/HousingAndSupportOptionsPage"));
const LDLivingWithFamilyPage = lazy(() => import("@/pages/learning-disability/housing/LivingWithFamilyPage"));
const LDSupportedLivingPage = lazy(() => import("@/pages/learning-disability/housing/SupportedLivingPage"));
const LDResidentialCarePage = lazy(() => import("@/pages/learning-disability/housing/ResidentialCarePage"));
const LDSharedLivesPage = lazy(() => import("@/pages/learning-disability/housing/SharedLivesPage"));
const LDIndependentLivingPage = lazy(() => import("@/pages/learning-disability/housing/IndependentLivingPage"));

// Transport
const TravelTransportPage = lazy(() => import("@/pages/transport/TravelTransportPage"));
const BlueBadgePage = lazy(() => import("@/pages/transport/BlueBadgePage"));
const FreedomPassDisabledPage = lazy(() => import("@/pages/transport/FreedomPassDisabledPage"));
const FreedomPassOlderPage = lazy(() => import("@/pages/transport/FreedomPassOlderPage"));
const TaxicardPage = lazy(() => import("@/pages/transport/TaxicardPage"));
const TransportMobilityPage = lazy(() => import("@/pages/transport/TransportMobilityPage"));
const BlueBadgeOrgsPage = lazy(() => import("@/pages/transport/BlueBadgeOrgsPage"));

// Live Independently
const LiveIndependentlyPage = lazy(() => import("@/pages/live-independently/LiveIndependentlyPage"));
const HomeAdaptationsPage = lazy(() => import("@/pages/live-independently/HomeAdaptationsPage"));
const EquipmentPage = lazy(() => import("@/pages/live-independently/EquipmentPage"));
const HelpAtHomePage = lazy(() => import("@/pages/live-independently/HelpAtHomePage"));
const FallsPreventionPage = lazy(() => import("@/pages/live-independently/FallsPreventionPage"));
const TelecarePage = lazy(() => import("@/pages/live-independently/TelecarePage"));
const KeepingSafePage = lazy(() => import("@/pages/live-independently/KeepingSafePage"));
const CallersToYourDoorPage = lazy(() => import("@/pages/live-independently/keeping-safe/CallersToYourDoorPage"));
const OnlineEmailPostalFraudPage = lazy(() => import("@/pages/live-independently/keeping-safe/OnlineEmailPostalFraudPage"));
const FraudOverPhonePage = lazy(() => import("@/pages/live-independently/keeping-safe/FraudOverPhonePage"));
const FireSafetyPage = lazy(() => import("@/pages/live-independently/keeping-safe/FireSafetyPage"));
const FurtherInfoSafetyPage = lazy(() => import("@/pages/live-independently/keeping-safe/FurtherInfoSafetyPage"));
const HomesharePage = lazy(() => import("@/pages/live-independently/HomesharePage"));
const SocialPrescribingPage = lazy(() => import("@/pages/live-independently/SocialPrescribingPage"));
const RequestHomeAssessmentForm = lazy(() => import("@/pages/live-independently/RequestHomeAssessmentForm"));
const RequestTelecareForm = lazy(() => import("@/pages/live-independently/RequestTelecareForm"));
const ProfessionalReferralForm = lazy(() => import("@/pages/live-independently/ProfessionalReferralForm"));

// Care Homes
const CareHomesHubPage = lazy(() => import("@/pages/care-homes/CareHomesHubPage"));
const RequestHousingCareSupportPage = lazy(() => import("@/pages/care-homes/RequestHousingCareSupportPage"));
const CHSupportedLivingPage = lazy(() => import("@/pages/care-homes/SupportedLivingPage"));
const CHSharedLivesPage = lazy(() => import("@/pages/care-homes/SharedLivesPage"));
const ExtraCareHousingPage = lazy(() => import("@/pages/care-homes/ExtraCareHousingPage"));
const ShelteredHousingPage = lazy(() => import("@/pages/care-homes/ShelteredHousingPage"));
const CareHomesNursingHomesPage = lazy(() => import("@/pages/care-homes/CareHomesNursingHomesPage"));
const GeorgeMasonLodgePage = lazy(() => import("@/pages/care-homes/GeorgeMasonLodgePage"));
const MapletonRoadPage = lazy(() => import("@/pages/care-homes/MapletonRoadPage"));
const AllistonHousePage = lazy(() => import("@/pages/care-homes/AllistonHousePage"));

// Carers
const BeingCarerPage = lazy(() => import("@/pages/carers/BeingCarerPage"));
const CarersAssessmentRightsPage = lazy(() => import("@/pages/carers/CarersAssessmentRightsPage"));
const SupportForCarersPage = lazy(() => import("@/pages/carers/SupportForCarersPage"));
const FinancialSupportPage = lazy(() => import("@/pages/carers/support/FinancialSupportPage"));
const TakingBreakPage = lazy(() => import("@/pages/carers/support/TakingBreakPage"));
const CarerEmergencyPlanPage = lazy(() => import("@/pages/carers/support/CarerEmergencyPlanPage"));
const HealthWellbeingPage = lazy(() => import("@/pages/carers/support/HealthWellbeingPage"));
const LocalGroupsServicesPage = lazy(() => import("@/pages/carers/support/LocalGroupsServicesPage"));
const TrainingWorkshopsPage = lazy(() => import("@/pages/carers/support/TrainingWorkshopsPage"));
const CarersFeedbackPage = lazy(() => import("@/pages/carers/support/CarersFeedbackPage"));
const UsefulContactsPage = lazy(() => import("@/pages/carers/support/UsefulContactsPage"));
const YoungCarersPage = lazy(() => import("@/pages/carers/YoungCarersPage"));
const ParentCarersPage = lazy(() => import("@/pages/carers/ParentCarersPage"));
const WorkEducationPage = lazy(() => import("@/pages/carers/WorkEducationPage"));
const SupportAfterCaringPage = lazy(() => import("@/pages/carers/SupportAfterCaringPage"));
const StrategyCouncilDutiesPage = lazy(() => import("@/pages/carers/StrategyCouncilDutiesPage"));
const CarersHubPage = lazy(() => import("@/pages/carers/CarersHubPage"));
const IAFlowPage = lazy(() => import("@/pages/carers/IAFlowPage"));
const AdultCarersHub = lazy(() => import("@/pages/carers/hubs/AdultCarersHub"));
const ParentCarersHub = lazy(() => import("@/pages/carers/hubs/ParentCarersHub"));
const UniversalOfferHub = lazy(() => import("@/pages/carers/hubs/UniversalOfferHub"));
const YoungCarersHub = lazy(() => import("@/pages/carers/hubs/YoungCarersHub"));
const CarersTaskAssessmentPage = lazy(() => import("@/pages/carers/tasks/AssessmentPage"));
const CarersTaskBreaksRespitePage = lazy(() => import("@/pages/carers/tasks/BreaksRespitePage"));
const CarersTaskEmergencyHelpPage = lazy(() => import("@/pages/carers/tasks/EmergencyHelpPage"));
const CarersTaskMoneyBenefitsPage = lazy(() => import("@/pages/carers/tasks/MoneyBenefitsPage"));
const CarersTaskUsefulContactsPage = lazy(() => import("@/pages/carers/tasks/UsefulContactsPage"));

// Paying for Care
const PayingForCareHubPage = lazy(() => import("@/pages/paying-for-care/PayingForCareHubPage"));
const HowCareCostsWorkedOutPage = lazy(() => import("@/pages/paying-for-care/HowCareCostsWorkedOutPage"));
const FinancialAssessmentPage = lazy(() => import("@/pages/paying-for-care/FinancialAssessmentPage"));
const BenefitsAndHelpPage = lazy(() => import("@/pages/paying-for-care/BenefitsAndHelpPage"));
const DirectPaymentsPersonalBudgetsPage = lazy(() => import("@/pages/paying-for-care/DirectPaymentsPersonalBudgetsPage"));
const PayingForCareHomePage = lazy(() => import("@/pages/paying-for-care/PayingForCareHomePage"));
const GetFinancialAdvicePage = lazy(() => import("@/pages/paying-for-care/GetFinancialAdvicePage"));
const DeferredPaymentAgreementsPage = lazy(() => import("@/pages/paying-for-care/DeferredPaymentAgreementsPage"));

// How Adult Social Care Works
const HowAdultSocialCareWorksHubPage = lazy(() => import("@/pages/how-adult-social-care-works/HowAdultSocialCareWorksHubPage"));
const WhatIsAdultSocialCarePage = lazy(() => import("@/pages/how-adult-social-care-works/WhatIsAdultSocialCarePage"));
const WhoCanGetHelpPage = lazy(() => import("@/pages/how-adult-social-care-works/WhoCanGetHelpPage"));
const HowToAskForHelpPage = lazy(() => import("@/pages/how-adult-social-care-works/HowToAskForHelpPage"));
const WhatHappensDuringAssessmentPage = lazy(() => import("@/pages/how-adult-social-care-works/WhatHappensDuringAssessmentPage"));
const YourCareAndSupportPlanPage = lazy(() => import("@/pages/how-adult-social-care-works/YourCareAndSupportPlanPage"));

// How to Get Support
const HowToGetSupportHubPage = lazy(() => import("@/pages/how-to-get-support/HowToGetSupportHubPage"));
const CheckSituationOnlinePage = lazy(() => import("@/pages/how-to-get-support/CheckSituationOnlinePage"));
const ContactUsPage = lazy(() => import("@/pages/how-to-get-support/ContactUsPage"));
const RequestAssessmentPage = lazy(() => import("@/pages/how-to-get-support/RequestAssessmentPage"));
const WhatHappensDuringYourAssessmentPage = lazy(() => import("@/pages/how-to-get-support/WhatHappensDuringYourAssessmentPage"));
const GettingCareAndSupportPlanPage = lazy(() => import("@/pages/how-to-get-support/GettingCareAndSupportPlanPage"));

// Mental Health
const MentalHealthWellbeingHubPage = lazy(() => import("@/pages/mental-health/MentalHealthWellbeingHubPage"));
const UrgentMentalHealthSupportPage = lazy(() => import("@/pages/mental-health/UrgentMentalHealthSupportPage"));
const LookingAfterMentalWellbeingPage = lazy(() => import("@/pages/mental-health/LookingAfterMentalWellbeingPage"));
const TalkingTherapiesProfessionalSupportPage = lazy(() => import("@/pages/mental-health/TalkingTherapiesProfessionalSupportPage"));
const AdultSocialCareMentalHealthPage = lazy(() => import("@/pages/mental-health/AdultSocialCareMentalHealthPage"));
const LocalMentalHealthSupportServicesPage = lazy(() => import("@/pages/mental-health/LocalMentalHealthSupportServicesPage"));

// Complaints & Compliments
const ComplaintsComplimentsHubPage = lazy(() => import("@/pages/complaints-compliments/ComplaintsComplimentsHubPage"));
const MakeComplaintPage = lazy(() => import("@/pages/complaints-compliments/MakeComplaintPage"));
const SendComplimentPage = lazy(() => import("@/pages/complaints-compliments/SendComplimentPage"));
const HelpShapeServicesPage = lazy(() => import("@/pages/complaints-compliments/HelpShapeServicesPage"));
const IndependentHelpAdvocacyPage = lazy(() => import("@/pages/complaints-compliments/IndependentHelpAdvocacyPage"));

// Our Policies
const OurPoliciesHubPage = lazy(() => import("@/pages/our-policies/OurPoliciesHubPage"));
const ChargingFinancialPoliciesPage = lazy(() => import("@/pages/our-policies/ChargingFinancialPoliciesPage"));
const SafeguardingPoliciesReportsPage = lazy(() => import("@/pages/our-policies/SafeguardingPoliciesReportsPage"));
const MarketSustainabilityCommissioningPage = lazy(() => import("@/pages/our-policies/MarketSustainabilityCommissioningPage"));
const PrivacyAndDataPage = lazy(() => import("@/pages/our-policies/PrivacyAndDataPage"));
const ConsultationsPage = lazy(() => import("@/pages/our-policies/ConsultationsPage"));

// Understand Your Rights
const UnderstandYourRightsHubPage = lazy(() => import("@/pages/understand-your-rights/UnderstandYourRightsHubPage"));
const YourRightsUnderCareActPage = lazy(() => import("@/pages/understand-your-rights/YourRightsUnderCareActPage"));
const IndependentAdvocacyPage = lazy(() => import("@/pages/understand-your-rights/IndependentAdvocacyPage"));
const MentalCapacityDecisionMakingPage = lazy(() => import("@/pages/understand-your-rights/MentalCapacityDecisionMakingPage"));
const YourRightsAsCarerPage = lazy(() => import("@/pages/understand-your-rights/YourRightsAsCarerPage"));
const ChallengingDecisionsRaisingConcernsPage = lazy(() => import("@/pages/understand-your-rights/ChallengingDecisionsRaisingConcernsPage"));

// Information for Professionals
const InformationForProfessionalsHubPage = lazy(() => import("@/pages/information-for-professionals/InformationForProfessionalsHubPage"));
const HowToMakeReferralPage = lazy(() => import("@/pages/information-for-professionals/HowToMakeReferralPage"));
const SafeguardingAdultsProfessionalsPage = lazy(() => import("@/pages/information-for-professionals/SafeguardingAdultsProfessionalsPage"));
const PracticeGuidanceResourcesPage = lazy(() => import("@/pages/information-for-professionals/PracticeGuidanceResourcesPage"));
const CommissioningProviderInformationPage = lazy(() => import("@/pages/information-for-professionals/CommissioningProviderInformationPage"));
const KeyTeamsContactDetailsPage = lazy(() => import("@/pages/information-for-professionals/KeyTeamsContactDetailsPage"));

// Safeguarding
const ProtectingAdultsPage = lazy(() => import("@/pages/safeguarding/ProtectingAdultsPage"));
const SafeguardingReportAbusePage = lazy(() => import("@/pages/safeguarding/ReportAbusePage"));
const SafeguardingProfessionalsPage = lazy(() => import("@/pages/safeguarding/ProfessionalsPage"));
const AbuseAndNeglectPage = lazy(() => import("@/pages/safeguarding/AbuseAndNeglectPage"));
const WhatHappensAfterPage = lazy(() => import("@/pages/safeguarding/WhatHappensAfterPage"));
const SafeguardingBoardPage = lazy(() => import("@/pages/safeguarding/SafeguardingBoardPage"));
const ReportChildConcernPage = lazy(() => import("@/pages/safeguarding/ReportChildConcernPage"));
const ProfessionalGuidancePage = lazy(() => import("@/pages/safeguarding/ProfessionalGuidancePage"));
const MaracPage = lazy(() => import("@/pages/safeguarding/MaracPage"));
const ResourcesImprovePracticePage = lazy(() => import("@/pages/safeguarding/ResourcesImprovePracticePage"));

/* ---------- Loading fallback ---------- */

function PageLoader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-wf-green border-t-transparent" />
    </div>
  );
}

/* ---------- App ---------- */

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage />} />
            <Route path="/adult-social-care" element={<AdultSocialCarePage />} />
            <Route path="/specialist-services" element={<SpecialistServicesPage />} />
            <Route path="/report-abuse" element={<ReportAbusePage />} />

            {/* Dementia */}
            <Route path="/dementia" element={<DementiaSupportPage />} />
            <Route path="/dementia/get-help" element={<DementiaGetHelpPage />} />
            <Route path="/dementia/hub" element={<DementiaHubPage />} />
            <Route path="/dementia/memory-service" element={<DementiaMemoryServicePage />} />
            <Route path="/dementia/activities" element={<DementiaActivitiesPage />} />
            <Route path="/dementia/adviser" element={<DementiaAdviserPage />} />
            <Route path="/dementia/idos" element={<DementiaIdosPage />} />
            <Route path="/dementia/carers" element={<DementiaCarersPage />} />
            <Route path="/dementia/planning" element={<DementiaPlanningPage />} />

            {/* Learning Disability */}
            <Route path="/learning-disability" element={<LearningDisabilitySupportPage />} />
            <Route path="/learning-disability/ask-for-support" element={<LDAskForSupportPage />} />
            <Route path="/learning-disability/support-for-carers" element={<LDSupportForCarersPage />} />
            <Route path="/learning-disability/preparing-for-adulthood" element={<LDPreparingForAdulthoodPage />} />
            <Route path="/learning-disability/easy-read-resources" element={<LDEasyReadResourcesPage />} />
            <Route path="/learning-disability/professional-referral" element={<LDProfessionalReferralPage />} />
            <Route path="/learning-disability/request-support" element={<LDRequestSupportPage />} />
            <Route path="/learning-disability/housing-and-support-options" element={<LDHousingAndSupportOptionsPage />} />
            <Route path="/learning-disability/housing/living-with-family" element={<LDLivingWithFamilyPage />} />
            <Route path="/learning-disability/housing/supported-living" element={<LDSupportedLivingPage />} />
            <Route path="/learning-disability/housing/residential-care" element={<LDResidentialCarePage />} />
            <Route path="/learning-disability/housing/shared-lives" element={<LDSharedLivesPage />} />
            <Route path="/learning-disability/housing/independent-living" element={<LDIndependentLivingPage />} />

            {/* Standalone topic pages */}
            <Route path="/autism" element={<AutismSupportPage />} />
            <Route path="/visual-hearing" element={<VisualHearingPage />} />
            <Route path="/physical-disabilities" element={<PhysicalDisabilitiesPage />} />
            <Route path="/long-term-conditions" element={<LongTermConditionsPage />} />
            <Route path="/work-disability" element={<WorkDisabilityPage />} />
            <Route path="/power-of-attorney" element={<PowerOfAttorneyPage />} />

            {/* Transport */}
            <Route path="/transport" element={<TravelTransportPage />} />
            <Route path="/transport/blue-badge" element={<BlueBadgePage />} />
            <Route path="/transport/freedom-pass-disabled" element={<FreedomPassDisabledPage />} />
            <Route path="/transport/freedom-pass-older" element={<FreedomPassOlderPage />} />
            <Route path="/transport/taxicard" element={<TaxicardPage />} />
            <Route path="/transport/mobility" element={<TransportMobilityPage />} />
            <Route path="/transport/blue-badge-organisations" element={<BlueBadgeOrgsPage />} />

            {/* Live Independently */}
            <Route path="/live-independently" element={<LiveIndependentlyPage />} />
            <Route path="/live-independently/home-adaptations" element={<HomeAdaptationsPage />} />
            <Route path="/live-independently/equipment" element={<EquipmentPage />} />
            <Route path="/live-independently/help-at-home" element={<HelpAtHomePage />} />
            <Route path="/live-independently/falls-prevention" element={<FallsPreventionPage />} />
            <Route path="/live-independently/telecare" element={<TelecarePage />} />
            <Route path="/live-independently/keeping-safe" element={<KeepingSafePage />} />
            <Route path="/live-independently/keeping-safe/callers-to-your-door" element={<CallersToYourDoorPage />} />
            <Route path="/live-independently/keeping-safe/online-email-postal-fraud" element={<OnlineEmailPostalFraudPage />} />
            <Route path="/live-independently/keeping-safe/fraud-over-phone" element={<FraudOverPhonePage />} />
            <Route path="/live-independently/keeping-safe/fire-safety" element={<FireSafetyPage />} />
            <Route path="/live-independently/keeping-safe/further-info-safety" element={<FurtherInfoSafetyPage />} />
            <Route path="/live-independently/homeshare" element={<HomesharePage />} />
            <Route path="/live-independently/social-prescribing" element={<SocialPrescribingPage />} />
            <Route path="/live-independently/request-home-assessment" element={<RequestHomeAssessmentForm />} />
            <Route path="/live-independently/request-telecare" element={<RequestTelecareForm />} />
            <Route path="/live-independently/professional-referral" element={<ProfessionalReferralForm />} />

            {/* Care Homes */}
            <Route path="/care-homes" element={<CareHomesHubPage />} />
            <Route path="/care-homes/request-housing-care-support" element={<RequestHousingCareSupportPage />} />
            <Route path="/care-homes/supported-living" element={<CHSupportedLivingPage />} />
            <Route path="/care-homes/shared-lives" element={<CHSharedLivesPage />} />
            <Route path="/care-homes/extra-care-housing" element={<ExtraCareHousingPage />} />
            <Route path="/care-homes/sheltered-housing" element={<ShelteredHousingPage />} />
            <Route path="/care-homes/care-homes-nursing-homes" element={<CareHomesNursingHomesPage />} />
            <Route path="/care-homes/george-mason-lodge" element={<GeorgeMasonLodgePage />} />
            <Route path="/care-homes/mapleton-road" element={<MapletonRoadPage />} />
            <Route path="/care-homes/alliston-house" element={<AllistonHousePage />} />

            {/* Carers */}
            <Route path="/carers" element={<BeingCarerPage />} />
            <Route path="/carers/assessment-rights" element={<CarersAssessmentRightsPage />} />
            <Route path="/carers/support" element={<SupportForCarersPage />} />
            <Route path="/carers/support/financial" element={<FinancialSupportPage />} />
            <Route path="/carers/support/taking-break" element={<TakingBreakPage />} />
            <Route path="/carers/support/emergency-plan" element={<CarerEmergencyPlanPage />} />
            <Route path="/carers/support/health-wellbeing" element={<HealthWellbeingPage />} />
            <Route path="/carers/support/local-groups-services" element={<LocalGroupsServicesPage />} />
            <Route path="/carers/support/training-workshops" element={<TrainingWorkshopsPage />} />
            <Route path="/carers/support/feedback" element={<CarersFeedbackPage />} />
            <Route path="/carers/support/useful-contacts" element={<UsefulContactsPage />} />
            <Route path="/carers/young-carers" element={<YoungCarersPage />} />
            <Route path="/carers/parent-carers" element={<ParentCarersPage />} />
            <Route path="/carers/work-education" element={<WorkEducationPage />} />
            <Route path="/carers/support-after-caring" element={<SupportAfterCaringPage />} />
            <Route path="/carers/strategy-council-duties" element={<StrategyCouncilDutiesPage />} />
            <Route path="/carers/hub" element={<CarersHubPage />} />
            <Route path="/carers/ia-flow" element={<IAFlowPage />} />
            <Route path="/carers/hubs/adult" element={<AdultCarersHub />} />
            <Route path="/carers/hubs/parent" element={<ParentCarersHub />} />
            <Route path="/carers/hubs/universal-offer" element={<UniversalOfferHub />} />
            <Route path="/carers/hubs/young" element={<YoungCarersHub />} />
            <Route path="/carers/tasks/assessment" element={<CarersTaskAssessmentPage />} />
            <Route path="/carers/tasks/breaks-respite" element={<CarersTaskBreaksRespitePage />} />
            <Route path="/carers/tasks/emergency-help" element={<CarersTaskEmergencyHelpPage />} />
            <Route path="/carers/tasks/money-benefits" element={<CarersTaskMoneyBenefitsPage />} />
            <Route path="/carers/tasks/useful-contacts" element={<CarersTaskUsefulContactsPage />} />

            {/* Paying for Care */}
            <Route path="/paying-for-care" element={<PayingForCareHubPage />} />
            <Route path="/paying-for-care/how-care-costs-worked-out" element={<HowCareCostsWorkedOutPage />} />
            <Route path="/paying-for-care/financial-assessment" element={<FinancialAssessmentPage />} />
            <Route path="/paying-for-care/benefits-and-help" element={<BenefitsAndHelpPage />} />
            <Route path="/paying-for-care/direct-payments-personal-budgets" element={<DirectPaymentsPersonalBudgetsPage />} />
            <Route path="/paying-for-care/paying-for-care-home" element={<PayingForCareHomePage />} />
            <Route path="/paying-for-care/get-financial-advice" element={<GetFinancialAdvicePage />} />
            <Route path="/paying-for-care/deferred-payment-agreements" element={<DeferredPaymentAgreementsPage />} />

            {/* How Adult Social Care Works */}
            <Route path="/how-adult-social-care-works" element={<HowAdultSocialCareWorksHubPage />} />
            <Route path="/how-adult-social-care-works/what-is-adult-social-care" element={<WhatIsAdultSocialCarePage />} />
            <Route path="/how-adult-social-care-works/who-can-get-help" element={<WhoCanGetHelpPage />} />
            <Route path="/how-adult-social-care-works/how-to-ask-for-help" element={<HowToAskForHelpPage />} />
            <Route path="/how-adult-social-care-works/what-happens-during-assessment" element={<WhatHappensDuringAssessmentPage />} />
            <Route path="/how-adult-social-care-works/your-care-and-support-plan" element={<YourCareAndSupportPlanPage />} />

            {/* How to Get Support */}
            <Route path="/how-to-get-support" element={<HowToGetSupportHubPage />} />
            <Route path="/how-to-get-support/check-situation-online" element={<CheckSituationOnlinePage />} />
            <Route path="/how-to-get-support/contact-us" element={<ContactUsPage />} />
            <Route path="/how-to-get-support/request-assessment" element={<RequestAssessmentPage />} />
            <Route path="/how-to-get-support/what-happens-during-your-assessment" element={<WhatHappensDuringYourAssessmentPage />} />
            <Route path="/how-to-get-support/getting-care-and-support-plan" element={<GettingCareAndSupportPlanPage />} />

            {/* Mental Health */}
            <Route path="/mental-health" element={<MentalHealthWellbeingHubPage />} />
            <Route path="/mental-health/urgent-support" element={<UrgentMentalHealthSupportPage />} />
            <Route path="/mental-health/looking-after-wellbeing" element={<LookingAfterMentalWellbeingPage />} />
            <Route path="/mental-health/talking-therapies" element={<TalkingTherapiesProfessionalSupportPage />} />
            <Route path="/mental-health/adult-social-care" element={<AdultSocialCareMentalHealthPage />} />
            <Route path="/mental-health/local-support-services" element={<LocalMentalHealthSupportServicesPage />} />

            {/* Complaints & Compliments */}
            <Route path="/complaints-compliments" element={<ComplaintsComplimentsHubPage />} />
            <Route path="/complaints-compliments/make-complaint" element={<MakeComplaintPage />} />
            <Route path="/complaints-compliments/send-compliment" element={<SendComplimentPage />} />
            <Route path="/complaints-compliments/help-shape-services" element={<HelpShapeServicesPage />} />
            <Route path="/complaints-compliments/independent-help-advocacy" element={<IndependentHelpAdvocacyPage />} />

            {/* Our Policies */}
            <Route path="/our-policies" element={<OurPoliciesHubPage />} />
            <Route path="/our-policies/charging-financial" element={<ChargingFinancialPoliciesPage />} />
            <Route path="/our-policies/safeguarding-reports" element={<SafeguardingPoliciesReportsPage />} />
            <Route path="/our-policies/market-sustainability-commissioning" element={<MarketSustainabilityCommissioningPage />} />
            <Route path="/our-policies/privacy-and-data" element={<PrivacyAndDataPage />} />
            <Route path="/our-policies/consultations" element={<ConsultationsPage />} />

            {/* Understand Your Rights */}
            <Route path="/understand-your-rights" element={<UnderstandYourRightsHubPage />} />
            <Route path="/understand-your-rights/care-act" element={<YourRightsUnderCareActPage />} />
            <Route path="/understand-your-rights/independent-advocacy" element={<IndependentAdvocacyPage />} />
            <Route path="/understand-your-rights/mental-capacity" element={<MentalCapacityDecisionMakingPage />} />
            <Route path="/understand-your-rights/carer-rights" element={<YourRightsAsCarerPage />} />
            <Route path="/understand-your-rights/challenging-decisions" element={<ChallengingDecisionsRaisingConcernsPage />} />

            {/* Information for Professionals */}
            <Route path="/information-for-professionals" element={<InformationForProfessionalsHubPage />} />
            <Route path="/information-for-professionals/how-to-make-referral" element={<HowToMakeReferralPage />} />
            <Route path="/information-for-professionals/safeguarding-adults" element={<SafeguardingAdultsProfessionalsPage />} />
            <Route path="/information-for-professionals/practice-guidance-resources" element={<PracticeGuidanceResourcesPage />} />
            <Route path="/information-for-professionals/commissioning-provider-information" element={<CommissioningProviderInformationPage />} />
            <Route path="/information-for-professionals/key-teams-contact-details" element={<KeyTeamsContactDetailsPage />} />

            {/* Safeguarding */}
            <Route path="/safeguarding" element={<ProtectingAdultsPage />} />
            <Route path="/safeguarding/report-abuse" element={<SafeguardingReportAbusePage />} />
            <Route path="/safeguarding/professionals" element={<SafeguardingProfessionalsPage />} />
            <Route path="/safeguarding/abuse-and-neglect" element={<AbuseAndNeglectPage />} />
            <Route path="/safeguarding/what-happens-after" element={<WhatHappensAfterPage />} />
            <Route path="/safeguarding/board" element={<SafeguardingBoardPage />} />
            <Route path="/safeguarding/report-child-concern" element={<ReportChildConcernPage />} />
            <Route path="/safeguarding/professional-guidance" element={<ProfessionalGuidancePage />} />
            <Route path="/safeguarding/marac" element={<MaracPage />} />
            <Route path="/safeguarding/resources-improve-practice" element={<ResourcesImprovePracticePage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
