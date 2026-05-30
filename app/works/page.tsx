"use client";
import React from 'react';
import Link from 'next/link';

export default function WorksPage() {
  return (
    <main className="bg-[#030303] text-gray-200 min-h-screen py-32">
      
      {/* Masterpieces Section */}
      <section id="works" className="relative w-full py-20 px-6 flex justify-center bg-[#030303] border-t border-white/5 overflow-hidden">
        <div className="absolute top-0 left-4 md:left-10 text-[24rem] font-serif font-bold text-white/[0.02] select-none z-0 leading-none">05</div>
        
        <div className="relative z-10 max-w-7xl w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-28">
            <span className="text-cyan-500 font-serif text-5xl md:text-6xl">05.</span>
            <h2 className="text-4xl md:text-6xl tracking-[0.2em] text-white uppercase font-light">Masterpieces</h2>
            <div className="hidden md:block h-[1px] flex-grow bg-white/10" />
            <span className="text-gray-400 text-lg tracking-widest whitespace-nowrap">実績・アーキテクチャ事例</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Item 1 */}
            <div className="bg-[#080808] border border-white/10 p-14 hover:border-cyan-500/50 transition-all duration-500 group">
              <h3 className="text-white text-2xl font-serif mb-6">SOLUNA & HAIS Ecosystem</h3>
              <p className="text-sm text-cyan-700 mb-8 font-light h-10 leading-relaxed">Concept: ケアが搾取され、見過ごされる資本主義の構造的バグの修正。</p>
              <p className="text-lg text-gray-400 font-light leading-loose mb-12">
                音声解析による状態の可視化と、ケアを価値化する次世代Web3トークンエコノミーを統合した自律型エコシステム。
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 tracking-widest">
                <span className="px-3 py-1 border border-white/10 bg-white/5">Next.js</span>
                <span className="px-3 py-1 border border-white/10 bg-white/5">Web3</span>
                <span className="px-3 py-1 border border-white/10 bg-white/5">Python</span>
                <span className="px-3 py-1 border border-white/10 bg-white/5">n8n</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-[#080808] border border-white/10 p-14 hover:border-cyan-500/50 transition-all duration-500 group">
              <h3 className="text-white text-2xl font-serif mb-6">Data Dashboard</h3>
              <p className="text-sm text-cyan-700 mb-8 font-light h-10 leading-relaxed">Concept: 複雑な社会課題や指標が可視化されず、意思決定が遅れるバグの修正。</p>
              <p className="text-lg text-gray-400 font-light leading-loose mb-12">
                ACEsやビジネス指標など、膨大かつ複雑なデータをリアルタイムで比較・俯瞰できる超高速データダッシュボード基盤。
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 tracking-widest">
                <span className="px-3 py-1 border border-white/10 bg-white/5">Next.js</span>
                <span className="px-3 py-1 border border-white/10 bg-white/5">React</span>
                <span className="px-3 py-1 border border-white/10 bg-white/5">Cursor</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-[#080808] border border-white/10 p-14 hover:border-cyan-500/50 transition-all duration-500 group">
              <h3 className="text-white text-2xl font-serif mb-6">Re-Verse Civilization</h3>
              <p className="text-sm text-cyan-700 mb-8 font-light h-10 leading-relaxed">Concept: 優れた思想が、デジタル空間で直感的な体験として定着しないバグの修正。</p>
              <p className="text-lg text-gray-400 font-light leading-loose mb-12">
                KDPでの書籍出版による権威の構築と、楽曲制作の知見を活かしたオリジナル音源・映像による世界観のプロデュース。
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 tracking-widest">
                <span className="px-3 py-1 border border-white/10 bg-white/5">KDP</span>
                <span className="px-3 py-1 border border-white/10 bg-white/5">Music Production</span>
                <span className="px-3 py-1 border border-white/10 bg-white/5">CapCut</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center mt-20">
        <Link href="/" className="text-gray-400 hover:text-white transition-colors">← ホームへ戻る</Link>
      </div>
    </main>
  );
}