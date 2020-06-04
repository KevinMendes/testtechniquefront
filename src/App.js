import React, { useState } from 'react';
import './App.css';
import Footer from './component/footer';
import Modal from './component/modal';

function App() {

  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false)
  };

  return (
    <div className="wrap">
      <div className="wrapped">
          <button className="blue-button"
                  type="button"
                  onClick={handleOpen}
                  >
                    Ouvrir la modale 1
          </button>
          <h1 className="title">Un premier titre</h1>
          <p className="text">Modale basique</p>
          <Footer />
      </div>

      <div className="wrapped">
          <button className="blue-button"
                  type="button"
                  onClick={handleOpen}
                  >
                    Ouvrir la modale 2
          </button>
          <h1 className="title">Un premier titre</h1>
          <p className="text">Modale basique</p>
          <Footer />
      </div>
      <Modal show={show} handleClose={handleClose}>
        <h1 className="modalTitle">Title</h1>
        <p>Content of the modal</p>
      </Modal>
    </div>
  );
}

export default App;
