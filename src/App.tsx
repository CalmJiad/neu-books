import Navbar from "./components/Navbar";
import MagicCursor from "./components/ui/MagicCursor";

export default function App() {
  return (
    <div>
      <MagicCursor SPLAT_RADIUS={0.08} SPLAT_FORCE={3500} />
      <Navbar />
    </div>
  );
}
