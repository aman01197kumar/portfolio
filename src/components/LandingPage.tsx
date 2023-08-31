import { Image } from "react-bootstrap";
import myself from "../img/myself.jpeg";
import styles from "../styles/landingPage.module.scss";
function LandingPage() {
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${styles.landingpage__wrapper}`}
    >
        <Image
          src={myself}
          rounded
          // style={{ height:'5rem' }}
          width='30%'
          className={styles.image}
        />
      
      <div className="text-center" style={{ width: "50%" }}>
        <div className={`text-white text-bold fs-1 ${styles.name__container}`}>Aman Kumar</div>
        <div className="text-secondary fs-4">Frontend Web Developer</div>
      </div>
    </div>
  );
}

export default LandingPage;
