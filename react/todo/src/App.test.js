import { render, screen } from '@testing-library/react'
import App from './lecture12'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText('거미')
  expect(linkElement).toBeInTheDocument()
})