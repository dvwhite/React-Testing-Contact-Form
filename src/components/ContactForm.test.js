import React from 'react';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  // Test the test setup
  it('renders without errors', () => {
    render(<ContactForm />)
  })
  // Test that components and/or content renders
  
    // First name
    // Last name
    // Email
    // Message
    // Submit
    
  // Test that Submit fires the onSubmit funtion

  // Test the function fired by onSubmit works as expected

  // Test that onSubmit is submitting whatever data it is given

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
 
})