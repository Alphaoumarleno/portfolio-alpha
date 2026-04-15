export default function Home() {
  const skills = [
    "Salesforce",
    "Apex",
    "LWC",
    "Flow Builder",
    "Data Modeling",
    "AWS",
    "Docker",
    "CI/CD",
    "DevOps",
    "IoT",
    "ESP32",
    "Flutter",
    "React",
    "Next.js",
    "Python",
    "SQL",
    "Cybersécurité",
    "Analyse de données",
  ];

  const experiences = [
    {
      role: "Consultant Développeur Salesforce",
      company: "D&A Technologies",
      period: "Expérience professionnelle",
      description:
        "Participation à la conception et à l’implémentation de solutions Salesforce orientées métier, avec modélisation des données, développement Apex et Lightning Web Components, automatisation via Flow et optimisation des processus.",
      points: [
        "Conception de solutions Salesforce adaptées aux besoins métiers",
        "Développement Apex et Lightning Web Components",
        "Automatisation des processus avec Flow Builder",
        "Travail sur des cas concrets autour des Certificats d’Économies d’Énergie (CEE)",
      ],
    },
    {
      role: "Responsable IT / Réseau & Sécurité",
      company: "Administration / Formation",
      period: "Expérience professionnelle",
      description:
        "Gestion des infrastructures, administration réseau, accompagnement technique, sécurité des systèmes d’information et support aux équipes dans un environnement opérationnel.",
      points: [
        "Administration d’infrastructures réseau et systèmes",
        "Gestion de la sécurité informatique",
        "Support technique et accompagnement des utilisateurs",
        "Supervision d’environnements techniques",
      ],
    },
  ];

  const projects = [
    {
      title: "Plateforme CEE sur Salesforce",
      category: "Salesforce / PFE",
      description:
        "Conception et implémentation d’une plateforme de gestion des Certificats d’Économies d’Énergie avec structuration fonctionnelle, modélisation des données, automatisation métier, parcours utilisateurs et optimisation des processus.",
      stack: "Salesforce, Apex, LWC, Flow, Data Model",
    },
    {
      title: "Système de surveillance de la qualité de l’air",
      category: "IoT / Cloud",
      description:
        "Développement d’une solution connectée avec ESP32, capteurs, application mobile Flutter, backend API et tableau de bord pour le suivi des données environnementales.",
      stack: "ESP32, Flutter, API, Dashboard, IoT",
    },
    {
      title: "Architecture microservices sur AWS",
      category: "Cloud / DevOps",
      description:
        "Mise en œuvre d’une architecture microservices avec Docker, ECS, CodeDeploy, CodePipeline et bonnes pratiques CI/CD pour industrialiser les déploiements.",
      stack: "AWS, Docker, ECS, CodeDeploy, CodePipeline",
    },
    {
      title: "Déploiement et personnalisation Moodle",
      category: "LMS / Infrastructure",
      description:
        "Installation, configuration et personnalisation d’une plateforme Moodle sur VPS avec Nginx, MariaDB, PHP-FPM et optimisation de l’environnement technique.",
      stack: "Moodle, VPS, Nginx, MariaDB, PHP-FPM",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #081225 0%, #0b1324 35%, #0f172a 100%)",
        color: "#ffffff",
        fontFamily: "Inter, Arial, Helvetica, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "40px 24px 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          <div>
            <div
              style={{
                color: "#38bdf8",
                fontWeight: 700,
                fontSize: "15px",
                marginBottom: "8px",
                letterSpacing: "0.5px",
              }}
            >
              PORTFOLIO PROFESSIONNEL
            </div>
            <div style={{ color: "#94a3b8", fontSize: "15px" }}>
              Alpha Oumar Leno • Cloud • Salesforce • IoT • DevOps
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="https://github.com/Alphaoumarleno"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "#fff",
                border: "1px solid #334155",
                padding: "12px 18px",
                borderRadius: "12px",
                background: "rgba(15, 23, 42, 0.7)",
                fontWeight: 600,
              }}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/alpha-oumar-leno/"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "#fff",
                border: "1px solid #334155",
                padding: "12px 18px",
                borderRadius: "12px",
                background: "rgba(15, 23, 42, 0.7)",
                fontWeight: 600,
              }}
            >
              LinkedIn
            </a>

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
              }}
            >
              Télécharger mon CV
            </a>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 0.9fr",
            gap: "28px",
          }}
        >
          <div
            style={{
              background: "rgba(15, 23, 42, 0.55)",
              border: "1px solid rgba(148, 163, 184, 0.15)",
              borderRadius: "24px",
              padding: "32px",
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
                marginBottom: "20px",
                fontWeight: 600,
              }}
            >
              Ingénieur Cloud & IoT • Développeur Salesforce
            </div>

            <h1
              style={{
                fontSize: "clamp(42px, 7vw, 72px)",
                lineHeight: 1.05,
                margin: "0 0 18px",
                fontWeight: 800,
              }}
            >
              Alpha Oumar Leno
            </h1>

            <p
              style={{
                fontSize: "clamp(18px, 2.3vw, 26px)",
                color: "#cbd5e1",
                marginBottom: "24px",
                lineHeight: 1.5,
              }}
            >
              Je conçois des solutions techniques à forte valeur ajoutée
              combinant <span style={{ color: "#38bdf8" }}>Salesforce</span>,
              <span style={{ color: "#38bdf8" }}> Cloud</span>,
              <span style={{ color: "#38bdf8" }}> IoT</span> et
              <span style={{ color: "#38bdf8" }}> DevOps</span>.
            </p>

            <p
              style={{
                fontSize: "18px",
                color: "#e2e8f0",
                lineHeight: 1.8,
                maxWidth: "760px",
                marginBottom: "28px",
              }}
            >
              Actuellement en formation en Ingénierie des Systèmes Ubiquitaires
              et Distribués à l’INPT Rabat, je développe des plateformes métier,
              des systèmes connectés et des architectures cloud avec une forte
              orientation automatisation, fiabilité et impact opérationnel.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href="#projects"
                style={{
                  textDecoration: "none",
                  color: "#081225",
                  background: "#38bdf8",
                  padding: "14px 22px",
                  borderRadius: "14px",
                  fontWeight: 700,
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
                  padding: "14px 22px",
                  borderRadius: "14px",
                  fontWeight: 700,
                }}
              >
                Voir mon expérience
              </a>

              <a
                href="#contact"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  border: "1px solid #334155",
                  background: "rgba(15, 23, 42, 0.7)",
                  padding: "14px 22px",
                  borderRadius: "14px",
                  fontWeight: 700,
                }}
              >
                Me contacter
              </a>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: "18px",
            }}
          >
            {[
              ["Spécialité", "Salesforce, Cloud & IoT"],
              ["Focus", "Automatisation, Data Model, CI/CD"],
              ["Environnement", "AWS, Docker, React, Flutter"],
              ["Localisation", "Rabat / Casablanca"],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  background: "rgba(15, 23, 42, 0.55)",
                  border: "1px solid rgba(148, 163, 184, 0.15)",
                  borderRadius: "20px",
                  padding: "22px",
                }}
              >
                <div
                  style={{
                    color: "#7dd3fc",
                    fontSize: "14px",
                    fontWeight: 700,
                    marginBottom: "8px",
                    letterSpacing: "0.4px",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    color: "#f8fafc",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "28px 24px",
        }}
      >
        <div
          style={{
            background: "rgba(15, 23, 42, 0.48)",
            border: "1px solid rgba(148, 163, 184, 0.12)",
            borderRadius: "24px",
            padding: "30px",
          }}
        >
          <h2 style={{ fontSize: "34px", margin: "0 0 12px", fontWeight: 800 }}>
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

      <section
        id="experience"
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "28px 24px",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "34px", margin: "0 0 12px", fontWeight: 800 }}>
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

        <div style={{ display: "grid", gap: "20px" }}>
          {experiences.map((exp) => (
            <div
              key={exp.role}
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
                {exp.period}
              </div>

              <h3
                style={{
                  fontSize: "24px",
                  margin: "0 0 8px",
                  fontWeight: 800,
                }}
              >
                {exp.role}
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
                  marginBottom: "16px",
                }}
              >
                {exp.description}
              </p>

              <ul
                style={{
                  margin: 0,
                  paddingLeft: "20px",
                  color: "#e2e8f0",
                  lineHeight: 1.9,
                }}
              >
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "28px 24px",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "34px", margin: "0 0 12px", fontWeight: 800 }}>
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
                  marginBottom: "14px",
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  color: "#94a3b8",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {project.stack}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "28px 24px 60px",
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
          <h2 style={{ fontSize: "34px", margin: "0 0 14px", fontWeight: 800 }}>
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
              Email :{" "}
              <a href="mailto:lenoalphaoumar@gmail.com" style={{ color: "#38bdf8" }}>
                lenoalphaoumar@gmail.com
              </a>
            </div>

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
          </div>
        </div>
      </section>
    </main>
  );
}
