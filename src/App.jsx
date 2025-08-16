import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Award } from "lucide-react";

// ---------------------- DATA ----------------------
const DATA = {
  name: "Chandan Kumar",
  title: "Software Developer • Mobile & Web • Cloud Infrastructure",
  phone: "+91 7488152514",
  email: "itschandan26@gmail.com",
  linkedin: "https://www.linkedin.com/in/chandankr12/",
  github: "https://github.com/22chandan",
  heroImage: "https://via.placeholder.com/176",
  about: `I build responsive, high-performance cross-platform apps and scalable web backends. Experienced with Flutter, React, Node.js, AWS, and realtime systems. I'm currently finishing my B.Tech and seeking full-time roles where I can design great products and ship reliable systems.`,
  skills: [
    "ReactJS",
    "Flutter",
    "Node.js",
    "MongoDB",
    "AWS",
    "Socket.io",
    "WebSockets",
    "Docker",
    "Kubernetes",
    "PowerShell",
  ],
  projects: [
    {
      title: "AI ResumeBuilder",
      desc: "AI-powered resume creation tool (OpenAI + React + Node). PDF export, auth, and high scalability.",
      tech: ["React", "Node", "MongoDB", "OpenAI"],
      repo: "https://github.com/22chandan/AIResumeFrontend.git",
      demo: "#",
    },
    {
      title: "Krishijod",
      desc: "Flutter app connecting farmers with experts, weather updates and ML crop-disease predictions.",
      tech: ["Flutter", "Firebase"],
      repo: "https://github.com/22chandan/KrishiJodd",
      demo: "#",
    },
  ],
  experience: [
    {
      role: "Infrastructure Engineering Intern",
      company: "Accenture",
      date: "Feb 2025 — May 2025",
      bullets: [
        "Automated infra monitoring using PowerShell",
        "Worked with Oracle RDBMS and AWS",
      ],
    },
    {
      role: "Lead Developer",
      company: "The Mad Cortex (Part-time)",
      date: "May 2024 — Jan 2025",
      bullets: [
        "Built cross-platform app supporting 500+ concurrent users",
        "Optimized real-time features (Socket.io)",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "Wolooka (TestWin)",
      date: "Aug 2023 — Apr 2024",
      bullets: [
        "Built AI-powered quizzes (10k+ users)",
        "Launched dating app Umla with real-time chat",
      ],
    },
  ],
  achievements: [
    "Solved 900+ DSA problems on LeetCode (peak 1800+)",
    "CodeChef 3★ (Peak 1634)",
    "Qualified TCS CodeVita Season 12 (Rounds 1 & 2)",
    "Google Cloud Facilitator — 200+ labs",
  ],
};

// ---------------------- COMPONENTS ----------------------
const Badge = ({ children }) => (
  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-800/40">
    {children}
  </span>
);

const TechPill = ({ name }) => (
  <span className="text-xs px-2 py-1 border rounded-md mr-2 mb-2">{name}</span>
);

// ---------------------- MAIN APP ----------------------
export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${DATA.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
      formData.message
    )}%0D%0AFrom:%20${formData.email}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      {/* HEADER */}
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
            CK
          </div>
          <div>
            <div className="font-semibold">{DATA.name}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {DATA.title}
            </div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#experience" className="hover:underline">
            Experience
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#achievements" className="hover:underline">
            Achievements
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* HERO */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="relative overflow-hidden bg-white dark:bg-slate-800/60 rounded-2xl p-8 shadow mb-10"
        >
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-tr from-purple-500 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse" />

          <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
            <motion.img
              src={DATA.heroImage}
              alt="hero"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-44 h-44 object-cover rounded-2xl shadow-md border-4 border-indigo-500/20"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-extrabold mb-1">{DATA.name}</h1>
              <p className="text-indigo-600 dark:text-indigo-400 font-mono text-sm mb-2">
                {DATA.title}
              </p>
              <p className="leading-relaxed text-sm">{DATA.about}</p>

              {/* Social links */}
              <div className="mt-4 flex gap-4">
                <a href={DATA.github} target="_blank" rel="noreferrer" className="hover:scale-110 transition">
                  <Github size={20} />
                </a>
                <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="hover:scale-110 transition">
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${DATA.email}`} className="hover:scale-110 transition">
                  <Mail size={20} />
                </a>
              </div>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {DATA.skills.slice(0, 6).map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* EXPERIENCE TIMELINE (before projects) */}
        <motion.section
          id="experience"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8 mb-12"
        >
          <h2 className="text-2xl font-semibold text-center">Experience</h2>
          <div className="relative border-l-2 border-slate-300 dark:border-slate-700 pl-6">
            {DATA.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8 relative"
              >
                <div className="absolute -left-[14px] top-2 w-3 h-3 bg-indigo-500 rounded-full"></div>
                <div className="bg-white dark:bg-slate-800/60 p-5 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{exp.role}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-sm text-slate-400">{exp.date}</div>
                  </div>
                  <ul className="mt-3 list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
                    {exp.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.div
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-4 mb-12"
        >
          <h2 className="text-2xl font-semibold text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DATA.projects.map((p) => (
              <motion.article
                key={p.title}
                whileHover={{ scale: 1.03, rotate: 0.5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative bg-white dark:bg-slate-800/60 rounded-xl p-5 shadow-lg border border-transparent hover:border-indigo-500/50 transition"
              >
                <div className="h-32 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-lg mb-3 flex items-center justify-center text-slate-400">
                  Screenshot
                </div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                  {p.desc}
                </p>
                <div className="mt-3 flex flex-wrap">
                  {p.tech.map((t) => (
                    <TechPill key={t} name={t} />
                  ))}
                </div>
                <div className="mt-3 flex gap-4 text-xs">
                  <a href={p.repo} target="_blank" rel="noreferrer" className="underline">
                    Code
                  </a>
                  <a href={p.demo} target="_blank" rel="noreferrer" className="underline text-indigo-600">
                    Live Demo
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* ACHIEVEMENTS */}
        <motion.section
          id="achievements"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-4 mb-12"
        >
          <h2 className="text-2xl font-semibold text-center">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DATA.achievements.map((ach, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white dark:bg-slate-800/60 p-4 rounded-lg shadow">
                <Award className="text-yellow-500" size={20} />
                <span className="text-sm">{ach}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT FORM */}
        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800/60 p-6 rounded-xl shadow"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border rounded-lg p-2"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-6 py-2 rounded-lg"
            >
              Send
            </button>
          </form>
        </motion.section>
      </main>

      <footer className="py-8 text-center text-sm text-slate-500">
        Built with ❤ — Reach out at{" "}
        <a href={`mailto:${DATA.email}`} className="underline">
          {DATA.email}
        </a>
      </footer>
    </div>
  );
}
