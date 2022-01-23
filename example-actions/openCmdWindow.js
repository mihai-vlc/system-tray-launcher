import { exec } from 'child_process';

export function initialize() {
    let item = {
        title: 'Show nodejs version',
        click: (context) => {
            // example of how to launch a new cmd windows
            exec('start cmd.exe /K node --version');
        },
    };
    return item;
}
