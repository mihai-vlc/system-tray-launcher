export function initialize() {
    let item = {
        title: 'Toggle activation',
        click: (context) => {
            item.checked = !item.checked;
            item.title = `Toggle activation: Last updated on ${new Date().toUTCString()}`;

            context.systray.sendAction({
                type: 'update-item',
                item: item,
            });
        },
    };
    return item;
}
