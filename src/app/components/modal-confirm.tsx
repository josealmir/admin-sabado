import { Button, Modal } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

export interface ModalConfirmProps {
    onConfirm: () => void;
    onCancel: () => void;
    show: boolean;
    loading?: boolean;
}

export const ModalConfirm = ({ ...props }: ModalConfirmProps) => {

   const { loading } = props;

    const changeSave = () => {
      return props.loading ? "Processando..." : "Salvar" ;
    }

    return (
        <Modal show={props.show} onHide={props.onCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastar Cep</Modal.Title>
        </Modal.Header>
        <Modal.Body>Deseja realmente salvar esse cep ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onCancel}>
            Cancelar
          </Button>
          <Button variant="primary" 
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