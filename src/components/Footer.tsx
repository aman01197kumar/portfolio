
import { ModalFooter } from "react-bootstrap";

function Footer() {
  return (
    <ModalFooter>
      <div
        className="text-center p-3 text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", width: "100%" }}
      >
        © 2023 Copyright: All rights reserved
      </div>
    </ModalFooter>
  );
}

export default Footer;
