"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/* =========================================
  1. 専門用語ツールチップ (Terminology Tooltip)
========================================= */
const Term = ({ word, desc }: { word: string, desc: string }) => (
  <span className="relative group inline-block cursor-help font-medium text-cyan-100 border-b border-cyan-500/40 border-dashed hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300">
    {word}
    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-4 bg-[#050505] border border-cyan-500/30 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 text-left shadow-[0_0_20px_rgba(0,229,255,0.15)] break-words leading-relaxed whitespace-normal font-sans">
      <span className="block text-cyan-500 font-bold mb-1">{word}</span>
      {desc}
    </span>
  </span>
);

/* =========================================
  2. ネイティブ・サイバーパンク・パーティクル (依存関係ゼロ)
========================================= */
const NativeParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number, y: number, vx: number, vy: number, size: number }[] = [];
    let mouse = { x: -9999, y: -9999 };

    // 親要素に合わせてキャンバスサイズを調整
    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };
    window.addEventListener('resize', resize);
    resize();

    // パーティクルの初期化
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 1.5 + 0.5
      });
    }

    // マウス追従
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 描画ループ
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // ドットの描画
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 229, 255, 0.6)';
        ctx.fill();

        // マウスとドットの距離を計算して線を引く
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        if (distToMouse < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 229, 255, ${1 - distToMouse / 150})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        // ドット同士の距離を計算して線を引く
        particles.forEach(p2 => {
          const pdx = p.x - p2.x;
          const pdy = p.y - p2.y;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);
          if (pdist < 80) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.15 - (pdist / 80) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-[15] pointer-events-none mix-blend-screen opacity-70" />;
};

/* =========================================
  Tech Stack: 公式カラー＆プレミアムSVGマッピング
========================================= */
const techData: Record<string, { url?: string; svg?: React.ReactNode; invert?: boolean }> = {
  "Cursor": { url: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cursor.svg", invert: true },
  "VS Code": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  "OpenAI": { url: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg", invert: true },
  "Anthropic": { url: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/anthropic.svg", invert: true },
  "Gemini": { svg: <svg viewBox="0 0 24 24" className="w-10 h-10"><defs><linearGradient id="geminiGlow" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FFFFFF" /><stop offset="100%" stopColor="#FFFFFF" /></linearGradient></defs><path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" fill="url(#geminiGlow)"/></svg> },
  "CrewAI": { url: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/crewai.svg", invert: true },
  "LangGraph": { url: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/langgraph.svg", invert: true },
  "n8n": { url: "https://cdn.simpleicons.org/n8n/FF6C37" },
  "Supabase": { url: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  "Dify": { url: "https://cdn.simpleicons.org/dify/1C64F2" },
  "Stripe": { url: "https://cdn.simpleicons.org/stripe/635BFF" },
  "LangChain": { url: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/langchain.svg", invert: true },
  "Ruby on Rails": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" },
  "Python": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  "Next.js": { svg: <svg viewBox="0 0 180 180" className="w-12 h-12"><circle cx="90" cy="90" r="90" fill="#000000" /><path d="M149.508 157.619L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.218 149.508 157.619Z" fill="url(#paint0_linear)"/><path d="M115.265 54H127.379V125.97H115.265V54Z" fill="#FFFFFF"/><defs><linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse"><stop stopColor="#FFFFFF"/><stop offset="1" stopColor="#FFFFFF" stopOpacity="0"/></linearGradient></defs></svg> },
  "React.js": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  "TypeScript": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  "Docker": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  "Vercel": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", invert: true },
  "Render": { url: "https://cdn.simpleicons.org/render/FFFFFF" },
  "AWS": { svg: <svg viewBox="0 0 128 128" className="w-14 h-14"><path fill="#FFFFFF" d="M36.379 53.64c0 1.56.168 2.825.465 3.75.336.926.758 1.938 1.347 3.032.207.336.293.672.293.969 0 .418-.254.84-.8 1.261l-2.653 1.77c-.379.25-.758.379-1.093.379-.422 0-.844-.211-1.266-.59a13.28 13.28 0 0 1-1.516-1.98 34.153 34.153 0 0 1-1.304-2.485c-3.282 3.875-7.41 5.813-12.38 5.813-3.535 0-6.355-1.012-8.421-3.032-2.063-2.023-3.114-4.718-3.114-8.086 0-3.578 1.262-6.484 3.833-8.671 2.566-2.192 5.976-3.286 10.316-3.286 1.43 0 2.902.125 4.46.336 1.56.211 3.161.547 4.845.926v-3.074c0-3.2-.676-5.43-1.98-6.734C26.061 32.633 23.788 32 20.546 32c-1.473 0-2.988.168-4.547.547a33.416 33.416 0 0 0-4.547 1.433c-.676.293-1.18.461-1.473.547-.296.082-.507.125-.675.125-.59 0-.883-.422-.883-1.304v-2.063c0-.676.082-1.18.293-1.476.21-.293.59-.586 1.18-.883 1.472-.758 3.242-1.39 5.304-1.895 2.063-.547 4.254-.8 6.57-.8 5.008 0 8.672 1.136 11.032 3.41 2.316 2.273 3.492 5.726 3.492 10.359v13.64Zm-17.094 6.403c1.387 0 2.82-.254 4.336-.758 1.516-.508 2.863-1.433 4-2.695.672-.8 1.18-1.684 1.43-2.695.254-1.012.422-2.23.422-3.665v-1.765a34.401 34.401 0 0 0-3.871-.719 31.816 31.816 0 0 0-3.961-.25c-2.82 0-4.883.547-6.274 1.684-1.387 1.136-2.062 2.734-2.062 4.84 0 1.98.504 3.453 1.558 4.464 1.012 1.051 2.485 1.559 4.422 1.559Zm33.809 4.547c-.758 0-1.262-.125-1.598-.422-.34-.254-.633-.84-.887-1.64L40.715 29.98c-.25-.843-.38-1.39-.38-1.687 0-.672.337-1.05 1.013-1.05h4.125c.8 0 1.347.124 1.644.421.336.25.59.84.84 1.64l7.074 27.876 6.57-27.875c.208-.84.462-1.39.797-1.64.34-.255.93-.423 1.688-.423h3.367c.8 0 1.348.125 1.684.422.336.25.633.84.8 1.64l6.653 28.212 7.285-28.211c.25-.84.547-1.39.84-1.64.336-.255-.887-.423 1.644-.423h3.914c.676 0 1.055.336 1.055 1.051 0 .21-.043.422-.086.676-.043.254-.125.59-.293 1.05L80.801 62.57c-.254.84-.547 1.387-.887 1.64-.336.255-.883.423-1.598.423h-3.62c-.801 0-1.348-.13-1.684-.422-.34-.297-.633-.844-.801-1.684l-6.527-27.16-6.485 27.117c-.21.844-.46 1.391-.8 1.684-.337.297-.926.422-1.684.422Zm54.105 1.137c-2.187 0-4.379-.254-6.484-.758-2.106-.504-3.746-1.055-4.84-1.684-.676-.379-1.137-.8-1.305-1.18a2.919 2.919 0 0 1-.254-1.18v-2.148c0-.882.336-1.304.97-1.304.25 0 .503.043.757.129.25.082.629.25 1.05.418a23.102 23.102 0 0 0 4.634 1.476c1.683.336 3.324.504 5.011.504 2.653 0 4.715-.465 6.145-1.39 1.433-.926 2.191-2.274 2.191-4 0-1.18-.379-2.145-1.136-2.946-.758-.8-2.192-1.516-4.254-2.191l-6.106-1.895c-3.074-.969-5.348-2.398-6.734-4.293-1.39-1.855-2.106-3.918-2.106-6.105 0-1.77.38-3.328 1.137-4.676a10.829 10.829 0 0 1 3.031-3.453c1.262-.965 2.696-1.684 4.38-2.188 1.683-.504 3.452-.715 5.304-.715.926 0 1.894.043 2.82.168.969.125 1.852.293 2.738.461.84.211 1.641.422 2.399.676.758.254 1.348.504 1.77.758.59.336 1.011.672 1.261 1.05.254.34.379.802.379 1.391v1.98c0 .884-.336 1.348-.969 1.348-.336 0-.883-.171-1.597-.507-2.403-1.094-5.098-1.641-8.086-1.641-2.399 0-4.293.379-5.598 1.18-1.309.797-1.98 2.02-1.98 3.746 0 1.18.421 2.191 1.261 2.988.844.8 2.403 1.602 4.633 2.316l5.98 1.895c3.032.969 5.22 2.316 6.524 4.043 1.305 1.727 1.938 3.707 1.938 5.895 0 1.812-.38 3.453-1.094 4.882-.758 1.434-1.77 2.696-3.074 3.707-1.305 1.051-2.864 1.809-4.672 2.36-1.895.586-3.875.883-6.024.883Zm0 0"/><path fill="#FF9900" d="M118 73.348c-4.432.063-9.664 1.052-13.621 3.832-1.223.883-1.012 2.062.336 1.894 4.508-.547 14.44-1.726 16.21.547 1.77 2.23-1.976 11.62-3.663 15.79-.504 1.26.59 1.769 1.726.8 7.41-6.231 9.348-19.242 7.832-21.137-.757-.925-4.388-1.79-8.82-1.726zM1.63 75.859c-.927.116-1.347 1.236-.368 2.121 16.508 14.902 38.359 23.872 62.613 23.872 17.305 0 37.43-5.43 51.281-15.66 2.273-1.688.297-4.254-2.02-3.204-15.534 6.57-32.421 9.77-47.788 9.77-22.778 0-44.8-6.273-62.653-16.633-.39-.231-.755-.304-1.064-.266z"/></svg> },
  "GitHub": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invert: true },
  "Ethereum": { url: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ethereum.svg", invert: true },
  "Solidity": { url: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/solidity.svg", invert: true },
  "Alchemy": { url: "https://cdn.simpleicons.org/alchemy/3672F8" },
  "Reown": { svg: <svg viewBox="0 0 100 100" className="w-12 h-12"><path fillRule="evenodd" clipRule="evenodd" d="M20 15C11.7157 15 5 21.7157 5 30v40c0 8.2843 6.7157 15 15 15s15-6.7157 15-15V30c0-8.2843-6.7157-15-15-15zm-3 45h6v6h-6v-6zm38-45C46.7157 15 40 21.7157 40 30v40c0 8.2843 6.7157 15 15 15h25c8.2843 0 15-6.7157 15-15V30c0-8.2843-6.7157-15-15-15H55zm4.8 55l14-40h6.4l-14 40h-6.4z" fill="#FFFFFF"/></svg> },
  "IPFS": { url: "https://cdn.simpleicons.org/ipfs/FFFFFF" },
  "Photoshop / XD": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
  "Figma": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  "WordPress": { url: "https://cdn.simpleicons.org/wordpress/FFFFFF" },
  "Notion": { url: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/notion.svg", invert: true },
  "HubSpot": { url: "https://cdn.simpleicons.org/hubspot/FF7A59" }
};

/* =========================================
  堅牢なアイコンレンダリングコンポーネント
========================================= */
const TechIcon = ({ name }: { name: string }) => {
  const data = techData[name];
  const [imgError, setImgError] = useState(false);

  if (!data) return null;

  return (
    <div className="bg-[#080808] border border-white/5 h-44 flex flex-col items-center justify-center gap-5 hover:border-cyan-500/50 hover:bg-[#0a0a0a] transition-all duration-300 group cursor-default">
      <div className="w-18 h-18 bg-white/[0.02] border border-white/10 rounded-lg group-hover:border-white/20 transition-all duration-300 flex items-center justify-center p-4">
        {data.svg ? (
          <div className="transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
            {data.svg}
          </div>
        ) : !imgError && data.url ? (
          <img 
            src={data.url} 
            alt={name} 
            onError={() => setImgError(true)}
            className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110" 
            style={data.invert ? { filter: 'brightness(0) invert(1)' } : {}}
          />
        ) : (
          <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-md border border-white/10 group-hover:border-cyan-500/50 transition-colors">
            <span className="text-white font-serif text-2xl font-light">{name.charAt(0)}</span>
          </div>
        )}
      </div>
      <span className="text-gray-400 text-base tracking-widest group-hover:text-white transition-colors text-center px-2">{name}</span>
    </div>
  );
};

export default function Home() {
  return (
    <main className="bg-[#030303] text-gray-200 font-sans selection:bg-cyan-500 selection:text-black scroll-smooth">
      
      {/* =========================================
          00. Header
      ========================================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 text-white font-light tracking-[0.25em] text-xl transition-opacity hover:opacity-80">
            <img src="/noirlogo.png" alt="Tech Noir Logo" className="h-11 w-auto drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]" />
            <span>Tech Noir</span>
          </Link>
          
          <nav className="hidden md:flex gap-8 lg:gap-12 text-sm tracking-[0.15em] text-gray-300 font-light">
            <Link href="/" className="hover:text-[#00E5FF] transition-colors duration-300">ホーム</Link>
            {/* <Link href="/#value" className="hover:text-[#00E5FF] transition-colors duration-300">提供価値</Link> */}
            <Link href="/#solutions" className="hover:text-[#00E5FF] transition-colors duration-300">サービス</Link>
            <Link href="/#stack" className="hover:text-[#00E5FF] transition-colors duration-300">技術スタック</Link>
            <Link href="/works" className="hover:text-[#00E5FF] transition-colors duration-300">実績</Link>
            <Link href="/company" className="hover:text-[#00E5FF] transition-colors duration-300">企業概要</Link>
          </nav>
          
          <Link 
            href="https://calendly.com/tamatixyan/40min" 
            target="_blank" 
            className="hidden md:inline-block px-8 py-3 bg-transparent text-[#00E5FF] text-sm tracking-widest hover:bg-[#00E5FF] hover:text-black transition-all duration-300 border border-[#00E5FF]/60 font-medium hover:shadow-[0_0_15px_rgba(0,229,255,0.5)]"
          >
            お問い合わせ
          </Link>
        </div>
      </header>

      {/* =========================================
          Hero Section
      ========================================= */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0 w-full h-full bg-black">
          <video 
            src="/Videos/hero-bg.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
        </div>

        {/* サイバーパンク・パーティクル */}
        <NativeParticles />

        <div className="relative z-20 flex flex-col items-center w-full mt-8 pointer-events-none">
          <p className="text-[#00E5FF] tracking-[0.3em] text-xs md:text-sm font-bold mb-6 drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">
            THE ARCHITECTURE ENGINE
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight font-sans mb-8 leading-tight drop-shadow-xl [font-feature-settings:'palt']">
            <span className="block mb-2 md:mb-0 md:inline">「構想」を </span>
            <span className="block md:inline">「<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-white">実装</span>」し、「利益」へ。</span>
          </h1>
          
          <p className="text-gray-300 text-sm md:text-lg font-light tracking-[0.15em] max-w-3xl mb-12 leading-relaxed">
            AIと最新のWebアーキテクチャが、あなたのビジネスから<br className="hidden md:block" />
            一切の非効率を排除し、売上を最大化する。
          </p>

          <div className="mb-12 w-full max-w-2xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 py-5 px-6 border-t border-b border-[#00E5FF]/20 bg-gradient-to-r from-transparent via-[#00E5FF]/5 to-transparent">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#00E5FF] mb-1">50+</div>
                <div className="text-[10px] md:text-xs text-gray-400 tracking-widest">社のビジネス課題を解決</div>
              </div>
              <div className="hidden md:block w-[1px] h-10 bg-[#00E5FF]/20"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#00E5FF] mb-1">40%</div>
                <div className="text-[10px] md:text-xs text-gray-400 tracking-widest">平均売上向上を実現</div>
              </div>
              <div className="hidden md:block w-[1px] h-10 bg-[#00E5FF]/20"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#00E5FF] mb-1">3ヶ月</div>
                <div className="text-[10px] md:text-xs text-gray-400 tracking-widest">実装期間で完成</div>
              </div>
            </div>
          </div>

          <div className="mb-6 pointer-events-auto">
            <Link 
              href="https://calendly.com/tamatixyan/40min" 
              target="_blank" 
              className="inline-block px-10 py-4 bg-[#00E5FF] text-black text-base md:text-lg tracking-widest font-bold hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] rounded-sm"
            >
              無料アーキテクチャ診断を予約する
            </Link>
          </div>

          <div className="mb-12 w-full max-w-2xl px-4 flex justify-center pointer-events-auto">
            <div className="space-y-2 text-xs md:text-sm text-gray-400 font-light text-left inline-block">
              <div className="flex items-start gap-3">
                <span className="text-[#00E5FF] font-mono">/</span>
                <span className="tracking-wider">15分の無料診断で、ビジネスの課題と最適なテクノロジー戦略が明確に</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#00E5FF] font-mono">/</span>
                <span className="tracking-wider">診断後、具体的な改善提案と実装ロードマップをその場で提供</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-1 opacity-70">
            <p className="text-[#00E5FF] tracking-[0.2em] text-[10px] md:text-xs font-medium uppercase">
              Web Architect
            </p>
            <p className="text-white tracking-[0.3em] text-sm md:text-base font-light">
              田前 秀樹
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-8 z-20 flex flex-col items-center gap-3 opacity-50 animate-bounce">
          <span className="text-white text-[10px] tracking-[0.4em] font-light">SCROLL</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* =========================================
          Works Snapshot (新規追加セクション)
      ========================================= */}
      <section className="relative w-full py-24 px-6 flex justify-center bg-black border-b border-white/5 overflow-hidden">
        <div className="relative z-10 max-w-7xl w-full">
          <div className="text-center mb-16">
            <p className="text-cyan-500 text-xs tracking-[0.3em] uppercase mb-4 font-semibold">Recent Works</p>
            <h2 className="text-2xl md:text-3xl text-white font-serif tracking-[0.15em] font-light">最近の実績</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Case 1 */}
            <div className="bg-[#080808] border border-white/10 p-8 hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="text-gray-500 text-xs tracking-widest mb-4">Case 1: SaaS企業</div>
              <h3 className="text-white text-xl font-serif mb-6 group-hover:text-cyan-400 transition-colors">
                Web + <Term word="AIエージェント" desc="人間の指示を待たず、自律的に思考・計画・実行を行う高度なAI。24時間稼働するデジタル労働力。" />
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-gray-400 text-sm">成果</span>
                  <span className="text-cyan-400 font-bold tracking-wider">売上 2.3倍向上</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-gray-400 text-sm">期間</span>
                  <span className="text-white font-light tracking-wider">3ヶ月で実装完了</span>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-[#080808] border border-white/10 p-8 hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="text-gray-500 text-xs tracking-widest mb-4">Case 2: EC企業</div>
              <h3 className="text-white text-xl font-serif mb-6 group-hover:text-cyan-400 transition-colors">Web + AI自動化</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-gray-400 text-sm">成果</span>
                  <span className="text-cyan-400 font-bold tracking-wider">営業工数 60%削減</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-gray-400 text-sm">期間</span>
                  <span className="text-white font-light tracking-wider">2ヶ月で実装完了</span>
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="bg-[#080808] border border-white/10 p-8 hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="text-gray-500 text-xs tracking-widest mb-4">Case 3: 金融スタートアップ</div>
              <h3 className="text-white text-xl font-serif mb-6 group-hover:text-cyan-400 transition-colors">
                <Term word="Web3" desc="ブロックチェーン技術を基盤とした分散型インターネット。改ざん耐性と透明性を持つ次世代構造。" /> 統合
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-gray-400 text-sm">成果</span>
                  <span className="text-cyan-400 font-bold tracking-wider">ユーザー数 10倍増</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-gray-400 text-sm">期間</span>
                  <span className="text-white font-light tracking-wider">4ヶ月で実装完了</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* マイクロCTA (リード獲得導線) */}
          <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link href="/works" className="text-gray-400 hover:text-cyan-400 text-sm tracking-widest transition-colors flex items-center justify-center gap-2">
              全ての実績を見る <span className="font-mono">{'>'}</span>
            </Link>
            <div className="hidden sm:block w-[1px] h-4 bg-white/20"></div>
            <Link href="https://calendly.com/tamatixyan/40min" target="_blank" className="group flex items-center gap-2 px-6 py-2 border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/20 text-cyan-400 text-sm tracking-widest transition-all duration-300">
              自社に同等の成果を実装する <span className="font-mono group-hover:translate-x-1 transition-transform">{'>'}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          01. Solutions
      ========================================= */}
      <section id="solutions" className="relative w-full py-40 px-6 flex justify-center bg-[#050505] overflow-hidden">
        <div className="absolute top-0 left-4 md:left-10 text-[20rem] md:text-[24rem] font-serif font-bold text-white/[0.02] select-none z-0 leading-none">02</div>
        
        <div className="relative z-10 max-w-7xl w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-24">
            <span className="text-cyan-500 font-serif text-4xl md:text-6xl">01.</span>
            <h2 className="text-3xl md:text-6xl tracking-[0.2em] text-white uppercase font-light">Solutions</h2>
            <div className="hidden md:block h-[1px] flex-grow bg-white/10" />
            <span className="text-gray-400 text-base md:text-lg tracking-widest whitespace-nowrap">提供価値・パッケージ</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-20">
            <div className="group relative p-[1px] bg-white/10 hover:bg-gradient-to-br hover:from-cyan-500/50 hover:to-transparent transition-all duration-700">
              <div className="bg-[#080808] p-10 lg:p-16 h-full flex flex-col">
                <h3 className="text-2xl md:text-4xl text-white font-serif mb-6 leading-tight break-keep whitespace-nowrap">デジタルプレゼンス構築</h3>
                <p className="text-cyan-600 text-xs md:text-sm tracking-[0.2em] mb-10 uppercase font-medium">Digital Foundation</p>
                <p className="text-sm md:text-base text-gray-400 font-light leading-loose flex-grow">
                  検索から成約までの「勝てる土台」の実装。高品質なWeb/LP制作、心を動かすセールスコピーライティング、精度を追求した基礎<Term word="SEO" desc="Search Engine Optimization。Google検索で上位表示させ、質の高い見込み客を継続的に自動集客する仕組み。" />を完全に統合します。
                </p>
              </div>
            </div>
            <div className="group relative p-[1px] bg-white/10 hover:bg-gradient-to-br hover:from-cyan-500/50 hover:to-transparent transition-all duration-700">
              <div className="bg-[#080808] p-10 lg:p-16 h-full flex flex-col">
                <h3 className="text-2xl md:text-4xl text-white font-serif mb-6 leading-tight break-keep whitespace-nowrap">次世代ビジネス実装</h3>
                <p className="text-cyan-600 text-xs md:text-sm tracking-[0.2em] mb-10 uppercase font-medium">Next-Gen Integration</p>
                <p className="text-sm md:text-base text-gray-400 font-light leading-loose flex-grow">
                  最先端テクノロジーによる業務の自動化と拡張。Web制作を基盤とし、<Term word="AIエージェント" desc="人間の指示を待たず、自律的に思考・計画・実行を行う高度なAI。24時間稼働するデジタル労働力。" />の導入、または<Term word="Web3" desc="ブロックチェーン技術を基盤とした分散型インターネット。改ざん耐性と透明性を持つ次世代構造。" />統合を一気通貫で実行します。
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-gray-400 text-sm md:text-lg font-light leading-loose">
              <Term word="UI/UX" desc="ユーザーインターフェース(視覚)とユーザーエクスペリエンス(体験)。顧客がシステムに触れる際の使い心地と感動を設計する技術。" />デザイン / 高度なSEO対策 / 動画・楽曲制作 / KDP出版ファネル構築など、<br className="hidden md:block"/>個別の課題に合わせた「アラカルト（モジュール）実装」も柔軟に対応可能です。
            </p>
          </div>

          {/* マイクロCTA (リード獲得導線) */}
          <div className="text-center">
            <Link href="https://calendly.com/tamatixyan/40min" target="_blank" className="group inline-flex items-center gap-2 px-8 py-3 border border-cyan-500/50 bg-cyan-500/10 hover:bg-cyan-500 hover:text-black text-cyan-400 font-medium text-sm tracking-widest transition-all duration-300">
              自社に最適なアーキテクチャを相談する <span className="font-mono group-hover:translate-x-1 transition-transform">{'>'}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          02. Phases
      ========================================= */}
      <section id="phases" className="relative w-full py-40 px-6 flex justify-center bg-[#050505] overflow-hidden">
        <div className="absolute top-0 left-4 md:left-10 text-[20rem] md:text-[24rem] font-serif font-bold text-white/[0.02] select-none z-0 leading-none">04</div>
        
        <div className="relative z-10 max-w-7xl w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-24">
            <span className="text-cyan-500 font-serif text-4xl md:text-6xl">02.</span>
            <h2 className="text-3xl md:text-6xl tracking-[0.2em] text-white uppercase font-light">Phases</h2>
            <div className="hidden md:block h-[1px] flex-grow bg-white/10" />
            <span className="text-gray-400 text-base md:text-lg tracking-widest whitespace-nowrap">開発・実装プロセス</span>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-10">
            <div className="hidden md:block absolute top-[27px] left-14 w-[calc(100%-6rem)] h-[1px] bg-white/10 z-0" />
            
            <div className="relative z-10 flex flex-col items-start group">
              <div className="w-14 h-14 rounded-full border border-white/20 bg-[#050505] flex items-center justify-center text-cyan-500 font-serif text-lg mb-6 group-hover:border-cyan-500 transition-colors">01</div>
              <h3 className="text-xl text-white mb-3 font-serif">企画・ヒアリング</h3>
              <p className="text-xs text-cyan-700 tracking-widest mb-4 uppercase">Planning & Audit</p>
              <p className="text-sm text-gray-400 leading-loose font-light pr-2">
                表面的な要望を鵜呑みにせず、ビジネスの非効率と市場ニーズを診断。AIエージェントやWeb3を組み込み戦略を立案します。
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col items-start group">
              <div className="w-14 h-14 rounded-full border border-white/20 bg-[#050505] flex items-center justify-center text-cyan-500 font-serif text-lg mb-6 group-hover:border-cyan-500 transition-colors">02</div>
              <h3 className="text-xl text-white mb-3 font-serif">要件定義・設計</h3>
              <p className="text-xs text-cyan-700 tracking-widest mb-4 uppercase">Design & Prototyping</p>
              <p className="text-sm text-gray-400 leading-loose font-light pr-2">
                戦略に基づき、顧客の心を動かすUI/UXとファネル（導線）を設計。確実に成果へ導くセールスコピーを実装します。
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-start group">
              <div className="w-14 h-14 rounded-full border border-white/20 bg-[#050505] flex items-center justify-center text-cyan-500 font-serif text-lg mb-6 group-hover:border-cyan-500 transition-colors">03</div>
              <h3 className="text-xl text-white mb-3 font-serif">開発・実装</h3>
              <p className="text-xs text-cyan-700 tracking-widest mb-4 uppercase">AI-Native Dev</p>
              <p className="text-sm text-gray-400 leading-loose font-light pr-2">
                AIエージェントを駆使し、堅牢なシステムを超高速実装。ご要望に応じ、高品質なクリエイティブもシームレスに統合します。
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-start group">
              <div className="w-14 h-14 rounded-full border border-white/20 bg-[#050505] flex items-center justify-center text-cyan-500 font-serif text-lg mb-6 group-hover:border-cyan-500 transition-colors">04</div>
              <h3 className="text-xl text-white mb-3 font-serif">テスト・公開</h3>
              <p className="text-xs text-cyan-700 tracking-widest mb-4 uppercase">QA & Launch</p>
              <p className="text-sm text-gray-400 leading-loose font-light pr-2">
                自動化ツールが完璧に連動し、AIエージェントが「24時間働く営業マン」として機能する最終統合テストを実行します。
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-start group">
              <div className="w-14 h-14 rounded-full border border-white/20 bg-[#050505] flex items-center justify-center text-cyan-500 font-serif text-lg mb-6 group-hover:border-cyan-500 transition-colors">05</div>
              <h3 className="text-xl text-white mb-3 font-serif">運用・改善</h3>
              <p className="text-xs text-cyan-700 tracking-widest mb-4 uppercase">Operation & Growth</p>
              <p className="text-sm text-gray-400 leading-loose font-light pr-2">
                データ分析によるSEO最適化、AIのチューニングなど、持続的な成長を伴走支援します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          03. Tech Stack
      ========================================= */}
      <section id="stack" className="relative w-full py-40 px-6 flex justify-center bg-[#030303] border-y border-white/5 overflow-hidden">
        <div className="absolute top-0 left-4 md:left-10 text-[20rem] md:text-[24rem] font-serif font-bold text-white/[0.02] select-none z-0 leading-none">03</div>
        
        <div className="relative z-10 max-w-7xl w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-24">
            <span className="text-cyan-500 font-serif text-4xl md:text-6xl">03.</span>
            <h2 className="text-3xl md:text-6xl tracking-[0.2em] text-white uppercase font-light">Tech Stack</h2>
            <div className="hidden md:block h-[1px] flex-grow bg-white/10" />
            <span className="text-gray-400 text-base md:text-lg tracking-widest whitespace-nowrap">アーキテクチャ基盤</span>
          </div>

          <div className="space-y-24">
            <div>
              <div className="flex items-end gap-6 mb-10 border-b border-white/10 pb-4">
                <span className="text-cyan-700 text-xl font-serif">01</span>
                <h3 className="text-white text-2xl tracking-widest">AI-Native & Agents</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
                <TechIcon name="Cursor" />
                <TechIcon name="VS Code" />
                <TechIcon name="OpenAI" />
                <TechIcon name="Anthropic" />
                <TechIcon name="Gemini" />
                <TechIcon name="CrewAI" />
                <TechIcon name="LangGraph" />
              </div>
            </div>

            <div>
              <div className="flex items-end gap-6 mb-10 border-b border-white/10 pb-4">
                <span className="text-cyan-700 text-xl font-serif">02</span>
                <h3 className="text-white text-2xl tracking-widest">Automation & Data</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <TechIcon name="n8n" />
                <TechIcon name="Supabase" />
                <TechIcon name="Dify" />
                <TechIcon name="Stripe" />
                <TechIcon name="LangChain" />
              </div>
            </div>

            <div>
              <div className="flex items-end gap-6 mb-10 border-b border-white/10 pb-4">
                <span className="text-cyan-700 text-xl font-serif">03</span>
                <h3 className="text-white text-2xl tracking-widest">Languages & Frameworks</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <TechIcon name="Ruby on Rails" />
                <TechIcon name="Python" />
                <TechIcon name="Next.js" />
                <TechIcon name="React.js" />
                <TechIcon name="TypeScript" />
              </div>
            </div>

            <div>
              <div className="flex items-end gap-6 mb-10 border-b border-white/10 pb-4">
                <span className="text-cyan-700 text-xl font-serif">04</span>
                <h3 className="text-white text-2xl tracking-widest">Infrastructure & DevOps</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <TechIcon name="Docker" />
                <TechIcon name="Vercel" />
                <TechIcon name="Render" />
                <TechIcon name="AWS" />
                <TechIcon name="GitHub" />
              </div>
            </div>

            <div>
              <div className="flex items-end gap-6 mb-10 border-b border-white/10 pb-4">
                <span className="text-cyan-700 text-xl font-serif">05</span>
                <h3 className="text-white text-2xl tracking-widest">Web3 & Decentralization</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <TechIcon name="Ethereum" />
                <TechIcon name="Solidity" />
                <TechIcon name="Alchemy" />
                <TechIcon name="Reown" />
                <TechIcon name="IPFS" />
              </div>
            </div>

            <div>
              <div className="flex items-end gap-6 mb-10 border-b border-white/10 pb-4">
                <span className="text-cyan-700 text-xl font-serif">06</span>
                <h3 className="text-white text-2xl tracking-widest">Creative, Ops & CRM</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <TechIcon name="Photoshop / XD" />
                <TechIcon name="Figma" />
                <TechIcon name="WordPress" />
                <TechIcon name="Notion" />
                <TechIcon name="HubSpot" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          04. Value Proposition
      ========================================= */}
      <section id="value" className="relative w-full py-40 px-6 flex justify-center bg-[#030303] border-t border-white/5 overflow-hidden">
        <div className="absolute top-0 left-4 md:left-10 text-[20rem] md:text-[24rem] font-serif font-bold text-white/[0.02] select-none z-0 leading-none">01</div>
        
        <div className="relative z-10 max-w-7xl w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-24">
            <span className="text-cyan-500 font-serif text-4xl md:text-6xl">04.</span>
            <h2 className="text-3xl md:text-6xl tracking-[0.2em] text-white uppercase font-light">Value Proposition</h2>
            <div className="hidden md:block h-[1px] flex-grow bg-white/10" />
            <span className="text-gray-400 text-base md:text-lg tracking-widest whitespace-nowrap">価値と強み</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#080808] border border-white/10 p-10 hover:border-cyan-500/50 hover:bg-[#0a0a0a] transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/0 group-hover:via-cyan-500/60 to-transparent transition-all duration-700" />
              <h3 className="text-xl md:text-2xl text-white font-serif tracking-widest mb-6 group-hover:text-cyan-400 transition-colors whitespace-nowrap break-keep">完全統合の実装力</h3>
              <p className="text-sm md:text-base text-gray-400 leading-loose font-light">
                外部委託による伝言ゲームを排除。戦略からデザイン、システム実装までの全てを完結させることによる、圧倒的なスピードと品質担保。
              </p>
            </div>
            <div className="bg-[#080808] border border-white/10 p-10 hover:border-cyan-500/50 hover:bg-[#0a0a0a] transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/0 group-hover:via-cyan-500/60 to-transparent transition-all duration-700" />
              <h3 className="text-xl md:text-2xl text-white font-serif tracking-widest mb-6 group-hover:text-cyan-400 transition-colors whitespace-nowrap break-keep">最先端のビジネス実装</h3>
              <p className="text-sm md:text-base text-gray-400 leading-loose font-light">
                単なるWebサイトではなく、AIエージェントによる業務自動化やWeb3技術を、既存のビジネスに「使える武器」として組み込む提案力。
              </p>
            </div>
            <div className="bg-[#080808] border border-white/10 p-10 hover:border-cyan-500/50 hover:bg-[#0a0a0a] transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/0 group-hover:via-cyan-500/60 to-transparent transition-all duration-700" />
              <h3 className="text-xl md:text-2xl text-white font-serif tracking-widest mb-6 group-hover:text-cyan-400 transition-colors whitespace-nowrap break-keep">成果へ接続する構造</h3>
              <p className="text-sm md:text-base text-gray-400 leading-loose font-light">
                綺麗なだけのWebは作らない。セールスコピー、UI/UX、マーケティングの知見を統合し、ビジネスの熱量を漏れなくCVへと変換する仕組みを実装。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          05. Contact Header + Form
      ========================================= */}
      <section id="contact" className="relative w-full py-40 px-6 flex flex-col items-center justify-center bg-black border-t border-white/10 overflow-hidden">
        <div className="absolute top-0 left-4 md:left-10 text-[20rem] md:text-[24rem] font-serif font-bold text-white/[0.02] select-none z-0 leading-none">06</div>
        
        <div className="relative z-10 w-full max-w-7xl mb-20">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <span className="text-cyan-500 font-serif text-4xl md:text-6xl">05.</span>
            <h2 className="text-3xl md:text-6xl tracking-[0.2em] text-white uppercase font-light">Contact</h2>
            <div className="hidden md:block h-[1px] flex-grow bg-white/10" />
            <span className="text-gray-400 text-base md:text-lg tracking-widest whitespace-nowrap">お問い合わせ</span>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl w-full text-center">
          <h3 className="text-4xl md:text-6xl font-serif text-white mb-8">まずは、ご相談から</h3>
          <p className="text-cyan-500 text-xs md:text-sm tracking-[0.4em] uppercase mb-16 font-semibold">Get In Touch</p>
          <p className="text-base md:text-xl text-gray-400 font-light leading-relaxed mb-20">
            技術的な課題、AIエージェントの導入、Web3エコシステムの構築など、<br className="hidden md:block"/>
            あなたのビジネスの課題を診断し、最適なアーキテクチャを提案します。
          </p>
          <div className="text-white text-base md:text-lg font-light tracking-widest leading-relaxed opacity-80 mb-8">
            「あなたの『問い』を、明日を創る設計図へ」
          </div>
          
          <Link 
            href="https://calendly.com/tamatixyan/40min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block mt-12 w-full"
          >
            <button 
              type="button" 
              className="block mx-auto w-full max-w-md bg-cyan-600 hover:bg-cyan-500 text-white text-base md:text-lg font-serif tracking-widest py-4 px-8 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] font-medium rounded-sm"
            >
              アーキテクチャ診断を予約する <span className="font-mono ml-2">{'>'}</span>
            </button>
          </Link>
        </div> 
      </section>
      
     {/* =========================================
          Footer (100-Point Optimized)
      ========================================= */}
      <footer className="w-full bg-[#030303] py-20 px-8 border-t border-white/5 relative overflow-hidden">
        
        <div className="relative z-10 flex flex-col items-center justify-center gap-10 max-w-7xl mx-auto">
          
          {/* ロゴ & ブランドネーム - 透明度とコントラストの最適化 */}
          <Link href="/" className="flex flex-col items-center gap-6 group cursor-pointer">
            <img 
              src="/noirlogo.png" 
              alt="Tech Noir Logo" 
              className="h-12 w-auto grayscale opacity-50 group-hover:opacity-80 transition-all duration-700" 
            />
            <h2 className="text-gray-500 font-sans font-light text-xl tracking-[0.3em] group-hover:text-gray-300 transition-colors duration-700">
              Tech Noir
            </h2>
          </Link>

          {/* ディバイダー - 主張を極限まで抑えつつ、領域を美しく区切る */}
          <div className="w-12 h-[1px] bg-white/10"></div>

          {/* タグライン & コピーライト - 信頼を担保する可読性(text-gray-500/600)の確保 */}
          <div className="text-center space-y-6">
            <p className="text-gray-500 text-xs tracking-[0.4em] uppercase font-medium">
              Solving Business Inefficiencies with AI.
            </p>
            <div className="text-gray-600 text-[10px] tracking-[0.3em] font-light">
              &copy; 2026 Hideki Tamae. All rights reserved.
            </div>
          </div>

        </div>
      </footer>
    </main>
  );
}