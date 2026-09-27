import { useState } from 'react'
import photo from '../photo.jpg'

type Link = {
  label: string
  url: string
}

type ProfileCardProps = {
  name: string
  description: string
  links: Link[]
}

function LinkItem({ label, url }: Link) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  )
}

function ProfileCard({
  name,
  description,
  links,
}: ProfileCardProps) {
  const [liked, setLiked] = useState(false)

  return (
    <section className="card">
      <div className="profile-content">
        <img
          src={photo}
          alt={`Photo of ${name}`}
        />

        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="links">
        {links.length > 0 ? (
          links.map((link) => (
            <LinkItem
              key={link.url}
              label={link.label}
              url={link.url}
            />
          ))
        ) : (
          <p>No links available.</p>
        )}
      </div>

      <button
        id="likeButton"
        type="button"
        onClick={() => setLiked(!liked)}
      >
        {liked ? '♥ Liked' : '♡ Like'}
      </button>
    </section>
  )
}

export default ProfileCard