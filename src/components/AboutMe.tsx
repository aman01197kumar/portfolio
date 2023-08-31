import React from "react";
import styles from "../styles/aboutMe.module.scss";
import { myData } from "../assets/Data/myData";

function AboutMe() {
  return (
    <div className="p-3 mt-5">
      <div className="border border-success p-4 ">
        <div className="h3 text-white text-decoration-underline">About Me</div>
        <div className="text-secondary">
          I am filled with wonder and amazement when I witness the enchanting
          world created through live coding. It makes me feel like a magician
          who can perform incredible feats with just a few lines of code. When a
          magnificent virtual world comes to life, it showcases the brilliance
          of an independent and imaginative mind. It captivates the eyes and
          imagination of many, highlighting the true artistry behind the
          creation.
        </div>
        <div className="fs-4 text-white text-decoration-underline mt-5">
          Education Qualification
        </div>
        <div
          className={`d-flex justify-content-between ${styles.flex__container}`}
        >
          {myData?.map((item) => {
            return (
              <div className="text-secondary mt-3 p-2">
                <div className="fs-5 fw-bold">{item?.course}</div>
                <div>{item?.institute}</div>
                <div>{item?.degree}</div>
                <div>{item?.course_year}</div>
              </div>
            );
          })}
        </div>
        <div className="fs-4 text-white text-decoration-underline mt-5">
          Experience
        </div>
        <div>
          <div className="fs-5 text-secondary fw-bold mt-3">Bookingjini</div>
          <div className="fs-6 text-secondary">https://bookingjini.com/</div>
          <div className="text-secondary text-decoration-underline fw-bold">
            Job Profile and Responsibities
          </div>
          <div className="text-secondary ">
            Junior Software Developer(Frontend)
          </div>
          <div className="text-secondary">
            As a Frontend Developer, I have experience working in a
            product-based startup in India. Due to my strong dedication,
            eagerness to learn, and continuous growth mindset, the organization
            entrusted me with the ownership of one of its products. This means I
            am fully responsible for every aspect, including design,
            implementation, execution, maintenance, and production. Any bugs
            that arise are also my responsibility to resolve. I believe that my
            diligent work ethic, disciplined approach, and keen nature
            contribute to the mutual growth of both myself and the organization.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
