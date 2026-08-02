/**
 * CheckClock product materials (build detail / internal).
 * Client website go-live portal lives at /clients.
 */

export type GoLiveSection = {
  id: string;
  title: string;
  body: string;
};

export type GoLiveBuild = {
  id: string;
  name: string;
  line: string;
  status: string;
  year: string;
  sections: GoLiveSection[];
  phases: string[];
};

export const GO_LIVE_BUILDS: GoLiveBuild[] = [
  {
    id: "checkclock",
    name: "CheckClock",
    line: "Physical detention evidence kit with check-in / check-out window display.",
    status: "Prototyping",
    year: "2026",
    phases: [
      "Design & Source Parts",
      "Build First Working Units",
      "Self-Test on Own Truck",
      "Test with Trucking Friends",
      "Test with Known Company",
    ],
    sections: [
      {
        id: "brief",
        title: "Idea brief",
        body: "CheckClock is a physical detention evidence kit for owner-operators. A visible check-in / check-out window clock plus a standardized claim package documents when a driver arrived, how long they waited, and what was due — without relying on a dock app, carrier portal, or verbal agreement. Built for the cab, the yard, and the claim file.",
      },
      {
        id: "why",
        title: "Why it works",
        body: "Detention pay disputes are still mostly paper, photos, and memory. Drivers lose hours they cannot prove. Carriers and shippers reject incomplete claims. CheckClock answers the two questions every dispatcher asks: what time did you check in, and what time did you check out. Same clock. Same packet. Offline by default.",
      },
      {
        id: "revenue",
        title: "Revenue path",
        body: "Unit sales of the physical kit to owner-operators and small fleets. Optional refill packs for claim forms and seal materials. Later: fleet kits and a paid companion layer for multi-truck operators who want shared logs without forcing drivers onto a phone app at the dock.",
      },
      {
        id: "pitch",
        title: "Pitch",
        body: "Detention is real money. Proof is still fragile. CheckClock turns check-in and check-out into a visible, portable record that fits the way owner-operators already work — offline, physical, and claim-ready. One kit per truck. One standard packet per event. Built by someone who runs the same routes.",
      },
      {
        id: "scaling",
        title: "Scaling plan",
        body: "Phase 1: hand-built units and friend pilots. Phase 2: small batch with known companies. Phase 3: kit + refill SKU through owner-operator channels. Phase 4: fleet packaging and optional digital companion for operators who want aggregate logs. Hardware stays the core; software stays optional.",
      },
      {
        id: "companion",
        title: "Companion app",
        body: "Optional, not required. A lightweight log layer for drivers who want a backup photo of the window and a private history of events. No dock login. No real-time tracking pitch. The physical kit remains the source of truth at the gate.",
      },
    ],
  },
];

export function getGoLiveBuild(id: string): GoLiveBuild | undefined {
  return GO_LIVE_BUILDS.find((b) => b.id === id);
}
