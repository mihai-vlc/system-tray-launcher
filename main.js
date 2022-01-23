import SysTray from 'systray2';
import os from 'os';
import fs from 'fs';

let context = {
    systray: null, // populated after the menu is built
};

const itemExit = {
    title: 'Exit',
    click: () => {
        context.systray.kill(false);
    },
};

async function buildMenu() {
    let files;
    let base;

    if (fs.existsSync('./actions')) {
        files = await fs.promises.readdir('./actions');
        base = 'actions';
    } else {
        files = await fs.promises.readdir('./example-actions');
        base = 'example-actions';
    }

    files = files
        .filter((file) => {
            return file.endsWith('.js') || file.endsWith('.mjs');
        })
        .map((file) => {
            return import(`./${base}/${file}`);
        });

    let dynamicItems = (await Promise.all(files)).map((item) => {
        return item.initialize();
    });

    return {
        icon: os.platform() === 'win32' ? './logo_s.ico' : './logo_s.png',
        title: 'My tools',
        tooltip: 'My tools',
        items: [...dynamicItems, SysTray.default.separator, itemExit],
    };
}

buildMenu()
    .then(function (menu) {
        context.systray = new SysTray.default({ menu });

        context.systray.onClick((action) => {
            if (action.item.click != null) {
                action.item.click(context);
            }
        });

        context.systray
            .ready()
            .then(() => {
                console.log('systray started!');
            })
            .catch((err) => {
                console.log('systray failed to start: ' + err.message);
            });
    })
    .catch((err) => {
        console.log('menu build failed: ' + err.message);
    });
