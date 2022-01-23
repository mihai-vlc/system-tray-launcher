import path from 'node:path';
import { exec } from 'child_process';
import os from 'os';
import fs from 'fs';

/**
 * Create a temporary file and opens it in vscode with the provided content.
 *
 * @param {String} text The content of the file.
 * @param {String} extension The file extension (useful for syntax highlight)
 */
export function showText(text, extension = 'txt') {
    let time = new Date().getTime();
    let outputFile = path.join(
        os.tmpdir(),
        `custom-output-${time}.${extension}`
    );

    fs.writeFileSync(outputFile, text);

    exec(`code "${outputFile}"`);
}
