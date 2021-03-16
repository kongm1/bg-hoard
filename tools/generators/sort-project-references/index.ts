import {Tree, formatFiles, installPackagesTask, updateJson} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (host: Tree, schema: any) {
  updateJson(host, 'workspace.json', json => {
    json.version++;
    return json;
  });
  // await libraryGenerator(host, { name: schema.name });
  // await formatFiles(host);
  // return () => {
  //   installPackagesTask(host);
  // };
}
