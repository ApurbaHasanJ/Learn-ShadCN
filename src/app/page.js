import Hero from "@/components/Hero";
import Test from "@/components/Test";
import TestCard from "@/components/TestCard";
import { TestNavigation } from "@/components/TestNavigation";
// import TestForm from "@/components/TestForm";



export default function Home() {
  return (
    <main className="container mx-auto mt-4">
      <TestNavigation/>
      <Hero/>
      
      <Test/>
      <TestCard/>
      {/* <TestForm/> */}
    </main>
  );
}
