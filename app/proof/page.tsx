"use client";
import React from 'react';
import Link from 'next/link';

/* =========================================
  専門用語ツールチップ
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

export default function ProofOfArchitecture() {
  return (
    <main className="bg-[#030303] text-gray-200 font-sans selection:bg-cyan-500 selection:text-black min-h-screen flex flex-col">
      
      {/* =========================================
          Header
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
            <Link href="/proof" className="text-[#00E5FF] transition-colors duration-300">実績</Link>
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
          Hero Title
      ========================================= */}
      <section className="pt-48 pb-20 px-6 relative overflow-hidden flex-shrink-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <p className="text-cyan-500 text-xs md:text-sm tracking-[0.4em] uppercase mb-6 font-semibold">Proof of Architecture</p>
          <h1 className="text-4xl md:text-6xl font-serif text-white tracking-[0.15em] font-light mb-8">
            実装証明とアーキテクチャ
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-loose max-w-3xl mx-auto tracking-widest font-light">
            私たちは、不確実な記憶や言葉ではなく、<br className="hidden md:block" />
            自らの手で生み出した堅牢な「<span className="text-cyan-400">プロダクト</span>」と、<br className="hidden md:block" />
            未来の利益をデザインする「<span className="text-cyan-400">実装モデル</span>」によって、圧倒的な技術力を証明します。
          </p>
        </div>
      </section>

      {/* =========================================
          01. R&D (自社開発プロダクト)
      ========================================= */}
      <section className="py-24 px-6 relative z-10 border-t border-white/5 bg-gradient-to-b from-[#050505] to-black">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-cyan-500 font-serif text-3xl md:text-4xl">01.</span>
            <h2 className="text-2xl md:text-4xl tracking-[0.2em] text-white uppercase font-light">R&D / Products</h2>
            <div className="hidden md:block h-[1px] flex-grow bg-white/10" />
            <span className="text-gray-500 text-xs font-mono tracking-widest uppercase">Proprietary_Tech</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-[#080808] border border-white/10 p-8 md:p-10 group hover:border-cyan-500/50 transition-all duration-500 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/0 group-hover:via-cyan-500/80 to-transparent transition-all duration-700"></div>
              <div className="mb-8 border-b border-white/5 pb-6">
                <p className="text-cyan-600 text-xs tracking-widest uppercase mb-3 font-mono">Web3 Token Ecosystem</p>
                <h3 className="text-2xl md:text-3xl text-white font-serif tracking-wide group-hover:text-cyan-100 transition-colors">SOLUNA</h3>
              </div>
              <div className="space-y-6 text-sm text-gray-400 leading-loose tracking-widest font-light flex-grow">
                <p>「ケア」という経済的に評価されにくい無償の価値を、暗号資産（トークン）へと変換する次世代インフラ。</p>
                <p>人間関係の依存や中央集権的な搾取を完全に排除し、<Term word="スマートコントラクト" desc="プログラムによって自動的に契約や決済を実行するブロックチェーン上の仕組み。" />によって「Proof of Care（ケアの証明）」を自律的に記録・評価するシステムをフルスクラッチで設計・実装。</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-8">
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] text-gray-400 font-mono">Ethereum</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] text-gray-400 font-mono">Solidity</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] text-gray-400 font-mono">Next.js</span>
              </div>
            </div>

            <div className="bg-[#080808] border border-white/10 p-8 md:p-10 group hover:border-cyan-500/50 transition-all duration-500 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/0 group-hover:via-cyan-500/80 to-transparent transition-all duration-700"></div>
              <div className="mb-8 border-b border-white/5 pb-6">
                <p className="text-cyan-600 text-xs tracking-widest uppercase mb-3 font-mono">AI Voice Screening System</p>
                <h3 className="text-2xl md:text-3xl text-white font-serif tracking-wide group-hover:text-cyan-100 transition-colors">HAIS (命の家計簿)</h3>
              </div>
              <div className="space-y-6 text-sm text-gray-400 leading-loose tracking-widest font-light flex-grow">
                <p>音声データをリアルタイムに解析し、人間の精神的・身体的状態の揺らぎを高精度にスクリーニングするAI統合システム。</p>
                <p>属人的な診断のブレや見落としを防ぐため、<Term word="AIエージェント" desc="24時間自律的に思考・実行するAI。" />と連携した診断プロセスを構築。人間の脆弱性を補完し、24時間稼働する「絶対に裏切らないケアの入り口」として機能する。</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-8">
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] text-gray-400 font-mono">OpenAI</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] text-gray-400 font-mono">Python</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] text-gray-400 font-mono">Supabase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          02. Use Cases (業界別実装構想)
      ========================================= */}
      <section className="py-24 px-6 relative z-10 border-t border-white/5 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-cyan-500 font-serif text-3xl md:text-4xl">02.</span>
            <h2 className="text-2xl md:text-4xl tracking-[0.2em] text-white uppercase font-light">Implementation Models</h2>
            <div className="hidden md:block h-[1px] flex-grow bg-white/10" />
            <span className="text-gray-500 text-xs font-mono tracking-widest uppercase">Use_Cases</span>
          </div>

                    <p className="text-gray-400 text-base leading-relaxed tracking-wide mb-16 max-w-2xl mx-auto text-left">
            Tech Noirの技術を業界の課題（バグ）に適用した場合のシミュレーションモデル。私たちはこれらのアーキテクチャを、あなたのビジネスに即座に実装する準備ができています。
            <span className="block mt-4 text-xs text-gray-500 tracking-wider">
                ※これらは特定のクライアントの実績を示すものではなく、私たちが提供可能な「成果の設計図」です。
            </span>
            </p>

          <div className="space-y-10">
            {/* Case 1 */}
            <div className="bg-[#080808] border border-white/5 p-8 md:p-12 hover:border-cyan-500/30 transition-all duration-500 max-w-3xl mx-auto">
              <p className="text-cyan-600 font-mono text-[10px] mb-2 uppercase">Case_01</p>
              <h3 className="text-2xl text-white font-serif mb-2">B2B SaaS 企業</h3>
              <div className="mb-6">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Target ROI</p>
                <p className="text-cyan-400 font-bold tracking-widest text-lg">営業リソースの無限拡張</p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-base text-white font-medium tracking-wide mb-4">24時間自律型AIセールスファネルの統合</h4>
                <p className="text-sm text-gray-400 leading-loose tracking-widest font-light">
                  優秀な営業担当の思考プロセスをLLMに学習させ、顧客の課題をヒアリングし提案を行うAIエージェントをLPに統合。人間の疲労や感情のブレによる「取りこぼし」をパージし、深夜休日を問わず最高品質のリード獲得と自動ナーチャリングを実現する。
                </p>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-[#080808] border border-white/5 p-8 md:p-12 hover:border-cyan-500/30 transition-all duration-500 max-w-3xl mx-auto">
              <p className="text-cyan-600 font-mono text-[10px] mb-2 uppercase">Case_02</p>
              <h3 className="text-2xl text-white font-serif mb-2">E-Commerce 事業</h3>
              <div className="mb-6">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Target ROI</p>
                <p className="text-cyan-400 font-bold tracking-widest text-lg">業務工数の極小化・CVR最大化</p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-base text-white font-medium tracking-wide mb-4">API自動化と超個別最適化UIの構築</h4>
                <p className="text-sm text-gray-400 leading-loose tracking-widest font-light">
                  レガシーな手動発注や在庫管理を、n8n等のワークフローエンジンを用いて完全に自動化。同時に、顧客一人ひとりの購買文脈をAIが瞬時に読み取り、リアルタイムに変化するダイナミックなUI/UXを実装。属人的なミスをなくし、利益率を劇的に引き上げる。
                </p>
              </div>
            </div>

            {/* Case 3 */}
            <div className="bg-[#080808] border border-white/5 p-8 md:p-12 hover:border-cyan-500/30 transition-all duration-500 max-w-3xl mx-auto">
              <p className="text-cyan-600 font-mono text-[10px] mb-2 uppercase">Case_03</p>
              <h3 className="text-2xl text-white font-serif mb-2">Healthcare & Clinic</h3>
              <div className="mb-6">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Target ROI</p>
                <p className="text-cyan-400 font-bold tracking-widest text-lg">トラストの構築と集客の自動化</p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-base text-white font-medium tracking-wide mb-4">分散型ID(DID)によるプライバシー保護と自動問診</h4>
                <p className="text-sm text-gray-400 leading-loose tracking-widest font-light">
                  検索意図をハックする高度なSEOメディアを構築し、流入した患者をAI自動問診へ誘導。<Term word="自己主権型ID（DID）" desc="GAFA等に依存せず、ユーザー自身が自分のデータを管理するWeb3の仕組み。" />を用いて機微な医療データをトラストレスに保護。患者のプライバシーを絶対に守り抜きながら、医師のスクリーニング時間を大幅に削減する。
                </p>
              </div>
            </div>

            {/* Case 4 */}
            <div className="bg-[#080808] border border-white/5 p-8 md:p-12 hover:border-cyan-500/30 transition-all duration-500 max-w-3xl mx-auto">
              <p className="text-cyan-600 font-mono text-[10px] mb-2 uppercase">Case_04</p>
              <h3 className="text-2xl text-white font-serif mb-2">Digital Assets & IP</h3>
              <div className="mb-6">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Target ROI</p>
                <p className="text-cyan-400 font-bold tracking-widest text-lg">無形資産の価値化と世界配信</p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-base text-white font-medium tracking-wide mb-4">NFTトークン化とオーディオ・ブランディング統合</h4>
                <p className="text-sm text-gray-400 leading-loose tracking-widest font-light mb-8">
                  企業のブランド価値を、視覚（Tech Noir / Ukiyo-eデザイン）と聴覚（高品質なオリジナル楽曲）の両面から構築。さらに、生成されたデジタルIPを単なるデータで終わらせず、Web3基盤を用いてNFT化・グローバル配信することで、新たな収益ファネルと熱狂的なコミュニティ（トークンエコノミー）を創出する。
                </p>
                <div className="w-full grid grid-cols-3 gap-3 opacity-90">
                  <div className="col-span-3 aspect-[21/9] bg-gray-900 border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] text-cyan-700 font-mono tracking-widest">Main_Asset</div>
                  </div>
                  <div className="aspect-square bg-gray-900 border border-white/10 relative overflow-hidden"></div>
                  <div className="aspect-square bg-gray-900 border border-white/10 relative overflow-hidden"></div>
                  <div className="aspect-square bg-gray-900 border border-white/10 relative overflow-hidden"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-32 pt-20 border-t border-white/5 text-center">
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">次は、あなたのビジネスの番です。</h3>
            <p className="text-gray-400 text-sm md:text-base font-light tracking-widest mb-10">
              圧倒的な成果を生み出すアーキテクチャを、自社に実装する準備はできましたか？
            </p>
            <Link href="https://calendly.com/tamatixyan/40min" target="_blank" className="inline-flex items-center gap-3 px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white text-base font-serif tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_35px_rgba(0,229,255,0.4)] rounded-sm">
              無料アーキテクチャ診断を予約する <span className="font-mono">{'>'}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          Footer
      ========================================= */}
      <footer className="w-full bg-[#030303] py-20 px-8 border-t border-white/5 relative overflow-hidden mt-auto">
        <div className="relative z-10 flex flex-col items-center justify-center gap-10 max-w-7xl mx-auto">
          <Link href="/" className="flex flex-col items-center gap-6 group cursor-pointer">
            <img src="/noirlogo.png" alt="Tech Noir Logo" className="h-12 w-auto grayscale opacity-50 group-hover:opacity-80 transition-all duration-700" />
            <h2 className="text-gray-500 font-sans font-light text-xl tracking-[0.3em] group-hover:text-gray-300 transition-colors duration-700">Tech Noir</h2>
          </Link>
          <div className="w-12 h-[1px] bg-white/10"></div>
          <div className="text-center space-y-6">
            <p className="text-gray-500 text-xs tracking-[0.4em] uppercase font-medium">Solving Business Inefficiencies with AI.</p>
            <div className="text-gray-600 text-[10px] tracking-[0.3em] font-light">&copy; 2026 Hideki Tamae. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}