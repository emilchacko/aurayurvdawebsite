import type { NextConfig } from "next";

const isGitHubPagesBuild =
  process.env.GITHUB_ACTIONS === "true" &&
  process.env.GITHUB_REPOSITORY === "emilchacko/aurayurvdawebsite";

const nextConfig: NextConfig = {
  ...(isGitHubPagesBuild ? { output: "export" as const } : {}),
  basePath: isGitHubPagesBuild ? "/aurayurvdawebsite" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  cacheComponents: !isGitHubPagesBuild,
  partialPrefetching: !isGitHubPagesBuild,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
