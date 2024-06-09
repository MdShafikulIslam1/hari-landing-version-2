export default function Clock({ variant }: { variant?: "one" | "two" }) {
    const color = variant === "two" ? "bg-[rgb(36,16,12)]": "bg-orange-500";

    return (
      <div className="flex items-center gap-2">
        <div className={`w-14 h-14 grid place-items-center text-2xl font-bold ${color} rounded-lg shadow-md`}>00</div>
        <span className="font-bold text-2xl">:</span>

        <div className={`w-14 h-14 grid place-items-center text-2xl font-bold ${color} rounded-lg shadow-md`}>23</div>
        <span className="font-bold text-2xl">:</span>
        
        <div className={`w-14 h-14 grid place-items-center text-2xl font-bold ${color} rounded-lg shadow-md`}>30</div>
      </div>
    )
  }