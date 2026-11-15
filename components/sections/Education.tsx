import { siteConfig } from "@/config/site";

export function Education() {
  const education = siteConfig.education;

  return (
    <section className="section education-section" id="formacion">
      <div className="wrap">
        <header className="section-head">
          <p className="eyebrow">Formación</p>
          <h2>
            Formación continua para <span className="display-accent">construir mejor.</span>
          </h2>
          <p>
            Ingeniería en Sistemas en la UMSS y aprendizaje complementario en
            herramientas y sistemas Linux.
          </p>
        </header>

        <div className="education-grid">
          <article className="education-item">
            <p className="eyebrow">En curso</p>
            <h3>{education.degree}</h3>
            <p>{education.university}</p>
            <p className="muted">
              {education.stage} · egreso previsto {education.expectedGraduation}
            </p>
          </article>

          {education.complementary.map((item) => (
            <article className="education-item education-item--secondary" key={item}>
              <p className="eyebrow">Formación complementaria</p>
              <h3>Instructor de Linux</h3>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
