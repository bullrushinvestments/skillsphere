import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({ default: jest.fn() }));

describe('Core Functionality Component Tests', () => {
  test('renders component with initial state', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/initial state/i)).toBeInTheDocument();
  });

  test('handles user interaction to trigger action', async () => {
    const { getByRole } = render(<CoreFunctionalityComponent />);
    fireEvent.click(getByRole('button', { name: /trigger action/i }));
    await waitFor(() => expect(screen.getByText(/action triggered/i)).toBeInTheDocument());
  });

  test('displays loading state when fetching data', async () => {
    jest.mock('./ExternalDependency', () => ({ default: () => Promise.resolve({}) }));
    render(<CoreFunctionalityComponent />);
    fireEvent.click(getByRole('button', { name: /fetch data/i }));
    await waitFor(() => expect(screen.getByText(/loading.../i)).toBeInTheDocument());
  });

  test('handles error state when fetching fails', async () => {
    jest.mock('./ExternalDependency', () => ({ default: () => Promise.reject(new Error('Failed to fetch')) }));
    render(<CoreFunctionalityComponent />);
    fireEvent.click(getByRole('button', { name: /fetch data/i }));
    await waitFor(() => expect(screen.getByText(/error fetching data/i)).toBeInTheDocument());
  });

  test('ensures accessibility features are implemented correctly', async () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /trigger action/i });
    fireEvent.click(button);
    await waitFor(() => expect(screen.getByText(/action triggered/i)).toBeInTheDocument());

    // Check for aria-labels and roles
    expect(button).toHaveAttribute('aria-label');
    expect(button).toHaveAttribute('role', 'button');
  });

  test('mocks external dependencies correctly', async () => {
    const mockExternalDependency = jest.fn().mockResolvedValue({ data: 'mockedData' });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(getByRole('button', { name: /fetch data/i }));
    await waitFor(() => expect(screen.getByText(/mockedData/i)).toBeInTheDocument());
    expect(mockExternalDependency).toHaveBeenCalled();
  });

});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({ default: jest.fn() }));

describe('Core Functionality Component Tests', () => {
  test('renders component with initial state', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/initial state/i)).toBeInTheDocument();
  });

  test('handles user interaction to trigger action', async () => {
    const { getByRole } = render(<CoreFunctionalityComponent />);
    fireEvent.click(getByRole('button', { name: /trigger action/i }));
    await waitFor(() => expect(screen.getByText(/action triggered/i)).toBeInTheDocument());
  });

  test('displays loading state when fetching data', async () => {
    jest.mock('./ExternalDependency', () => ({ default: () => Promise.resolve({}) }));
    render(<CoreFunctionalityComponent />);
    fireEvent.click(getByRole('button', { name: /fetch data/i }));
    await waitFor(() => expect(screen.getByText(/loading.../i)).toBeInTheDocument());
  });

  test('handles error state when fetching fails', async () => {
    jest.mock('./ExternalDependency', () => ({ default: () => Promise.reject(new Error('Failed to fetch')) }));
    render(<CoreFunctionalityComponent />);
    fireEvent.click(getByRole('button', { name: /fetch data/i }));
    await waitFor(() => expect(screen.getByText(/error fetching data/i)).toBeInTheDocument());
  });

  test('ensures accessibility features are implemented correctly', async () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /trigger action/i });
    fireEvent.click(button);
    await waitFor(() => expect(screen.getByText(/action triggered/i)).toBeInTheDocument());

    // Check for aria-labels and roles
    expect(button).toHaveAttribute('aria-label');
    expect(button).toHaveAttribute('role', 'button');
  });

  test('mocks external dependencies correctly', async () => {
    const mockExternalDependency = jest.fn().mockResolvedValue({ data: 'mockedData' });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(getByRole('button', { name: /fetch data/i }));
    await waitFor(() => expect(screen.getByText(/mockedData/i)).toBeInTheDocument());
    expect(mockExternalDependency).toHaveBeenCalled();
  });

});