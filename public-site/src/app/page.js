import Hero from '../components/Hero';
import Services from '../components/Services';
import Facilities from '../components/Facilities';
import Coaches from '../components/Coaches';
import Client from '../components/Client';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Facilities />
      <Coaches />
      <Client />
    </main>
  );
}
