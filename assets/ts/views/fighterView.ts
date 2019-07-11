import View, { IView } from './view';

export interface IFighterView extends IView {
    nameElement: HTMLSpanElement;
    imageElement: HTMLElement;
}

export default class FighterView extends View implements IFighterView {
    constructor(fighter: { [key: string]: string }, handleClick: (event: MouseEvent, fighter: { [key: string]: string }) => void) {
        super();
        this.createFighter(fighter, handleClick);
    }
    nameElement: HTMLSpanElement;
    imageElement: HTMLElement;

    protected createFighter(fighter: { [key: string]: string },  handleClick: (event: MouseEvent, fighter: { [key: string]: string }) => void) {
        const { name, source } = fighter;
        this.nameElement = this._createName(name);
        this.imageElement = this._createImage(source);
        this.element = this.createElement('div','fighter');
    }
  
    private _createName(name: string): HTMLSpanElement {
        const nameElement = this.createElement('span','name' );
        nameElement.innerText = name;
        return nameElement;
    }
  
    private _createImage(source: string): HTMLElement {
        const imgElement = this.createElement('img', 'fighter-image', { src: source });
        return imgElement;
    }
}
