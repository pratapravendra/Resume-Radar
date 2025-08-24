import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeRadar" },
    { name: "Analyzer", content: "Your Job Assistant for your Dream Job" },
  ];
}

export default function Home() {
  return(
  <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
  <section className="main-section">
    <div className="page-heading">
      <h1>Track Your Application and Resume Ratings</h1>
      <h2> Review and Check AI-powered Feedback</h2>
    </div >

  </section>

  </main>
  );
  
}
