import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Initialize Upstash Redis (Free Tier Ready)
// If environment variables are missing, we'll bypass rate limiting to prevent site downtime
const redis = (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

const ratelimit = redis 
  ? new Ratelimit({
      redis: redis,
      limiter: Ratelimit.tokenBucket(5, '15 m', 5), // 5 requests per 15 minutes
    })
  : null;

export default async function proxy(request: NextRequest) {
  // Only apply rate limiting to the leads API
  if (request.nextUrl.pathname.startsWith('/api/leads')) {
    if (ratelimit) {
      const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? 
                 request.headers.get('x-real-ip') ?? 
                 '127.0.0.1';
      const { success, limit, remaining, reset } = await ratelimit.limit(ip);

      if (!success) {
        return NextResponse.json(
          { message: 'Too many requests. Please try again later.' },
          { 
            status: 429,
            headers: {
              'X-RateLimit-Limit': limit.toString(),
              'X-RateLimit-Remaining': remaining.toString(),
              'X-RateLimit-Reset': reset.toString(),
            }
          }
        );
      }
    } else {
      console.warn('[SECURITY] Rate limiting bypassed: Upstash credentials missing.');
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
