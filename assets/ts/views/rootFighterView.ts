import FighterView, { IFighterView } from './fighterView';

export interface IRootFighterView extends IFighterView {
    createFighter: (fighter: { [key: string]: string }, handleClick: (event: MouseEvent, fighter: { [key: string]: string }) => void) => void;
}

export default class RootFighterView extends FighterView implements IRootFighterView{
    constructor(fighter: { [key: string]: string }, handleClick: (event: MouseEvent, fighter: { [key: string]: string }) => void) {
        super(fighter, handleClick);
    }

    public createFighter(fighter: { [key: string]: string }, handleClick: (event: MouseEvent, fighter: { [key: string]: string }) => void) {
        super.createFighter(fighter, handleClick);
        this.element.append(this.imageElement, this.nameElement);

        const checkElement = this._createCheckbox();
        this.element.append(checkElement);
        this.element.addEventListener('click', event => handleClick(event, fighter), false);
    }

    private _createCheckbox() {
        const checkboxes = document.getElementsByClassName('check');
        const attributes = { type: 'checkbox' };
        const checkElement = this.createElement('input', 'check', attributes);
        checkElement.addEventListener('click', event => event.stopPropagation());
        (<HTMLInputElement>checkElement).addEventListener('change', function() {
            const playBtn = document.querySelector('div#root button');
            if(this.checked) {
                let checkedCount = 0;
                for (let i = 0; i < checkboxes.length; i++) {
                    if ((<HTMLInputElement>checkboxes[i]).checked) {
                        checkedCount += 1;
                    }
                }
                if (checkedCount === 2) {
                     playBtn.classList.remove('unavailable');
                    for (let i = 0; i < checkboxes.length; i++) {
                        if (!(<HTMLInputElement>checkboxes[i]).checked) {
                            (<HTMLElement>checkboxes[i].parentNode).classList.add('unavailable');
                        }
                    }
                }
            } else {
                for (let i = 0; i < checkboxes.length; i++) {
                    (<HTMLElement>checkboxes[i].parentNode).classList.remove('unavailable');
                }                    
                playBtn.classList.add('unavailable');
            }
        });
        return checkElement;
    }
}
