import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import recursive from "recursive-readdir";

export default async function getAllDeadlines() {

    const dirPaths = path.join(process.cwd(), "data", "conferences");

    return new Promise(resolve => {

        recursive(dirPaths, [".DS_Store"], function (err, files) {

            let deadlines = [];

            files.forEach(file => {

                const fileContent = fs.readFileSync(file, "utf8");

                const parsedFile = yaml.load(fileContent);

                deadlines = [...deadlines, ...parsedFile];
            });

            resolve(deadlines);
        });
    });
}
