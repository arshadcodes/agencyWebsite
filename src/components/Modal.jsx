import { useState } from "react";
import styles from "./Style/Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
const Modal = ({ setIsOpen }) => {
    const [email,setEmail] = useState('');
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            Enter your email address
          </div>
          <div className="flex flex-row items-center justify-center">
            <input type="text" className="w-[90%] border-black-1 p-2 rounded-md bg-white text-black" onChange={(e)=>{setEmail(e.currentTarget.innerText)}}/>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} onClick={() => {
                //send email logic
                setIsOpen(false)
                }}>
                Send
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

