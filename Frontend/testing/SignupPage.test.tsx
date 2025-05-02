import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignupPage from '@/app/signup/page';  // Adjust path based on your file structure
import { apiClient } from '@/lib/api-client';
import { API_SIGNUP_URL } from '@/utils/constants';

// Mocking the router and API client
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock('@/lib/api-client', () => ({
  apiClient: {
    post: jest.fn(), // Mock the post method
  },
}));

describe('SignupPage', () => {
  it('shows error if API request fails', async () => {
    const user = userEvent.setup();
    render(<SignupPage />);

    // Mocking API failure manually by using jest.fn() to simulate rejection
    apiClient.post = jest.fn().mockImplementationOnce(() => {
      return Promise.reject(new Error('API Error')); // Simulate failure here
    });

    // Fill out the form
    await user.type(screen.getByLabelText(/Username/i), 'testUser');
    await user.type(screen.getByLabelText(/Email/i), 'test@example.com');
    
    // Fix: Use getByLabelText for the Password field
    const passwordInput = screen.getByLabelText(/Password/i, { selector: 'input[name="password"]' });
    await user.type(passwordInput, 'password123');
    
    // Fix: Use getByLabelText for the Confirm Password field
    const confirmPasswordInput = screen.getByLabelText(/Confirm Password/i, { selector: 'input[name="confirmPassword"]' });
    await user.type(confirmPasswordInput, 'password123');

    // Submit the form
    await user.click(screen.getByRole('button', { name: /submit/i }));

    // Wait for the error message or handle failure scenario
    await waitFor(() => {
      // Check if the error is displayed in the UI
      expect(screen.getByText('API Error')).toBeInTheDocument();
    });
  });
});
