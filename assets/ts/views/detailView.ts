import View, { IView } from './view';
import Modal from './modalView';
import { fightersDataSource } from '../sources/fighterDataSource';
import { modal } from 'tingle.js';

interface IDetailView extends IView {

}

class DetailView extends View { 
    constructor(fighter: {
        [key: string]: string
    }) {
        super();
        this.modal = Modal.createModal(['button', 'overlay', 'escape']);
        this._show(fighter);
    }
    modal: modal;
    private _show(fighter: {
        [key: string]: string
    }) {
        this.modal.setContent(this._createForm(fighter));
        this.modal.addFooterBtn('Edit', 'tingle-btn tingle-btn--primary', () => {
            this._handleButton();
            this.modal.destroy();
        });
        this.modal.open();
    }

    private _handleButton() {

        const inputs = document.querySelectorAll("input[type='text']");
        const updatedFighter: {[key: string]: string} = {};
        for (let i = 0; i < inputs.length; i++) {
            updatedFighter[(<HTMLInputElement>inputs[i]).name] = ((<HTMLInputElement>inputs[i]).value);
        }
        console.log(updatedFighter);
        this.modal.destroy();

        fightersDataSource.fightersDetailsMap.set(updatedFighter._id, updatedFighter);
        document.getElementsByClassName('fighter')[parseInt(updatedFighter._id)  - 1].querySelector('span').innerText = updatedFighter.name;
    }

    private _createForm(obj: {
        [key: string]: string
    }) {
        this.element = this.createElement('div', 'form');
        Object.keys(obj).forEach(key => {
            if (!(key === '_id'|| key === 'source')) {
                this.element.append(this._createInput(key, obj[key]));
            }
            else {  
                const noInput = this._createInput(key, obj[key]);
                noInput.classList.add("non-edit");
                this.element.append(noInput);
            }
        });
        return this.element;
    }

    private _createInput(name: string, value: string) {
        const input = this.createElement('div', name );
        const attributes = { id:name ,type: 'text', name, value };
        const inputField = this.createElement('input', 'input', attributes);
        const labelAttr = { for:name };
        const label = this.createElement('label', name, labelAttr);

        label.innerText = name + ': ';
        input.append(label, inputField);
        return input;
    }


    //unused?
    private _createButton() {
        const editBtn = this.createElement('button', 'edit');
        editBtn.innerText = 'Edit';
        return editBtn;
    }
}

export default DetailView;
