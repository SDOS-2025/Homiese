

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CollegePage from '@/app/college-Info/college_info';
import { useSearchParams } from 'next/navigation';

// Mock college data
jest.mock('@/app/college-Info/collegeData.json', () => [
  {
    name: "Test University",
    banner: "/test-banner.jpg",
    logo: "/test-logo.png",
    highlights: "Test highlights",
    courses: ["Course 1", "Course 2"],
    fees: { undergraduate: 10000 },
    placements: { average: 500000 },
    scholarships: ["Scholarship 1"],
    reviews: [],
    admissionProcess: "Test process",
    mentors: [{ id: 1, name: "Test Mentor" }]
  }
]);

// Mock Next.js components
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => React.createElement('img', props),
}));

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

// Mock child components using React.createElement
jest.mock('@/app/Components/collegeAbout', () => ({
  __esModule: true,
  default: () => React.createElement('div', null, 'CollegeAbout'),
}));

jest.mock('@/app/Components/MentorPage', () => ({
  __esModule: true,
  default: () => React.createElement('div', null, 'MentorPage'),
}));

jest.mock('@/app/Components/relatedPostsCollege', () => ({
  __esModule: true,
  default: () => React.createElement('div', null, 'RelatedPostsCollege'),
}));

describe('CollegePage', () => {
  const mockUseSearchParams = useSearchParams as jest.MockedFunction<typeof useSearchParams>;

  beforeEach(() => {
    mockUseSearchParams.mockReturnValue({
      get: (key: string) => 'Test University'
    } as any);
  });

  it('shows college not found when query is invalid', () => {
    mockUseSearchParams.mockReturnValue({
      get: (key: string) => 'Invalid College'
    } as any);

    render(<CollegePage />);
    expect(screen.getByText(/College Not Found/i)).toBeInTheDocument();
  });

  it('renders college details when valid query is provided', () => {
    render(<CollegePage />);
    
    expect(screen.getByText('Test University')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Test University' })).toHaveAttribute('src', '/test-banner.jpg');
    expect(screen.getByRole('img', { name: 'Test University' })).toHaveAttribute('src', '/test-logo.png');
  });

  it('renders all navigation tabs', () => {
    render(<CollegePage />);
    
    expect(screen.getByRole('button', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Mentors/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Related Posts/i })).toBeInTheDocument();
  });

  it('switches tabs correctly', async () => {
    const user = userEvent.setup();
    render(<CollegePage />);

    // Test initial About tab
    expect(screen.getByText('CollegeAbout')).toBeInTheDocument();

    // Test Mentors tab
    await user.click(screen.getByRole('button', { name: /Mentors/i }));
    expect(screen.getByText('MentorPage')).toBeInTheDocument();

    // Test Related Posts tab
    await user.click(screen.getByRole('button', { name: /Related Posts/i }));
    expect(screen.getByText('RelatedPostsCollege')).toBeInTheDocument();
  });

  it('highlights active tab', async () => {
    const user = userEvent.setup();
    render(<CollegePage />);

    const aboutTab = screen.getByRole('button', { name: /About/i });
    const mentorsTab = screen.getByRole('button', { name: /Mentors/i });

    // Initial state
    expect(aboutTab).toHaveClass('bg-red-400');
    expect(mentorsTab).not.toHaveClass('bg-red-400');

    // After clicking mentors tab
    await user.click(mentorsTab);
    expect(aboutTab).not.toHaveClass('bg-red-400');
    expect(mentorsTab).toHaveClass('bg-red-400');
  });

  it('handles case-insensitive query parameter', () => {
    mockUseSearchParams.mockReturnValue({
      get: (key: string) => 'test university'
    } as any);

    render(<CollegePage />);
    expect(screen.getByText('Test University')).toBeInTheDocument();
  });
});