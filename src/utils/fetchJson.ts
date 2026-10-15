// fetchJson.ts
// Safe JSON fetch wrapper.
// Keeps network logic out of components and stores.
// Strict typing, no anys, no empty error handlers.

interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: Record<string, string>
  body?: unknown
}

// Generic JSON fetcher
// T = expected JSON shape
export const fetchJson = async <T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> => {
  const { method = 'GET', headers = {}, body } = options

  // Build request config
  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  }

  // Perform request
  const response = await fetch(url, config)

  // Handle non-OK responses
  if (!response.ok) {
    // Throwing keeps error handling consistent and avoids silent failures
    throw new Error(`Request failed: ${response.status} ${response.statusText}`)
  }

  // Parse JSON safely
  const data = (await response.json()) as T
  return data
}
