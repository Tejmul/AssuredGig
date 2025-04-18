import lruCache from 'lru-cache'

type Options = {
  uniqueTokenPerInterval?: number
  interval?: number
}

export function rateLimit(options?: Options) {
  const tokenCache = new lruCache({
    max: options?.uniqueTokenPerInterval || 500,
    ttl: options?.interval || 60000,
    updateAgeOnGet: true,
    allowStale: false
  })

  return {
    check: (limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = (tokenCache.get(token) as number[]) || [0]
        if (tokenCount[0] === 0) {
          tokenCache.set(token, [1])
        } else {
          tokenCount[0] += 1
          tokenCache.set(token, tokenCount)
        }

        if (tokenCount[0] > limit) {
          reject(new Error('Rate limit exceeded'))
        } else {
          resolve()
        }
      }),
  }
} 