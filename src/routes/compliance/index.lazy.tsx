import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/compliance/')({
  component: () => <div>Hello /compliance/!</div>
})