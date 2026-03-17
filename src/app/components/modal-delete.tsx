import { Button, Modal } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

export interface ModalDeleteProps {
  onConfirm: () => void;
  onCancel: () => void;
  show: boolean;
  loading?: boolean;
}

export const ModalDelete = ({ ...props }: ModalDeleteProps) => {

  const { loading } = props;

  const changeSave = () => {
    return props.loading ? "Processando..." : "Excluir";
  }

  return (
    <Modal show={props.show} onHide={props.onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Deletar Cep</Modal.Title>
      </Modal.Header>
      <Modal.Body>Deseja realmente excluir esse cep ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onCancel}>
          Cancelar
        </Button>
        <Button variant="danger"
          onClick={props.onConfirm}
          disabled={loading}
        >
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
            hidden={!loading}
          />
          {changeSave()}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}