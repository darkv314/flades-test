import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/nosotros/')({
  component: () => <div>Hello /nosotros/!</div>
})