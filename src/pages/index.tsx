import { Poppins } from "next/font/google";
import Components from "@/components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const HomeComponents = Components.section.home
export default function Home() {
  return (
    <main className={`${poppins.className}`}>
      <HomeComponents.Hero />
      <HomeComponents.LoveMarico />
      <HomeComponents.StepOne />
      <HomeComponents.StepTwo />
      <HomeComponents.StepThree />
      <HomeComponents.StartNow />
    </main>
  );
}
