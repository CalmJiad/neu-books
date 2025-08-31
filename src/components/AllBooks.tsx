import { GlowCard } from "./ui/Glowcard";
import { HighlightedBg } from "./ui/HighlightedBg";

export default function AllBooks() {
  return (
    <div>
      <HighlightedBg>
        {/* creating a fake book array with flex and ui design before using real api */}

        <div className="flex flex-wrap justify-center gap-4 p-4">
          {Array.from({ length: 12 }, (_, index) => (
            <GlowCard key={index}>
              <h2 className="text-2xl font-bold text-white">
                Book Title {index + 1}
              </h2>
              <p className="text-lg text-white">Author Name</p>
            </GlowCard>
          ))}
        </div>
      </HighlightedBg>
    </div>
  );
}
