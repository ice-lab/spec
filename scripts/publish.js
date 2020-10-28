/* eslint-disable no-console */
/**
 * Scripts to check unpublished version and run publish
 */
const { spawnSync } = require('child_process');
const getPackageInfos = require('./getPackageInfos');

function publish(pkg, version, directory) {
  console.log('[PUBLISH]', `${pkg}@${version}`);

  spawnSync(
    'npm',
    [
      'publish',
      // use default registry
    ],
    {
      stdio: 'inherit',
      cwd: directory,
    },
  );
}

// Entry
console.log('[PUBLISH] Start:');
getPackageInfos().then((packageInfos) => {
  // Publish
  let publishedCount = 0;
  for (let i = 0; i < packageInfos.length; i++) {
    const { name, directory, localVersion, shouldPublish } = packageInfos[i];
    if (shouldPublish) {
      publishedCount++;
      console.log(`--- ${name}@${localVersion} ---`);
      publish(name, localVersion, directory);
    }
  }
  console.log(`[PUBLISH PACKAGE PRODUCTION] Complete (count=${publishedCount}):`);
});
