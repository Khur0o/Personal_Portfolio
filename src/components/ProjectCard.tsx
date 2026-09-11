type ProjectCardProps = {
  source?: string
  CardImg?: string
  CardTitle?: string
  CardDescription?: string
  slug?: string
  onClick?: () => void
}

function ProjectCard({
  source,
  CardImg,
  CardTitle = 'Project',
  CardDescription = '',
  slug = '',
  onClick,
}: ProjectCardProps) {
  const imageSource = source ?? CardImg ?? ''

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (slug) {
      window.location.hash = `#/project/${slug}`
    }
  }

  return (
    <div className="card" onClick={handleClick} style={{ cursor: slug ? 'pointer' : 'default' }}>
      <div className="card-image-wrapper">
        <img
          className="card-image"
          src={imageSource}
          alt={CardTitle}
        />
      </div>

      <div className="card-details">
        <h2>{CardTitle}</h2>

        <p>{CardDescription}</p>
      </div>
    </div>
  )
}

export default ProjectCard