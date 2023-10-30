import esbuild from 'esbuild';
import process from 'process';

const banner = `/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/
`;

const prod = process.argv[2] === 'production';
const isWatch = process.argv[2] === 'watch';

const context = await esbuild.context({
  banner: {
    js: banner
  },
  entryPoints: ['main.ts'],
  outfile: 'dist/main.js',
  bundle: true,
  external: [
    'obsidian',
    '@codemirror/autocomplete',
    '@codemirror/collab',
    '@codemirror/commands',
    '@codemirror/language',
    '@codemirror/lint',
    '@codemirror/search',
    '@codemirror/state',
    '@codemirror/view',
    '@lezer/common',
    '@lezer/highlight',
    '@lezer/lr'
  ],
  format: 'cjs',
  target: 'es2020',
  logLevel: 'info',
  sourcemap: prod ? false : 'inline',
  treeShaking: true,
  minify: prod
});

try {
  await context.rebuild();
  if (isWatch) {
    await context.watch();
  }
} catch (error) {
  process.exit(1);
} finally {
  process.exit(0);
}
