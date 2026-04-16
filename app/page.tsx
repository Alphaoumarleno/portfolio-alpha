export default function Home() {
  const skills = [
    "Salesforce",
    "Apex",
    "LWC",
    "Flow Builder",
    "AWS",
    "Docker",
    "CI/CD",
    "DevOps",
    "IoT",
    "ESP32",
    "Flutter",
    "React",
    "Python",
    "SQL",
    "Cybersécurité",
    "Data Analysis",
  ];

  const projects = [
    {
      title: "Plateforme CEE sur Salesforce",
      category: "Salesforce / PFE",
      description:
        "Conception et implémentation d’une plateforme de gestion des Certificats d’Économies d’Énergie avec modélisation des données, automatisation métier, parcours utilisateurs et optimisation des processus.",
    },
    {
      title: "Système de surveillance de la qualité de l’air",
      category: "IoT / Cloud",
      description:
        "Développement d’une solution connectée avec ESP32, capteurs, application mobile Flutter, backend API et dashboard de suivi des données environnementales.",
    },
    {
      title: "Architecture microservices sur AWS",
      category: "Cloud / DevOps",
      description:
        "Mise en place d’une architecture moderne avec Docker, ECS, CodeDeploy, CodePipeline et bonnes pratiques CI/CD pour industrialiser les déploiements.",
    },
    {
      title: "Déploiement et personnalisation Moodle",
      category: "LMS / Infrastructure",
      description:
        "Installation, configuration et personnalisation d’une plateforme Moodle sur VPS avec Nginx, MariaDB, PHP-FPM et optimisation de l’environnement.",
    },
  ];

  const experiences = [
    {
      title: "Consultant Développeur Salesforce",
      company: "D&A Technologies",
      description:
        "Conception de solutions Salesforce orientées métier avec modélisation des données, développement Apex/LWC et automatisation via Flow.",
    },
    {
      title: "Responsable IT / Réseau & Sécurité",
      company: "Administration / Formation",
      description:
        "Gestion d’infrastructures, sécurité informatique, administration systèmes et accompagnement technique dans des environnements opérationnels.",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #06101f 0%, #081225 35%, #0b1324 100%)",
        color: "#ffffff",
        fontFamily: "Inter, Arial, Helvetica, sans-serif",
      }}
    >
      {/* HEADER FIXE */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(12px)",
          background: "rgba(3, 10, 24, 0.78)",
          borderBottom: "1px solid rgba(148,163,184,0.12)",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "14px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                color: "#38bdf8",
                fontWeight: 800,
                fontSize: "14px",
                letterSpacing: "0.6px",
              }}
            >
              PORTFOLIO PROFESSIONNEL
            </div>
            <div
              style={{
                color: "#cbd5e1",
                fontSize: "14px",
                marginTop: "4px",
              }}
            >
              Alpha Oumar Leno • Cloud • Salesforce • IoT • DevOps
            </div>
          </div>

          <nav
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a
              href="#skills"
              style={{
                padding: "10px 14px",
                borderRadius: "10px",
                color: "#e2e8f0",
                border: "1px solid rgba(148,163,184,0.18)",
                background: "rgba(15,23,42,0.45)",
              }}
            >
              Compétences
            </a>
            <a
              href="#experience"
              style={{
                padding: "10px 14px",
                borderRadius: "10px",
                color: "#e2e8f0",
                border: "1px solid rgba(148,163,184,0.18)",
                background: "rgba(15,23,42,0.45)",
              }}
            >
              Expérience
            </a>
            <a
              href="#projects"
              style={{
                padding: "10px 14px",
                borderRadius: "10px",
                color: "#e2e8f0",
                border: "1px solid rgba(148,163,184,0.18)",
                background: "rgba(15,23,42,0.45)",
              }}
            >
              Projets
            </a>
            <a
              href="#contact"
              style={{
                padding: "10px 16px",
                borderRadius: "12px",
                color: "#081225",
                background: "#38bdf8",
                fontWeight: 700,
              }}
            >
              Me contacter
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "42px 20px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "rgba(15, 23, 42, 0.55)",
              border: "1px solid rgba(148, 163, 184, 0.12)",
              borderRadius: "24px",
              padding: "28px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: "rgba(56, 189, 248, 0.12)",
                color: "#7dd3fc",
                border: "1px solid rgba(56,189,248,0.25)",
                padding: "8px 14px",
                borderRadius: "999px",
                fontSize: "14px",
                marginBottom: "18px",
                fontWeight: 700,
              }}
            >
              Ingénieur Cloud & IoT • Développeur Salesforce
            </div>

            <h1
              style={{
                fontSize: "clamp(38px, 8vw, 76px)",
                lineHeight: 1.02,
                margin: "0 0 18px",
                fontWeight: 900,
              }}
            >
              Alpha
              <br />
              Oumar Leno
            </h1>

            <p
              style={{
                fontSize: "clamp(18px, 3.5vw, 26px)",
                color: "#dbeafe",
                marginBottom: "22px",
                lineHeight: 1.5,
              }}
            >
              Je conçois des solutions techniques à forte valeur ajoutée
              combinant <span style={{ color: "#38bdf8" }}>Salesforce</span>,{" "}
              <span style={{ color: "#38bdf8" }}>Cloud</span>,{" "}
              <span style={{ color: "#38bdf8" }}>IoT</span> et{" "}
              <span style={{ color: "#38bdf8" }}>DevOps</span>.
            </p>

            <p
              style={{
                fontSize: "17px",
                color: "#e2e8f0",
                lineHeight: 1.85,
                marginBottom: "28px",
              }}
            >
              Actuellement en formation en Ingénierie des Systèmes Ubiquitaires
              et Distribués à l’INPT Rabat, je développe des plateformes métier,
              des systèmes connectés et des architectures cloud avec une forte
              orientation automatisation, fiabilité et impact opérationnel.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#projects"
                style={{
                  textDecoration: "none",
                  color: "#081225",
                  background: "#38bdf8",
                  padding: "14px 20px",
                  borderRadius: "14px",
                  fontWeight: 800,
                }}
              >
                Voir mes projets
              </a>

              <a
                href="#experience"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  border: "1px solid #334155",
                  background: "rgba(15, 23, 42, 0.7)",
                  padding: "14px 20px",
                  borderRadius: "14px",
                  fontWeight: 700,
                }}
              >
                Voir mon expérience
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  border: "1px solid #334155",
                  background: "rgba(15, 23, 42, 0.7)",
                  padding: "14px 20px",
                  borderRadius: "14px",
                  fontWeight: 700,
                }}
              >
                Télécharger mon CV
              </a>
            </div>
          </div>

          {/* PHOTO AJUSTÉE */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <div
              style={{
                width: "min(72vw, 360px)",
                height: "min(72vw, 360px)",
                borderRadius: "50%",
                padding: "6px",
                background:
                  "linear-gradient(135deg, rgba(56,189,248,1), rgba(14,165,233,0.35))",
                boxShadow: "0 0 55px rgba(56,189,248,0.32)",
              }}
            >
              <img
                src="/preview.png"
                alt="Alpha Oumar Leno"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                  background: "#dbeafe",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* INFOS RAPIDES */}
      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 20px 18px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {[
            ["Spécialité", "Salesforce, Cloud, DevOps & IoT"],
            ["Focus", "Automatisation, Data Model, CI/CD"],
            ["Environnement", "AWS,Azure, Docker, React, Flutter"],
            ["Localisation", "Rabat / Casablanca"],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                background: "rgba(15, 23, 42, 0.55)",
                border: "1px solid rgba(148,163,184,0.12)",
                borderRadius: "20px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  color: "#7dd3fc",
                  fontSize: "14px",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                {label}
              </div>
              <div
                style={{
                  color: "#f8fafc",
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: 1.4,
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "28px 20px",
        }}
      >
        <div
          style={{
            background: "rgba(15, 23, 42, 0.48)",
            border: "1px solid rgba(148, 163, 184, 0.12)",
            borderRadius: "24px",
            padding: "28px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 6vw, 34px)",
              margin: "0 0 12px",
              fontWeight: 800,
            }}
          >
            Compétences clés
          </h2>
          <p
            style={{
              color: "#cbd5e1",
              fontSize: "17px",
              lineHeight: 1.7,
              marginBottom: "22px",
            }}
          >
            Un profil hybride entre développement métier, cloud, automatisation
            et systèmes connectés.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {skills.map((skill) => (
              <span
                key={skill}
                style={{
                  padding: "12px 16px",
                  borderRadius: "999px",
                  border: "1px solid #334155",
                  background: "rgba(2, 6, 23, 0.75)",
                  color: "#e2e8f0",
                  fontWeight: 600,
                  fontSize: "15px",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "28px 20px",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 6vw, 34px)",
              margin: "0 0 12px",
              fontWeight: 800,
            }}
          >
            Expérience
          </h2>
          <p
            style={{
              color: "#cbd5e1",
              fontSize: "17px",
              lineHeight: 1.7,
              maxWidth: "800px",
            }}
          >
            Une expérience orientée solutions métier, développement Salesforce,
            infrastructure et sécurité.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {experiences.map((exp) => (
            <div
              key={exp.title}
              style={{
                background: "rgba(15, 23, 42, 0.6)",
                border: "1px solid rgba(148, 163, 184, 0.12)",
                borderRadius: "22px",
                padding: "24px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
              }}
            >
              <div
                style={{
                  color: "#7dd3fc",
                  fontSize: "14px",
                  fontWeight: 700,
                  marginBottom: "10px",
                }}
              >
                Expérience professionnelle
              </div>

              <h3
                style={{
                  fontSize: "clamp(22px, 5vw, 24px)",
                  margin: "0 0 8px",
                  fontWeight: 800,
                }}
              >
                {exp.title}
              </h3>

              <div
                style={{
                  color: "#cbd5e1",
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "14px",
                }}
              >
                {exp.company}
              </div>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: 1.75,
                  fontSize: "16px",
                }}
              >
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "28px 20px",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 6vw, 34px)",
              margin: "0 0 12px",
              fontWeight: 800,
            }}
          >
            Projets stratégiques
          </h2>
          <p
            style={{
              color: "#cbd5e1",
              fontSize: "17px",
              lineHeight: 1.7,
              maxWidth: "800px",
            }}
          >
            Des réalisations concrètes illustrant mon positionnement sur
            Salesforce, le cloud, l’automatisation et l’IoT.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              style={{
                background: "rgba(15, 23, 42, 0.6)",
                border: "1px solid rgba(148, 163, 184, 0.12)",
                borderRadius: "22px",
                padding: "24px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  marginBottom: "14px",
                  padding: "7px 12px",
                  borderRadius: "999px",
                  background: "rgba(56, 189, 248, 0.12)",
                  color: "#7dd3fc",
                  border: "1px solid rgba(56,189,248,0.2)",
                  fontSize: "13px",
                  fontWeight: 700,
                }}
              >
                {project.category}
              </div>

              <h3
                style={{
                  fontSize: "22px",
                  margin: "0 0 12px",
                  lineHeight: 1.35,
                  fontWeight: 800,
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: 1.75,
                  fontSize: "16px",
                }}
              >
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "28px 20px 60px",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(14,165,233,0.12), rgba(15,23,42,0.85))",
            border: "1px solid rgba(56, 189, 248, 0.16)",
            borderRadius: "26px",
            padding: "32px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 6vw, 34px)",
              margin: "0 0 14px",
              fontWeight: 800,
            }}
          >
            Contact
          </h2>

          <p
            style={{
              color: "#e2e8f0",
              fontSize: "17px",
              lineHeight: 1.8,
              maxWidth: "780px",
              marginBottom: "22px",
            }}
          >
            Vous recherchez un profil capable de relier vision métier,
            architecture technique, automatisation et exécution sur Salesforce
            ou dans le cloud ? Je suis ouvert aux opportunités, collaborations
            et projets à fort impact.
          </p>

          <div style={{ display: "grid", gap: "12px" }}>
            <div style={{ color: "#f8fafc", fontSize: "17px" }}>
              GitHub :{" "}
              <a
                href="https://github.com/Alphaoumarleno"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#38bdf8" }}
              >
                github.com/Alphaoumarleno
              </a>
            </div>

            <div style={{ color: "#f8fafc", fontSize: "17px" }}>
              LinkedIn :{" "}
              <a
                href="https://www.linkedin.com/in/alpha-oumar-leno/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#38bdf8" }}
              >
                linkedin.com/in/alpha-oumar-leno
              </a>
            </div>

            <div style={{ color: "#f8fafc", fontSize: "17px" }}>
              Email :{" "}
              <a
                href="mailto:lenoalphaoumar@gmail.com"
                style={{ color: "#38bdf8" }}
              >
                lenoalphaoumar@gmail.com
              </a>
            </div>

            <div style={{ color: "#f8fafc", fontSize: "17px" }}>
              Localisation : Rabat / Casablanca
            </div>

            <div style={{ color: "#f8fafc", fontSize: "17px" }}>
              Domaine :{" "}
              <a
                href="https://alphaoumarleno.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#38bdf8" }}
              >
                alphaoumarleno.com
              </a>
            </div>

            <div style={{ marginTop: "10px" }}>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#081225",
                  background: "#38bdf8",
                  padding: "12px 18px",
                  borderRadius: "12px",
                  fontWeight: 700,
                  display: "inline-block",
                }}
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
