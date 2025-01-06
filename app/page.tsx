import Body from '../components/body'
import Experience from '../components/experience'
import Footer from '../components/footer'
import Header from '../components/header'
import Languages from '../components/lenguajes'
import Projects from '../components/projects'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800">
      <Header />
      <main>
        <Body />
        <Experience />
        <Projects />
        <Languages />
      </main>
      <Footer />
    </div>
  )
}

