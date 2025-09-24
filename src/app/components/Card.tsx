type CardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/10 via-white/2 to-transparent">
      <div
        className="h-full w-full rounded-2xl p-6
        bg-white/2
        backdrop-blur-2xl
        border border-white/5
        shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)]
        hover:bg-white/5 transition flex flex-col"
      >
        {/* Icon */}
        <div className="mb-4">
          <img src={icon} alt={title} className="h-10 w-10 opacity-90" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>

        {/* Description */}
        <p className="text-gray-200 leading-relaxed flex-grow">{description}</p>

        {/* Button */}
        <div className="mt-6">
          <button
            className="px-4 py-2 text-sm rounded-full
            bg-gradient-to-r from-black/60 via-purple-900/30 to-black/60
            backdrop-blur-md
            text-white/90 font-medium
            shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),0_2px_6px_rgba(0,0,0,0.4)]
            hover:bg-white/10 transition flex items-center gap-2"
          >
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
}
