import recommended from "./recommended.js";

export interface ConfigOptions {
  // none
}

export function getConfig(options?: ConfigOptions) {
  return recommended
}
