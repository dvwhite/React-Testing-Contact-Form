import React, { createRef } from 'react';
import { fireEvent, render, cleanup, act } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
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
  // Test contact form renders
  it('renders form elements without errors', () => {
    const { getByTestId, getByText } = render(
      <ContactForm />
    );
    // First name
    getByTestId(/firstname/i);
    
    // Last name
    getByTestId(/lastname/i);

    // Email
    getByTestId(/email/i);

    // Message
    getByTestId(/message/i);

    // Submit
    getByText(/submit/i);
  })
  cleanup();
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

  // Test that onSubmit is submitting whatever data it is given
  describe ('stores the data using setData when onSubmit fires', () => {
    const form = Enzyme.shallow(<ContactForm />)
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((init) => [init, setState]);

    // Teardowm
    afterEach(() => {
      jest.clearAllMocks();
    })

    // Test the mock data is submitted in the setState
    describe('Submit', () => {
      // Setup
      // form = Enzyme.shallow(<ContactForm />);
      // Set mock data
      form.find('[htmlFor="firstName"]').value = 'a';
      form.find('[htmlFor="lastName"]').value = 'b';
      form.find('[htmlFor="email"]').value = 'c';
      form.find('[htmlFor="message"]').value = 'd';
      // Submit the mock data
      form.simulate('submit');
      // Test expected vs. actual values
      expect(setState).toHaveBeenCalled();
    })
  })

})

  // Test the integrity of the data posted / submitted

    // Test the data posted at initial submit

      // Contains the expected data

      // Shape matches target API specification for request type
    
      // Take a snapshot of the data prior to submission

    // Test that data posted is stored in state

    // Test that data posted in prior test is correctly retained following a partial overwrite

    // Test that data posted in prior test is correctly retained in full overwrite
  
    // Test that data does not save in unexpected locations, such as localStorage

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
