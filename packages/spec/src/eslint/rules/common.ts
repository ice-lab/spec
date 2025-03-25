import eslint from '@eslint/js';
import { PresetLinterConfigs } from '../types.js';

export const commonPresetLinterConfigs: PresetLinterConfigs = {
  ice: {
    rules: {
      'no-console': 'off',
    },
  },
  pkg: {
    rules: {
      'no-console': [
        'error',
        {
          allow: ['warn', 'error'],
        },
      ],
    },
  },
};

export default eslint.configs.recommended;
