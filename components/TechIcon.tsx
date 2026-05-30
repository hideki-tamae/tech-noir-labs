import React from 'react';

const iconMap: { [key: string]: string } = {
  "Cursor": "/icons/cursor.svg",
  "VS Code": "/icons/vscode.svg",
  "n8n": "/icons/n8n.svg",
  "Kintone": "/icons/kintone.svg",
  "Airtable": "/icons/airtable.svg",
  "GAS": "/icons/gas.svg",
  "Ruby on Rails": "/icons/rails.svg",
  "Python": "/icons/python.svg",
  "Next.js": "/icons/nextjs.svg",
  "React.js": "/icons/react.svg",
  "TypeScript": "/icons/typescript.svg",
  "Docker": "/icons/docker.svg",
  "Vercel": "/icons/vercel.svg",
  "Render": "/icons/render.svg",
  "AWS": "/icons/aws.svg",
  "GitHub": "/icons/github.svg",
  "Ethereum": "/icons/ethereum.svg",
  "Solidity": "/icons/solidity.svg",
  "Alchemy": "/icons/alchemy.svg",
  "Reown": "/icons/reown.svg",
  "Photoshop / XD": "/icons/photoshop.svg",
  "CapCut": "/icons/capcut.svg",
  "Notion": "/icons/notion.svg"
};

export default function TechIcon({ name }: { name: string }) {
  const path = iconMap[name] || "/icons/default.svg";
  return (
    <div className="bg-[#080808] border border-white/5 h-40 flex flex-col items-center justify-center gap-4 hover:border-cyan-500/50 hover:bg-[#0a0a0a] transition-all duration-300 group cursor-default">
      <div className="w-16 h-16 bg-white/[0.02] border border-white/10 rounded-lg flex items-center justify-center p-3 group-hover:border-white/20 transition-all duration-300">
        <img src={path} alt={name} className="w-10 h-10 object-contain" />
      </div>
      <span className="text-gray-400 text-sm tracking-widest group-hover:text-white transition-colors">{name}</span>
    </div>
  );
}
