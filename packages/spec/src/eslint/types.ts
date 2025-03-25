import { Linter } from 'eslint';

export type Preset = 'ice' | 'pkg' | 'spark-framework' | 'spark-child';
export type PresetLinterConfigs = Partial<Record<Preset, Linter.Config>>;
