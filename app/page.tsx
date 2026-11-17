
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  ExternalLink,
  Code2,
  Blocks,
  ShieldCheck,
  Layers3,
  Cpu,
  Terminal,
  Globe2,
} from "lucide-react";

const projects = [
  {
    name: "NovaSwap",
    category: "DeFi · Frontend",
    description:
      "A decentralized ETH/USDC swapping application with wallet connectivity and on-chain interactions.",
    image: "/images/novaswap.jpeg",
    stack: ["React", "TypeScript", "Wagmi", "Viem", "RainbowKit"],
    github: "https://github.com/Avikr11/novaswap",
    live: "https://novaswap.vercel.app/",
  },
  {
    name: "AI Agent Arena",
    category: "AI · Interactive Application",
    description:
      "An interactive AI agent competition where different prediction strategies compete in Bitcoin market forecasting.",
    visual: "ai",
    stack: ["Next.js", "TypeScript", "AI Agents"],
    github: "https://github.com/Avikr11/ai-agent-arena",
    live: "https://ai-agent-arena-two.vercel.app/",
  },
  {
    name: "ERC-20 Faucet & Wallet Tracker",
    category: "Web3 · Blockchain",
    description:
      "A Sepolia testnet application for claiming ERC-20 tokens, connecting wallets and tracking balances.",
    image: "/images/faucet.jpeg",
    stack: ["React", "TypeScript", "ethers.js", "Solidity"],
    github: "https://github.com/Avikr11/erc20-faucet-wallet-tracker",
    live: "https://erc20-faucet-wallet-tracker.vercel.app/",
  },
  {
    name: "CryptoPulse",
    category: "Frontend · Dashboard",
    description:
      "A responsive cryptocurrency dashboard displaying market prices, statistics and watchlist information.",
    image: "/images/cryptopulse.jpeg",
    stack: ["React", "TypeScript", "Tailwind CSS", "CoinGecko API"],
    github: "https://github.com/Avikr11/crypto-price-dashboard",
    live: "https://crypto-price-dashboard-ruby.vercel.app/",
  },
];

const expertise = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive, accessible and polished web experiences.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    icon: Blocks,
    title: "Web3 Development",
    description:
      "Connecting frontend applications to wallets, blockchain networks and smart contracts.",
    skills: ["Wagmi", "Viem", "RainbowKit", "ethers.js", "MetaMask"],
  },
  {
    icon: ShieldCheck,
    title: "Smart Contract Development",
    description:
      "Writing, deploying and testing Ethereum smart contracts.",
    skills: ["Solidity", "Foundry", "Forge", "Anvil", "Cast"],
  },
  {
    icon: Layers3,
    title: "Blockchain Infrastructure",
    description:
      "Working with blockchain infrastructure and decentralized application integrations.",
    skills: ["Ethereum", "Sepolia", "Chainlink VRF", "Chainlink Automation"],
  },
];

function LuckyChainVisual() {
  return (
    <div className="project-visual lucky-visual">
      <div className="visual-top">
        <span className="visual-logo">L<span>·</span> LUCKYCHAIN</span>
        <span className="visual-network">● ETHEREUM SEPOLIA</span>
      </div>
      <div className="lucky-center">
        <span className="visual-kicker">DECENTRALIZED LOTTERY</span>
        <div className="lucky-orbit">
          <div className="lucky-circle">L</div>
        </div>
        <h3>Luck meets blockchain.</h3>
        <p>Transparent. Decentralized. Verifiable.</p>
      </div>
      <div className="visual-stats">
        <div><span>PROTOCOL</span><strong>Ethereum</strong></div>
        <div><span>RANDOMNESS</span><strong>Chainlink VRF</strong></div>
        <div><span>CONTRACT</span><strong>Solidity</strong></div>
      </div>
    </div>
  );
}

function FundMeVisual() {
  return (
    <div className="project-visual fund-visual">
      <div className="visual-top">
        <span className="visual-logo">F<span>·</span> FUNDME</span>
        <span className="visual-network">SMART CONTRACT</span>
      </div>
      <div className="fund-center">
        <div className="fund-icon"><ShieldCheck size={34} /></div>
        <span className="visual-kicker">DECENTRALIZED CROWDFUNDING</span>
        <h3>Fund ideas.<br />Build the future.</h3>
        <div className="fund-progress">
          <div><span>SMART CONTRACT</span><span>ETH / USD</span></div>
          <div className="progress-line"><span /></div>
          <div><span>Solidity + Foundry</span><span>Price Feeds</span></div>
        </div>
      </div>
    </div>
  );
}

function AgentVisual() {
  return (
    <div className="project-visual agent-visual">
      <div className="visual-top">
        <span className="visual-logo">AI <span>·</span> ARENA</span>
        <span className="visual-network">PREDICTION LAB</span>
      </div>
      <div className="agent-center">
        <span className="visual-kicker">BTC MARKET PREDICTION</span>
        <div className="agent-cards">
          <div><span>01</span><strong>Agent Alpha</strong><small>Prediction strategy</small></div>
          <div><span>02</span><strong>Agent Beta</strong><small>Prediction strategy</small></div>
          <div><span>03</span><strong>Agent Gamma</strong><small>Prediction strategy</small></div>
        </div>
        <div className="agent-chart"><span>BTC / USDT</span><strong>AI COMPETITION</strong><div className="chart-line" /></div>
      </div>
    </div>
  );
}

function ProjectLinks({ live, github }: { live?: string; github: string }) {
  return (
    <div className="project-links">
      {live && (
        <a href={live} target="_blank" rel="noreferrer">
          Live demo <ExternalLink size={14} />
        </a>
      )}
      <a href={github} target="_blank" rel="noreferrer">
        Source code <Code2 size={15} />
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="brand">AK<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#work">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-contact" href="mailto:bhardwajavinash836@gmail.com">
          Let's connect <ArrowUpRight size={15} />
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" />
            OPEN TO FREELANCE & REMOTE OPPORTUNITIES
          </div>
          <div className="hero-label">HELLO, I'M AVINASH BHARDWAJ</div>
          <h1>
            Building the<br />
            <span>decentralized</span><br />
            future.
          </h1>
          <p className="hero-description">
            Web3 Frontend & Smart Contract Developer building modern
            decentralized applications, intuitive interfaces and
            blockchain-powered products.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button-primary">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a href="mailto:bhardwajavinash836@gmail.com" className="button-outline">
              Get in touch <Mail size={16} />
            </a>
          </div>
          <div className="hero-stack">
            <span>React</span><i />
            <span>Next.js</span><i />
            <span>Solidity</span><i />
            <span>Foundry</span>
          </div>
        </div>

        <div className="hero-code">
          <div className="code-header">
            <div><i /><i /><i /></div>
            <span>developer.sol</span>
            <span className="code-live">BUILDING</span>
          </div>
          <div className="code-body">
            <div className="code-line"><span>01</span><code><b>const</b> developer = {"{"}</code></div>
            <div className="code-line"><span>02</span><code>  name: <em>"Avinash Bhardwaj"</em>,</code></div>
            <div className="code-line"><span>03</span><code>  focus: <em>"Web3 Development"</em>,</code></div>
            <div className="code-line"><span>04</span><code>  frontend: [</code></div>
            <div className="code-line"><span>05</span><code>    <em>"React"</em>, <em>"Next.js"</em>,</code></div>
            <div className="code-line"><span>06</span><code>    <em>"TypeScript"</em></code></div>
            <div className="code-line"><span>07</span><code>  ],</code></div>
            <div className="code-line"><span>08</span><code>  blockchain: [</code></div>
            <div className="code-line"><span>09</span><code>    <em>"Solidity"</em>, <em>"Foundry"</em>,</code></div>
            <div className="code-line"><span>10</span><code>    <em>"Ethereum"</em>, <em>"Chainlink"</em></code></div>
            <div className="code-line"><span>11</span><code>  ],</code></div>
            <div className="code-line"><span>12</span><code>  mindset: <em>"Build. Test. Ship."</em></code></div>
            <div className="code-line"><span>13</span><code>{"}"};</code></div>
          </div>
          <div className="code-footer">
            <span><span className="status-dot" /> Available for new projects</span>
            <span>ETHEREUM ECOSYSTEM</span>
          </div>
        </div>

        <a className="scroll-indicator" href="#about">
          <ArrowDown size={15} /> SCROLL TO EXPLORE
        </a>
      </section>

      <section className="intro-section section" id="about">
        <div className="section-index">01 / ABOUT</div>
        <div className="intro-grid">
          <h2>
            I turn complex<br />
            technology into<br />
            <span>real products.</span>
          </h2>
          <div className="intro-content">
            <p>
              I'm Avinash Bhardwaj, a developer focused on building modern
              frontend experiences and decentralized applications.
            </p>
            <p>
              My work combines React and Next.js interfaces with blockchain
              integrations and Solidity smart contracts. I enjoy building
              products from the user interface to the on-chain logic,
              with a focus on usability, reliability and transparent
              interactions.
            </p>
            <a href="https://github.com/Avikr11" target="_blank" rel="noreferrer" className="text-link">
              Explore my GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="expertise-section section" id="expertise">
        <div className="section-index">02 / TECHNICAL EXPERTISE</div>
        <div className="section-heading">
          <h2>What I bring<br /><span>to the table.</span></h2>
          <p>
            The tools and technologies I use to design, develop and
            integrate blockchain-powered applications.
          </p>
        </div>
        <div className="expertise-grid">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <article className="expertise-card" key={item.title}>
                <div className="expertise-top">
                  <div className="expertise-icon"><Icon size={21} /></div>
                  <span>0{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="expertise-tags">
                  {item.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="work-section section" id="work">
        <div className="section-index">03 / SELECTED WORK</div>
        <div className="section-heading work-heading">
          <h2>Built with purpose.<br /><span>Designed to work.</span></h2>
          <a className="text-link" href="https://github.com/Avikr11" target="_blank" rel="noreferrer">
            All repositories <ArrowUpRight size={16} />
          </a>
        </div>

        <article className="featured-project">
          <div className="featured-image"><LuckyChainVisual /></div>
          <div className="featured-content">
            <div className="project-overline"><span>01</span> FEATURED PROJECT · SMART CONTRACTS</div>
            <h3>LuckyChain<span>.</span></h3>
            <p>
              A decentralized lottery built on Ethereum. Chainlink VRF
              provides verifiable randomness, while smart contract logic
              manages entries, round states and winner selection.
            </p>
            <div className="project-tags">
              {["Solidity", "Foundry", "Chainlink VRF", "Automation", "Next.js", "Wagmi"].map(t => <span key={t}>{t}</span>)}
            </div>
            <ProjectLinks live="https://lucky-chain-cyan.vercel.app/" github="https://github.com/Avikr11/lucky-chain" />
          </div>
        </article>

        <article className="featured-project reverse">
          <div className="featured-image"><FundMeVisual /></div>
          <div className="featured-content">
            <div className="project-overline"><span>02</span> FEATURED PROJECT · SMART CONTRACTS</div>
            <h3>FundMe<span>.</span></h3>
            <p>
              A Solidity crowdfunding smart contract with ETH contributions,
              minimum USD funding requirements using price feeds, funder
              tracking and owner-controlled withdrawals.
            </p>
            <div className="project-tags">
              {["Solidity", "Foundry", "Forge", "Anvil", "Price Feeds"].map(t => <span key={t}>{t}</span>)}
            </div>
            <ProjectLinks github="https://github.com/Avikr11/foundry-fund-me" />
          </div>
        </article>

        <div className="other-projects-heading">
          <div><span>MORE EXPLORATIONS</span><h3>Other things I've built.</h3></div>
          <span>03 — 06 / PROJECTS</span>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <div className="project-card-image">
                {"image" in project && project.image ? (
                  <Image src={project.image} alt={`${project.name} project preview`} fill sizes="(max-width: 700px) 100vw, 50vw" />
                ) : (
                  <AgentVisual />
                )}
              </div>
              <div className="project-card-body">
                <div className="project-card-meta">
                  <span>{project.category}</span><span>0{index + 3}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.stack.map(t => <span key={t}>{t}</span>)}
                </div>
                <ProjectLinks live={project.live} github={project.github} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="approach-section section">
        <div className="section-index">04 / HOW I WORK</div>
        <div className="approach-grid">
          <div>
            <h2>Thoughtful code.<br /><span>Reliable experiences.</span></h2>
            <p>
              I focus on building applications that are not only visually
              polished but also functional, testable and easy to use.
            </p>
          </div>
          <div className="approach-list">
            <div><Terminal /><span><strong>Build with clarity</strong><small>Readable code and maintainable architecture.</small></span></div>
            <div><ShieldCheck /><span><strong>Test the logic</strong><small>Validate smart contract behavior with automated tests.</small></span></div>
            <div><Globe2 /><span><strong>Think about the user</strong><small>Clear interactions, responsive layouts and useful feedback.</small></span></div>
            <div><Cpu /><span><strong>Keep learning</strong><small>Continuously exploring Ethereum, DeFi and smart contract security.</small></span></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-index">05 / GET IN TOUCH</div>
        <span className="contact-kicker">HAVE AN IDEA? LET'S BUILD IT.</span>
        <h2>Let's create something<br /><span>meaningful.</span></h2>
        <p>
          Open to freelance projects, collaborations and remote
          opportunities in Web3 and frontend development.
        </p>
        <a className="button-primary contact-button" href="mailto:bhardwajavinash836@gmail.com">
          Start a conversation <ArrowUpRight size={17} />
        </a>
        <a className="email-link" href="mailto:bhardwajavinash836@gmail.com">
          bhardwajavinash836@gmail.com
        </a>
      </section>

      <footer className="footer">
        <a href="#home" className="brand">AK<span>.</span></a>
        <span>© 2026 Avinash Bhardwaj. Built with purpose.</span>
        <div className="footer-links">
          <a href="https://github.com/Avikr11" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 /></a>
          <a href="https://www.linkedin.com/in/avinash-kumar-144341321/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Globe2 /></a>
          <a href="https://www.upwork.com/freelancers/~01bd201245fc87c0b8" target="_blank" rel="noreferrer" aria-label="Upwork">Upwork</a>
          <a href="https://x.com/avinash_bha7755" target="_blank" rel="noreferrer" aria-label="X">𝕏</a>
        </div>
      </footer>
    </main>
  );
}
