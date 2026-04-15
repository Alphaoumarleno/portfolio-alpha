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

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #081225 0%, #0b1324 35%, #0f172a 100%)",
        color: "#ffffff",
        fontFamily:
          "Inter, Arial, Helvetica, sans-serif",
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
              href="#contact"
              style={{
                textDecoration: "none",
                color: "#081225",
                background: "#38bdf8",
                padding: "12px 18px",
                borderRadius: "12px",
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
                href="#skills"
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
                Explorer mes compétences
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
                }}
              >
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
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
          id="contact"
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
              Localisation : Rabat / Casablanca
            </div>
            <div style={{ color: "#f8fafc", fontSize: "17px" }}>
              Email : ton-email@exemple.com
            </div>
            <div style={{ color: "#f8fafc", fontSize: "17px" }}>
              Domaine : alphaoumarleno.com
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
