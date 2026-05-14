/**
 * Service Guru — Public Landing Page
 * Design: Navy + Cream + Amber palette, Geist + Instrument Serif typography
 * Sections: Nav, Hero, Trust Strip, Modules, Stats, Features (x3), Workflow,
 *           Roles, Testimonial, Pricing, Final CTA, Footer
 */

// ─── Image asset URLs (uploaded to webdev CDN) ───────────────────────────────
const IMG_DASHBOARD = "/manus-storage/app-dashboard_7e3ed81e.jpeg";
const IMG_CLEANING = "/manus-storage/app-cleaning_c175bb5f.jpeg";
const IMG_DASHBOARD2 = "/manus-storage/app-dashboard-2_3b791613.jpeg";
const IMG_INSPECTION = "/manus-storage/app-inspection_112a7cd9.jpeg";
const IMG_MESSAGING = "/manus-storage/app-messaging_310a14aa.jpeg";
const IMG_PEOPLE = "/manus-storage/app-people_c3629c8e.jpeg";

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────
interface IconProps { name: string; size?: number; stroke?: number; }
function Icon({ name, size = 20, stroke = 1.6 }: IconProps) {
  const props = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: stroke,
    strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  };
  const paths: Record<string, React.ReactNode> = {
    building: <><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01"/></>,
    hammer: <><path d="M15 12l-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9"/><path d="M17.64 15L22 10.64"/><path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 7.78v.5l2 1.72h.46a2.04 2.04 0 0 1 1.42.58l.4.4"/></>,
    clipboard: <><path d="M9 2h6a2 2 0 0 1 2 2v2H7V4a2 2 0 0 1 2-2z"/><path d="M5 6h14v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6z"/><path d="M9 12h6M9 16h4"/></>,
    megaphone: <><path d="M3 11v2a1 1 0 0 0 1 1h2l4 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M15 8a4 4 0 0 1 0 8"/><path d="M18 5a8 8 0 0 1 0 14"/></>,
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    chat: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>,
    grid: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></>,
    arrow: <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
    check: <><polyline points="20 6 9 17 4 12"/></>,
    play: <><polygon points="5 3 19 12 5 21 5 3"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></>,
    twitter: <><path d="M18 4l-6 8 6 8h-3l-4.5-6L6 20H3l6.5-8.5L3 4h3l4 5.5L14 4z"/></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 11v6M8 8v.01M12 17v-3a2 2 0 0 1 4 0v3M12 11v6"/></>,
  };
  return <svg {...props}>{paths[name]}</svg>;
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="sg-nav">
      <div className="sg-container sg-nav-inner">
        <div className="sg-nav-left">
          <a className="sg-logo" href="#">
            <span className="sg-logo-mark">S</span>
            <span>Service Guru</span>
          </a>
          <div className="sg-nav-links">
            <a href="#product">Product</a>
            <a href="#features">Features</a>
            <a href="#workflow">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#customers">Customers</a>
          </div>
        </div>
        <div className="sg-nav-right">
          <a className="sg-nav-login" href="https://secure.serviceguru.app" style={{ color: "var(--sg-ink-soft)" }}>Sign in</a>
          <a className="sg-btn sg-btn-primary" href="#">
            Book a demo <span className="arrow"><Icon name="arrow" size={16} /></span>
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="sg-hero">
      <div className="sg-container sg-hero-inner">
        <div className="sg-hero-copy">
          <div className="sg-hero-eyebrow">
            <span className="dot"></span>
            <span className="sg-mono" style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--sg-ink-soft)" }}>
              v4.0 · Mobile inspections shipped
            </span>
          </div>
          <h1 className="sg-display">
            The <span className="sg-serif-italic">operating system</span> for property{" "}
            <span className="sg-underline-mark">management</span>.
          </h1>
          <p className="sg-lede sg-hero-lede">
            Service Guru gives property managers a unified hub for tasks, inspections,
            residents, and team coordination — across every building you manage. From
            45-unit walk-ups to 500-unit portfolios.
          </p>
          <div className="sg-hero-ctas">
            <a className="sg-btn sg-btn-primary" href="#">
              Start 14-day trial <span className="arrow"><Icon name="arrow" size={16} /></span>
            </a>
            <a className="sg-btn sg-btn-ghost" href="#">
              <Icon name="play" size={14} /> Watch 2-min tour
            </a>
          </div>
          <div className="sg-hero-trust">
            <div className="sg-hero-avatars">
              <div className="sg-hero-avatar">DI</div>
              <div className="sg-hero-avatar a2">MM</div>
              <div className="sg-hero-avatar a3">JA</div>
              <div className="sg-hero-avatar a4">IB</div>
            </div>
            <div>
              <div className="sg-hero-stars">★★★★★</div>
              <div>Trusted by 280+ property teams managing 47,000 units</div>
            </div>
          </div>
        </div>

        <div className="sg-hero-visual">
          <div className="sg-phone-frame sg-hero-phone-1">
            <img src={IMG_DASHBOARD} alt="Service Guru dashboard" />
          </div>
          <div className="sg-phone-frame sg-hero-phone-2">
            <img src={IMG_CLEANING} alt="Service Guru routines" />
          </div>
          <div className="sg-hero-annotation a1">
            <span className="pulse"></span>
            <div>
              <div className="ann-label">Open tickets</div>
              <div className="ann-value">45 active</div>
            </div>
          </div>
          <div className="sg-hero-annotation a2">
            <Icon name="check" size={14} />
            <div>
              <div className="ann-label">Today</div>
              <div className="ann-value">8 routines completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Trust Strip ──────────────────────────────────────────────────────────────
function TrustStrip() {
  return (
    <div className="sg-trust-strip">
      <div className="sg-container sg-trust-strip-inner">
        <div className="ts-label sg-mono" style={{ textTransform: "uppercase", letterSpacing: ".12em", fontSize: 11 }}>
          Trusted by management teams across NYC, Boston & Miami
        </div>
        <div className="sg-trust-logos">
          <div className="logo-item">RJ Capital</div>
          <div className="logo-item sans">PEARLINE&nbsp;CO</div>
          <div className="logo-item mono">PARK·SLOPE</div>
          <div className="logo-item">Westchester 55</div>
          <div className="logo-item sans">PHOENIX</div>
          <div className="logo-item">Manhattan Ave</div>
        </div>
      </div>
    </div>
  );
}

// ─── Modules Grid ─────────────────────────────────────────────────────────────
function Modules() {
  const modules = [
    { icon: "building", name: "Properties", desc: "Manage your full portfolio with unit counts, status, tasks, and team — every building has a home.", span: 3, badge: "01" },
    { icon: "hammer", name: "Tasks", desc: "Track maintenance and repair work from intake to resolution with priorities, photos, and assignees.", span: 3, badge: "02" },
    { icon: "clipboard", name: "Inspections", desc: "Schedule recurring cleaning and inspection routines. Workers complete them with photo proof.", span: 3, badge: "03" },
    { icon: "megaphone", name: "Announcements", desc: "Broadcast at property or company level with priority and target audience controls.", span: 3, badge: "04" },
    { icon: "users", name: "People", desc: "Residents, owners, workers, managers, vendors — one source of truth, with role-based profiles.", span: 4, badge: "05" },
    { icon: "chat", name: "Messaging", desc: "Real-time internal chat between team members, contextual to property and unit.", span: 4, badge: "06" },
    { icon: "grid", name: "Dashboard", desc: "High-level portfolio health — open tasks, upcoming inspections, recent activity.", span: 4, badge: "07" },
  ];
  return (
    <section id="product" className="sg-section sg-container">
      <div className="sg-section-head">
        <span className="sg-eyebrow">What's inside</span>
        <h2 className="sg-h2">Seven modules. <span className="sg-serif-italic">One platform.</span></h2>
        <p className="sg-lede">
          Built specifically for property management — not bent generic project tools. Every module is wired
          to the others so a tile in the elevator becomes a ticket, a routine, an announcement, and a record.
        </p>
      </div>
      <div className="sg-modules">
        {modules.map((m, i) => (
          <div key={i} className={`sg-module span-${m.span}`}>
            <span className="badge">{m.badge}</span>
            <div className="sg-module-icon"><Icon name={m.icon} size={18} /></div>
            <h3>{m.name}</h3>
            <p>{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────
function Stats() {
  const stats = [
    { num: <>47<em>k</em></>, label: "Units under management" },
    { num: <>280<em>+</em></>, label: "Property management teams" },
    { num: <>4.2<em>m</em></>, label: "Tasks completed since 2024" },
    { num: <>99.<em>9</em>%</>, label: "Uptime over the last 12 months" },
  ];
  return (
    <div className="sg-container" style={{ paddingTop: 0, paddingBottom: 0 }}>
      <div className="sg-stats">
        {stats.map((s, i) => (
          <div className="sg-stat" key={i}>
            <div className="num">{s.num}</div>
            <div className="label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Feature: Tasks ───────────────────────────────────────────────────────────
function FeatureTasks() {
  return (
    <section id="features" className="sg-section" style={{ background: "var(--sg-cream)" }}>
      <div className="sg-container">
        <div className="sg-feature-row">
          <div className="sg-feature-copy">
            <div className="step">01 · Tasks</div>
            <h2 className="sg-h2">Never lose a <span className="sg-serif-italic">work order</span> again.</h2>
            <p>
              From the tile in the elevator to the broken balcony door — every issue becomes a tracked task
              with photos, an assigned worker, a property, and a status that rolls up to your dashboard.
            </p>
            <ul className="sg-feature-list">
              <li><span className="check"><Icon name="check" size={12} stroke={2.5} /></span>Photo-first intake from staff or residents</li>
              <li><span className="check"><Icon name="check" size={12} stroke={2.5} /></span>Priority levels, due dates, and assignee routing</li>
              <li><span className="check"><Icon name="check" size={12} stroke={2.5} /></span>Status pipeline: Open → In&nbsp;Progress → Completed</li>
              <li><span className="check"><Icon name="check" size={12} stroke={2.5} /></span>Auto-categorized: Repairs · Cleaning · Other</li>
            </ul>
          </div>
          <div className="sg-feature-visual">
            <div className="sg-feature-bg"></div>
            <div className="sg-phone-frame">
              <img src={IMG_DASHBOARD} alt="Recent Tasks view in Service Guru" />
            </div>
            <div className="sg-floating-card" style={{ top: 60, left: -30, width: 260 }}>
              <div className="card-row">
                <div className="av" style={{ background: "#DC2626" }}>!</div>
                <div style={{ flex: 1 }}>
                  <div className="card-title">New high-priority task</div>
                  <div className="card-sub">Tile in elevator coming up</div>
                </div>
              </div>
            </div>
            <div className="sg-floating-card" style={{ bottom: 80, right: -20, width: 240 }}>
              <div className="card-row" style={{ justifyContent: "space-between" }}>
                <div>
                  <div className="card-title">Status changed</div>
                  <div className="card-sub">6D Balcony Door Repair</div>
                </div>
                <span className="sg-pill blue">In&nbsp;Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Feature: Inspections ─────────────────────────────────────────────────────
function FeatureInspections() {
  return (
    <section className="sg-section">
      <div className="sg-container">
        <div className="sg-feature-row reverse">
          <div className="sg-feature-copy">
            <div className="step">02 · Inspections & routines</div>
            <h2 className="sg-h2">Daily walks, <span className="sg-serif-italic">documented.</span></h2>
            <p>
              Schedule recurring cleaning and inspection routines per property. Workers complete them on
              mobile — with photo proof, timestamps, and a green ✓ when everything's clear. You get a
              verifiable record without chasing anyone.
            </p>
            <ul className="sg-feature-list">
              <li><span className="check"><Icon name="check" size={12} stroke={2.5} /></span>Cleaning & inspection routines, separately tracked</li>
              <li><span className="check"><Icon name="check" size={12} stroke={2.5} /></span>Daily, weekly, or monthly cadence per building</li>
              <li><span className="check"><Icon name="check" size={12} stroke={2.5} /></span>Photo evidence + completion percentage per visit</li>
              <li><span className="check"><Icon name="check" size={12} stroke={2.5} /></span>Issues found auto-convert to tasks</li>
            </ul>
          </div>
          <div className="sg-feature-visual">
            <div className="sg-feature-bg" style={{ background: "#F0EAFB" }}></div>
            <div className="sg-phone-frame">
              <img src={IMG_INSPECTION} alt="Inspection routines in Service Guru" />
            </div>
            <div className="sg-floating-card" style={{ top: 50, right: -30, width: 230 }}>
              <div className="card-row">
                <div className="av" style={{ background: "#22C55E" }}>✓</div>
                <div>
                  <div className="card-title">Park Slope West</div>
                  <div className="card-sub">No issues identified</div>
                </div>
              </div>
            </div>
            <div className="sg-floating-card" style={{ bottom: 100, left: -20, width: 250 }}>
              <div className="card-row" style={{ justifyContent: "space-between" }}>
                <div>
                  <div className="card-title">Pearline Soap Atelier</div>
                  <div className="card-sub">8 of 11 stops complete</div>
                </div>
                <span className="sg-pill amber">Daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Feature: People & Messaging ─────────────────────────────────────────────
function FeaturePeople() {
  return (
    <section className="sg-section" style={{ background: "var(--sg-cream)" }}>
      <div className="sg-container">
        <div className="sg-feature-row">
          <div className="sg-feature-copy">
            <div className="step">03 · People & messaging</div>
            <h2 className="sg-h2">Everyone in the <span className="sg-serif-italic">loop.</span></h2>
            <p>
              Residents, owners, workers, managers, vendors — every contact tied to a property and unit.
              Built-in direct messaging keeps conversations searchable, contextual, and out of personal
              text threads.
            </p>
            <ul className="sg-feature-list">
              <li><span className="check"><Icon name="check" size={12} stroke={2.5} /></span>Role-based profiles: Resident, Worker, Manager, Admin</li>
              <li><span className="check"><Icon name="check" size={12} stroke={2.5} /></span>Invitations with email + role assignment</li>
              <li><span className="check"><Icon name="check" size={12} stroke={2.5} /></span>3-column messaging: conversations, chat, contact info</li>
              <li><span className="check"><Icon name="check" size={12} stroke={2.5} /></span>Activity history per person, searchable</li>
            </ul>
          </div>
          <div className="sg-feature-visual">
            <div className="sg-feature-bg" style={{ background: "#E6F0FA" }}></div>
            <div className="sg-phone-frame">
              <img src={IMG_MESSAGING} alt="Messaging in Service Guru" />
            </div>
            <div className="sg-floating-card" style={{ top: 80, right: -30, width: 230 }}>
              <div className="card-row">
                <div className="av">JM</div>
                <div style={{ flex: 1 }}>
                  <div className="card-title">Joseph Mastov</div>
                  <div className="card-sub">"I fixed it" · 2m</div>
                </div>
              </div>
            </div>
            <div className="sg-floating-card" style={{ bottom: 60, left: -30, width: 260 }}>
              <div className="card-row" style={{ justifyContent: "space-between" }}>
                <div>
                  <div className="card-title">39 conversations</div>
                  <div className="card-sub">12 active this week</div>
                </div>
                <span className="sg-pill green">Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Workflow ─────────────────────────────────────────────────────────────────
function Workflow() {
  const steps = [
    { num: "01", title: "Issue spotted", desc: "Worker, resident, or manager flags an issue — a photo and a one-line description is enough." },
    { num: "02", title: "Routed automatically", desc: "Service Guru routes it to the right team member at the right property by category." },
    { num: "03", title: "Tracked in real time", desc: "Status, photos, comments, and ETA update on the dashboard as the work progresses." },
    { num: "04", title: "Closed & on record", desc: "Completion is logged with proof. Searchable forever, by property, unit, or person." },
  ];
  return (
    <section id="workflow" className="sg-section sg-workflow">
      <div className="sg-container">
        <div className="sg-section-head">
          <span className="sg-eyebrow">How it works</span>
          <h2 className="sg-h2">From a tile in the elevator <span className="sg-serif-italic">to a closed ticket.</span></h2>
        </div>
        <div className="sg-workflow-grid">
          {steps.map((s, i) => (
            <div className="sg-workflow-step" key={i}>
              <div className="num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Roles ────────────────────────────────────────────────────────────────────
function Roles() {
  const roles = [
    {
      tag: "For property managers",
      title: "Run the portfolio without running ragged.",
      desc: "Stop reconstructing what happened from texts and emails. Get a live view of every building, every open task, every routine — at a glance.",
      points: ["Portfolio-wide dashboard", "Real-time team activity feed", "Audit-ready inspection records", "Resident messaging history"],
    },
    {
      tag: "For on-site workers",
      title: "Less paperwork. More fixes.",
      desc: "A simple mobile app that tells you what's next, where it is, and what good looks like — with one tap to upload the proof when you're done.",
      points: ["Today's routines, ordered", "Photo upload from camera roll", "Tap-to-complete checklist", "Task history per building"],
    },
    {
      tag: "For residents & owners",
      title: "A direct line, not a black hole.",
      desc: "Residents can flag issues with a photo, see status updates, and get announcements — without downloading three different apps or losing the thread.",
      points: ["Photo-based issue reporting", "Status visibility on requests", "Building-wide announcements", "Direct chat with management"],
    },
  ];
  return (
    <section id="customers" className="sg-section sg-roles-section">
      <div className="sg-container">
        <div className="sg-section-head">
          <span className="sg-eyebrow">Built for everyone in the building</span>
          <h2 className="sg-h2">One platform. <em>Three perspectives.</em></h2>
        </div>
        <div className="sg-roles-grid">
          {roles.map((r, i) => (
            <div className="sg-role-card" key={i}>
              <div className="role-tag">{r.tag}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
              <ul className="role-list">
                {r.points.map((p, j) => (
                  <li key={j}><span className="dot"></span>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonial ──────────────────────────────────────────────────────────────
function Testimonial() {
  return (
    <section className="sg-section sg-testimonial">
      <div className="sg-container">
        <div className="sg-testimonial-quote">
          <span className="quote-mark">"</span>
          <blockquote>
            We used to run 12 buildings out of a group chat and a spreadsheet.{" "}
            <em>Service Guru replaced both</em> — and our open ticket time dropped
            from 8 days to 36 hours.
          </blockquote>
          <div className="sg-testimonial-attr">
            <div className="av">DI</div>
            <div>
              <div className="who">Daniel Izrail</div>
              <div className="where">Property Manager · RJ Capital NY</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "2",
      sub: "For independent landlords and small teams getting organized for the first time.",
      feats: ["Up to 50 units", "Tasks, routines & announcements", "Mobile app for workers", "Email support"],
      cta: "Start free trial",
      featured: false,
    },
    {
      name: "Growth",
      price: "5",
      sub: "For growing management companies running multiple buildings with a full team.",
      feats: ["Up to 500 units", "Everything in Starter", "Role-based permissions", "Resident portal", "Priority support"],
      cta: "Start free trial",
      featured: true,
    },
    {
      name: "Portfolio",
      price: "Custom",
      sub: "For enterprise managers with 500+ units, custom workflows, and integrations.",
      feats: ["Unlimited units", "SSO & SCIM", "API access", "Dedicated success manager", "On-site training", "Custom SLAs"],
      cta: "Talk to sales",
      featured: false,
    },
  ];
  return (
    <section id="pricing" className="sg-section sg-container">
      <div className="sg-section-head" style={{ textAlign: "center", margin: "0 auto 0", maxWidth: "none" }}>
        <span className="sg-eyebrow">Pricing</span>
        <h2 className="sg-h2" style={{ marginTop: 20 }}>Priced per unit. <span className="sg-serif-italic">No surprises.</span></h2>
        <p className="sg-lede" style={{ margin: "20px auto 0" }}>
          14-day free trial on every plan. Cancel anytime. Setup and migration are always free — we'll port
          your buildings, units, and people for you.
        </p>
      </div>
      <div className="sg-pricing-grid">
        {tiers.map((t, i) => (
          <div className={`sg-price-card ${t.featured ? "featured" : ""}`} key={i}>
            {t.featured && <div className="featured-tag">Most popular</div>}
            <div className="price-name">{t.name}</div>
            <div className="price-amount">
              {t.price === "Custom" ? (
                <span className="value">Custom</span>
              ) : (
                <>
                  <span className="dollar">$</span>
                  <span className="value">{t.price}</span>
                  <span className="per">/ unit / month</span>
                </>
              )}
            </div>
            <div className="price-sub">{t.sub}</div>
            <ul className="price-feats">
              {t.feats.map((f, j) => (
                <li key={j}>
                  <span className="check"><Icon name="check" size={11} stroke={2.5} /></span>
                  {f}
                </li>
              ))}
            </ul>
            <a className={`sg-btn ${t.featured ? "sg-btn-amber" : "sg-btn-primary"}`} href="#">
              {t.cta} <span className="arrow"><Icon name="arrow" size={14} /></span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <div className="sg-cta-final">
      <div className="sg-cta-final-inner">
        <h2 className="sg-h2">See Service Guru running <em>your portfolio</em> — in 20 minutes.</h2>
        <p>
          Bring a list of your buildings. We'll import them live during the demo so you can see your own
          units, tasks, and routines on screen before you commit to anything.
        </p>
        <div className="btns">
          <a className="sg-btn sg-btn-amber" href="#">
            Book a 20-min demo <span className="arrow"><Icon name="arrow" size={16} /></span>
          </a>
          <a className="sg-btn sg-btn-ghost-light" href="#">
            Start free trial
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="sg-footer">
      <div className="sg-container">
        <div className="sg-footer-grid">
          <div className="sg-footer-brand">
            <a className="sg-logo" href="#">
              <span className="sg-logo-mark">S</span>
              <span>Service Guru</span>
            </a>
            <p>The operating system for property management. Built in Brooklyn, deployed across the eastern seaboard.</p>
            <div style={{ display: "flex", gap: 14, color: "var(--sg-ink-soft)" }}>
              <a href="#"><Icon name="twitter" size={18} /></a>
              <a href="#"><Icon name="linkedin" size={18} /></a>
            </div>
          </div>
          <div className="sg-footer-col">
            <h4>Product</h4>
            <ul>
              <li><a href="#">Properties</a></li>
              <li><a href="#">Tasks</a></li>
              <li><a href="#">Inspections</a></li>
              <li><a href="#">Messaging</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
          <div className="sg-footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Help center</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">API docs</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
          <div className="sg-footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press kit</a></li>
            </ul>
          </div>
          <div className="sg-footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">DPA</a></li>
            </ul>
          </div>
        </div>
        <div className="sg-footer-bottom">
          <div>© 2026 Service Guru, Inc. All rights reserved.</div>
          <div className="legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustStrip />
      <Modules />
      <Stats />
      <FeatureTasks />
      <FeatureInspections />
      <FeaturePeople />
      <Workflow />
      <Roles />
      <Testimonial />
      <Pricing />
      <section className="sg-section" style={{ paddingBottom: 0 }}>
        <FinalCTA />
      </section>
      <Footer />
    </>
  );
}
