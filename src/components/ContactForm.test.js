import React, { createRef } from 'react';
import { fireEvent, render, cleanup, act } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Enzyme, { mount, find, simulate } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContactForm from './ContactForm';

// Tests
describe('ContactForm initial validation', () => {
  // Initial validation of test setup
  it('ContactForm renders without errors', () => {
    render(<ContactForm />)
  })
  cleanup();
})

describe('ContactForm renders successfully', () => {
  // Declare test methods in outermost function scope to create a closure
  // enabling access to the methods are they are created and destroyed
  // before and after each test using beforeEach() and afterEach()
  let getByTestId;
  let getByText;

  // Setup
  beforeEach(() => {
    const form = render(<ContactForm />);
    getByTestId = form.getByTestId;
    getByText = form.getByText;
  })

  // Teardown
  afterEach(() => {
    cleanup();
  })

  // Test contact form renders
  it('renders form without errors', () => {
    render(<ContactForm />);
  });
  
  // First name
  it('renders first name without errors', () => {
    const fname = getByTestId(/firstname/i);
    expect(fname).toBeInTheDocument();
  });

  // Last name
  it('renders last name without errors', () => {
    const lastName = getByTestId(/lastname/i);
    expect(lastName).toBeInTheDocument();
  });

  // Email
  it('renders email without errors', () => {
    const email = getByTestId(/email/i);
    expect(email).toBeInTheDocument();
  });

  // Message
  it('renders message without errors', () => {
    const message = getByTestId(/message/i);
    expect(message).toBeInTheDocument();
  });

  // Submit
  it('renders submit without errors', () => {
    const submit = getByText(/submit/i);
    expect(submit).toBeInTheDocument();
  });
})

describe('submitting succesfully saves data to state', () => {
  // Test that Submit fires the onSubmit funtion
  it('fires onSubmit when clicking Submit', async () => {
    // Test variables and references
    const spy = jest.fn();
    const { getByText } = render(
      <ContactForm />
    );
    await act(async () => {
      // Click the submit button with spy monitoring submit calls a function onSubmit
      const submit = getByText(/submit/i);
      submit.onclick = spy;
      fireEvent.click(submit); // left click
      expect(spy).toHaveBeenCalledTimes(1);  
    });  
    cleanup();
  })
})

  // Test that data validation occurs in required fields

    // Required input fields display validation if length of content < 1

      // First name
      // Last name
      // Email
    
    // Test for expected data type, regex match, and max-length (as applicable)

      // Test data type of fields matches expected data type
      // Create JSDoc documentation comments

        /* First name
          @param {string} firstName
        */
       // Expected: string
       // Match: N/A
       // Max-length: N/A

        /* Last name
          @param {string} lastName
        */
       // Expected: string
       // Match: N/A
       // Max-length: N/A

        /* Email
          @param {string} email
        */
       // Expected: string
       // Match: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i
       // Max-length: N/A

        /* Message
          @param {string} message
        */
       // Expected: string
       // Match: N/A
       // Max-length: N/A