import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/proyectos/')({
  component: () => <div>Hello /proyectos/!</div>
})