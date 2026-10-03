import { useLikes } from '../context/LikesContext'

type HeaderProps = {
  title: string
  subtitle: string
}

function Header({ title, subtitle }: HeaderProps) {
      const { likes } = useLikes()
      
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>Likes: {likes}</p>
    </header>
  )
}

export default Header