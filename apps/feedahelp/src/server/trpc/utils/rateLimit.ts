import { RateLimiterMemory } from "rate-limiter-flexible";

export const requestLimiter = new RateLimiterMemory({
    points: 3,
    duration: 60
})
