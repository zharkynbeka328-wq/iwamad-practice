import './App.css'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import Footer from './components/Footer'

type Link = {
  label: string
  url: string
}

function App() {
  const links: Link[] = [
    {
      label: 'Email',
      url: 'mailto:zharkynbeka328@gmail.com',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/zharkynbeka328-wq',
    },
  ]

  const name = 'Akmaral Zharkynbek'

  return (
    <>
      <Header
        title="My Profile"
        subtitle="IT Management Student and Aspiring Web Developer"
      />

      <main>
        <ProfileCard
          name={name}
          description="I am an IT Management student interested in technology and web development. I am improving my HTML, CSS, and JavaScript skills."
          links={links}
        />
      </main>

      <Footer
        year={2026}
        name={name}
      />
    </>
  )
}

export default App