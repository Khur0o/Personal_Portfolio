type SkillsIconProps = {
  source: string
  altName: string
  iconName: string
}

function SkillsIcon({ source, altName, iconName }: SkillsIconProps) {
  return (
    <div className="skill-container">
      <div className="skill-item">
        <img src={source} alt={altName} className="skill-icon" />
        <span className="skill-name">{iconName}</span>
      </div>
    </div>
  )
}

export default SkillsIcon