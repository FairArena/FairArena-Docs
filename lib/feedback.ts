import { PostHog } from 'posthog-node';
import {
  pageFeedback,
  type ActionResponse,
  type PageFeedback,
} from '@/components/feedback/schema';

export async function onPageFeedbackAction(feedback: PageFeedback): Promise<ActionResponse> {
  'use server';
  
  const client = new PostHog(
    process.env.NEXT_PUBLIC_POSTHOG_KEY!,
    { host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com' }
  );

  const parsed = pageFeedback.parse(feedback);
  
  client.capture({
    distinctId: 'anonymous_user',
    event: 'on_rate_docs',
    properties: parsed,
  });
  
  await client.shutdown();

  return { message: 'Feedback received' };
}


