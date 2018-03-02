'use strict';

export const DEFAULT_USER_NAME="Ayrat";

export  class Chat {
    constructor(el, data) {
        this.el = el;
        this.data = {
            nickname:DEFAULT_USER_NAME,
            messages:[
                {
                    nickname:'',
                    text:'Text',
                    data:new Date()
                },
            ],
        };
    }

    render() {
        this.el.innerHTML = `
            <div class="chat">
                <div class="chat__messages">
                    ${this._getMessagesHTML()}
                </div>
            </div>
            `;
    }

    _getMessagesHTML() {
       // this.data.messages.map((messageObj) =>`<span class="chat_message"> ${}`);
    }
    
}