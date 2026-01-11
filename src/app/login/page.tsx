"use client"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/CardHeader'
import Button from 'react-bootstrap/esm/Button';
import { use, useState } from "react";
import { LoginRequest } from '@/models/requests/login.request';

export default function Login() {
    
    
  const [loginRequest, setLoginRequest] =
   useState<LoginRequest>({
    email: '',
    password: ''
  });

  const setPassword = (value: string) => {
    setLoginRequest({ ...loginRequest, password: value });
  }

  const setEmail = (value: string) => {
    setLoginRequest({ ...loginRequest, email: value });
  }

  
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <Card>
           <Card body>
            <CardHeader>Tela de Login</CardHeader>  
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" 
                placeholder="name@example.com" 
                onChange={(event) => setEmail(event.target.value)} />

            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" 
                placeholder="Password"  
                onChange={(event) => setPassword(event.target.value)}/>
            </FloatingLabel>
            <div className="d-grid gap-2 mt-2">
              {loginRequest.email } {loginRequest.password }
              <Button variant="primary">Primary</Button>
            </div>
          </Card>
        </Card>

        </div>
      </div>
    </div>
  );
}