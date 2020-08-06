import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("Fills in and submits form", () => {
  render(<App />);

  const firstNameInput = screen.getByPlaceholderText(/first/i);
  const lastNameInput = screen.getByPlaceholderText(/last/i);
  const emailInput = screen.getByPlaceholderText(/email/i);
  const messageInput = screen.getByPlaceholderText(/Message/i);

  fireEvent.change(firstNameInput, { target: { value: 'Jonathan' } } );
  fireEvent.change(lastNameInput, { target: { value: 'Warner' } } );
  fireEvent.change(emailInput, { target: { value: 'jonathan-warner@lambdastudents.com' } } );
  fireEvent.change(messageInput, { target: { value: 'Hello World!' } } );

  const submitBtn = screen.getByRole('button', { type: /submit/i} );

  fireEvent.click(submitBtn);
  
  expect(screen.getByText(/Jonathan/i)).toBeInTheDocument(); 
}); 
