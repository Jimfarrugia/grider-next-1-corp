import performanceImage from "public/performance.jpg";
import Hero from "@/components/hero";

export default function PerformancePage() {
  return (
    <Hero
      imgData={performanceImage}
      imgAlt="welding"
      title="We serve high performance applications"
    />
  );
}
