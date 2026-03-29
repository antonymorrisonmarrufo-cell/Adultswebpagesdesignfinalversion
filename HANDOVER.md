# Handover: Waltham Forest Adult Social Care Website Redesign

## 1. Technical Documentation

### Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | 19 |
| Language | TypeScript | - |
| Bundler | Vite | 8 |
| Styling | Tailwind CSS | 4 |
| Components | shadcn/ui (46 primitives in `src/components/ui/`) | - |
| Routing | React Router | 7 |
| Code splitting | `React.lazy` + `Suspense` on every page route | - |

### Commands

| Task | Command |
|------|---------|
| Install | `npm install` |
| Dev server | `npm run dev` (localhost:5173) |
| Production build | `npm run build` |

### Links

| Resource | URL |
|----------|-----|
| Repository | github.com/antonymorrisonmarrufo-cell/Adultswebpagesdesignfinalversion |
| Live site | adultswebpagesdesignfinalversion.vercel.app |
| Figma Make | spend-chew-46422648.figma.site |
| Deployment | Vercel auto-deploys from `main` branch |

### Codebase at a glance

- **218 source files** (.ts/.tsx)
- **152 pages** (routed in `src/App.tsx`)
- **62 components** (in `src/components/`, including 46 shadcn/ui primitives, 7 shared components, and section-specific components for carers, live-independently, transport, and figma)

### Brand colours

| Token | Hex | Usage |
|-------|-----|-------|
| Moss | `#004E3E` | Page banners, section titles, header |
| Digital Rose | `#bf3688` | H2 headings, action links, card titles, nav arrows |
| Black | `#231F20` | H1 headings, body text |
| Grass | `#8DC640` | Feedback banner |
| Navy | `#003078` | Contact box borders and headings |
| Light blue | `#d7f8ff` | Contact box background |
| Light red | `#fcedf3` | Emergency box background |
| Red | `#d4351c` | Emergency box borders |
| Gray | `#f3f2f1` | Section background alternation |

### Box types

| Box | Background | Border | Heading colour | Icon |
|-----|-----------|--------|---------------|------|
| Nav card | White | None | Digital Rose `#bf3688` | Pink circle arrow |
| Contact | Light blue `#d7f8ff` | Full navy `#003078` | Navy `#003078` | Info (i) |
| Info / bullets | White | None | Inherits parent | None |
| Emergency | Light red `#fcedf3` | Full red `#d4351c` | Red `#d4351c` | Warning |

---

## 2. Design Principles

The redesign is built on **three strategic pillars** plus supporting standards:

| # | Pillar / Standard | What it means in practice |
|---|------------------|--------------------------|
| 1 | **Early intervention and prevention** | Every section leads with self-help, community resources, and signposting before mentioning formal assessment |
| 2 | **Promoting independence** | Content is strengths-based: "what you can do" before "what the council can do" |
| 3 | **Reducing assessment routing** | Pages provide enough information and links to resolve queries without defaulting to referral |
| 4 | User-centred design | Journey structure follows real user tasks, not internal org charts |
| 5 | Strengths-based language | Plain English, avoids deficit framing, emphasises capability |
| 6 | WCAG 2.2 AA compliance | Colour contrast, keyboard navigation, semantic HTML, screen-reader tested |
| 7 | GOV.UK Design System alignment | Typography rhythm, content patterns, and interaction conventions follow GDS |
| 8 | Mobile-first responsive | All layouts designed for 320px upward; tested at mobile, tablet, desktop breakpoints |

---

## 3. Research Findings

### Call analysis insights

Analysis of incoming calls to Adult Social Care revealed three systemic problems:

| Finding | Impact |
|---------|--------|
| No signposting to community resources | Callers went straight to council services even when community alternatives existed |
| No strengths-based conversations | Staff defaulted to "what do you need?" rather than "what can you already do?" |
| Immediate routing to assessment | Most calls ended with an assessment referral regardless of need level |

### Digital front door opportunity

A well-designed digital front door can **deflect 15-25% of assessment requests** by giving people the information, tools, and community links they need to resolve their situation independently or with lighter-touch support.

---

## 4. Old vs New Site Comparison

| Dimension | Old site | New site |
|-----------|---------|---------|
| **Navigation** | Flat list of links organised by department structure | Task-based hub-and-spoke: 17 themed sections with clear entry points |
| **Content structure** | Dense paragraphs, assumed knowledge, jargon | Scannable headings, bullet lists, progressive disclosure via accordions |
| **User journeys** | No defined journeys; users had to know what to search for | Guided pathways: each section opens with "start here" context then branches |
| **Carers** | Scattered across multiple unrelated pages | Dedicated 27-page section with hub, support sub-pages, task flows, IA flow, and carer-type hubs |
| **How ASC works** | Assumed users already understood the system | 6-step explainer: what it is, who qualifies, how to ask, assessment, care plan, hub |
| **Paying for care** | Minimal information, no structure | 8-page section covering costs, financial assessment, benefits, direct payments, deferred payments, advice |
| **Visual design** | Generic council template, no visual hierarchy | Branded design system with colour-coded boxes, consistent card patterns, and clear CTAs |
| **Accessibility** | Basic compliance | WCAG 2.2 AA target with semantic HTML, focus management, and tested contrast ratios |

---

## 5. Benefits

| Benefit | Mechanism | Likely impact |
|---------|-----------|---------------|
| Reduced phone calls | Self-service information answers common questions before users pick up the phone | 15-25% call deflection |
| Fewer unnecessary assessments | Signposting and community resources resolve needs earlier | Reduced referral volume |
| Better signposting | Every page links to relevant community, voluntary, and NHS services | Users find help faster |
| Faster resolution | Task-based navigation gets users to the right page in fewer clicks | Lower time-on-task |
| Earlier carer support | Dedicated 27-page carers section with task-based flows surfaces help before crisis | Prevention over intervention |
| Accessibility | WCAG 2.2 AA, mobile-first, plain English | Wider reach, legal compliance |
| Reduced complaints | Clear information on rights, processes, and what to expect | Manages expectations |
| Higher referral quality | Professional-specific section with guidance and forms | Better-prepared referrals |
| Transparency | "How ASC works" and "Paying for care" demystify the system | Builds trust, reduces anxiety |

---

## 6. Page Inventory

### Summary: 152 pages across 17 sections + 11 standalone pages

| # | Section | Pages | File path pattern | Route pattern |
|---|---------|------:|-------------------|---------------|
| 1 | Carers | 27 | `src/pages/carers/**/*.tsx` | `/carers/*` |
| 2 | Live independently | 17 | `src/pages/live-independently/**/*.tsx` | `/live-independently/*` |
| 3 | Learning disability | 13 | `src/pages/learning-disability/**/*.tsx` | `/learning-disability/*` |
| 4 | Safeguarding | 10 | `src/pages/safeguarding/*.tsx` | `/safeguarding/*` |
| 5 | Care homes | 10 | `src/pages/care-homes/*.tsx` | `/care-homes/*` |
| 6 | Dementia | 9 | `src/pages/DementiaSupportPage.tsx` + `src/pages/dementia/*.tsx` | `/dementia/*` |
| 7 | Paying for care | 8 | `src/pages/paying-for-care/*.tsx` | `/paying-for-care/*` |
| 8 | Transport | 7 | `src/pages/transport/*.tsx` | `/transport/*` |
| 9 | How adult social care works | 6 | `src/pages/how-adult-social-care-works/*.tsx` | `/how-adult-social-care-works/*` |
| 10 | How to get support | 6 | `src/pages/how-to-get-support/*.tsx` | `/how-to-get-support/*` |
| 11 | Mental health | 6 | `src/pages/mental-health/*.tsx` | `/mental-health/*` |
| 12 | Information for professionals | 6 | `src/pages/information-for-professionals/*.tsx` | `/information-for-professionals/*` |
| 13 | Understand your rights | 6 | `src/pages/understand-your-rights/*.tsx` | `/understand-your-rights/*` |
| 14 | Our policies | 6 | `src/pages/our-policies/*.tsx` | `/our-policies/*` |
| 15 | Complaints and compliments | 5 | `src/pages/complaints-compliments/*.tsx` | `/complaints-compliments/*` |
| - | **Standalone pages** | **11** | `src/pages/*.tsx` | Various (see below) |
| | **TOTAL** | **152** | | |

### Standalone pages (11)

| Page | File | Route |
|------|------|-------|
| Home | `HomePage.tsx` | `/` |
| Adult Social Care | `AdultSocialCarePage.tsx` | `/adult-social-care` |
| Specialist Services | `SpecialistServicesPage.tsx` | `/specialist-services` |
| Report Abuse | `ReportAbusePage.tsx` | `/report-abuse` |
| Autism Support | `AutismSupportPage.tsx` | `/autism` |
| Visual and Hearing | `VisualHearingPage.tsx` | `/visual-hearing` |
| Physical Disabilities | `PhysicalDisabilitiesPage.tsx` | `/physical-disabilities` |
| Long-term Conditions | `LongTermConditionsPage.tsx` | `/long-term-conditions` |
| Work and Disability | `WorkDisabilityPage.tsx` | `/work-disability` |
| Power of Attorney | `PowerOfAttorneyPage.tsx` | `/power-of-attorney` |
| Dementia (top-level) | `DementiaSupportPage.tsx` | `/dementia` |

---

## 7. Section-by-Section Design Rationale

| # | Section | Design rationale | Principles applied | Possible amendments |
|---|---------|-----------------|-------------------|-------------------|
| 1 | **Carers** (27 pages) | Largest section because research showed carers were the most underserved group. Hub-and-spoke with sub-hubs for adult carers, parent carers, young carers, and universal offer. Task-based flows for assessment, breaks, emergency help, and money. IA flow page provides guided decision support. | Early intervention, independence, strengths-based, user-centred | Consider condensing task pages if analytics show low usage; the IA flow may need A/B testing against simpler navigation |
| 2 | **Live independently** (17 pages) | Prevention-first: opens with home adaptations, equipment, and telecare before formal care. Includes keeping-safe sub-section (fraud, fire, door safety) and three referral/assessment forms. Social prescribing and homeshare pages promote community solutions. | Prevention, independence, reducing assessments | Monitor form completion rates; keeping-safe sub-pages could be consolidated if bounce rates are high |
| 3 | **Learning disability** (13 pages) | Includes easy-read resources page for accessibility. Housing sub-section (5 pages) covers the full spectrum from family to independent living. Separate pages for professional referral and self-referral reflect different entry points. | Independence, user-centred, accessibility | Easy-read content should be tested with users; housing pages may need updating as provision changes |
| 4 | **Safeguarding** (10 pages) | Dual audience: public (report abuse, what happens after) and professionals (guidance, MARAC, resources). Report page is prominent and action-oriented. Board page provides governance transparency. | User-centred, transparency | Professional pages could link more deeply to external SAB resources; consider adding case study content |
| 5 | **Care homes** (10 pages) | Covers the full housing spectrum: supported living, shared lives, extra care, sheltered, nursing homes. Three council-run homes have dedicated pages (George Mason Lodge, Mapleton Road, Alliston House). Request form is the entry point. | Independence (alternatives shown first), transparency | Council home pages will need updating if provision changes; consider adding comparison/filter functionality |
| 6 | **Dementia** (9 pages) | Structured around the diagnosis journey: memory service, getting help, activities, adviser, IDOS, carer support, and planning ahead. Hub page provides overview and wayfinding. | Early intervention, strengths-based, carer support | Content should be reviewed against NHS dementia pathway updates; activities page needs regular refresh |
| 7 | **Paying for care** (8 pages) | Demystifies the financial side: how costs are calculated, financial assessment process, available benefits, direct payments, deferred payments, and where to get advice. Previously one of the biggest gaps on the old site. | Transparency, reducing anxiety, independence | Financial thresholds change annually -- needs a content maintenance schedule; consider adding a calculator tool |
| 8 | **Transport** (7 pages) | Covers Blue Badge, Freedom Pass (disabled and older), Taxicard, and general mobility. Blue Badge organisations page provides partner links. | Independence, signposting | Eligibility criteria change -- needs review triggers tied to policy updates |
| 9 | **How ASC works** (6 pages) | Six-step linear journey explaining the system from scratch: what ASC is, who qualifies, how to ask, assessment process, and care plan. Designed for people with zero prior knowledge. | Transparency, reducing assessments, plain English | Could add video/animation to explain the assessment process; user test with first-time visitors |
| 10 | **How to get support** (6 pages) | Action-oriented entry point: check your situation online, contact us, request assessment, what happens during assessment, getting a care plan. Complements section 9 with a "do it now" focus. | Reducing assessments, user-centred | The online check page is a key deflection point -- monitor conversion and exit rates closely |
| 11 | **Mental health** (6 pages) | Urgent support page is first in the navigation (crisis-first design). Then self-help, talking therapies, ASC-specific support, and local services. Follows NHS crisis-first mental health content patterns. | Early intervention, signposting, safety-first | Crisis numbers must be regularly verified; consider integration with NHS 111 mental health triage |
| 12 | **Information for professionals** (6 pages) | Separate section to avoid cluttering public-facing pages. Covers referral process, safeguarding for professionals, practice guidance, commissioning info, and key team contacts. | Referral quality, efficiency | Contact details will change -- needs a named content owner; consider adding referral form integration |
| 13 | **Understand your rights** (6 pages) | Covers Care Act rights, independent advocacy, mental capacity, carer rights, and how to challenge decisions. Empowers users with knowledge before they engage with services. | Transparency, independence, strengths-based | Legal content needs periodic review by legal/policy team; plain English must be maintained |
| 14 | **Our policies** (6 pages) | Transparency section: charging policies, safeguarding reports, market sustainability, privacy/data, and consultations. Makes council governance visible and accessible. | Transparency, trust | Policy documents need version control and update dates displayed on pages |
| 15 | **Complaints and compliments** (5 pages) | Balanced section: make a complaint, send a compliment, help shape services, and independent advocacy. "Help shape services" encourages constructive engagement beyond complaints. | User-centred, transparency | Track complaint-to-compliment ratio as a service quality indicator |
| 16 | **Standalone condition pages** (6 pages) | Autism, visual/hearing, physical disabilities, long-term conditions, work and disability, power of attorney. Each is a single comprehensive page with signposting rather than a full section. | Signposting, independence | If any topic grows in demand, promote to a full multi-page section |
| 17 | **Top-level navigation pages** (5 pages) | Home, Adult Social Care landing, Specialist Services, Report Abuse, Dementia landing. These serve as entry points and wayfinding hubs. | User-centred navigation | Home page card ordering should be reviewed based on analytics data |

---

## 8. Image Requirements

| Image | Status | Action |
|-------|--------|--------|
| `care-assessment.jpg` | Deployed | Sourced — elderly couple in care setting |
| `report-abuse.jpg` | Deployed | Sourced — professional on phone |
| `blue-badge.jpg` | Deployed | Sourced — Blue Badge sign |
| Favicon | Placeholder (WF initials) | Replace with council logo |
| Section hero images | Not present | Consider adding to section landing pages |
| Waltham Forest tree logo | SVG placeholder | Replace with official council logo SVG |

---

## 9. Content Readiness Assessment

| Section | Status | Clarifications Required |
|---------|--------|------------------------|
| Landing page | Ready for workshop | — |
| How ASC works | Ready for workshop | Verify eligibility criteria wording with legal |
| How to get support | Ready for workshop | Verify office hours and OOH number |
| Live independently | Ready for workshop | Verify DFG grant amounts, telecare costs |
| Being a carer | Ready for workshop | Verify Carers Hub address and opening hours |
| Dementia | Ready for workshop | Verify Hornbeam Hub details, adviser service contact |
| Learning disability | **Clarifications required** | Verify transition team contacts; easy read docs need creating |
| Mental health | Ready for workshop | Verify NELFT referral numbers |
| Care homes | Ready for workshop | Verify George Mason Lodge / Mapleton Road / Alliston House details |
| Paying for care | **Clarifications required** | **[Financial Assessment team number — TBC]**, **[Debt Recovery team number — TBC]**, verify capital limits current |
| Safeguarding | Ready for workshop | Verify MASH email, SAB membership list |
| Transport | Ready for workshop | External contacts verified (TfL, London Councils) |
| Rights | Ready for workshop | Verify advocacy provider details |
| Complaints | Ready for workshop | Verify complaint timescales |
| Policies | **Clarifications required** | Need links to actual policy documents |
| Professionals | **Clarifications required** | All team phone numbers and emails need verifying |
| Specialist services | Ready for workshop | Verify local group details |

**Priority follow-up actions:**
1. **[Financial Assessment team number — TBC]** — Finance Lead to confirm
2. **[Debt Recovery team number — TBC]** — Finance Lead to confirm
3. **Information for professionals** — all team contacts need verification
4. **Our policies** — links to actual policy PDFs need adding
5. **Learning disability** — easy read documents need creating/sourcing

---

## 10. As-Is to To-Be Page Mapping

| New Section | Source from live site | Content Origin |
|-------------|---------------------|----------------|
| Landing page | walthamforest.gov.uk/adult-social-care | Rewritten |
| How ASC works | walthamforest.gov.uk/adult-social-care (partial) | New content |
| How to get support | walthamforest.gov.uk/adult-social-care/contact | Rewritten |
| Live independently | walthamforest.gov.uk/adult-social-care/help-living-home | Rewritten + expanded |
| Being a carer | walthamforest.gov.uk/adult-social-care/carers | Rewritten + massively expanded |
| Dementia | walthamforest.gov.uk/adult-social-care/dementia | Rewritten + expanded |
| Learning disability | walthamforest.gov.uk/adult-social-care/learning-disabilities | Rewritten + expanded |
| Mental health | walthamforest.gov.uk/adult-social-care/mental-health | Rewritten + expanded |
| Care homes | walthamforest.gov.uk/adult-social-care/care-homes | Rewritten |
| Paying for care | walthamforest.gov.uk/adult-social-care/paying-care | Rewritten + massively expanded |
| Safeguarding | walthamforest.gov.uk/adult-social-care/safeguarding | Rewritten + expanded |
| Transport | walthamforest.gov.uk/adult-social-care/help-getting-around | Rewritten |
| Rights | Scattered across multiple pages | New consolidated section |
| Complaints | walthamforest.gov.uk/complaints | Rewritten for ASC context |
| Policies | Scattered across multiple pages | New consolidated section |
| Professionals | walthamforest.gov.uk/adult-social-care/professionals | Rewritten + expanded |
| Specialist services | Various condition-specific pages | New consolidated section |

### Pages to DELETE from live site
All existing pages under `/adult-social-care/` that are replaced by the new design should be removed after redirects are in place.

### Pages to AMEND on live site
The main walthamforest.gov.uk navigation should link to the new ASC section once deployed.

### Redirects needed
All old `/adult-social-care/*` URLs should 301 redirect to the corresponding new routes. A redirect map should be created during the migration phase.

---

## 11. Copy Approval & Sign-Off Process

**All timelines to be agreed in discussion with the digital team.**

| Step | Activity | Owner |
|------|----------|-------|
| 1 | Identify section stakeholders | Programme Director |
| 2 | Hold stakeholder workshop — walk through design principles, research, and full site | Programme Director + Design Lead |
| 3 | Structured feedback period — review assigned sections using feedback template | Section Stakeholders |
| 4 | Consolidate and apply feedback | Design Team |
| 5 | Final review round — stakeholders verify changes | Section Stakeholders |
| 6 | Formal sign-off — each section approved | Section Stakeholders + Head of ASC |
| 7 | Copy lockdown — content frozen, change requests only | Programme Director |
| 8 | Go live — deploy to production | Web Team |

### Suggested Stakeholder Mapping

| Section | Suggested Stakeholder |
|---------|----------------------|
| How ASC works / How to get support | Head of Adult Social Care |
| Live independently | OT Lead / Reablement Manager |
| Being a carer | Carers Lead / Carers Hub Manager |
| Dementia | Dementia Services Manager |
| Learning disability | LD Team Manager |
| Mental health | Mental Health Lead |
| Care homes | Housing & Accommodation Lead |
| Paying for care | Finance Lead / Financial Assessment Team |
| Safeguarding | SAB Chair / Principal Social Worker |
| Transport | Customer Services / Blue Badge Team |
| Rights & policies | Legal / Principal Social Worker |
| Complaints | Customer Experience Lead |
| Professionals | Practice Development Lead |

---

## 12. Content Management Guide

### Updating text content
1. Open the relevant `.tsx` file in `src/pages/`
2. Edit the text directly in the JSX
3. Run `npm run build` to check for errors
4. Commit and push — Vercel auto-deploys

### Adding a new page
1. Create a new `.tsx` file in the appropriate `src/pages/` folder
2. Add a `<Route>` in `src/App.tsx`
3. Link to it from the relevant hub page
4. Build, commit, push

### Known limitations
- No CMS — content is in code files (suitable for prototype, production should use a CMS)
- No search functionality — placeholder only
- No form submission backend — forms are UI only
- No analytics — needs adding before go-live
- Images case-sensitive on Linux (`public/Images/`)

### Future improvements
- Integrate with Waltham Forest CMS for content management
- Add search functionality
- Connect forms to backend/email service
- Add Google Analytics / cookie consent
- Full accessibility audit (automated + manual)
- Performance optimisation (image compression, CDN)

---

## 13. Success Metrics (Post-Launch)

| Metric | Target | Measurement |
|--------|--------|-------------|
| Front door call volume | 15–25% reduction within 6 months | Call logging system |
| Assessment referral rate | 10–15% reduction | Case management system |
| Self-assessment completion | 50% increase from baseline | Website analytics |
| Community signposting | Measurable increase | Social prescribing + Carers Hub referrals |
| User satisfaction | Improvement from baseline | Online feedback widget |
| Complaint volumes | Reduction | Complaints system |

---

*This document accompanies the STAKEHOLDER-BRIEFING.md and should be read together. Both are available in the GitHub repository.*
