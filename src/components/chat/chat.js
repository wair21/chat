'use strict';

export const DEFAULT_USER_NAME="%username%";

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
                }
            ],
        };
    }

    addMessage(messageObj) {
        this.data.messages.push(messageObj);
        this.render();
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
       return  this.data.messages
           .map((messageObj) =>`<span class="chat_message"> ${messageObj.nickname}:${messageObj.text}</span>`)
           .join(`<br>`);

    }
    
}