type ProjectCardProps = {
 source?: string
 CardImg?: string
 CardTitle?: string
 CardLanguages?: string
 Github_SRC?: string
}

function ProjectCard({
 source,
 CardImg,
 CardTitle = 'Project',
 CardLanguages = '',
 Github_SRC = '#',
}: ProjectCardProps) {
 const imageSource = source ?? CardImg ?? ''

 return (
   <a href={Github_SRC} target="_blank" rel="noopener noreferrer" className="card">
     <img className="card-image" src={imageSource} alt={CardTitle} />
     <div className="card-details">
       <h2>{CardTitle}</h2>
       <p>{CardLanguages}</p>
     </div>
   </a>
 )
}

export default ProjectCard