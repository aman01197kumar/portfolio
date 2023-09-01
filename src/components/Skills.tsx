import { skillsData } from "../assets/Data/skillsData";
import SkillCard from "./SkillCard";
import styles from '../styles/skills.module.scss'

function Skills() {
  return (
    <div className="p-3 mt-5">
      <div className="border border-success p-4 ">
        <div className="h3 text-white text-decoration-underline">
          My Skills
        </div>
        <div className="fs-5 text-secondary fw-bold">Proficient in</div>
        <div
          className={`d-flex justify-content-between ${styles.flex__container}`}
        >
          {skillsData?.slice(0,skillsData.length-3).map((item) => (
            <div className="mt-3 z-index-0">
              <SkillCard skill_name={item?.skill_name} img={item?.img} />
            </div>
          ))}
        </div>
        <div className="fs-5 text-secondary fw-bold">Eager to learn</div>
        <div
          className={`d-flex justify-content-evenly ${styles.flex__container}`}
        >
          {skillsData?.slice(skillsData.length-3).map((item) => (
            <div className="mt-3 z-index-0">
              <SkillCard skill_name={item?.skill_name} img={item?.img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
