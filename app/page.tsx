import Image from "next/image";
import Accordion from "./components/accordion";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <div className="w-full h-60 bg-cover bg-[url('/images/background-pattern-desktop.svg')] bg-no-repeat bg-center flex justify-center items-start">
      <FAQ />
    </div>
  );
}
