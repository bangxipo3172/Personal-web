import React from "react";

const projects = [
  {
    title: "Shadow Arena",
    type: "3D Action RPG",
    desc: "Prototype chiến đấu thời gian thực với combo, enemy AI, camera lock-on và hệ thống skill.",
    tech: ["Unity", "C#", "URP", "AI"],
  },
  {
    title: "City Runner",
    type: "Mobile Endless Runner",
    desc: "Game mobile tối ưu hiệu năng, object pooling, level streaming và tích hợp ads/IAP.",
    tech: ["Unity Mobile", "C#", "Firebase", "Addressables"],
  },
  {
    title: "VR Training Lab",
    type: "VR Simulation",
    desc: "Mô phỏng đào tạo tương tác bằng VR, physics-based interaction và UI trong không gian 3D.",
    tech: ["Unity XR", "OpenXR", "Physics", "UI Toolkit"],
  },
];

const skills = [
  "Unity Engine",
  "C# Gameplay Programming",
  "Game Architecture",
  "Mobile Optimization",
  "Shader Graph / URP",
  "AI & Pathfinding",
  "Multiplayer Basics",
  "Git Workflow",
];

function Icon({ name, size = 22, className = "" }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
  };

  const paths = {
    gamepad: (
      <>
        <path d="M6 12h4" />
        <path d="M8 10v4" />
        <path d="M15 13h.01" />
        <path d="M18 11h.01" />
        <rect x="3" y="8" width="18" height="10" rx="5" />
      </>
    ),
    code: (
      <>
        <path d="m16 18 6-6-6-6" />
        <path d="m8 6-6 6 6 6" />
      </>
    ),
    box: (
      <>
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    github: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5a10.2 10.2 0 0 0-5.5 0C8.5 2 7.5 2 7.5 2c-.3 1.15-.3 2.35 0 3.5a5.4 5.4 0 0 0-1 3.5c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4" />
        <path d="M9 18c-4.5 2-5-2-7-2" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    play: <polygon points="8 5 19 12 8 19 8 5" />,
    download: (
      <>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="M7 10l5 5 5-5" />
        <path d="M12 15V3" />
      </>
    ),
    arrow: <path d="M9 18l6-6-6-6" />,
    sparkle: (
      <>
        <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" />
        <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
      </>
    ),
  };

  return <svg {...common}>{paths[name] || paths.box}</svg>;
}

function Button({ children, variant = "primary", href = "#", className = "" }) {
  const styles =
    variant === "primary"
      ? "bg-emerald-400 text-slate-950 hover:bg-emerald-300"
      : "border border-white/20 bg-white/5 text-white hover:bg-white/10";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl px-6 py-4 font-semibold transition ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-[1.5rem] border border-white/10 ${className}`}>{children}</div>;
}

function validatePortfolioData(projectList, skillList) {
  return {
    hasProjects: Array.isArray(projectList) && projectList.length >= 3,
    hasSkills: Array.isArray(skillList) && skillList.length >= 6,
    projectsHaveRequiredFields: projectList.every(
      (project) => project.title && project.type && project.desc && Array.isArray(project.tech)
    ),
  };
}

const portfolioTests = validatePortfolioData(projects, skills);
console.assert(portfolioTests.hasProjects, "Portfolio cần ít nhất 3 dự án.");
console.assert(portfolioTests.hasSkills, "Portfolio cần ít nhất 6 kỹ năng.");
console.assert(portfolioTests.projectsHaveRequiredFields, "Mỗi dự án cần có title, type, desc và tech.");

export default function UnityDeveloperPortfolio() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.22),transparent_32%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_30%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-6">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
          <a href="#home" className="flex items-center gap-3" aria-label="Về đầu trang">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-400 text-slate-950">
              <Icon name="gamepad" />
            </span>
            <span>
              <span className="block font-bold leading-none">Minh Unity Dev</span>
              <span className="block text-xs text-slate-400">Gameplay Programmer</span>
            </span>
          </a>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#projects" className="hover:text-white">Dự án</a>
            <a href="#skills" className="hover:text-white">Kỹ năng</a>
            <a href="#contact" className="hover:text-white">Liên hệ</a>
          </div>
        </nav>

        <section id="home" className="grid min-h-[78vh] items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-[fadeIn_0.7s_ease-out]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
              <Icon name="sparkle" size={16} /> Available for Unity projects
            </div>

            <h1 className="text-5xl font-black tracking-tight md:text-7xl">
              Tôi xây dựng <span className="text-emerald-400">gameplay</span> mượt, vui và tối ưu.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Xin chào, mình là Minh — Unity Developer chuyên lập trình gameplay, mobile game, prototype 3D và trải nghiệm tương tác bằng C#.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#projects">
                Xem dự án <Icon name="arrow" size={18} className="ml-2" />
              </Button>
              <Button variant="outline" href="#contact">
                <Icon name="download" size={18} className="mr-2" /> Tải CV
              </Button>
            </div>
          </div>

          <div className="animate-[fadeIn_0.9s_ease-out]">
            <Card className="bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900 p-5">
                <div className="mb-4 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <pre className="overflow-x-auto text-sm leading-7 text-slate-300">
                  <code>{`public class PlayerController : MonoBehaviour\n{\n    [SerializeField] float speed = 7f;\n    [SerializeField] Animator animator;\n\n    void Update()\n    {\n        Vector3 input = GetMovement();\n        Move(input);\n        animator.SetFloat("Speed", input.magnitude);\n    }\n\n    void Move(Vector3 dir)\n    {\n        transform.position += dir * speed * Time.deltaTime;\n    }\n}`}</code>
                </pre>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-bold text-emerald-300">3+</p>
                  <p className="text-xs text-slate-400">Years</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-bold text-emerald-300">12</p>
                  <p className="text-xs text-slate-400">Projects</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-bold text-emerald-300">C#</p>
                  <p className="text-xs text-slate-400">Main stack</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="skills" className="py-14">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">Skills</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Kỹ năng chính</h2>
            </div>
            <Icon name="code" size={36} className="hidden text-emerald-300 md:block" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200 backdrop-blur transition hover:bg-white/10">
                <Icon name="box" size={22} className="mb-3 text-emerald-300" />
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">Portfolio</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Dự án nổi bật</h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="group bg-white/5 text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
                <div className="p-6">
                  <div className="mb-5 grid h-48 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400/25 via-blue-500/20 to-purple-500/20">
                    <Icon name="play" size={52} className="text-emerald-200" />
                  </div>
                  <p className="text-sm text-emerald-300">{project.type}</p>
                  <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
                  <p className="mt-3 min-h-[78px] text-sm leading-6 text-slate-300">{project.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">{item}</span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 text-center backdrop-blur md:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">Contact</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Có ý tưởng game? Cùng biến nó thành prototype.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Mình sẵn sàng tham gia dự án game indie, mobile, simulation hoặc hỗ trợ tối ưu gameplay trong Unity.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="mailto:hello@example.com">
                <Icon name="mail" size={18} className="mr-2" /> hello@example.com
              </Button>
              <Button variant="outline" href="https://github.com" className="">
                <Icon name="github" size={18} className="mr-2" /> GitHub
              </Button>
              <Button variant="outline" href="https://linkedin.com" className="">
                <Icon name="linkedin" size={18} className="mr-2" /> LinkedIn
              </Button>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
          © 2026 Minh Unity Dev. Built with React, Tailwind and passion for games.
        </footer>
      </div>
    </main>
  );
}
