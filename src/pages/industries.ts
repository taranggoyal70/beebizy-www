export interface IndustryContent {
  id: string;
  label: string;
  headline: string;
  introduction: string;
  heading: string;
  body: string;
  uses: string[];
  benefits: string[];
  proof?: string;
  proofLabel?: string;
  cta: string;
}

/** Content supplied by Beebizy for the industry website pages. */
export const INDUSTRIES: IndustryContent[] = [
  {
    id: "universities", label: "Universities",
    headline: "Event management built for university teams and departments",
    introduction: "From alumni galas and business school accelerators to multi-department events, registrations, floor plans, check-in, and badges in one simple platform.",
    heading: "Built for the way universities actually run events",
    body: "Universities have many event teams. Alumni relations, business schools, student affairs, career services, and individual departments all run events. Beebizy gives each team an easy way to manage their own events with shared visibility across the university.",
    uses: ["Alumni events and reunions", "Business school events and accelerators", "Demo Days and pitch competitions", "Department and school-specific events", "Registrations and ticketing", "Floor plans", "Onsite check-in and badge printing", "Multi-event calendars across departments"],
    benefits: ["Fast, reliable check-in even at larger events", "Simple enough for lean departmental teams", "Registration, floor plans, and onsite operations together", "Clear data across events"],
    proofLabel: "Santa Clara University",
    proof: "Santa Clara University’s Bronco Venture Accelerator used Beebizy for a 700-guest event, including registration, floor plan, check-in, and badge printing. They called it the fastest and easiest check-in they’ve had.",
    cta: "See how Beebizy works for university events",
  },
  {
    id: "schools", label: "Schools",
    headline: "Simple event management for schools running dozens of events a year",
    introduction: "Ticketing, raffles, registrations, and event organization, built for lean school teams.",
    heading: "Made for schools with busy calendars",
    body: "Schools often run 30–50+ events per year with small staff. Beebizy helps you manage event organization, ticketing, and raffles in one place so your team spends less time on logistics.",
    uses: ["Event management across the full annual calendar", "Ticketing and registration", "Raffles", "Licenses and multi-event portfolios", "Fundraising event support alongside your preferred fundraising tools"],
    benefits: ["One system for many events", "Easy for non-technical staff", "Ticketing and raffle in the same platform", "Reduced spreadsheet and manual work"],
    proofLabel: "Children’s Community School",
    proof: "Children’s Community School in Los Angeles is piloting Beebizy for event management, ticketing, and raffles across roughly 50 events per year.",
    cta: "Simplify your school’s event calendar",
  },
  {
    id: "nonprofits", label: "Nonprofits",
    headline: "Event management and ticketing for lean nonprofit teams",
    introduction: "Run galas, fundraisers, community events, and more, with registrations, ticketing, raffles, and organization in one place.",
    heading: "Built for nonprofits that need more than spreadsheets",
    body: "Nonprofits run important events with limited staff and budgets. Beebizy brings professional registration, ticketing, raffle tools, and event organization into an approachable workspace.",
    uses: ["Fundraising events and galas", "Community and donor events", "Ticketing and registration", "Raffles", "Multi-event management", "Licenses for ongoing event calendars"],
    benefits: ["Faster setup and less manual work", "Professional guest experience", "Ticketing and raffle support", "Affordable for nonprofit budgets", "Clear reporting for your team and board"],
    cta: "Run better events with less overhead",
  },
  {
    id: "businesses", label: "SMBs",
    headline: "Get out of spreadsheets. Manage registrations, invites, and vendors in one place.",
    introduction: "For growing businesses that need clean registration links, invite tracking, and a messaging hub for vendors.",
    heading: "Built for SMBs tired of manual processes",
    body: "Many small and mid-size businesses still run events and activations with spreadsheets, manual RSVP links, and scattered vendor communication. Beebizy brings that work into one simple system.",
    uses: ["Registration and invite links with tracking", "Messaging hub for individual vendors and event teams", "Registration links guests can share by text", "Shared calendars", "Current and historical event locations", "Basic budgeting tools"],
    benefits: ["Track who was invited and who registered", "Keep vendor conversations with the event", "Shared visibility for your team", "Much less manual work"],
    proofLabel: "An example workflow",
    proof: "Businesses like Nobleman Magazine use Beebizy-style workflows to move off spreadsheets and manage registration, invites, and vendor communication more cleanly.",
    cta: "Replace your spreadsheets",
  },
];
