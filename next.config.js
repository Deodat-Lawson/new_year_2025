/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    // Enable/disable React strict mode as needed
    reactStrictMode: true,

    // 1. Disable TypeScript type checking during builds
    typescript: {
        ignoreBuildErrors: true,
    },

    // 2. Disable ESLint checks during builds
    eslint: {
        ignoreDuringBuilds: true,
    },
};


export default config;
