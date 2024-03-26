import { HomepageBrands } from "@/components/homepage-brands";
import { HomepageHero } from "@/components/homepage-hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HomepageHero />
      <HomepageBrands />
    </main>
  );
}
