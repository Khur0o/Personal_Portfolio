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

  const content = (
    <>
      <div className="card-image-wrapper">
        <img
          className="card-image"
          src={imageSource}
          alt=""
        />
      </div>

      <div className="card-details">
        <h2>{CardTitle}</h2>
        <p>{CardDescription}</p>
      </div>
    </>
  )

  if (slug) {
    return (
      <a
        className="card"
        href={`#/project/${slug}`}
        onClick={onClick}
        aria-label={`View ${CardTitle} project`}
      >
        {content}
      </a>
    )
  }

  return <div className="card">{content}</div>
}

export default ProjectCard