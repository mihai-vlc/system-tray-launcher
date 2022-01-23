import { showText } from '../outputUtils.js';

export function initialize() {
    return {
        title: 'More actions',
        items: [
            {
                title: 'Open output',
                tooltip: 'Will write a message to a file and open it in vscode',
                enabled: true,
                click: (context) => {
                    showText('Well this is an interesting idea !');
                },
            },
            {
                title: 'Open some other output',
                tooltip: 'This is a submenu item tooltip',
                enabled: true,
                click: (context) => {
                    showText('Well this is another interesting idea !');
                },
            },
        ],
    };
}
