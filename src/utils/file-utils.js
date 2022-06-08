import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import recursive from "recursive-readdir";
import download from "download-git-repo";

class FileUtils {

    static async getDeadlines() {

        const tempPath = path.join(process.cwd(), "tmp");
        const deadLinesPath = path.join(tempPath, "data", "deadlines");

        return new Promise((resolve, reject) => {

            if (fs.existsSync(tempPath)) {
                fs.rmSync(tempPath, { recursive: true });
            }

            download("github:se-community/se-datasource", tempPath, {}, function (errorForDownload) {

                if(errorForDownload){
                    reject(errorForDownload);
                    return;
                }

                recursive(deadLinesPath, [".DS_Store"], function (errorForRecursive, files) {

                    if(errorForRecursive){
                        reject(errorForRecursive);
                        return;
                    }

                    let conferences = [];

                    files.forEach(file => {

                        const fileContent = fs.readFileSync(file, "utf8");

                        const parsedFile = yaml.load(fileContent);

                        conferences.push(parsedFile);
                    });

                    resolve(conferences);
                });
            });
        });
    }
}

export default FileUtils;
