import { Col, Container, Row } from "react-bootstrap";

export interface BodyProps {
    children: React.ReactNode;
}

export const Body = ({ children }: BodyProps) => {

    return (
      <div className="d-flex" id="wrapper">
        { children }
      </div>
    );
}