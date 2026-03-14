import { useEffect, useState } from "react";
import { ToastContainer } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import Header from "react-bootstrap/ToastHeader";
import Body from "react-bootstrap/ToastBody";

export interface ToastProps {
  message?: string,
  type?: 'Primary' | 'Secondary' | 'Success' | 'Danger' | 'Warning' | 'Info' | 'Light' | 'Dark'
}

export function ToastMessage({  ...props }: ToastProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, [props.message]);

  return (
    props.message === undefined ? <></> :
    <ToastContainer
          className="p-3"
          position="top-center"
        >
          <Toast bg={props.type?.toLocaleLowerCase()} onClose={() => setShow(false)} show={show}  delay={3000} autohide>
            <Header closeButton={false}>
              <strong className="me-auto">Erro</strong>
            </Header>
            <Body>{props.message}</Body>
          </Toast>
    </ToastContainer>
  );
}