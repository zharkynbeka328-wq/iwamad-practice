import { useState } from 'react'
import './App.css'
import photo from './photo.jpg'

function App() {
  const [liked, setLiked] = useState(false)

  return (
    <>
      <header>
        <h1>My Profile</h1>
        <p>IT Management Student and Aspiring Web Developer</p>
      </header>

      <main>
        <section className="card">
          <div className="profile-content">
            <img
              src={photo}
              alt="Photo of Akmaral Zharkynbek"
            />

            <div>
              <h2>Akmaral Zharkynbek</h2>

              <p>
                I am an IT Management student interested in
                technology and web development. I am improving
                my HTML, CSS, and JavaScript skills.
              </p>
            </div>
          </div>

          <div className="links">
            <a href="mailto:zharkynbeka328@gmail.com">
              Email
            </a>

            <a
              href="https://github.com/zharkynbeka328-wq"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <button
            id="likeButton"
            type="button"
            onClick={() => setLiked(!liked)}
          >
            {liked ? '♥ Liked' : '♡ Like'}
          </button>
        </section>
      </main>

      <footer>
        <p>© 2026 Akmaral Zharkynbek</p>
      </footer>
    </>
  )
}

export default App