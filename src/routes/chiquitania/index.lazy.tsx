import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/chiquitania/')({
  component: () => <div>Hello /chiquitania/!</div>
})