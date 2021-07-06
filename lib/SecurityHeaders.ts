interface ResponseHeaders {
    "x-frame-options": string
    "referrer-policy": string
    "content-security-policy": string
    "x-content-type-options": string
    "strict-transport-security": string  
}
  
const defaultResponseHeaders: ResponseHeaders = {
  "referrer-policy": "no-referrer-when-downgrade",
  "x-frame-options": "DENY",
  "content-security-policy": "default-src self",
  "x-content-type-options": "nosniff",
  "strict-transport-security": "max-age=31536000; includeSubDomains"
}
  
interface Config {
  responseHeaders?: Partial<ResponseHeaders> // overrideable
}

function handler(event) {
    var response = event.response;
    const headers = response.headers ?? defaultResponseHeaders;

    
    // Set the cache-control header
    const setHeaderCode = headers.entries()

    for (const [key, value] of Object.entries(headers)) {
      `
      headers['${key.toLowerCase()}'] = { value: '${value}'}
    `
    }
  
    // Return response to viewers
    return response;
}