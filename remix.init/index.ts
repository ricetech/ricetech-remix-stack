import * as fs from "fs";
import * as path from "path";

interface MainArgs {
    isTypescript?: boolean;
    packageManager?: string;
    rootDirectory?: string;
}

const main = ({ rootDirectory }: MainArgs) => {
    if (!rootDirectory) {
        throw new Error("rootDirectory is required");
    }
    const EXAMPLE_PATH = path.join(rootDirectory, ".env.example");
    const ENV_PATH = path.join(rootDirectory, ".env")
    fs.copyFile(EXAMPLE_PATH, ENV_PATH, (err) => {
        if (err) throw err;
        console.log('Created .env file!');
    });
}

module.exports = main;
