import { modal } from 'tingle.js';

export default class Modal {
    static createModal(closeMethods?: Array<string>) {
        return new modal({
            footer: true,
            stickyFooter: false,
            closeMethods: closeMethods,
            closeLabel: "Close",
            cssClass: ['custom-class-1', 'custom-class-2']
        });
    }
}
