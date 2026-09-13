import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-800 flex flex-col justify-between relative overflow-hidden font-sans selection:bg-pink-500 selection:text-white">
      
      {/* Background Gradient Blurs (Blue, Purple & Pink Mesh Glow) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Top center subtle bright glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-blue-100/60 via-purple-100/40 to-transparent blur-3xl opacity-80 rounded-full" />

        {/* Bottom Left Vibrant Blue Glow */}
        <div className="absolute -bottom-32 -left-32 w-[650px] h-[650px] bg-blue-500/80 rounded-full blur-[140px] opacity-90" />

        {/* Bottom Right Vivid Pink/Magenta Glow */}
        <div className="absolute -bottom-32 -right-20 w-[700px] h-[700px] bg-pink-500/80 rounded-full blur-[140px] opacity-90" />

        {/* Center Bottom Blending Purple Accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-purple-600/70 rounded-full blur-[160px] opacity-80" />
      </div>

      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Hero Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 -mt-8 z-10 relative">
        <span className="text-xs font-semibold text-neutral-500 mb-3 tracking-wide">
          AI App Builder
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 mb-8 max-w-2xl leading-tight">
          Ready to bring your idea to life?
        </h1>

        {/* Input Card */}
        <div className="w-full max-w-xl bg-white/95 backdrop-blur-md border border-neutral-200/80 rounded-2xl shadow-xl shadow-purple-900/5 p-4 focus-within:ring-2 focus-within:ring-neutral-400 transition-all text-left">
          <textarea
            rows={2}
            placeholder="Ask Bottle AI to create a dashboard to..."
            className="w-full resize-none border-none outline-none text-sm text-neutral-800 placeholder-neutral-400 bg-transparent p-1"
          />
          <div className="flex items-center justify-between pt-3 px-1 text-neutral-400 border-t border-neutral-100">
            <button type="button" className="p-1 hover:bg-neutral-100 rounded-md transition-colors text-lg text-neutral-500">
              +
            </button>
            <div className="flex items-center space-x-2">
              <button type="button" className="px-3 py-1 text-xs font-medium bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-md flex items-center gap-1 transition-colors">
                Build <span className="text-[10px]">▾</span>
              </button>
              <button type="button" className="p-1 hover:bg-neutral-100 rounded-md transition-colors text-neutral-500">
                🎤
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Spacer to balance layout flex space */}
      <div className="h-12 z-10" />

    </div>
  );
}