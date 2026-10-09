const isGitHubPagesBuild =
  process.env.GITHUB_ACTIONS === "true" &&
  process.env.GITHUB_REPOSITORY === "emilchacko/aurayurvdawebsite";

export const withBasePath = (path: string) =>
  `${isGitHubPagesBuild ? "/aurayurvdawebsite" : ""}${path}`;
