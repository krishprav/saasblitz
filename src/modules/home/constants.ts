export const PROJECT_TEMPLATES = [
  {
    emoji: "🚀",
    title: "Modern SaaS landing",
    prompt:
      "Create a modern SaaS landing page with a sticky navbar, hero with CTA, features grid, testimonials, pricing section, FAQ, and footer. Use Tailwind + shadcn/ui, responsive layout, and the app's navy glass theme. Keep typography clean, no gradient text.",
  },
  {
    emoji: "📊",
    title: "Analytics dashboard",
    prompt:
      "Build an analytics dashboard with a collapsible sidebar, header actions, KPI cards, a line chart and bar chart (Recharts), and a recent activity table with pagination and filters. Persist sidebar state in localStorage.",
  },
  {
    emoji: "🧩",
    title: "Kanban task board",
    prompt:
      "Implement a kanban board with columns (Backlog, In Progress, Done) and drag-and-drop cards using react-beautiful-dnd. Support add/edit/delete tasks, column reordering, and local persistence.",
  },
  {
    emoji: "🗂️",
    title: "File manager UI",
    prompt:
      "Build a file manager with a folders sidebar, file grid with previews, selection states, rename/delete actions, and a details drawer. Include keyboard focus rings and accessible labels.",
  },
  {
    emoji: "🛒",
    title: "E-commerce storefront",
    prompt:
      "Create a storefront with category filters, product grid, product detail modal, and a cart drawer. Manage cart state client-side and show price totals with disabled checkout button.",
  },
  {
    emoji: "🎞️",
    title: "Video gallery app",
    prompt:
      "Build a video gallery with category chips, responsive thumbnail grid, and a modal preview with title and description. Include skeletons for loading states and keyboard navigation.",
  },
  {
    emoji: "💬",
    title: "Chat interface",
    prompt:
      "Implement a chat UI with message list, avatars, timestamps, typing indicator, and a composer with multiline input + send button. Support optimistic message sending and auto-scroll to bottom.",
  },
  {
    emoji: "📚",
    title: "Listings directory",
    prompt:
      "Create a listings directory (properties/jobs/etc.) with a filter sidebar, responsive cards, and a details modal. Add empty states and no-results messaging with a reset filters action.",
  },
] as const;