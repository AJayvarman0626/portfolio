"use client";
import React from "react";
import { useEffect, useState, useCallback } from "react";

const NAV_ITEMS = [
  { id: "hero", num: "#00", label: "ME" },
  { id: "skills", num: "#01", label: "SKILLS" },
  { id: "projects", num: "#02", label: "PROJECTS" },
  { id: "journey", num: "#03", label: "JOURNEY" },
  { id: "blogs", num: "#04", label: "BLOGS", strike: true },
];

const BOTTOM_NAV: { id: string; label: string; icon: "profile" | "skills" | "projects" | "journey" }[] = [
  { id: "hero", label: "PROFILE", icon: "profile" },
  { id: "skills", label: "SKILLS", icon: "skills" },
  { id: "projects", label: "PROJECTS", icon: "projects" },
  { id: "journey", label: "JOURNEY", icon: "journey" },
];

const TECH_STACK = [
  "React.js","Next.js","Node.js","Express.js","MongoDB","Socket.io",
  "JWT","React Native","TypeScript","Python","FastAPI","Cloudinary",
  "Redux","Tailwind CSS",
];
const TOOLS = [
  "Git","GitHub","Zed","Postman","Figma","Linux","Docker","Vercel","Expo",
];

const PROJECTS = [
  {
    num: "001",
    name: "CampusCart",
    year: "2025",
    desc: "A peer-to-peer campus marketplace with live Socket.io real-time chat, JWT + Google OAuth authentication, and a Python FastAPI ML recommendation engine. Built for students to buy and sell within campus.",
    tags: ["MERN", "Socket.io", "ML", "FastAPI", "JWT"],
    href: "https://github.com/AJayvarman0626/campuscart",
  },
  {
    num: "002",
    name: "CervAI",
    year: "2025",
    desc: "An AI-powered cervical cancer detection tool using MobileNetV2 deep learning model. React frontend with FastAPI backend, enabling early-stage medical image classification with high accuracy.",
    tags: ["React", "FastAPI", "MobileNetV2", "Python"],
    href: "https://github.com/AJayvarman0626/Cer-AI-",
  },
];

const JOURNEY_EDU = [
  {
    years: "2022 – 2026",
    title: "B.E. Computer Science & Engineering",
    place: "",
    detail: "CGPA: 7.8",
  },
  {
    years: "2020 – 2022",
    title: "Higher Secondary",
    place: "Tamil Nadu State Board",
    detail: "Score: 86%",
  },
];

const CERTS = [
  { year: "2024", title: "Full Stack Web Development", body: "FreeCodeCamp / Self-paced" },
  { year: "2024", title: "React Native — The Practical Guide", body: "FreeCodeCamp" },
  { year: "2023", title: "Basics of Web Development", body: "FreeCodeCamp" },
];

const MARQUEE_TEXT =
  "#STACK: MERN · REACT NATIVE · NODE.JS · MONGODB · SOCKET.IO · NEXT.JS · TYPESCRIPT · FASTAPI · ";

const SunIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const TermIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

const ProfileIcon = ({ active }: { active: boolean }) => (
  <svg viewBox="0 0 24 24" width="19" height="19" fill="none"
    stroke={active ? "var(--accent)" : "currentColor"} strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

const SkillsIcon = ({ active }: { active: boolean }) => (
  <svg viewBox="0 0 24 24" width="19" height="19" fill="none"
    stroke={active ? "var(--accent)" : "currentColor"} strokeWidth="2" strokeLinecap="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const ProjectsIcon = ({ active }: { active: boolean }) => (
  <svg viewBox="0 0 24 24" width="19" height="19" fill="none"
    stroke={active ? "var(--accent)" : "currentColor"} strokeWidth="2" strokeLinecap="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const JourneyIcon = ({ active }: { active: boolean }) => (
  <svg viewBox="0 0 24 24" width="19" height="19" fill="none"
    stroke={active ? "var(--accent)" : "currentColor"} strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const TAB_ICONS: Record<"profile" | "skills" | "projects" | "journey", ({ active }: { active: boolean }) => React.ReactNode> = {
  profile: ProfileIcon,
  skills: SkillsIcon,
  projects: ProjectsIcon,
  journey: JourneyIcon,
};

export default function Portfolio() {
  const [theme, setTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState("hero");
  const [entered, setEntered] = useState(false);

  // Derived directly from state — no CSS variable timing gap
  const sidebarBg = theme === "dark" ? "#111009" : "#f0ece3";
  const sidebarBorder = theme === "dark" ? "rgba(240,237,230,0.09)" : "rgba(26,18,8,0.1)";

  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("ajay-theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  useEffect(() => {
    const r = document.documentElement;
    const d = theme === "dark";
    r.style.setProperty("--bg",        d ? "#111009" : "#f0ece3");
    r.style.setProperty("--bg2",       d ? "#171511" : "#e8e3d8");
    r.style.setProperty("--text",      d ? "#f0ede6" : "#1a1208");
    r.style.setProperty("--muted",     d ? "rgba(240,237,230,0.42)" : "rgba(26,18,8,0.52)");
    r.style.setProperty("--dim",       d ? "rgba(240,237,230,0.18)" : "rgba(26,18,8,0.26)");
    r.style.setProperty("--border",    d ? "rgba(240,237,230,0.09)" : "rgba(26,18,8,0.1)");
    r.style.setProperty("--ghost",     d ? "rgba(240,237,230,0.042)" : "rgba(26,18,8,0.05)");
    r.style.setProperty("--tag-bg",    d ? "rgba(240,237,230,0.055)" : "rgba(26,18,8,0.06)");
    r.style.setProperty("--glass-bg",  d ? "rgba(17,16,9,0.65)" : "rgba(240,236,227,0.65)");
    r.style.setProperty("--glass-bdr", d ? "rgba(240,237,230,0.07)" : "rgba(26,18,8,0.07)");
    document.body.style.background = d ? "#111009" : "#f0ece3";
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((p) => {
      const n = p === "dark" ? "light" : "dark";
      localStorage.setItem("ajay-theme", n);
      return n;
    });
  }, []);

  useEffect(() => { setTimeout(() => setEntered(true), 80); }, []);

  useEffect(() => {
    const ids = ["hero", "skills", "projects", "journey"];
    const track = () => {
      const pos = window.scrollY + window.innerHeight * 0.35;
      let cur = "hero";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop) cur = id;
      });
      setActiveSection(cur);
    };
    window.addEventListener("scroll", track, { passive: true });
    track();
    return () => window.removeEventListener("scroll", track);
  }, []);

  useEffect(() => {
    if (!entered) return;
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [entered]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Space+Grotesk:wght@300;400;500&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        body{background:var(--bg);font-family:'Space Grotesk',sans-serif;overflow-x:hidden;}
        :root{
          --accent:#e8734a;--accent2:#cf6240;
          --font-display:'Bebas Neue',sans-serif;
          --font-mono:'IBM Plex Mono',monospace;
          --sw:46px;
          --rw:20px;
          --nw:148px;
        }
        a,button,span,p,h1,h2,h3,h4{
          transition:color .35s ease,border-color .35s ease;
        }
        section,header,aside,nav{
          transition:background-color .4s ease,border-color .35s ease;
        }

        @keyframes mq-y{from{transform:translateY(0)}to{transform:translateY(-50%)}}
        @keyframes mq-x{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .mq-y{animation:mq-y 30s linear infinite;}
        .mq-x{animation:mq-x 24s linear infinite;display:inline-flex;white-space:nowrap;}

        @keyframes scue{
          0%{transform:scaleY(0);transform-origin:top}
          50%{transform:scaleY(1);transform-origin:top}
          51%{transform-origin:bottom}
          100%{transform:scaleY(0);transform-origin:bottom}
        }
        .scue{animation:scue 2.4s ease-in-out infinite;}

        @keyframes pulse{
          0%,100%{opacity:.45;transform:scale(1);}
          50%{opacity:1;transform:scale(1.5);}
        }

        .reveal{opacity:0;transform:translateY(18px);transition:opacity .6s ease,transform .6s ease;}
        .reveal.revealed{opacity:1;transform:none;}
        .rd1{transition-delay:.08s;}.rd2{transition-delay:.16s;}
        .rd3{transition-delay:.24s;}.rd4{transition-delay:.32s;}

        .clip{overflow:hidden;display:block;}
        .clip-i{display:block;transform:translateY(108%);opacity:0;
          transition:transform 1s cubic-bezier(.16,1,.3,1),opacity .8s ease;}
        .clip-i.in{transform:translateY(0);opacity:1;}

        a{text-decoration:none;color:inherit;}
        .ha:hover{color:var(--accent)!important;}

        .tag{font-family:var(--font-mono);font-size:9px;letter-spacing:.14em;
          text-transform:uppercase;color:var(--muted);background:var(--tag-bg);
          border:1px solid var(--border);padding:4px 10px;border-radius:2px;display:inline-block;}

        .pc{border-bottom:1px solid var(--border);padding:28px 0;transition:background .2s;}
        .pc:hover{background:rgba(232,115,74,.04);}
        .pc:hover .pa{color:var(--accent);transform:translate(3px,-3px);}
        .pa{transition:color .2s,transform .2s;}

        .ibtn{width:32px;height:32px;border-radius:50%;border:1px solid var(--border);
          background:transparent;color:var(--muted);display:flex;align-items:center;
          justify-content:center;cursor:pointer;outline:none;
          transition:background .2s,color .2s,transform .15s,border-color .2s;}
        .ibtn:hover{background:rgba(232,115,74,.12);color:var(--accent);
          border-color:rgba(232,115,74,.3);transform:scale(1.08);}

        .bf{font-family:var(--font-mono);font-size:9px;letter-spacing:.2em;
          text-transform:uppercase;color:#fff;background:var(--accent);border:none;
          padding:11px 26px;cursor:pointer;transition:background .2s,transform .15s;}
        .bf:hover{background:var(--accent2);transform:translateY(-2px);}
        .bo{font-family:var(--font-mono);font-size:9px;letter-spacing:.2em;
          text-transform:uppercase;color:var(--muted);background:transparent;
          border:1px solid var(--border);padding:10px 22px;cursor:pointer;
          transition:border-color .2s,color .2s,transform .15s;}
        .bo:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-2px);}

        /* ── LEFT SIDEBAR — inline style handles bg, CSS handles layout ── */
        #sl{
          position:fixed;left:0;top:0;height:100vh;width:var(--sw);z-index:200;
          border-right:1px solid var(--border);
          transition:background-color .4s ease,border-color .35s ease;
          display:flex;flex-direction:column;align-items:center;
          justify-content:space-between;padding:20px 0 28px;
          overflow:hidden;
        }
        #sl::after{
          content:'';
          position:absolute;right:0;top:20%;
          width:2px;height:60%;
          background:linear-gradient(to bottom,transparent,var(--accent),transparent);
          opacity:.35;border-radius:2px;pointer-events:none;
        }
        .sl-icon{
          color:var(--muted);display:flex;padding:6px;border-radius:6px;
          transition:color .2s,background .2s,transform .2s;
        }
        .sl-icon:hover{
          color:var(--accent)!important;
          background:rgba(232,115,74,.1);
          transform:scale(1.15);
        }

        /* ── COMPACT NAV ── */
        #ln{
          position:fixed;left:var(--sw);top:50%;
          transform:translateY(-50%);z-index:190;
          display:flex;flex-direction:column;gap:0px;
          width:var(--nw);background:transparent;
          padding:6px 0 6px 10px;
        }
        .nav-btn{
          display:flex;align-items:center;gap:6px;
          background:transparent;border:none;cursor:pointer;
          padding:4px 8px;font-family:var(--font-mono);
          text-transform:uppercase;width:100%;text-align:left;
          transition:color .15s ease,transform .2s cubic-bezier(.34,1.56,.64,1);
        }
        .nav-btn:hover{color:var(--accent)!important;transform:translateX(3px);}
        .nav-btn:active{transform:translateX(1px) scale(.97);}
        .nav-btn.nb-strike{text-decoration:line-through;opacity:.3;pointer-events:none;}
        .nav-num{font-size:8px;opacity:.45;flex-shrink:0;font-weight:400;}
        .nav-label{font-size:11px;font-weight:700;letter-spacing:.15em;}
        .nav-arrow{font-size:7px;color:var(--accent);flex-shrink:0;margin-right:1px;}

        /* ── RIGHT STRIP ── */
        #sr{
          position:fixed;right:0;top:0;height:100vh;width:var(--rw);z-index:200;
          border-left:1px solid var(--border);
          transition:background-color .4s ease,border-color .35s ease;
          display:flex;align-items:center;justify-content:center;overflow:hidden;
        }
        #tc{
          position:fixed;top:16px;right:calc(var(--rw) + 12px);z-index:300;
          display:flex;align-items:center;gap:8px;
        }

        .c{
          padding-left:calc(var(--sw) + var(--nw) + 16px);
          padding-right:calc(var(--rw) + 10px);
        }

        #mtop{display:none;}
        #mbot{display:none;}

        .mtop-glass{
          background:var(--glass-bg)!important;
          backdrop-filter:blur(18px) saturate(180%);
          -webkit-backdrop-filter:blur(18px) saturate(180%);
          border-bottom:1px solid var(--glass-bdr)!important;
          border-radius:0 0 14px 14px;
          box-shadow:0 4px 24px rgba(0,0,0,0.07);
        }
        .mbot-glass{
          background:var(--glass-bg)!important;
          backdrop-filter:blur(22px) saturate(200%);
          -webkit-backdrop-filter:blur(22px) saturate(200%);
          border-top:1px solid var(--glass-bdr)!important;
          border-radius:14px 14px 0 0;
          box-shadow:0 -4px 24px rgba(0,0,0,0.07);
        }
        .mob-tab{
          flex:1;display:flex;flex-direction:column;
          align-items:center;justify-content:center;gap:3px;
          background:transparent!important;border:none!important;
          cursor:pointer;padding:8px 4px;
          border-top:2px solid transparent;
          transition:border-color .2s,transform .22s cubic-bezier(.34,1.56,.64,1);
        }
        .mob-tab:hover{transform:translateY(-4px);}
        .mob-tab:active{transform:scale(.95);}
        .mob-tab.tab-on{border-top-color:var(--accent)!important;}

        @media(max-width:767px){
          #sl,#sr,#ln,#tc{display:none!important;}
          #mtop{display:flex!important;}
          #mbot{display:flex!important;}
          .c{padding-left:0!important;padding-right:0!important;}
          .sp{padding:76px 18px 76px!important;}
          .ht{font-size:clamp(52px,14vw,90px)!important;}
          .st{font-size:clamp(36px,10vw,68px)!important;}
        }
        @media(min-width:768px){
          #mbot{display:none!important;}
        }
      `}</style>

      {/* ══ TOP-RIGHT CONTROLS ══ */}
      <div id="tc">
        <button className="ibtn" onClick={toggleTheme}>
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
        <button className="ibtn" onClick={() => window.open("https://github.com/AJayvarman0626", "_blank")}>
          <TermIcon />
        </button>
      </div>

      {/* ══ LEFT SIDEBAR — backgroundColor via inline style (no CSS var flash) ══ */}
      <aside id="sl" style={{ backgroundColor: sidebarBg, borderRightColor: sidebarBorder }}>

        {/* AJ monogram */}
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"4px" }}>
          <span style={{
            fontFamily:"var(--font-display)", fontSize:"11px",
            letterSpacing:".22em", color:"var(--accent)", opacity:.85,
            writingMode:"vertical-rl", transform:"rotate(180deg)", userSelect:"none",
          }}>AJ</span>
          <div style={{ width:"3px", height:"3px", borderRadius:"50%", background:"var(--accent)", opacity:.5 }}/>
        </div>

        {/* Resume tab */}
        <a href="./resume.pdf" style={{
          background:"var(--accent)", width:"28px", height:"96px",
          borderRadius:"0 6px 6px 0", display:"flex",
          alignItems:"center", justifyContent:"center",
          boxShadow:"4px 0 20px rgba(232,115,74,.3)",
          transition:"box-shadow .2s,transform .2s",
        }}>
          <span style={{
            writingMode:"vertical-rl", transform:"rotate(180deg)",
            fontFamily:"var(--font-mono)", fontSize:"8px",
            letterSpacing:"0.22em", textTransform:"uppercase",
            color:"#fff", fontWeight:500,
          }}>Resume</span>
        </a>

        {/* Social icons + glow dot */}
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"16px" }}>
          {[
            { href:"https://github.com/AJayvarman0626",        el:<GithubIcon /> },
            { href:"mailto:ajayvarmank@zohomail.in",           el:<MailIcon /> },
            { href:"https://linkedin.com/in/ajayvarman-26x/",  el:<LinkedinIcon /> },
          ].map(({ href, el }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="sl-icon">
              {el}
            </a>
          ))}
          <div style={{
            width:"1px", height:"24px",
            background:"linear-gradient(to bottom,var(--accent),transparent)", opacity:.3,
          }}/>
          <div style={{
            width:"5px", height:"5px", borderRadius:"50%",
            background:"var(--accent)",
            boxShadow:"0 0 8px 3px rgba(232,115,74,.5)",
            animation:"pulse 2.4s ease-in-out infinite",
          }}/>
        </div>
      </aside>

      {/* ══ COMPACT NAV ══ */}
      <nav id="ln">
        {NAV_ITEMS.map((item) => {
          const active = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`nav-btn${item.strike ? " nb-strike" : ""}`}
              style={{ color: active ? "var(--accent)" : "var(--muted)" }}
            >
              {active && <span className="nav-arrow">▶</span>}
              <span className="nav-num">{item.num}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* ══ RIGHT MARQUEE STRIP ══ */}
      <aside id="sr" style={{ backgroundColor: sidebarBg, borderLeftColor: sidebarBorder }}>
        <div className="mq-y" style={{
          writingMode:"vertical-rl", fontFamily:"var(--font-mono)",
          fontSize:"7px", letterSpacing:"0.14em",
          color:"var(--dim)", textTransform:"uppercase", whiteSpace:"nowrap",
        }}>
          {MARQUEE_TEXT.repeat(6)}
        </div>
      </aside>

      {/* ══ MOBILE TOP BAR ══ */}
      <header id="mtop" className="mtop-glass" style={{
        position:"fixed", top:0, left:0, right:0, zIndex:400,
        height:"52px", alignItems:"center", padding:"0 12px", gap:"6px",
      }}>
        <button className="ibtn" onClick={toggleTheme} style={{ flexShrink:0 }}>
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
        <a href="https://github.com/AJayvarman0626" target="_blank" rel="noopener noreferrer"
          className="ibtn ha" style={{ flexShrink:0, color:"var(--muted)" }}>
          <GithubIcon />
        </a>
        <a href="mailto:ajayvarmank@zohomail.in"
          className="ibtn ha" style={{ flexShrink:0, color:"var(--muted)" }}>
          <MailIcon />
        </a>
        <a href="https://linkedin.com/in/ajayvarman-26x/" target="_blank" rel="noopener noreferrer"
          className="ibtn ha" style={{ flexShrink:0, color:"var(--muted)" }}>
          <LinkedinIcon />
        </a>
        <div style={{ flex:1 }} />
        <span style={{
          fontFamily:"var(--font-mono)", fontSize:"8px", letterSpacing:".16em",
          textTransform:"uppercase", color:"var(--muted)",
          textDecoration:"line-through", opacity:.4, marginRight:"8px",
        }}>BLOGS</span>
        <a href="/resume.pdf" style={{
          fontFamily:"var(--font-mono)", fontSize:"8px", letterSpacing:".16em",
          textTransform:"uppercase", color:"#fff", background:"var(--accent)",
          padding:"7px 14px", borderRadius:"4px", flexShrink:0,
        }}>RESUME</a>
      </header>

      {/* ══ MOBILE BOTTOM NAV ══ */}
      <nav id="mbot" className="mbot-glass" style={{
        position:"fixed", bottom:0, left:0, right:0, zIndex:400,
        height:"60px", display:"flex", alignItems:"stretch",
      }}>
        {BOTTOM_NAV.map((item) => {
          const active = activeSection === item.id;
          const Icon = TAB_ICONS[item.icon];
          return (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              className={`mob-tab${active ? " tab-on" : ""}`}>
              <Icon active={active} />
              <span style={{
                fontFamily:"var(--font-mono)", fontSize:"7px",
                letterSpacing:".12em", textTransform:"uppercase",
                color: active ? "var(--accent)" : "var(--muted)",
              }}>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* ════════ MAIN CONTENT ════════ */}
      <div className="c">

        {/* ── HERO ── */}
        <section id="hero" className="sp" style={{
          minHeight:"100vh", background:"var(--bg)",
          display:"flex", flexDirection:"column",
          alignItems:"center", justifyContent:"center",
          padding:"0 72px", position:"relative", overflow:"hidden",
        }}>
          <span aria-hidden style={{
            position:"absolute", top:"50%", left:"50%",
            transform:"translate(-50%,-50%)",
            fontFamily:"var(--font-display)",
            fontSize:"clamp(100px,18vw,300px)",
            color:"transparent", WebkitTextStroke:"1px var(--ghost)",
            whiteSpace:"nowrap", pointerEvents:"none",
            userSelect:"none", letterSpacing:"0.04em",
          }}>AJAY</span>

          <div style={{ position:"relative", zIndex:10, textAlign:"center", width:"100%", maxWidth:"960px" }}>
            <p style={{
              fontFamily:"var(--font-mono)",
              fontSize:"clamp(20px,.85vw,11px)",
              letterSpacing:"0.32em", textTransform:"uppercase",
              color:"var(--muted)", marginBottom:"22px",
              opacity: entered ? 1 : 0,
              transform: entered ? "none" : "translateY(10px)",
              transition:"opacity .7s .1s,transform .7s .1s",
            }}>I&apos;m Ajayvarman</p>

            <h1 className="ht" style={{
              fontFamily:"var(--font-display)",
              fontSize:"clamp(68px,13vw,180px)",
              lineHeight:0.88, textTransform:"uppercase",
              color:"var(--text)", letterSpacing:"0.01em",
            }}>
              {["SOFTWARE","Developer","Building on","the Web"].map((line, i) => (
                <span key={i} className="clip">
                  <span className={`clip-i${entered ? " in" : ""}`} style={{
                    transitionDelay:`${0.1 + i * 0.13}s`,
                    color: i === 1 ? "var(--accent)" : "var(--text)",
                  }}>{line}</span>
                </span>
              ))}
            </h1>

            <p style={{
              fontFamily:"var(--font-mono)",
              fontSize:"clamp(9px,.85vw,11px)",
              letterSpacing:"0.3em", textTransform:"uppercase",
              color:"var(--muted)", marginTop:"24px",
              opacity: entered ? 1 : 0,
              transition:"opacity .6s .8s",
            }}>
              <span style={{ color:"var(--accent)" }}>—</span>&nbsp;Since 2022&nbsp;
              <span style={{ color:"var(--accent)" }}>—</span>&nbsp;Tirupathur, TN
            </p>

            <div style={{
              display:"flex", gap:"12px", justifyContent:"center",
              marginTop:"32px", flexWrap:"wrap",
              opacity: entered ? 1 : 0,
              transition:"opacity .6s 1.05s",
            }}>
              <button className="bf" onClick={() => scrollTo("projects")}>View Projects</button>
              <a href="mailto:ajayvarmank@zohomail.in" className="bo"
                style={{ display:"inline-flex", alignItems:"center" }}>
                Get In Touch
              </a>
            </div>
          </div>

          <div style={{
            position:"absolute", bottom:"38px", left:"50%",
            transform:"translateX(-50%)",
            display:"flex", flexDirection:"column", alignItems:"center", gap:"7px",
            opacity: entered ? 1 : 0,
            transition:"opacity .6s 1.6s",
          }}>
            <span style={{
              fontFamily:"var(--font-mono)", fontSize:"7px",
              letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--dim)",
            }}>Scroll</span>
            <div className="scue" style={{
              width:"1px", height:"34px",
              background:"linear-gradient(to bottom,var(--accent),transparent)",
            }}/>
          </div>

          <div style={{
            position:"absolute", bottom:0, left:0, right:0,
            borderTop:"1px solid var(--border)",
            background:"var(--bg2)", overflow:"hidden", padding:"7px 0",
          }}>
            <div className="mq-x" style={{
              fontFamily:"var(--font-mono)", fontSize:"8px",
              letterSpacing:"0.16em", textTransform:"uppercase", color:"var(--dim)",
            }}>
              {(MARQUEE_TEXT + "  " + MARQUEE_TEXT).repeat(2)}
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="sp" style={{
          background:"var(--bg)", padding:"88px 72px",
          position:"relative", overflow:"hidden",
          borderTop:"1px solid var(--border)",
        }}>
          <span aria-hidden style={{
            position:"absolute", bottom:"-30px", right:"-10px",
            fontFamily:"var(--font-display)",
            fontSize:"clamp(130px,18vw,320px)",
            color:"transparent", WebkitTextStroke:"1px var(--ghost)",
            pointerEvents:"none", userSelect:"none",
          }}>01</span>

          <div style={{ maxWidth:"780px", position:"relative", zIndex:1 }}>
            <p className="reveal" style={{
              fontFamily:"var(--font-mono)", fontSize:"9px",
              letterSpacing:"0.28em", textTransform:"uppercase",
              color:"var(--accent)", marginBottom:"16px",
              display:"flex", alignItems:"center", gap:"12px",
            }}>
              #01 Skills{" "}
              <span style={{ height:"1px", width:"40px", background:"var(--accent)", opacity:.4, display:"inline-block" }}/>
            </p>
            <h2 className="reveal st" style={{
              fontFamily:"var(--font-display)",
              fontSize:"clamp(38px,6vw,84px)",
              textTransform:"uppercase", lineHeight:1,
              color:"var(--text)", marginBottom:"44px",
            }}>Tech<span style={{ color:"var(--accent)" }}> Stack</span></h2>

            <div className="reveal rd1" style={{ marginBottom:"26px" }}>
              <p style={{
                fontFamily:"var(--font-mono)", fontSize:"9px",
                letterSpacing:"0.2em", textTransform:"uppercase",
                color:"var(--dim)", marginBottom:"11px",
              }}>Technologies</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"7px" }}>
                {TECH_STACK.map((s) => (
                  <span key={s} className="tag ha" style={{ cursor:"default" }}>{s}</span>
                ))}
              </div>
            </div>

            <div className="reveal rd2" style={{ marginBottom:"40px" }}>
              <p style={{
                fontFamily:"var(--font-mono)", fontSize:"9px",
                letterSpacing:"0.2em", textTransform:"uppercase",
                color:"var(--dim)", marginBottom:"11px",
              }}>Tools &amp; Workflows</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"7px" }}>
                {TOOLS.map((s) => (
                  <span key={s} className="tag ha" style={{ cursor:"default" }}>{s}</span>
                ))}
              </div>
            </div>

            <p className="reveal rd3" style={{
              fontFamily:"var(--font-mono)", fontSize:"12px",
              lineHeight:2.0, color:"var(--muted)", maxWidth:"500px",
            }}>
              I build full-stack web apps — real-time features, clean APIs, ML
              microservices. Currently looking for full-time roles.
            </p>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="sp" style={{
          background:"var(--bg)", padding:"88px 72px",
          borderTop:"1px solid var(--border)", position:"relative",
        }}>
          <div style={{ maxWidth:"880px" }}>
            <p className="reveal" style={{
              fontFamily:"var(--font-mono)", fontSize:"9px",
              letterSpacing:"0.28em", textTransform:"uppercase",
              color:"var(--accent)", marginBottom:"16px",
              display:"flex", alignItems:"center", gap:"12px",
            }}>
              #02 Projects{" "}
              <span style={{ height:"1px", width:"40px", background:"var(--accent)", opacity:.4, display:"inline-block" }}/>
            </p>
            <div style={{
              display:"flex", alignItems:"flex-end", justifyContent:"space-between",
              marginBottom:"32px", flexWrap:"wrap", gap:"10px",
            }}>
              <h2 className="reveal st" style={{
                fontFamily:"var(--font-display)",
                fontSize:"clamp(44px,8vw,105px)",
                textTransform:"uppercase", lineHeight:1, color:"var(--text)",
              }}>Projects</h2>
              <span style={{
                fontFamily:"var(--font-mono)", fontSize:"9px",
                letterSpacing:"0.18em", color:"var(--muted)",
              }}>0{PROJECTS.length} works</span>
            </div>

            <div style={{ borderTop:"1px solid var(--border)" }}>
              {PROJECTS.map((p, idx) => (
                <div key={p.num} className={`pc reveal rd${idx + 1}`}>
                  <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"8px" }}>
                    <span style={{
                      fontFamily:"var(--font-mono)", fontSize:"9px",
                      color:"var(--dim)", letterSpacing:"0.18em",
                    }}>{p.num}</span>
                    <h3 style={{
                      fontFamily:"var(--font-display)",
                      fontSize:"clamp(20px,3.5vw,48px)",
                      textTransform:"uppercase", letterSpacing:"0.02em",
                      color:"var(--text)", flex:1,
                    }}>{p.name}</h3>
                    <span style={{
                      fontFamily:"var(--font-mono)", fontSize:"9px", color:"var(--dim)",
                    }}>{p.year}</span>
                    <a href={p.href} target="_blank" rel="noopener noreferrer"
                      className="pa ha" style={{ color:"var(--muted)", display:"flex", marginLeft:"4px" }}>
                      <ArrowUpRight />
                    </a>
                  </div>
                  <p style={{
                    fontFamily:"var(--font-mono)", fontSize:"11px", lineHeight:1.9,
                    color:"var(--muted)", maxWidth:"540px", marginBottom:"11px",
                  }}>{p.desc}</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"6px" }}>
                    {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── JOURNEY ── */}
        <section id="journey" className="sp" style={{
          background:"var(--bg2)", padding:"88px 72px",
          borderTop:"1px solid var(--border)",
          position:"relative", overflow:"hidden",
        }}>
          <span aria-hidden style={{
            position:"absolute", top:"-30px", left:"-10px",
            fontFamily:"var(--font-display)",
            fontSize:"clamp(130px,18vw,320px)",
            color:"transparent", WebkitTextStroke:"1px var(--ghost)",
            pointerEvents:"none", userSelect:"none",
          }}>03</span>

          <div style={{ maxWidth:"780px", position:"relative", zIndex:1 }}>
            <p className="reveal" style={{
              fontFamily:"var(--font-mono)", fontSize:"9px",
              letterSpacing:"0.28em", textTransform:"uppercase",
              color:"var(--accent)", marginBottom:"16px",
              display:"flex", alignItems:"center", gap:"12px",
            }}>
              #03 Journey{" "}
              <span style={{ height:"1px", width:"40px", background:"var(--accent)", opacity:.4, display:"inline-block" }}/>
            </p>
            <h2 className="reveal st" style={{
              fontFamily:"var(--font-display)",
              fontSize:"clamp(38px,6vw,84px)",
              textTransform:"uppercase", lineHeight:1,
              color:"var(--text)", marginBottom:"44px",
            }}>
              Education<br />
              <span style={{ color:"var(--accent)" }}>&amp; Beyond</span>
            </h2>

            <div style={{ marginBottom:"44px" }}>
              <p className="reveal" style={{
                fontFamily:"var(--font-mono)", fontSize:"9px",
                letterSpacing:"0.2em", textTransform:"uppercase",
                color:"var(--dim)", marginBottom:"18px",
              }}>Education</p>
              <div style={{ borderLeft:"1px solid var(--border)", marginLeft:"4px", paddingLeft:"22px" }}>
                {JOURNEY_EDU.map((item, i) => (
                  <div key={i} className={`reveal rd${i + 1}`} style={{ paddingBottom:"30px", position:"relative" }}>
                    <div style={{
                      position:"absolute", left:"-26px", top:"5px",
                      width:"7px", height:"7px", borderRadius:"50%",
                      background:"var(--accent)",
                    }}/>
                    <span style={{
                      fontFamily:"var(--font-mono)", fontSize:"9px",
                      letterSpacing:"0.16em", color:"var(--accent)",
                      display:"block", marginBottom:"6px",
                    }}>{item.years}</span>
                    <h4 style={{
                      fontFamily:"var(--font-display)",
                      fontSize:"clamp(15px,2.2vw,26px)",
                      textTransform:"uppercase", color:"var(--text)",
                      marginBottom:"4px", letterSpacing:"0.02em",
                    }}>{item.title}</h4>
                    <p style={{
                      fontFamily:"var(--font-mono)", fontSize:"10px",
                      color:"var(--muted)", marginBottom:"6px",
                    }}>{item.place}</p>
                    <span className="tag">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="reveal" style={{
                fontFamily:"var(--font-mono)", fontSize:"9px",
                letterSpacing:"0.2em", textTransform:"uppercase",
                color:"var(--dim)", marginBottom:"18px",
              }}>Certifications</p>
              <div style={{ borderLeft:"1px solid var(--border)", marginLeft:"4px", paddingLeft:"22px" }}>
                {CERTS.map((c, i) => (
                  <div key={i} className={`reveal rd${i + 1}`} style={{ paddingBottom:"22px", position:"relative" }}>
                    <div style={{
                      position:"absolute", left:"-26px", top:"5px",
                      width:"7px", height:"7px", borderRadius:"50%",
                      border:"2px solid var(--accent)", background:"var(--bg2)",
                    }}/>
                    <span style={{
                      fontFamily:"var(--font-mono)", fontSize:"9px",
                      letterSpacing:"0.14em", color:"var(--dim)",
                      display:"block", marginBottom:"4px",
                    }}>{c.year}</span>
                    <h4 style={{
                      fontFamily:"var(--font-display)",
                      fontSize:"clamp(13px,1.8vw,20px)",
                      textTransform:"uppercase", color:"var(--text)",
                      marginBottom:"3px", letterSpacing:"0.02em",
                    }}>{c.title}</h4>
                    <p style={{
                      fontFamily:"var(--font-mono)", fontSize:"10px", color:"var(--muted)",
                    }}>{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="sp" style={{
          background:"var(--bg)", padding:"88px 72px",
          borderTop:"1px solid var(--border)",
          display:"flex", flexDirection:"column",
          alignItems:"center", justifyContent:"center",
          textAlign:"center", minHeight:"48vh",
          position:"relative", overflow:"hidden",
        }}>
          <span aria-hidden style={{
            position:"absolute", top:"50%", left:"50%",
            transform:"translate(-50%,-50%)",
            fontFamily:"var(--font-display)",
            fontSize:"clamp(60px,13vw,200px)",
            color:"transparent", WebkitTextStroke:"1px var(--ghost)",
            pointerEvents:"none", userSelect:"none", whiteSpace:"nowrap",
          }}>CONTACT</span>

          <p className="reveal" style={{
            fontFamily:"var(--font-mono)", fontSize:"9px",
            letterSpacing:"0.32em", textTransform:"uppercase",
            color:"var(--accent)", marginBottom:"14px",
            position:"relative", zIndex:1,
          }}>Let&apos;s work together</p>

          <a href="mailto:ajayvarmank@zohomail.in" className="reveal ha" style={{
            fontFamily:"var(--font-display)",
            fontSize:"clamp(16px,3.5vw,54px)",
            textTransform:"uppercase", color:"var(--text)",
            position:"relative", zIndex:1, marginBottom:"36px", display:"block",
          }}>ajayvarmank@zohomail.in</a>

          <div className="reveal rd2" style={{
            display:"flex", gap:"24px", flexWrap:"wrap",
            justifyContent:"center", position:"relative", zIndex:1,
          }}>
            {[
              { label:"GitHub",    href:"https://github.com/AJayvarman0626" },
              { label:"LinkedIn",  href:"https://linkedin.com/in/ajayvarman-26x/" },
              { label:"Portfolio", href:"https://ajaydev.fun" },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="ha" style={{
                  fontFamily:"var(--font-mono)", fontSize:"9px",
                  letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--muted)",
                }}>{label}</a>
            ))}
          </div>

          <div style={{
            position:"relative", zIndex:1, marginTop:"44px",
            borderTop:"1px solid var(--border)", paddingTop:"22px",
            width:"100%", maxWidth:"600px",
            display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:"8px",
          }}>
            <p style={{
              fontFamily:"var(--font-mono)", fontSize:"8px",
              letterSpacing:"0.14em", color:"var(--dim)",
            }}>© 2026 Ajayvarman K — Tirupathur, TN</p>
            <p style={{
              fontFamily:"var(--font-mono)", fontSize:"8px",
              letterSpacing:"0.14em", color:"var(--dim)",
            }}>SOFTWARE Developer</p>
          </div>
        </section>

      </div>
    </>
  );
}