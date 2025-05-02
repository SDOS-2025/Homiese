import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignupPage from '@/app/signup/page';
import { apiClient } from '@/lib/api-client';
import { API_SIGNUP_URL } from '@/utils/constants';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock('@/lib/api-client', () => ({
  apiClient: {
    post: jest.fn(),
  },
}));

describe('SignupPage', () => {
  it('renders all form fields, submit button, and login link', () => {
    render(<SignupPage />);

    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument();
  });

  it('submits form data correctly', async () => {
    const user = userEvent.setup();
    render(<SignupPage />);

    await user.type(screen.getByLabelText('Username'), 'testuser');
    await user.type(screen.getByLabelText('Email'), 'test@example.com');
    await user.type(screen.getByLabelText('Password'), 'securepassword123');
    await user.type(screen.getByLabelText('Confirm Password'), 'securepassword123');
    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(apiClient.post).toHaveBeenCalledWith(
      API_SIGNUP_URL,
      {
        username: 'testuser',
        email: 'test@example.com',
        password: 'securepassword123',
      },
      { withCredentials: true }
    );
  });
});