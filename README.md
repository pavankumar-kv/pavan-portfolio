# Pavan Kumar — Personal Portfolio & Cybersecurity + AI Hub 🛡️⚡

A modern, responsive, and playful-corporate portfolio web application built for **Pavan Kumar** (MCA Student in Bengaluru, India) positioned as a builder in **Cybersecurity (Red Team & Pentesting)** and **Autonomous AI Agents & ML Systems**.

---

## 🚀 Live Preview & Quick Start

### 1. Local Development
Make sure you have Node.js (v18+) installed. From the project directory:

```bash
# Navigate to the project folder
cd portfolio-app

# Install dependencies (if not already installed)
npm install

# Start the Vite development server
npm run dev
```

Visit **[http://localhost:5173](http://localhost:5173)** in your browser.

### 2. Building for Production
```bash
npm run build
```
This produces an optimized, static bundle inside the `dist/` directory ready to be served anywhere.

---

## 🌐 Deploying to Free Hosting (Vercel & Netlify)

### Option A: Deploy to Vercel (Recommended)
1. Push this project to your GitHub repository: `https://github.com/pavankumar-kv/portfolio`
2. Go to **[vercel.com](https://vercel.com)** and sign in with GitHub.
3. Click **"Add New Project"** and import your repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"** — your portfolio is live with a global CDN and automatic HTTPS in under 1 minute!

### Option B: Deploy to Netlify
1. Go to **[netlify.com](https://netlify.com)** and click **"Add new site"** > **"Import from Git"**.
2. Select your repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **"Deploy Site"**.

---

## 🛠️ How to Customize Your Portfolio

### 1. Live In-Browser Customizer (Fastest)
- Open the site in your browser.
- Click the **"Edit Profile"** button at the top right of the navbar.
- Change your name, bio, social links, add new projects, update skills, or export a `.json` backup file.
- Everything persists in your browser's local storage automatically.

### 2. Code Customization (`src/data/pavanProfile.js`)
All static defaults (bio, upcoming projects, learning logs, resume content, skills) are stored in a single organized data file:
[`src/data/pavanProfile.js`](./src/data/pavanProfile.js)

---

## 📝 Suggested Content Guide (Copy Options to Tweak)

### 1. Hero Headline & Subheadline Options
- **Option 1 (Current Active)**:
  - *Headline*: "Building at the Intersection of Security & AI"
  - *Subheadline*: "MCA student based in Bengaluru, India. Exploring offensive security, web pentesting, and tool-using AI agents. Fast learner with a builder's mindset, seeking high-impact internships and junior engineering roles."
- **Option 2 (Offensive Security Focus)**:
  - *Headline*: "Analyzing Systems, Finding Flaws & Building AI Defenses"
  - *Subheadline*: "MCA Student @ Bengaluru with a passion for web application pentesting, network packet analysis, and autonomous LLM workflows."
- **Option 3 (Bold Builder)**:
  - *Headline*: "Code. Exploit. Automate. Scale."
  - *Subheadline*: "Hands-on builder in Bengaluru exploring the frontiers of red-team cybersecurity and autonomous AI agents."

### 2. About Section Narrative
> *"I am an MCA student in Bengaluru, India with a strong background from my BCA. I have a deep curiosity for how systems operate, how they can be secured, and how autonomous AI agents can augment human workflows. Rather than just reading theory, I believe in hands-on building—from setting up Linux home labs and exploring penetration testing to prototyping LLM-powered tools. I am actively seeking early-career opportunities where I can solve real problems, contribute to security and AI projects, and learn at lightning speed."*

### 3. Builder Projects Roadmap
1. **NetProbe**: Fast multi-threaded network reconnaissance port scanner in Python (`Asyncio`, `Sockets`, `CLI Rich`).
2. **AgenticSec**: Autonomous LLM security assistant for parsing logs, detecting anomalies, and referencing CVE playbooks (`Python`, `LangChain`, `LLM APIs`).
3. **VulnForge Lab**: Dockerized OWASP Top 10 practice playground with exploit walkthroughs (`Docker`, `Node.js`, `Express`, `SQLite`).
4. **AgentX Recon**: Passive OSINT and subdomain enumerator powered by heuristic AI (`Python`, `FastAPI`, `React`).

---

## 📄 Integrated Resume Generator
- Click the **"Resume"** button in the navbar or **"Print Resume"** in the Hero section.
- An interactive, clean recruiter-friendly resume modal will appear.
- Click **"Print / Save as PDF"** to produce an executive, single-sheet PDF printout.

---

## 📬 Contact & Links
- **GitHub**: [github.com/pavankumar-kv/pavankumar-kv](https://github.com/pavankumar-kv/pavankumar-kv)
- **LinkedIn**: [linkedin.com/in/pavan-kumar-kv-0b321832b](https://www.linkedin.com/in/pavan-kumar-kv-0b321832b)
- **Email**: [kv.pavankumar14@gmail.com](mailto:kv.pavankumar14@gmail.com)
- **Location**: Bengaluru, Karnataka, India
