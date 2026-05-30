import Link from 'next/link';

export default function CompanyProfile() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#00D9FF]/30 font-sans antialiased">
      
      {/* グローバルナビゲーション（ヘッダー） */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Tech Noir ロゴマーク (Next.js Imageエラー回避のため標準imgタグを使用) */}
            <img 
              src="/noirlogo.png" 
              alt="Tech Noir Logo" 
              className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            {/* ブランド名称 */}
            <span className="text-2xl font-serif tracking-widest text-white group-hover:text-[#00D9FF] transition-colors duration-300">
              Tech Noir
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest text-gray-300">
            <Link href="/" className="hover:text-[#00D9FF] transition-colors duration-300">ホーム</Link>
            <Link href="/#services" className="hover:text-[#00D9FF] transition-colors duration-300">サービス</Link>
            <Link href="/#tech-stack" className="hover:text-[#00D9FF] transition-colors duration-300">技術スタック</Link>
            <Link href="/works" className="hover:text-[#00D9FF] transition-colors duration-300">実績</Link>
            <Link href="/company" className="text-[#00D9FF]">企業概要</Link>
          </nav>
          <a href="/#contact" className="hidden md:inline-flex bg-[#00D9FF] text-black px-6 py-2 text-sm font-bold tracking-widest hover:bg-white transition-colors duration-300">
            お問い合わせ
          </a>
        </div>
      </header>

      <main className="pt-32 pb-24">
        
        {/* Section 01: Company Profile */}
        <section className="relative px-6 py-20 max-w-5xl mx-auto border-b border-white/10">
          <h1 className="text-5xl md:text-7xl font-serif tracking-widest mb-6">Company Profile</h1>
          <p className="text-[#00D9FF] tracking-[0.4em] text-sm font-bold">企業概要・代表挨拶</p>
        </section>

        {/* Section 02: Message */}
        <section className="relative px-6 py-24 max-w-5xl mx-auto border-b border-white/10">
          <h2 className="text-3xl md:text-5xl font-serif font-normal leading-relaxed mb-16 tracking-widest">
            「表面的なデザインは、<br />ビジネスを救わない。」
          </h2>
          <div className="space-y-8 text-gray-300 text-lg leading-loose max-w-3xl">
            <p>
              18歳でテクノロジーの深淵に触れて以来、経営とマーケティングの最前線で無数の課題と対峙してきました。そこで辿り着いた真理は、「強靭なアーキテクチャ（構造）のみが、ビジネスのバグを根本から修正できる」という事実です。
            </p>
            <p>
              広報・マーケティングの洞察力、WEB開発・AIエージェント・Web3を駆使した妥協のない実装力。これらを統合し、あなたの事業を次の次元へと引き上げます。
            </p>
            <p className="text-[#00D9FF] text-2xl font-serif font-normal mt-12 mb-16 tracking-wide">
              技術は、圧倒的な「成果」に変換されて初めて意味を持つ。
            </p>
          </div>

          <div className="mt-20">
            <p className="text-gray-400 text-xs tracking-widest mb-3">株式会社Limelien 代表取締役</p>
            <p className="text-3xl md:text-4xl font-serif tracking-widest mb-2">田前 秀樹</p>
            <p className="text-[#00D9FF] text-xs tracking-[0.2em] font-mono uppercase mt-2">Liberal Arts Architect</p>
          </div>
        </section>

        {/* Section 03: Information */}
        <section className="relative px-6 py-24 max-w-5xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <span className="text-[#00D9FF] text-5xl font-serif">03.</span>
            <h2 className="text-4xl tracking-[0.2em] font-serif uppercase">Information</h2>
          </div>

          <div className="space-y-0 text-base md:text-lg border-t border-white/10">
            <div className="flex flex-col md:flex-row py-10 border-b border-white/10">
              <div className="md:w-1/3 text-gray-400 mb-2 md:mb-0 tracking-widest">会社名</div>
              <div className="md:w-2/3 tracking-wider">株式会社Limelien</div>
            </div>
            <div className="flex flex-col md:flex-row py-10 border-b border-white/10">
              <div className="md:w-1/3 text-gray-400 mb-2 md:mb-0 tracking-widest">設立</div>
              <div className="md:w-2/3 tracking-wider">2019年</div>
            </div>
            <div className="flex flex-col md:flex-row py-10 border-b border-white/10">
              <div className="md:w-1/3 text-gray-400 mb-2 md:mb-0 tracking-widest">代表者</div>
              <div className="md:w-2/3 tracking-wider">田前 秀樹</div>
            </div>
            <div className="flex flex-col md:flex-row py-10 border-b border-white/10">
              <div className="md:w-1/3 text-gray-400 mb-2 md:mb-0 tracking-widest">事業内容</div>
              <div className="md:w-2/3 space-y-5 tracking-wider">
                <p>・Webアーキテクチャ設計・開発</p>
                <p>・AIエージェント導入・業務自動化支援</p>
                <p>・Web3エコシステム構築</p>
                <p>・デジタルマーケティング・セールスコピーライティング</p>
                <p>・KDP（Kindle）電子書籍出版支援</p>
              </div>
            </div>
          </div>

          <div className="mt-32 text-center">
            <Link href="/" className="text-[#00D9FF] hover:text-white transition-colors duration-300 text-sm md:text-base tracking-widest">
              → アーキテクチャ構築のご相談はこちら（トップページへ戻る）
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}