import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import project1 from "../../public/img/nxg.png";
import project2 from "../../public/img/fxc.png";
import project3 from "../../public/img/jsj.png";
import project4 from "../../public/img/igcsm.png";
import project5 from "../../public/img/speakfine.png";
import project6 from "../../public/img/tanntrim.png";
import project7 from "../../public/img/utfx.png";

const projects = [
  {
    title: "NXG Markets",
    description:
      "A comprehensive trading platform for Forex and CFDs, offering access to various financial instruments and the MT5 platform.",
    tags: ["next js","RTK Query", "Shadcn Ui", "Tailwind css", "Node.js"],
    gradient: "from-cyan-400/20 to-blue-500/20",
    image: project1,
    liveUrl: "https://www.nxgmarkets.com/",
    repoUrl: "#",
  },
  {
    title: "UTFX",
    description:
      "A modern landing page for a forex trading platform, showcasing advanced tools and a secure, regulated environment to build user trust.",
    tags: ["next js","RTK Query", "Shadcn Ui", "Tailwind css", "Node.js"],
    gradient: "from-cyan-400/20 to-blue-500/20",
    image: project7,
    liveUrl: "https://utfx.vercel.app/",
    repoUrl: "#",
  },
  {
    title: "FXCareers",
    description:
      "An educational platform in Dubai for stock market courses, featuring detailed course information, testimonials, and enrollment options.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP"],
    gradient: "from-cyan-400/20 to-blue-500/20",
    image: project2,
    liveUrl: "https://www.fxcareers.ae/",
    repoUrl: "#",
  },
  {
    title: "IGCSM",
    description:
      "A professional website for the IGCSM certification, detailing the curriculum, examination process, and registration information.",
    tags: ["React", "Shadcn Ui", "Tailwind css", "PHP"],
    gradient: "from-cyan-400/20 to-blue-500/20",
    image: project4,
    liveUrl: "https://www.igcsm.com/",
    repoUrl: "#",
  },
  {
    title: "JCJ Funerals",
    description:
      "A compassionate website for a funeral service provider, offering information on services, pre-planning, and grief support resources.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP"],
    gradient: "from-cyan-400/20 to-blue-500/20",
    image: project3,
    liveUrl: "https://jcjfunerals.com/",
    repoUrl: "#",
  },
  {
    title: "SPEAKFINE",
    description:
      "A promotional landing page for an English language course, highlighting course benefits and offering a free demonstration class.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP"],
    gradient: "from-cyan-400/20 to-blue-500/20",
    image: project5,
    liveUrl: "https://speakfine.in/",
    repoUrl: "#",
  },
  {
    title: "TANN TRIM",
    description:
      "A sleek e-commerce storefront for a leather goods brand, featuring product categories and a clean UI for a seamless shopping experience.",
    tags: ["React js", "Tailwind css"],
    gradient: "from-cyan-400/20 to-blue-500/20",
    image: project6,
    liveUrl: "https://tann-trim-gray.vercel.app/",
    repoUrl: "#",
  },
];

function TiltCard({ project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 260, damping: 22 });
  const smoothY = useSpring(y, { stiffness: 260, damping: 22 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-12deg", "12deg"]);

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.article
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="section-ring glass-panel relative h-full overflow-hidden rounded-2xl"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10" />
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 z-10`}
        />
      </div>

      {/* Content Section */}
      <div className="relative p-6" style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-300/30 bg-slate-950/60 px-3 py-1 font-mono text-xs font-medium text-cyan-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5  gap-3">
          <a
            target="_blank"
            href={project.liveUrl}
            className="flex items-center justify-center gap-2 w-full  rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-xs font-bold text-slate-950 hover:brightness-110 transition-all"
          >
            <FiExternalLink size={14} />
            Live Demo
          </a>
          {/* <a
            href={project.repoUrl}
            className="flex items-center gap-2 rounded-lg border border-orange-200/30 bg-orange-400/10 px-4 py-2 text-xs font-bold text-orange-100 hover:bg-orange-400/20 transition-all"
          >
            <FiGithub size={14} />
            Source
          </a> */}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="mb-12 text-center md:mb-16">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
          {"[ Project Showcase ]"}
        </p>
        <h2 className="text-3xl font-black text-white md:text-5xl">
          Featured Build Collection
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
          A showcase of production-style projects built for performance,
          clarity, and smooth developer-friendly experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3 [perspective:1200px]">
        {projects.map((project) => (
          <TiltCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
