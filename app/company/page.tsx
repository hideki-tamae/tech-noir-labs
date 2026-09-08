"use client";
import React from 'react';
import Link from 'next/link';

export default function Company() {
  return (
    <main className="bg-[#030303] text-gray-200 font-sans selection:bg-cyan-500 selection:text-black min-h-screen flex flex-col">
      
      {/* =========================================
          Header (Reused for consistency)
      ========================================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 text-white font-light tracking-[0.25em] text-xl transition-opacity hover:opacity-80">
            <img src="/noirlogo.png" alt="Tech Noir Logo" className="h-11 w-auto drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]" />
            <span>Tech Noir</span>
          </Link>
          
          <nav className="hidden md:flex gap-8 lg:gap-12 text-sm tracking-[0.15em] text-gray-300 font-light">
            <Link href="/" className="hover:text-[#00E5FF] transition-colors duration-300">ホーム</Link>
            <Link href="/#solutions" className="hover:text-[#00E5FF] transition-colors duration-300">サービス</Link>
            <Link href="/#stack" className="hover:text-[#00E5FF] transition-colors duration-300">技術スタック</Link>
            <Link href="/works" className="hover:text-[#00E5FF] transition-colors duration-300">実績</Link>
            <Link href="/company" className="text-[#00E5FF] transition-colors duration-300">企業概要</Link>
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
          Hero Title: Philosophy
      ========================================= */}
      <section className="pt-48 pb-20 px-6 relative overflow-hidden flex-shrink-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <p className="text-cyan-500 text-xs md:text-sm tracking-[0.4em] uppercase mb-6 font-semibold">Philosophy & Origin</p>
          <h1 className="text-4xl md:text-6xl font-serif text-white tracking-[0.2em] font-light mb-8">
            思想と哲学
          </h1>
        </div>
      </section>

      {/* =========================================
          The Manifesto (The Core Story & Tech Specs)
      ========================================= */}
      <section className="pb-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#050505] border border-white/5 p-8 md:p-16 relative overflow-hidden shadow-2xl">
            {/* 装飾的アクセント */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            
            {/* Catchphrase (1行表示の最適化) */}
            <h2 className="text-xl md:text-2xl lg:text-[28px] text-white font-serif mb-16 leading-relaxed tracking-[0.15em] text-center md:whitespace-nowrap">
              「人の意思は揺らぐ。しかし、コードは決して裏切らない。」
            </h2>

            <div className="space-y-16 text-gray-400 text-sm md:text-base font-light leading-loose tracking-widest">
              
              {/* Origin Story */}
              <div className="space-y-6">
                <p>
                  私たちがAIエージェントやWeb3という最先端テクノロジーを駆使する理由は、単なるトレンドの追従ではありません。それは、極めて個人的な「喪失と絶望」から導き出された、必然のアーキテクチャです。
                </p>
                <p>
                  詐欺、裏切り、家族の喪失。人間の脆さに直面したとき、私は「不確実な善意」や「属人的なシステム」に依存することの危うさを、身を以て知りました。資本主義には、人が人を不当に搾取する「バグ」が存在します。
                </p>
                <p>
                  不完全な人間を否定するのではなく、その「揺らぎ」を補完し、あなたとあなたのビジネスを守り抜く強靭なセーフティネット。それが、私たちが実装するテクノロジーの真髄です。
                </p>
              </div>

              {/* AI Agents Specs */}
              <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-10 rounded-sm relative group hover:border-cyan-500/30 transition-colors duration-500">
                <div className="absolute left-0 top-0 w-1 h-full bg-cyan-900 group-hover:bg-cyan-500 transition-colors duration-500"></div>
                <h3 className="text-cyan-400 font-serif text-xl md:text-2xl mb-4 tracking-widest">
                  The Absolute Intelligence: AIエージェント
                </h3>
                <p className="mb-8 text-gray-400">
                  感情のブレや疲労を持たず、24時間365日、設定された道徳と目的に対して極めて誠実に稼働し続ける「絶対に裏切らない労働力」です。RPAのような単なる定型作業の自動化ではありません。
                </p>
                <ul className="space-y-5 text-sm md:text-base">
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-500 font-mono mt-1">/</span> 
                    <span><strong className="text-white font-normal">自律的思考と実行:</strong> 目標を与えるだけで、自ら計画を立て、最適な手段を選び自律的に実行します。</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-500 font-mono mt-1">/</span> 
                    <span><strong className="text-white font-normal">無限の拡張性 (Infinite Scaling):</strong> 世界最高峰の専門家クローンを、電気代のみで無限に複製・同時稼働させます。</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-500 font-mono mt-1">/</span> 
                    <span><strong className="text-white font-normal">動的システム操作 (Tool Orchestration):</strong> 単一のソフトに留まらず、ブラウザ、CRM、Web3決済などを横断的に操作します。</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-500 font-mono mt-1">/</span> 
                    <span><strong className="text-white font-normal">超個別最適化 (Hyper-Personalization):</strong> 顧客一人ひとりの文脈を瞬時に読み取る、1対1の専属コンシェルジュとして機能します。</span>
                  </li>
                </ul>
              </div>

              {/* Web3 Specs */}
              <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-10 rounded-sm relative group hover:border-cyan-500/30 transition-colors duration-500">
                <div className="absolute left-0 top-0 w-1 h-full bg-cyan-900 group-hover:bg-cyan-500 transition-colors duration-500"></div>
                <h3 className="text-cyan-400 font-serif text-xl md:text-2xl mb-4 tracking-widest">
                  The Trustless Infrastructure: Web3
                </h3>
                <p className="mb-8 text-gray-400">
                  中央集権的な搾取を排除し、数学的な証明によって、誰もが不当に傷つかない透明で公平な価値交換を担保する「誰も裏切れない経済圏」のインフラストラクチャです。
                </p>
                <ul className="space-y-5 text-sm md:text-base">
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-500 font-mono mt-1">/</span> 
                    <span><strong className="text-white font-normal">スマートコントラクト:</strong> 人間の仲介や恣意的な判断を完全に排除した、価値移転と契約の自動執行プログラム。</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-500 font-mono mt-1">/</span> 
                    <span><strong className="text-white font-normal">自己主権型ID (DID / VC):</strong> 巨大企業に依存せず、ユーザー自身が個人情報（機微なデータ）を安全に管理・証明する仕組み。</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-500 font-mono mt-1">/</span> 
                    <span><strong className="text-white font-normal">ゼロ知識証明 (ZKP):</strong> データの中身を相手に見せずに正当性のみを証明する、次世代の究極のプライバシー保護。</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-500 font-mono mt-1">/</span> 
                    <span><strong className="text-white font-normal">トークノミクス:</strong> ケアなどの「無給の価値」を経済的資産に変換する、Proof of Careに基づくインセンティブ設計。</span>
                  </li>
                </ul>
              </div>

              {/* Conclusion */}
              <div className="pt-12 border-t border-white/10 text-center">
                <h2 className="text-white font-serif text-lg md:text-xl leading-loose tracking-[0.2em] flex flex-col items-center justify-center">
                  <span className="inline-block">「逆境（ACEs）を資産に変え、</span>
                  <span className="inline-block">美しいシステムでビジネスのバグを修正する。」</span>
                </h2>
                <p className="mt-6 text-gray-400 font-light tracking-[0.3em] text-sm md:text-base">
                  これが、私たち Tech Noir の存在意義です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          Company / Architect Dossier (100-Point Optimized)
      ========================================= */}
      <section className="py-32 px-6 bg-black border-t border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Company Info (Grid Left - 5 columns) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-4">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              <h3 className="text-cyan-500 text-xs tracking-[0.4em] uppercase font-mono">Entity_Overview</h3>
            </div>
            
            <dl className="space-y-6 text-sm md:text-base tracking-widest font-light">
              <div className="flex flex-col space-y-1">
                <dt className="text-gray-600 text-[10px] font-mono uppercase">Organization</dt>
                <dd className="text-white font-serif tracking-[0.1em]">Tech Noir Labs / Limelien Inc.</dd>
              </div>
              <div className="flex flex-col space-y-1">
                <dt className="text-gray-600 text-[10px] font-mono uppercase">Founder_&_CEO</dt>
                <dd className="text-gray-300">田前 秀樹 (Hideki Tamae)</dd>
              </div>
              <div className="flex flex-col space-y-1">
                <dt className="text-gray-600 text-[10px] font-mono uppercase">Base_Location</dt>
                <dd className="text-gray-300">東京都渋谷区 (Shibuya, Tokyo)</dd>
              </div>
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/5">
                <dt className="text-gray-600 text-[10px] font-mono uppercase">Core_Operations</dt>
                <dd className="text-gray-300 leading-loose text-xs md:text-sm">
                  <span className="text-cyan-500 mr-2">/</span>AIエージェントの設計・導入・自動化支援<br />
                  <span className="text-cyan-500 mr-2">/</span>Webサイト制作・UI/UX・企業ロゴデザイン<br />
                  <span className="text-cyan-500 mr-2">/</span>Web3アーキテクチャの統合・NFT実装<br />
                  <span className="text-cyan-500 mr-2">/</span>マーケティング・セールスコピーライティング<br />
                  <span className="text-cyan-500 mr-2">/</span>KDP出版支援・音楽制作（サウンドデザイン）<br />
                  <span className="text-cyan-500 mr-2">/</span>CARE Capitalismの社会実装
                </dd>
              </div>
            </dl>
          </div>

          {/* Architect Profile (Grid Right - 7 columns) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-4">
              <span className="text-cyan-500 font-mono text-xs">{'//'}</span>
              <h3 className="text-cyan-500 text-xs tracking-[0.4em] uppercase font-mono">The_Architect</h3>
            </div>
            
            <div className="bg-[#050505] border border-white/5 p-8 md:p-10 relative group">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
              
              <div className="mb-8">
                <h4 className="text-2xl text-white font-serif mb-2 tracking-widest">田前 秀樹</h4>
                <p className="text-cyan-700 text-[10px] tracking-[0.3em] uppercase font-mono">Liberal Arts Architect / Social Entrepreneur</p>
              </div>
              
              <div className="space-y-6 text-gray-400 text-sm font-light leading-loose tracking-widest">
                <p>
                  鹿児島県（薩摩・奄美大島）の「知行合一」の精神をルーツに持つ。社会の構造的課題（逆境：ACEs）をシステムによって解決し、ケアを価値化する「CARE Capitalism（ケア資本主義）」の実装に取り組む社会起業家。
                </p>
                <p>
                  著書『Re-Verse Civilization』。IBM認定データサイエンス、イェール大学The Science of Well-Being等の知見を統合し、AIとブロックチェーンを用いた高度な実装（SOLUNAエコシステム、HAIS等）を自ら指揮するアーキテクト。
                </p>
              </div>

              {/* Data Links */}
              <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap gap-6">
                <Link href="#" className="flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors text-xs font-mono tracking-widest group/link">
                  <span className="w-1.5 h-1.5 border border-gray-500 group-hover/link:border-cyan-400 group-hover/link:bg-cyan-400 transition-all"></span>
                  X (Twitter)
                </Link>
                <Link href="#" className="flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors text-xs font-mono tracking-widest group/link">
                  <span className="w-1.5 h-1.5 border border-gray-500 group-hover/link:border-cyan-400 group-hover/link:bg-cyan-400 transition-all"></span>
                  GitHub
                </Link>
                <Link href="#" className="flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors text-xs font-mono tracking-widest group/link">
                  <span className="w-1.5 h-1.5 border border-gray-500 group-hover/link:border-cyan-400 group-hover/link:bg-cyan-400 transition-all"></span>
                  
                <a 
                    href="https://www.amazon.co.jp/stores/author/B0H1876FGT?ingress=0&visitId=8cedf0b4-ca13-421c-829b-bfe5a18d1e5a" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    □ Amazon Author
                  </a>


                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          Footer
      ========================================= */}
      <footer className="w-full bg-[#030303] py-20 px-8 border-t border-white/5 relative overflow-hidden mt-auto">
        <div className="relative z-10 flex flex-col items-center justify-center gap-10 max-w-7xl mx-auto">
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
          <div className="w-12 h-[1px] bg-white/10"></div>
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