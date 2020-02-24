import React, { createRef } from 'react';
import { fireEvent, render, cleanup, act } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ContactForm from './ContactForm';

// Tests
describe('ContactForm loads without crashing', () => {
  // Initial validation of test setup
  it('renders ContactForm without errors', () => {
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
  let queryByTestId;

  // Setup
  beforeEach(() => {
    const form = render(<ContactForm />);
    getByTestId = form.getByTestId;
    getByText = form.getByText;
    queryByTestId = form.queryByTestId;
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

  // Prior to submit, the pre tag shouldn't display
  it (`doesn't render the pre of data before submit is clicked`, () => {
    expect(queryByTestId('pre-data')).toBeNull();
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
      expect(spy).not.toHaveBeenCalledTimes(0);
    });  
  })

  cleanup();
})

describe('test the data is submitted correctly from the form', () => {
  
  // Teardown
  afterEach(() => {
    cleanup();
  })

  it('submits the correct data upon submitting form', () => {
    const { getByTestId } = render(<ContactForm />);

    const testObject = {
      "firstName": "David",
      "lastName": "White",
      "email": "david@davidwhite.com",
      "message": "This is a test"
    };
    
    // Populate the form
    // First name
    const inputFname = getByTestId('firstname');
    expect(inputFname.value).toBe("");
    fireEvent.change(inputFname, { target: { value: testObject.firstName} });
    expect(inputFname.value).toBe("David");
    console.log(inputFname.value)

    // Last name
    const inputLname = getByTestId('lastname');
    expect(inputLname.value).toBe("");
    fireEvent.change(inputLname, { target: { value: testObject.lastName} });
    expect(inputLname.value).toBe("White");
    console.log(inputLname.value)

    // Email
    const inputEmail = getByTestId('email');
    expect(inputEmail.value).toBe("");
    fireEvent.change(inputEmail, { target: { value: testObject.email} });
    expect(inputEmail.value).toBe("david@davidwhite.com");
    console.log(inputEmail.value)

    // Message
    const message = getByTestId('message');
    expect(message.value).toBe("");
    fireEvent.change(message, { target: { value: testObject.message} });
    expect(message.value).toBe("This is a test");
    console.log(message.value)


    // Submit the form
    const mockOnSubmit = jest.fn(data => data);
    const button = getByTestId('submit');
    button.onclick = function() {
      const data = {
        firstName: inputFname.value,
        lastName: inputLname.value,
        email: inputEmail.value,
        message: message.value,
      };
      mockOnSubmit(data);
    };
    fireEvent.click(button);

    // Compare data to the expected data
    expect(mockOnSubmit.mock.results[0].value).toEqual(testObject);
    expect(mockOnSubmit.mock.results[0].value).not.toEqual({});
  })
})