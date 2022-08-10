import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import { Button } from "reactstrap";
import "../Components/styles/area.css";

const Area = () => {
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);
  const [value, setValue] = useState("Select area for delivery");

  const toggleActive = (event) => {
    event.currentTarget.classList.toggle("active");
  };

  const selectOption = (e) => {
    setValue(e.target.textContent);
    e.currentTarget.parent.classList.remove("active");
  };

  const options = [
    "Al Saad",
    "Al Bidda",
    "The Pearl",
    "Khairayat",
    "Al Duhail",
    "Al Garafa",
    "Al Markhiya",
    "Katara",
    "Al Mamoura",
    "Abu Hamour",
    "Dafna",
  ];

  return (
    <Modal
      className="select__area-modal"
      isOpen={modal}
      toggle={toggle}
      keyboard="false"
      backdrop="static"
    >
      <ModalBody className="select__area-content text-center">
        <h2>Select your delivery area</h2>
        <div className="select-box" onClick={toggleActive}>
          <button className="options-container">
            <div className="option" onClick={toggleActive}>
              <input type="radio" className="radio" id="film" name="category" />
              <label for="Al Saad" onClick={selectOption}>
                Al Saad
              </label>
            </div>

            <div className="option" onClick={toggleActive}>
              <input
                type="radio"
                className="radio"
                id="science"
                name="category"
              />
              <label for="Al Bidda" onClick={selectOption}>
                Al Bidda
              </label>
            </div>

            <div className="option" onClick={toggleActive}>
              <input type="radio" className="radio" id="art" name="category" />
              <label for="The Pearl" onClick={selectOption}>
                The Pearl
              </label>
            </div>

            <div className="option" onClick={toggleActive}>
              <input
                type="radio"
                className="radio"
                id="music"
                name="category"
              />
              <label for="Khairatyat" onClick={selectOption}>
                Khairatyat
              </label>
            </div>

            <div className="option" onClick={toggleActive}>
              <input
                type="radio"
                className="radio"
                id="travel"
                name="category"
              />
              <label for="Al Duhail" onClick={selectOption}>
                Al Duhail
              </label>
            </div>

            <div className="option" onClick={toggleActive}>
              <input
                type="radio"
                className="radio"
                id="sports"
                name="category"
              />
              <label for="Al Garafa" onClick={selectOption}>
                Al Garafa
              </label>
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
              <label for="Katara" onClick={selectOption}>
                Katara
              </label>
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
              <label for="Abu Hamour" onClick={selectOption}>
                Abu Hamour
              </label>
            </div>
            <div className="option" onClick={toggleActive}>
              <input
                type="radio"
                className="radio"
                id="tutorials"
                name="category"
              />
              <label for="Dafna" onClick={selectOption}>
                Dafna
              </label>
            </div>
          </button>

          <div className="selected" onChange={selectOption}>
            {value}
          </div>
        </div>
        <Button
          className="select__area-btn"
          disabled={value === "Select Video Category" ? true : false}
          color="primary"
          onClick={toggle}
        >
          OK
        </Button>{" "}
      </ModalBody>
    </Modal>
  );
};

export default Area;
