import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../styles/contactMe.module.scss";

function ContactMe() {
  return (
    <div className="p-3 mt-5">
      <div className="border border-success p-5 ">
        <div className="h3 text-white text-decoration-underline ">
          Contact Me
        </div>
        <div
          className={`d-flex justify-content-between align-items-center ${styles.flex__container}`}
        >
          <div className={styles.icons__container}>
            <div className="fs-5 text-secondary mb-2">Contact me on</div>
            <div className="d-flex justify-content-between">
              <i className="bi bi-linkedin text-primary-emphasis fs-3"></i>
              <i className="bi bi-instagram text-primary fs-3"></i>
              <i className="bi bi-facebook text-primary fs-3"></i>
              <i className="bi bi-whatsapp text-primary fs-3"></i>
              <i className="bi bi-envelope-at text-primary fs-3"></i>
            </div>
          </div>
          <div
            className={`fs-4 fw-bold text-secondary ${styles.or__container}`}
          >
            OR
          </div>
          <Form className={styles.form}>
            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter your Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="Enter your contact number"
              />
            </Form.Group>
            <div className="form-group mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                placeholder="Write you message"
              ></textarea>
            </div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
