interface SkillCardProps{
    skill_name:string,
    img:string
}

function SkillCard({skill_name,img}:SkillCardProps) {
  return (
    <div className="bg-white p-2 rounded">
        <img src={img} className="rounded mx-auto d-block" alt={skill_name} width='60rem'/>
    </div>
  )
}

export default SkillCard