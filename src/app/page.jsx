import Nav            from '@/components/Nav'
import Hero           from '@/components/Hero'
import Manifesto      from '@/components/Manifesto'
import ImpactWays     from '@/components/ImpactWays'
import Pillars        from '@/components/Pillars'
import Logos          from '@/components/Logos'
import Programs       from '@/components/Programs'
import JoinForm       from '@/components/JoinForm'
import Footer         from '@/components/Footer'
import ScrollRevealInit from '@/components/ScrollRevealInit'

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <Nav />
      <Hero />
      <Manifesto />
      <Pillars />
      <ImpactWays />
      <Logos />
      <Programs />
      <JoinForm />
      <Footer />
    </>
  )
}
