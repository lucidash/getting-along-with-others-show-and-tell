import { copyFile, mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
const files = [
  'index.html',
  'script.html',
  'cards.html',
  'slides.css',
  'slides.js',
  'handouts.css',
  'images/pencils.png',
  'images/share.png',
  'images/turns.png',
  'images/help.png',
  'images/kind.png',
];
const publicFiles = new Set(files);

for (const file of files) {
  const info = await stat(path.join(root, file));
  if (!info.isFile() || info.size === 0) {
    throw new Error(`배포 파일이 비어 있거나 일반 파일이 아닙니다: ${file}`);
  }
}

for (const file of files.filter(name => name.endsWith('.html'))) {
  const html = await readFile(path.join(root, file), 'utf8');
  for (const [, reference] of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)) {
    if (/^(?:#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(reference)) continue;
    const pathname = reference.split(/[?#]/)[0];
    const target = path.posix.normalize(path.posix.join(path.posix.dirname(file), pathname));
    if (!publicFiles.has(target)) {
      throw new Error(`배포 파일에 포함되지 않은 참조입니다: ${file} → ${reference}`);
    }
  }
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of files) {
  const destination = path.join(output, file);
  await mkdir(path.dirname(destination), { recursive: true });
  await copyFile(path.join(root, file), destination);
}
await writeFile(path.join(output, '.nojekyll'), '');
console.log(`배포용 정적 파일 ${files.length}개를 dist/에 빌드했습니다.`);
