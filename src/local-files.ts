import fs from 'fs';
import { glob } from 'glob';
import YAML from 'yaml';

export const getAllFilenames = async () => {
  const filenames = await glob('yamls/**/*.yaml');
  console.log('Found filenames:', filenames);
  return filenames;
}

export const getAllResources = async () => {
  const files = await getAllFilenames();
  const resources: any[] = [];

  files.forEach((file) => {
    console.log('Parse:', file);
    const content = fs.readFileSync(file, 'utf8');
    const documents = YAML.parseAllDocuments(content);
    documents.forEach((document) => {
      resources.push(document.toJSON());
    })
  });

  return resources;
}
