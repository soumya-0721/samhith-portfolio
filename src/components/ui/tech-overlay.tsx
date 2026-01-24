export function TechOverlay() {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none select-none overflow-hidden">
        {/* Top Left Crosshair */}
        <div className="absolute top-8 left-8 flex flex-col items-start gap-1">
            <div className="w-8 h-[1px] bg-white/20" />
            <div className="h-8 w-[1px] bg-white/20 absolute top-0 left-0" />
            <span className="text-[10px] font-mono text-neutral-500 mt-2 ml-2 tracking-widest">
                COORDS: 17.3850° N, 78.4867° E
            </span>
        </div>

        {/* Top Right Label */}
        <div className="absolute top-8 right-8 text-right hidden md:block">
            <div className="w-8 h-[1px] bg-white/20 absolute top-0 right-0" />
            <div className="h-8 w-[1px] bg-white/20 absolute top-0 right-0" />
             <div className="text-[10px] font-mono text-neutral-500 mt-2 mr-2 leading-tight">
                SYS.STATUS: ONLINE<br/>
                VER: 2.0.26
             </div>
        </div>

        {/* Bottom Left Label */}
        <div className="absolute bottom-8 left-8 hidden md:block">
             <div className="w-8 h-[1px] bg-white/20 absolute bottom-0 left-0" />
            <div className="h-8 w-[1px] bg-white/20 absolute bottom-0 left-0" />
            <div className="text-[10px] font-mono text-neutral-500 mb-2 ml-2 leading-tight">
                CIVIL_ENG // TECH_FOUNDER
            </div>
        </div>

        {/* Bottom Right Crosshair */}
         <div className="absolute bottom-8 right-8">
            <div className="w-8 h-[1px] bg-white/20 absolute bottom-0 right-0" />
            <div className="h-8 w-[1px] bg-white/20 absolute bottom-0 right-0" />
        </div>
    </div>
  );
}
