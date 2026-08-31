import React, { useState, useRef, useEffect } from 'react';
import { useProfile } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft } from 'lucide-react';

export default function TerminalWidget() {
  const { profile } = useProfile();
  const { accent } = useTheme();

  const [history, setHistory] = useState([
    { type: 'system', text: 'Pavan OS v2.4 (x86_64-bengaluru-linux)' },
    { type: 'system', text: 'Type "help" or click a quick command below to inspect system info.' },
    { type: 'input', text: 'whoami' },
    { 
      type: 'output', 
      text: `Pavan Kumar — MCA Student & Builder in Bengaluru.\nFocus: Red Team Pentesting & Autonomous AI Agents.\nStatus: ${profile.personal.status}` 
    }
  ]);
  
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newEntry = { type: 'input', text: cmd };

    if (!trimmed) {
      setHistory(prev => [...prev, newEntry]);
      return;
    }

    let outputText = '';

    switch (trimmed) {
      case 'help':
        outputText = `Available Commands:\n  whoami    - Display bio & current positioning\n  skills    - List cybersecurity & AI technical stack\n  projects  - View active & upcoming builds\n  contact   - Display email, GitHub & LinkedIn links\n  status    - Check current internship availability\n  clear     - Clear the terminal screen`;
        break;

      case 'whoami':
        outputText = `${profile.personal.name} | ${profile.personal.tagline}\nLocation: ${profile.personal.location}\nBio: ${profile.personal.bio}`;
        break;

      case 'skills':
        outputText = `[Cybersecurity]\n• Networking (TCP/IP, Wireshark, Nmap)\n• Linux Internals, CLI & Bash\n• OWASP Top 10, Burp Suite, Web Security\n\n[AI & Machine Learning]\n• Python 3, Asyncio, Socket Programming\n• LLM APIs (OpenAI, Gemini), LangChain\n• Tool-Using Autonomous AI Agents\n\n[Dev & Tools]\n• Git, GitHub, JavaScript/React, SQL, Docker`;
        break;

      case 'projects':
        outputText = `Active Builds:\n1. NetProbe — Multi-threaded Async Network Port Scanner\n2. AgenticSec — Autonomous Security Log Analyzer & CVE Advisor\n3. VulnForge — Containerized OWASP Top 10 Practice Lab\n4. AgentX — Autonomous Subdomain & OSINT Enumerator`;
        break;

      case 'contact':
        outputText = `Email:    ${profile.personal.email}\nGitHub:   ${profile.personal.socials.github}\nLinkedIn: ${profile.personal.socials.linkedin}\nLocation: ${profile.personal.location}`;
        break;

      case 'status':
        outputText = `[STATUS]: 🟢 ${profile.personal.status}\nTarget: Fast-paced startups & security product teams in Bengaluru / Remote.`;
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'sudo':
      case 'sudo su':
        outputText = `permission granted: Welcome, root. Pavan is ready to build impactful security & AI systems! 🚀`;
        break;

      default:
        outputText = `command not found: "${trimmed}". Type "help" to see available options.`;
    }

    setHistory(prev => [...prev, newEntry, { type: 'output', text: outputText }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleCommand(inputVal);
    setInputVal('');
  };

  const quickCommands = ['whoami', 'skills', 'projects', 'contact', 'status', 'clear'];

  return (
    <div className="w-full max-w-2xl rounded-3xl bg-[#090d16]/95 dark:bg-[#070a12]/95 border border-emerald-500/20 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm backdrop-blur-xl">
      
      {/* Terminal Title Bar */}
      <div className="px-4 py-3 bg-[#0d1322] border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="text-gray-400 text-xs font-semibold ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
            pavan@bengaluru:~ (zsh)
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-emerald-400/80 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          ACTIVE
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 sm:p-5 h-64 sm:h-72 overflow-y-auto space-y-2.5 text-left text-gray-300 select-text">
        {history.map((entry, idx) => (
          <div key={idx} className="leading-relaxed">
            {entry.type === 'system' && (
              <div className="text-gray-500 italic">{entry.text}</div>
            )}

            {entry.type === 'input' && (
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <span className="text-gray-500">pavan@bengaluru:~$</span>
                <span>{entry.text}</span>
              </div>
            )}

            {entry.type === 'output' && (
              <div className="text-cyan-300/90 whitespace-pre-wrap pl-2 border-l-2 border-emerald-500/30 my-1">
                {entry.text}
              </div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Quick Command Chips */}
      <div className="px-4 py-2 bg-[#0d1322]/80 border-t border-gray-800/80 flex flex-wrap items-center gap-1.5">
        <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mr-1">Run:</span>
        {quickCommands.map(cmd => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 rounded-md bg-gray-800/80 hover:bg-emerald-950/80 text-gray-300 hover:text-emerald-300 border border-gray-700/60 hover:border-emerald-500/50 text-xs transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Interactive Input Prompt */}
      <form onSubmit={handleSubmit} className="p-3 bg-[#0a0f1c] border-t border-gray-800 flex items-center gap-2">
        <span className="text-emerald-400 font-bold text-xs sm:text-sm pl-2 whitespace-nowrap">
          pavan@bengaluru:~$
        </span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type command (e.g. skills, projects)..."
          className="flex-1 bg-transparent text-white focus:outline-none text-xs sm:text-sm font-mono placeholder:text-gray-600"
        />
        <button
          type="submit"
          className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
          aria-label="Submit command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>

    </div>
  );
}
