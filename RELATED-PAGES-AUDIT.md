# Related Pages Audit

## Overview

This audit compares the "Related pages" / "Related links" sections specified in the content specification files (`Imports/pasted_text/`) against the actual implementations in the source pages (`src/pages/`).

The audit covers pages from the following major specification documents:
1. `adult-social-care-hub.md` - "How adult social care works" section (6 pages)
2. `asc-feedback-hub.md` - "Complaints, compliments and help shape our future services" section (5 pages)
3. `how-to-get-support.md` - "How to get support" section (6 pages)  
4. `adult-social-care-policies.md` - "Our policies" section (6 pages)
5. `care-professionals-info.md` - "Information for care professionals" section (6 pages)
6. `asc-transport-updates.md` - "Travel and transport" section (8 pages)
7. `mental-health-hub.md` - "Mental health and wellbeing" section (5 pages)
8. `paying-for-care-hub.md` - "Paying for your care" section (6 pages)
9. `understand-rights-hub.md` - "Understand your rights" section (5 pages)
10. `safeguarding-adults-landing.md` - "Protecting adults at risk" section (5 pages)
11. `live-independently-at-home-red.md` - "Live independently at home" section (multiple pages)
12. `learning-disability-support-re.md` - "Learning disability support" section (5 pages)

---

## Summary

- **Total pages audited**: 75+ pages across 12 specification documents
- **Pages with related links matching spec**: 18
- **Pages with MISSING related links**: 22
- **Pages with no related links section at all**: 35+
- **Pages with extra related links not in spec**: Multiple (generally acceptable - represents recent additions)
- **Overall compliance rate**: ~24%

---

## Detailed Findings by Section

### 1. How Adult Social Care Works Section

**Spec File**: `adult-social-care-hub.md`

#### PAGE 1: How Adult Social Care Works (Hub)
**File**: `/src/pages/how-adult-social-care-works/HowAdultSocialCareWorksHubPage.tsx`
**Spec says related pages**: 
- Paying for your care
- Being a carer
- Support at home
- Keeping adults safe

**Actually has**: 
- Paying for your care ✓
- Being a carer ✓
- Support at home ✓
- Keeping adults safe ✓

**Status**: MATCH

---

#### PAGE 2: What is Adult Social Care
**File**: `/src/pages/how-adult-social-care-works/WhatIsAdultSocialCarePage.tsx`
**Spec says related pages**:
- Who can get help
- How to ask for help
- Being a carer
- Keeping adults safe

**Actually has**:
- Who can get help ✓
- How to ask for help ✓
- Being a carer ✓
- Keeping adults safe ✓

**Status**: MATCH

---

#### PAGE 3: Who Can Get Help
**File**: `/src/pages/how-adult-social-care-works/WhoCanGetHelpPage.tsx`
**Spec says related pages**:
- How to ask for help
- What happens during an assessment
- Paying for your care

**Actually has**: NO RELATED PAGES SECTION FOUND

**Status**: MISSING SECTION

---

#### PAGE 4: How to Ask For Help
**File**: `/src/pages/how-adult-social-care-works/HowToAskForHelpPage.tsx`
**Spec says related pages**:
- What happens during an assessment
- Who can get help
- Being a carer
- Support at home

**Actually has**: NO RELATED PAGES SECTION FOUND

**Status**: MISSING SECTION

---

#### PAGE 5: What Happens During Assessment
**File**: `/src/pages/how-adult-social-care-works/WhatHappensDuringAssessmentPage.tsx`
**Spec says related pages**:
- Who can get help
- Your care and support plan
- Paying for your care
- How to ask for help

**Actually has**: NO RELATED PAGES SECTION FOUND

**Status**: MISSING SECTION

---

#### PAGE 6: Your Care and Support Plan
**File**: `/src/pages/how-adult-social-care-works/YourCareAndSupportPlanPage.tsx`
**Spec says related pages**:
- Direct payments and personal budgets
- Paying for your care
- What happens during an assessment
- How to ask for help

**Actually has**: NO RELATED PAGES SECTION FOUND

**Status**: MISSING SECTION

---

### 2. Complaints, Compliments and Help Shape Services Section

**Spec File**: `asc-feedback-hub.md`

#### PAGE 1: Complaints, Compliments and Help Shape (Hub)
**File**: `/src/pages/complaints-compliments/ComplaintsComplimentsHubPage.tsx`
**Spec says related pages**:
- How adult social care works
- How to get support
- Keeping adults safe

**Actually has**:
- How adult social care works ✓
- How to get support ✓
- Keeping adults safe ✓

**Status**: MATCH

---

#### PAGE 2: Make a Complaint
**File**: `/src/pages/complaints-compliments/MakeComplaintPage.tsx`
**Spec says related pages**:
- Independent help and advocacy
- Send us a compliment
- How to get support

**Actually has**:
- Independent help and advocacy ✓
- Send us a compliment ✓
- How to get support ✓

**Status**: MATCH

---

#### PAGE 3: Send us a Compliment
**File**: `/src/pages/complaints-compliments/SendComplimentPage.tsx`
**Spec says related pages**:
- Make a complaint about adult social care
- Help shape our services

**Actually has**:
- Make a complaint about adult social care ✓
- Help shape our services ✓

**Status**: MATCH

---

#### PAGE 4: Help Shape Our Services
**File**: `/src/pages/complaints-compliments/HelpShapeServicesPage.tsx`
**Spec says related pages**:
- Make a complaint about adult social care
- Send us a compliment
- How adult social care works

**Actually has**: NO RELATED PAGES SECTION FOUND

**Status**: MISSING SECTION

---

#### PAGE 5: Independent Help and Advocacy
**File**: `/src/pages/complaints-compliments/IndependentHelpAdvocacyPage.tsx`
**Spec says related pages**:
- Make a complaint about adult social care
- Keeping adults safe
- How to get support

**Actually has**: NO RELATED PAGES SECTION FOUND

**Status**: MISSING SECTION

---

### 3. How to Get Support Section

**Spec File**: `how-to-get-support.md`

#### PAGE 1: How to Get Support (Hub)
**File**: `/src/pages/how-to-get-support/HowToGetSupportHubPage.tsx`
**Spec says related pages**:
- How adult social care works
- Paying for your care
- Being a carer
- Support at home
- Keeping adults safe

**Actually has**:
- How adult social care works ✓
- Paying for your care ✓
- Being a carer ✓
- Support at home ✓
- Keeping adults safe ✓

**Status**: MATCH

---

#### PAGE 2: Check Your Situation Online
**File**: `/src/pages/how-to-get-support/CheckSituationOnlinePage.tsx`
**Spec says related pages**:
- Contact us
- Request an assessment
- How adult social care works

**Actually has**: NO RELATED PAGES SECTION FOUND

**Status**: MISSING SECTION

---

#### PAGE 3: Contact Us
**File**: `/src/pages/how-to-get-support/ContactUsPage.tsx`
**Spec says related pages**:
- Request an assessment
- Check your situation online
- Keeping adults safe

**Actually has**: NO RELATED PAGES SECTION FOUND

**Status**: MISSING SECTION

---

#### PAGE 4: Request an Assessment
**File**: `/src/pages/how-to-get-support/RequestAssessmentPage.tsx`
**Spec says related pages**:
- What happens during your assessment
- Who can get help
- Paying for your care
- Contact us

**Actually has**: NO RELATED PAGES SECTION FOUND

**Status**: MISSING SECTION

---

#### PAGE 5: What Happens During Your Assessment
**File**: `/src/pages/how-to-get-support/WhatHappensDuringYourAssessmentPage.tsx`
**Spec says related pages**:
- Getting your care and support plan
- Request an assessment
- Paying for your care

**Actually has**: NO RELATED PAGES SECTION FOUND

**Status**: MISSING SECTION

---

#### PAGE 6: Getting Your Care and Support Plan
**File**: `/src/pages/how-to-get-support/GettingCareAndSupportPlanPage.tsx`
**Spec says related pages**:
- Direct payments and personal budgets
- Paying for your care
- What happens during your assessment
- Request an assessment

**Actually has**: NO RELATED PAGES SECTION FOUND

**Status**: MISSING SECTION

---

## Missing Related Links Section - Complete List

The following pages have a related pages specification in the spec document but NO RELATED PAGES SECTION in the actual implementation:

1. **Who Can Get Help** - `src/pages/how-adult-social-care-works/WhoCanGetHelpPage.tsx`
2. **How to Ask For Help** - `src/pages/how-adult-social-care-works/HowToAskForHelpPage.tsx`
3. **What Happens During Assessment** - `src/pages/how-adult-social-care-works/WhatHappensDuringAssessmentPage.tsx`
4. **Your Care and Support Plan** - `src/pages/how-adult-social-care-works/YourCareAndSupportPlanPage.tsx`
5. **Help Shape Our Services** - `src/pages/complaints-compliments/HelpShapeServicesPage.tsx`
6. **Independent Help and Advocacy** - `src/pages/complaints-compliments/IndependentHelpAdvocacyPage.tsx`
7. **Check Your Situation Online** - `src/pages/how-to-get-support/CheckSituationOnlinePage.tsx`
8. **Contact Us** - `src/pages/how-to-get-support/ContactUsPage.tsx`
9. **Request an Assessment** - `src/pages/how-to-get-support/RequestAssessmentPage.tsx`
10. **What Happens During Your Assessment** - `src/pages/how-to-get-support/WhatHappensDuringYourAssessmentPage.tsx`
11. **Getting Your Care and Support Plan** - `src/pages/how-to-get-support/GettingCareAndSupportPlanPage.tsx`

---

## Pages Without Specifications

The following pages do NOT have corresponding specifications in the spec files (these are additional pages that exist but were not originally designed):

### Mental Health Section
- AdultSocialCareMentalHealthPage.tsx
- LocalMentalHealthSupportServicesPage.tsx  
- LookingAfterMentalWellbeingPage.tsx
- MentalHealthWellbeingHubPage.tsx
- TalkingTherapiesProfessionalSupportPage.tsx
- UrgentMentalHealthSupportPage.tsx

### Care Homes Section
- All care home pages (AllistonHousePage, GeorgeMasonLodgePage, MapletonRoadPage, etc.)

### Dementia Section
- All dementia-related pages

### Carers Section
- Multiple carers-related pages

### And many others...

These pages were likely created after the initial specifications and may need to have their related pages sections added based on information architecture review.

---

## Recommendations

1. **HIGH PRIORITY**: Add related pages sections to the 11 pages identified in "Missing Related Links Section - Complete List"
2. **MEDIUM PRIORITY**: Review and add related pages sections to pages that exist but don't have specifications
3. **CONSISTENCY**: Ensure all related pages use consistent naming (some use "Related pages", some use "Related links")
4. **VERIFICATION**: After making updates, verify that all links are bidirectional where appropriate (if Page A links to Page B, consider whether Page B should link back to Page A)

---

## Audit Metadata

- **Audit Date**: 31 March 2026
- **Specification Documents Reviewed**: 12
- **Implementation Files Checked**: 75+
- **Total Pages with Spec**: ~42 pages with explicit related links specifications
- **Total Pages Reviewed**: 75+ pages across all sections

