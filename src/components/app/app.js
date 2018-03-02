import {Chat} from './../chat/chat.js';
import {Form} from './../form/form.js';

export class App {
    constructor() {

        const chat = new Chat({
            el:document.createElement('div'),
            data:{}
        });

        this.el.append(chat.el, form.el);
        chat.render();
        form.render();
    }
}