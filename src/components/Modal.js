import { Button, Modal } from 'react-bootstrap';

const ModalWindow = ({ pokemon, closeModal }) => {
  const handleClose = () => closeModal();
  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pokemon.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={pokemon.img} alt="pokemon" className="d-block w-75 mx-auto"></img>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalWindow;
