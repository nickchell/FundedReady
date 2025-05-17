
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solutions } from './components/Solutions';
import { DemoTeaser } from './components/DemoTeaser';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { SignupForm } from './components/SignupForm';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { HowItWorks } from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <Navbar />
      <div className="relative z-10 pt-16">
        <Hero />
        <HowItWorks />
        <PainPoints />
        <Solutions />
        <DemoTeaser />
        <SocialProof />
        <Pricing />
        <SignupForm />
        <Footer />
      </div>
      
      {/* Background gradient elements */}
      <div className="fixed top-0 left-0 right-0 bottom-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px]" />
        <div className="absolute top-[60%] left-[40%] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>
    </div>
  );
}

export default App;