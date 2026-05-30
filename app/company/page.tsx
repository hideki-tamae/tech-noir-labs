import React from 'react';
import Link from 'next/link';

export default function Company() {
  return (
    <main className="bg-[#030303] text-gray-200 font-sans selection:bg-cyan-500 selection:text-black min-h-screen flex flex-col scroll-smooth">
      
      {/* =========================================
          00. Header (Global Navigation)
      ========================================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
  <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
    <Link href="/" className="text-white font-serif tracking-widest text-2xl drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]">
      Noir Labs
    </Link>
    <nav className="hidden md:flex gap-8 text-sm tracking-widest text-gray-300 font-light">
      <Link href="/" className="hover:text-cyan-400 transition-colors">ホーム</Link>
      <Link href="/#solutions" className="hover:text-cyan-400 transition-colors">サービス</Link>
      <Link href="/#stack" className="hover:text-cyan-400 transition-colors">技術スタック</Link>
      <Link href="/#works" className="hover:text-cyan-400 transition-colors">実績</Link>
      <Link href="/company" className="hover:text-cyan-400 transition-colors text-white">企業概要</Link>
    </nav>
    <Link href="/#contact" className="hidden md:inline-block px-8 py-3 bg-cyan-600 text-white text-sm tracking-widest hover:bg-cyan-500 transition-colors border border-cyan-500/50">
      お問い合わせ
    </Link>
  </div>
</header>

      {/* =========================================
          01. Company Hero
      ========================================= */}
      <section className="relative w-full pt-60 pb-24 px-6 flex flex-col items-center justify-center bg-[#050505] border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 left-4 md:left-10 text-[20rem] font-serif font-bold text-white/[0.02] select-none z-0 leading-none">01</div>
        <div className="relative z-10 max-w-7xl w-full text-center md:text-left md:pl-20">
          <h1 className="text-white text-5xl md:text-7xl font-serif tracking-widest mb-6">
            Company Profile
          </h1>
          <p className="text-cyan-500 text-sm tracking-[0.4em] uppercase font-semibold">
            企業概要・代表挨拶
          </p>
        </div>
      </section>

      {/* =========================================
          02. Profile Message (インパクト重視)
      ========================================= */}
      <section className="relative w-full py-40 px-6 flex justify-center bg-[#030303] overflow-hidden">
        <div className="absolute top-0 left-4 md:left-10 text-[20rem] font-serif font-bold text-white/[0.02] select-none z-0 leading-none">02</div>
        
        <div className="relative z-10 max-w-4xl w-full text-center md:text-left md:pl-20">
          <div className="space-y-12 text-gray-300 text-lg md:text-xl leading-loose font-light">
            <h2 className="text-white font-serif text-4xl md:text-6xl tracking-wide mb-16 leading-tight">
              「表面的なデザインは、<br className="hidden md:block"/>ビジネスを救わない。」
            </h2>
            <p>
              20歳でテクノロジーの深淵に触れて以来、経営とマーケティングの最前線で無数の課題と対峙してきました。そこで辿り着いた真理は、「強靭なアーキテクチャ（構造）のみが、ビジネスのバグを根本から修正できる」という事実です。
            </p>
            <p>
              広報・マーケティングの洞察力と、AIエージェント・Web3を駆使した妥協のない実装力。これらを完全に統合し、あなたの事業を次の次元へと引き上げます。
            </p>
            <p className="text-cyan-500 font-serif text-2xl tracking-wide pt-8 font-normal">
              技術は、圧倒的な「成果」に変換されて初めて意味を持つ。
            </p>
          </div>
          
          <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center md:justify-start gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm tracking-widest mb-2">株式会社Limelien 代表取締役</p>
              <p className="text-white text-3xl font-serif tracking-widest mb-2">田前 秀樹</p>
              <p className="text-cyan-700 text-xs tracking-widest uppercase">Web Architect</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          03. Company Information
      ========================================= */}
      <section className="relative w-full py-40 px-6 flex justify-center bg-[#050505] flex-grow overflow-hidden">
        <div className="absolute top-0 left-4 md:left-10 text-[20rem] font-serif font-bold text-white/[0.02] select-none z-0 leading-none">03</div>
        
        <div className="relative z-10 max-w-4xl w-full md:pl-20">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-20">
            <span className="text-cyan-500 font-serif text-4xl md:text-5xl">03.</span>
            <h2 className="text-3xl md:text-5xl tracking-[0.2em] text-white uppercase font-light">Information</h2>
            <div className="hidden md:block h-[1px] flex-grow bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 border-t border-white/10 pt-12 text-base md:text-lg font-light">
            <div className="text-gray-400 font-medium tracking-widest">会社名</div>
            <div className="md:col-span-2 text-white">株式会社Limelien</div>
            
            <div className="text-gray-400 font-medium tracking-widest border-t border-white/5 pt-8">設立</div>
            <div className="md:col-span-2 text-white border-t border-white/5 pt-8">2019年</div>
            
            <div className="text-gray-400 font-medium tracking-widest border-t border-white/5 pt-8">代表者</div>
            <div className="md:col-span-2 text-white border-t border-white/5 pt-8">田前 秀樹</div>
            
            <div className="text-gray-400 font-medium tracking-widest border-t border-white/5 pt-8">事業内容</div>
            <div className="md:col-span-2 text-gray-300 border-t border-white/5 pt-8 leading-loose space-y-2">
              <p>・Webアーキテクチャ設計・開発</p>
              <p>・AIエージェント導入・業務自動化支援</p>
              <p>・Web3エコシステム構築</p>
              <p>・デジタルマーケティング・セールスコピーライティング</p>
              <p>・KDP（Kindle）電子書籍出版支援</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          Footer
      ========================================= */}
      <footer className="w-full py-12 bg-black text-center border-t border-white/10 relative z-10">
        <Link href="/#contact" className="text-cyan-500 text-sm tracking-widest hover:text-cyan-400 transition-colors">
          → アーキテクチャ構築のご相談はこちら（トップページへ戻る）
        </Link>
      </footer>

    </main>
  );
}