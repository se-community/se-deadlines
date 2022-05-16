import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import recursive from "recursive-readdir";
import download from "download-git-repo";

class FileUtils {

    static async getDeadlines() {

        const tempPath = path.join(process.cwd(), "tmp");
        const deadLinesPath = path.join(tempPath, "deadlines");

        return new Promise(resolve => {

            if (fs.existsSync(tempPath)) {
                fs.rmSync(tempPath, { recursive: true });
            }

            download("github:se-community/se-datasource", tempPath, function (err) {

                recursive(deadLinesPath, [".DS_Store"], function (err, files) {

                    let deadlines = [];

                    files.forEach(file => {

                        const fileContent = fs.readFileSync(file, "utf8");

                        const parsedFile = yaml.load(fileContent);

                        deadlines = [...deadlines, ...parsedFile];
                    });

                    resolve(deadlines);
                });
            });
        });
    }
}

export default FileUtils;
