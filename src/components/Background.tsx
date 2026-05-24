export function Background() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20">
         {/* Central/Grid background lines resembling the concept */}
         <div className="absolute top-20 left-1/4 w-[1px] h-full bg-white/[0.03]"></div>
         <div className="absolute top-0 right-1/3 w-[1px] h-full bg-white/[0.03]"></div>
         <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.03]"></div>
         <div className="absolute top-3/4 left-0 w-full h-[1px] bg-white/[0.03]"></div>
      </div>
      <div className="fixed inset-0 bg-primary z-[-2] pointer-events-none"></div>
    </>
  );
}
