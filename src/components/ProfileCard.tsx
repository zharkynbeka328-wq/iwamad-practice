import photo from '../photo.jpg'
import LikeButton from './LikeButton'

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

   <LikeButton />
    </section>
  )
}

export default ProfileCard