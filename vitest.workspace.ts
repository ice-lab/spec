// https://vitest.dev/guide/workspace.html#defining-a-workspace
import { defineWorkspace } from 'vitest/config';

// defineWorkspace provides a nice type hinting DX
export default defineWorkspace(['packages/**/*/vitest.config.ts']);
