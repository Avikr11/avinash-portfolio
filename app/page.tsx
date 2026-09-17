'use client';

import Image from 'next/image';
import { ArrowUpRight, Mail, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'NovaSwap',
    subtitle: 'DeFi Swap Interface',
    image: '/images/novaswap.jpeg',
    description:
      'A modern decentralized trading interface with wallet connection, token selection, live pricing and on-chain swap functionality.',
    stack: ['React', 'TypeScript', 'Wagmi', 'Viem'],
    live: 'https://novaswap.vercel.app/',
    github: 'https://github.com/Avikr11/novaswap',
  },
  {
    title: 'ERC-20 Faucet + Wallet Tracker',
    subtitle: 'Web3 Application',
    image: '/images/faucet.jpeg',
    description:
      'A Sepolia testnet application for claiming ERC-20 tokens, connecting wallets and tracking balances and transaction history.',
    stack: ['React', 'TypeScript', 'ethers.js', 'Solidity'],
    live: 'https://erc20-faucet-wallet-tracker.vercel.app/',
    github: 'https://github.com/Avikr11/erc20-faucet-wallet-tracker',
  },
  {
    title: 'CryptoPulse',
    subtitle: 'Crypto Price Dashboard',
    image: '/images/cryptopulse.jpeg',
    description:
      'A responsive cryptocurrency dashboard with live prices, market statistics, watchlists and CoinGecko API data.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'CoinGecko API'],
    live: 'https://crypto-price-dashboard-ruby.vercel.app/',
    github: 'https://github.com/Avikr11/crypto-price-dashboard',
  },
];

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Wagmi',
  'Viem',
  'ethers.js',
  'RainbowKit',
  'Git & GitHub',
  'REST APIs',
  'Responsive UI',
];

export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}
      <nav>
        <a className="brand" href="#top">
          AB<span>.</span>
        </a>

        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="navcta" href="#contact">
          Let's talk <ArrowUpRight size={16} />
        </a>
      </nav>

      {/* HERO SECTION */}
      <section id="top" className="hero">
        <div className="eyebrow">
          AVAILABLE FOR FREELANCE & REMOTE WORK
        </div>

        <h1>
          Frontend <span>Web3</span>
          <br />
          Developer.
        </h1>

        <p>
          I build modern web applications, dApps and DeFi interfaces with a
          focus on clean UI, reliable interactions and thoughtful user
          experience.
        </p>

        <div className="actions">
          <a className="primary" href="#projects">
            View my work <ArrowUpRight size={18} />
          </a>

          <a
            className="secondary"
            href="mailto:bhardwajavinash836@gmail.com"
          >
            Contact me <Mail size={17} />
          </a>
        </div>

        <div className="hero-meta">
          <span>React</span>
          <span>Next.js</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>Web3</span>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section split">
        <div>
          <div className="eyebrow">01 / ABOUT</div>

          <h2>
            Building interfaces that make complex technology feel simple.
          </h2>
        </div>

        <div>
          <p>
            I'm Avinash Bhardwaj, a Frontend Web3 Developer from India. I enjoy
            turning ideas into responsive products and connecting polished
            frontend experiences with blockchain functionality.
          </p>

          <p>
            My work spans traditional frontend development and Web3: wallet
            flows, contract interactions, transaction states, dashboards and
            DeFi interfaces.
          </p>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section">
        <div className="eyebrow">02 / SKILLS</div>

        <h2>Tools I use to build.</h2>

        <div className="skills">
          {skills.map((skill) => (
            <div className="skill" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section">
        <div className="eyebrow">03 / SELECTED WORK</div>

        <div className="section-head">
          <h2>Things I've built.</h2>

          <a
            href="https://github.com/Avikr11"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid">
          {projects.map((project) => (
            <article className="card" key={project.title}>
              <div className="shot">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>

              <div className="cardbody">
                <div className="project-sub">{project.subtitle}</div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tags">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="cardlinks">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo <ExternalLink size={15} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact">
        <div className="eyebrow">04 / CONTACT</div>

        <h2>Have a project in mind?</h2>

        <p>
          I'm open to freelance projects and remote frontend/Web3
          opportunities.
        </p>

        <a
          className="primary"
          href="mailto:bhardwajavinash836@gmail.com"
        >
          bhardwajavinash836@gmail.com <ArrowUpRight size={18} />
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <span>© 2026 Avinash Bhardwaj</span>

        <div>
          <a
            href="https://github.com/Avikr11"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://x.com/avinash_bha7755"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </div>
      </footer>
    </main>
  );
}