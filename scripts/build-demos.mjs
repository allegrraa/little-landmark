import {build} from 'vite';
import {fileURLToPath} from 'node:url';
import {dirname,resolve} from 'node:path';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
for(const name of ['cielo','forma']){
 await build({root:resolve(root,'demos',name),configFile:resolve(root,'demos',name,'vite.config.ts'),base:`/demos/${name}/`,build:{outDir:resolve(root,'public/demos',name),emptyOutDir:true}});
}
