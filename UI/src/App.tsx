

import './App.css';
import { NAME, SUBTITLE, QUICK_INFO, CONTACT, EXPERTISE, PROJECTS, FOOTER_COPY, SOCIAL_LINKS, MESSAGE_LINK } from './constants';

// Compute skills used in more than one project, then show them in Technical Skills
const skillCounts = new Map<string, number>();
PROJECTS.forEach((p) => new Set(p.techs).forEach((t) => skillCounts.set(t, (skillCounts.get(t) || 0) + 1)));
const technicalSkills = Array.from(skillCounts.entries()).filter(([, c]) => c > 1).map(([s]) => s).sort();
const technicalSkillsSet = new Set(technicalSkills);

function App() {
  return (
    <div className="main-bg">
      <main className="portfolio-centered">
        <header className="hero-header">
          <div className="hero-left">
            <h1>{NAME}</h1>
            <p className="subtitle">{SUBTITLE}</p>
          </div>
        </header>

        <div className="content-grid">
          <div className="main-left">
            <section id="about" className="section">
              <div className="section-row">
                <div className="col-left">
                  <h2>About</h2>
                  <p>
                    I am a full-stack developer specializing in enterprise integration and modern web
                    applications. I work with Azure Integration Services, .NET, SQL Server, and front-end
                    frameworks like React and Angular to build reliable, scalable, and maintainable solutions.
                  </p>
                </div>
              </div>
            </section>

            <section id="skills" className="section">
              <div className="section-row">
                <div className="col-left">
                  <h2>Technical Skills</h2>
                  <p>Core competencies and technologies used across multiple projects.</p>
                  <ul className="skills-list">
                    {technicalSkills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="projects" className="section">
              <div className="section-row">
                <div className="col-left">
                  <h2>Projects</h2>
                  <div className="projects-list">
                    {PROJECTS.map((p) => {
                      const visibleTechs = p.techs.filter((t) => !technicalSkillsSet.has(t));
                      return (
                        <article className="project" key={p.title}>
                          <h3>{p.title}</h3>
                          <p className="meta">{p.meta}</p>
                          <p className="techs">
                            {visibleTechs.map((t) => (
                              <span className="tech-badge" key={t}>{t}</span>
                            ))}
                          </p>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside className="sidebar-right">
              <div className="card">
                <h3>Contact</h3>
                <p style={{margin:'.25rem 0'}}><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
                <p style={{margin:'.25rem 0'}}>{CONTACT.phone}</p>
                <div style={{marginTop:'.5rem'}}>
                  <a className="btn" href={MESSAGE_LINK}>Message</a>
                </div>
              </div>

              <div className="card">
                <h3>Quick Info</h3>
                <p>{QUICK_INFO}</p>
                <div className="profile-actions">
                  <a className="btn" href="#projects">View Projects</a>
                </div>
              </div>

              <div className="card">
                <h3>Expertise</h3>
                <ul className="mini-list">
                  {EXPERTISE.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
          </aside>
        </div>
      </main>
      <footer className="site-footer sticky">
          <div className="footer-inner">
            <div className="footer-links">
              {SOCIAL_LINKS.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="social" aria-label={s.aria}>
                  {s.name === 'GitHub' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0.297c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.743.084-.728.084-.728 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.932 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.874.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.806 5.624-5.479 5.921.43.372.813 1.102.813 2.222 0 1.606-.015 2.903-.015 3.295 0 .32.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  ) : s.name === 'LinkedIn' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm8 0h4.8v2.3h.1C13.57 9.09 15.28 8 17.5 8 22.08 8 23 11.01 23 14.92V24h-5v-8.1c0-1.93-.03-4.41-2.69-4.41-2.69 0-3.1 2.1-3.1 4.27V24H8V8z"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <rect width="20" height="20" rx="3" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          <div className="footer-copy">{FOOTER_COPY}</div>
        </div>
      </footer>
    </div>
  );
}

export default App;

