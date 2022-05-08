import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import recursive from "recursive-readdir";

export default async function getAllDeadlines() {

    const dirPaths = path.join(process.cwd(), "data", "deadlines");

    return new Promise(resolve => {

        recursive(dirPaths, [".DS_Store"], function (err, files) {

            let deadlines = [];

            files.forEach(file => {

                const fileContent = fs.readFileSync(file, "utf8");

                deadlines = [...deadlines, ...yaml.load(fileContent)];
            });

            resolve(deadlines);
        });
    });
}
