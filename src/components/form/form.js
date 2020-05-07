/**
 * Компонент отображения формы отправки сообщения
 */
export class Form {
    constructor({el, onSubmit}) {
        this.el = el;

        this.el.addEventListener('submit', this._onSubmit.bind(this));
        this.onSubmit = onSubmit;
    }

    render() {
        this.el.innerHTML = `
            <form>
                <textarea></textarea>
                <input type="submit" value="Отправить">
            </form>
        `;
    }

    reset() {
        this.el.querySelector('form').reset();
    }

    /**
     * Обработчик события кнопки Отправить
     * @param event
     * @private
     */
    _onSubmit(event) {
        event.preventDefault();
        this.onSubmit({
            text: event.target.querySelector('textarea').value
        });
    }
}