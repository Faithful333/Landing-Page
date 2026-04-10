import Nav            from '@/components/Nav'
import Hero           from '@/components/Hero'
import Manifesto      from '@/components/Manifesto'
import Pillars        from '@/components/Pillars'
import Programs       from '@/components/Programs'
import Logos          from '@/components/Logos'
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
      <Programs />
      <Logos />
      <JoinForm />
      <Footer />
    </>
  )
}
