import type { BodyProps } from "./infra/body.infra";

export const Body = ({ children }: BodyProps) => {

    return (
      <div className="d-flex" id="wrapper">
        { children }
      </div>
    );
}