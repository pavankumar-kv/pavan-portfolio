import React, { useState, useRef, useEffect } from 'react';
import { useProfile } from '../context/ProfileContext';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';

export default function TerminalWidget() {
  const { profile } = useProfile();

  const [history, setHistory] = useState([
    { type: 'system', text: 'Pavan OS (x86_64-bengaluru-linux)' },
    { type: 'system', text: 'Type "help" or select a quick command below.' },
    { type: 'input', text: 'whoami' },
    { 
      type: 'output', 
      text: `Pavan Kumar — MCA Student in Bengaluru, India.\nFocus: Red Team Pentesting & Autonomous AI Agents.\nStatus: ${profile.personal.status}` 
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
        outputText = `Commands:\n  whoami    - Background and positioning\n  skills    - Cybersecurity & AI capabilities\n  projects  - Active & planned builds\n  contact   - Direct email and profiles\n  status    - Current availability\n  clear     - Clear screen`;
        break;

      case 'whoami':
        outputText = `${profile.personal.name}\n${profile.personal.tagline}\nLocation: ${profile.personal.location}`;
        break;

      case 'skills':
        outputText = `[Cybersecurity]\n• Networking (TCP/IP, Wireshark, Nmap)\n• Linux CLI & System Administration\n• OWASP Top 10, Web Pentesting\n\n[AI & Machine Learning]\n• Python 3, Asyncio, Sockets\n• LLM APIs, LangChain, Tool-Using Agents\n\n[Development]\n• Git, JavaScript, React, SQL, Docker`;
        break;

      case 'projects':
        outputText = `1. NetProbe — Multi-threaded Network Recon Scanner\n2. AgenticSec — Autonomous Log Analyzer & CVE Advisor\n3. VulnForge — Containerized OWASP Top 10 Lab\n4. AgentX — Autonomous Subdomain Enumerator`;
        break;

      case 'contact':
        outputText = `Email:    ${profile.personal.email}\nGitHub:   ${profile.personal.socials.github}\nLinkedIn: ${profile.personal.socials.linkedin}\nLocation: ${profile.personal.location}`;
        break;

      case 'status':
        outputText = `STATUS: ${profile.personal.status} (Bengaluru / Remote)`;
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        outputText = `command not found: "${trimmed}". Type "help" for options.`;
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
    <div className="w-full max-w-xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-xl overflow-hidden font-mono text-xs text-left">
      
      {/* macOS Terminal Title Bar */}
      <div className="px-4 py-2.5 bg-zinc-900 border-b border-zinc-800/80 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
          <span className="text-zinc-400 text-xs font-medium ml-2">
            pavan@bengaluru:~
          </span>
        </div>
        <span className="text-[10px] text-zinc-500 font-mono uppercase">zsh</span>
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 h-60 overflow-y-auto space-y-2 text-zinc-300 select-text">
        {history.map((entry, idx) => (
          <div key={idx} className="leading-relaxed">
            {entry.type === 'system' && (
              <div className="text-zinc-500 text-[11px]">{entry.text}</div>
            )}

            {entry.type === 'input' && (
              <div className="flex items-center gap-2 text-zinc-100 font-medium">
                <span className="text-zinc-500">pavan@bengaluru:~$</span>
                <span>{entry.text}</span>
              </div>
            )}

            {entry.type === 'output' && (
              <div className="text-zinc-400 whitespace-pre-wrap pl-2 border-l border-zinc-700 my-1 text-[11px] sm:text-xs">
                {entry.text}
              </div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Quick Command Chips */}
      <div className="px-3.5 py-1.5 bg-zinc-900/60 border-t border-zinc-800 flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] text-zinc-500 uppercase font-semibold">Run:</span>
        {quickCommands.map(cmd => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-[11px] transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Interactive Input Prompt */}
      <form onSubmit={handleSubmit} className="p-2.5 bg-zinc-950 border-t border-zinc-800 flex items-center gap-2">
        <span className="text-zinc-400 font-semibold text-xs pl-1">
          pavan@bengaluru:~$
        </span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type command..."
          className="flex-1 bg-transparent text-zinc-100 focus:outline-none text-xs font-mono placeholder:text-zinc-600"
        />
        <button
          type="submit"
          className="p-1 rounded text-zinc-500 hover:text-zinc-200 transition-colors"
          aria-label="Submit command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>

    </div>
  );
}
