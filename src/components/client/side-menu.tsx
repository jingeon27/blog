import fs from "fs";
import path from "path";
import { readdir } from "node:fs/promises";
export const SideMenu = async () => {
  const folderStructure = await exploreFolder();
  return <>{}</>;
};

interface IFolderStructure {
  [folder: string]: string[] | IFolderStructure;
}

const exploreFolder = (): Promise<IFolderStructure> => {
  return new Promise<IFolderStructure>((resolve, reject) => {
    const folderStructure: IFolderStructure = {};
    function traverseDir(dir: string, parentFolder: string) {
      const files = fs.readdirSync(dir);
      const childFiles: string[] = [];
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isFile() && path.extname(file) === ".mdx") {
          childFiles.push(path.basename(file, ".mdx"));
        } else if (stat.isDirectory()) {
          traverseDir(filePath, file);
        }
      }
      if (childFiles.length > 0) {
        folderStructure[parentFolder] = childFiles;
      }
    }
    traverseDir(path.join(__dirname), "");
    resolve(folderStructure);
  });
};
