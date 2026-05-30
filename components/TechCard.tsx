export default function TechCard({ name, iconPath }: { name: string, iconPath: string }) {
  return (
    <div className="bg-[#080808] border border-white/5 h-44 flex flex-col items-center justify-center gap-5 hover:border-white/20 hover:bg-[#0a0a0a] transition-all duration-300 group cursor-default">
      <div className="w-18 h-18 bg-white/[0.02] border border-white/10 rounded-lg group-hover:border-white/20 transition-all duration-300 flex items-center justify-center p-4">
        <img 
          src={iconPath} 
          alt={name} 
          className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110" 
        />
      </div>
      <span className="text-gray-400 text-sm tracking-widest group-hover:text-white transition-colors">{name}</span>
    </div>
  );
}
