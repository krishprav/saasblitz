import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "saasblitz-dev",
  // Skip event key when running with the local Inngest dev server
  eventKey: process.env.INNGEST_DEV ? undefined : process.env.INNGEST_EVENT_KEY,
});