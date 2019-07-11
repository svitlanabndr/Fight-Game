import View, { IView } from './view';

interface IButtonView extends IView {

}

export default class ButtonView extends View implements IButtonView {
    constructor(callback: (ids: Array<string>) => void) {
        super();
        this._createButton(callback);
    }

    private _createButton(callback: (ids: Array<string>) => void) {
        this.element = this.createElement('button', 'unavailable');
        this.element.classList.add('tingle-btn');
        this.element.classList.add('tingle-btn--danger');
        this.element.innerText = 'LET`S FIGHT';
        this.element.addEventListener('click', () => this._showGame(callback), false);
    }

    private _showGame(callback: (ids: Array<string>) => void) {
        const checkboxes = document.getElementsByClassName('check');
        const checkedIds = [];
        for (let i = 0; i < checkboxes.length; i++) {
            if ((<HTMLInputElement> checkboxes[i]).checked) {
                checkedIds.push(`${i + 1}`);
            }
        }
        callback(checkedIds);
    }
}
