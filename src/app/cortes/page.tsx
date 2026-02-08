import CortesSection from "../_sections/cortes-section";
import Navbar from "../_components/Navbar";
export default function Home() {
  return (
    <>
    <div className="static h-60"><Navbar /></div>
      <CortesSection/>
    </>
  );
}