import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import { Button } from "reactstrap";
import "../Components/styles/area.css";




const Area = () => {


  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);
    const [value, setValue] = useState("default");

  const toggleActive = (event) => {
    event.currentTarget.classList.toggle("active");
   
  };




  return (
    <Modal className="select__area-modal" isOpen={modal} toggle={toggle}>
      <ModalBody className="select__area-content text-center">
        <h2>Select your delivery area</h2>
        <div className="select-box" onClick={toggleActive}>
          {/* <div className={`options-container ${toggleClassCheck}`} onClick={toggleActive}> */}
          <button className="options-container" onClick={toggleActive}>
            <div className="option">
              <input
                type="radio"
                className="radio"
                id="automobiles"
                name="category"
              />
              <label for="automobiles">Ain khalid</label>
            </div>

            <div className="option" value={"Al Saad"} onClick={toggleActive}>
              <input type="radio" className="radio" id="film" name="category" />
              <label for="Al Saad">Al Saad</label>
            </div>

            <div className="option" onClick={toggleActive}>
              <input
                type="radio"
                className="radio"
                id="science"
                name="category"
              />
              <label for="Al Bidda">Al Bidda</label>
            </div>

            <div className="option" onClick={toggleActive}>
              <input type="radio" className="radio" id="art" name="category" />
              <label for="The Pearl">The Pearl</label>
            </div>

            <div className="option" onClick={toggleActive}>
              <input
                type="radio"
                className="radio"
                id="music"
                name="category"
              />
              <label for="Khairatyat">Khairatyat</label>
            </div>

            <div className="option" onClick={toggleActive}>
              <input
                type="radio"
                className="radio"
                id="travel"
                name="category"
              />
              <label for="Al Duhail">Al Duhail</label>
            </div>

            <div className="option" onClick={toggleActive}>
              <input
                type="radio"
                className="radio"
                id="sports"
                name="category"
              />
              <label for="Al Garafa">Al Garafa</label>
            </div>

            <div className="option" onClick={toggleActive}>
              <input type="radio" className="radio" id="news" name="category" />
              <label for="news">Al Markhiya</label>
            </div>

            <div className="option" onClick={toggleActive}>
              <input
                type="radio"
                className="radio"
                id="tutorials"
                name="category"
              />
              <label for="Katara">Katara</label>
            </div>
            <div className="option" onClick={toggleActive}>
              <input
                type="radio"
                className="radio"
                id="tutorials"
                name="category"
              />
              <label for="Al Mamoura">Al Mamoura</label>
            </div>
            <div className="option" onClick={toggleActive}>
              <input
                type="radio"
                className="radio"
                id="tutorials"
                name="category"
              />
              <label for="Abu Hamour">Abu Hamour</label>
            </div>
            <div className="option" onClick={toggleActive}>
              <input
                type="radio"
                className="radio"
                id="tutorials"
                name="category"
              />
              <label for="Dafna">Dafna</label>
            </div>
          </button>

          <div className="selected" value="default">
            Select Video Category
          </div>
        </div>
        <Button className="select__area-btn" color="primary" onClick={toggle}>
          OK
        </Button>{" "}
      </ModalBody>
    </Modal>
  );
};

export default Area;
