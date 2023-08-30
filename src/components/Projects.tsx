import React from 'react'
import styles from '../styles/aboutMe.module.scss'
import { projectsData } from '../assets/Data/projectsData'
import CustomCard from './CustomCard'

function Projects() {
  return (
    <div className="p-3 mt-5">
      <div className="border border-success p-5 ">
        <div className="h3 text-white text-decoration-underline">My Projects</div>
        <div className={`d-flex justify-content-between ${styles.flex__container}`}>
        {projectsData?.map(item => (
        <div className="mt-3 p-2" >
          <CustomCard
          key={item?.id}
            desc={item?.desc}
            tags={item?.tags}
            image={item?.img}
            title={item?.title}
          />
        </div>
      ))}
        </div>
      </div>
    </div>
  )
}

export default Projects