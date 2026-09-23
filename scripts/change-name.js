import {
  pathJoin,
  readFileToJsonSync,
  getDirectoryBy,
  writeJsonFileSync,
} from '@vvi/node';

// 文件已废弃

const packageJson = readFileToJsonSync('./dist/package.json');

packageJson.name = '@qqi/table';

{
  //  写入 package.json

  const distPath = getDirectoryBy('dist', 'directory');

  const distPackagePath = pathJoin(distPath, './dist/package.json');

  writeJsonFileSync(distPackagePath, packageJson);
}
