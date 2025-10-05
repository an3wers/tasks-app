import { createLazyFileRoute } from '@tanstack/react-router'
import { AboutPage } from '../../pages/about-page'

export const Route = createLazyFileRoute('/about/')({
  component: About,
})

function About() {
  return <AboutPage />
}
