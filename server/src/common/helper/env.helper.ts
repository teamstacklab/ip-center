import { existsSync } from "fs";
import { resolve } from "path";


export function getEnviromentPath(location: string): string {
    const env: string | undefined = process.env.NODE_ENV;
    const fallback: string = resolve(`${location}/.env`);
    const filename: string = env ? `${location}.env` : `development.env`;

    let filePath: string = resolve(`${location}/${filename}`);

    if (!existsSync(filePath)) {
        filePath = fallback
    };

    return filePath;
}