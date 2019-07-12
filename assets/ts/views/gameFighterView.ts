import FighterView, { IFighterView } from './fighterView';

export interface IGameFighterView extends IFighterView {
    createFighter: (fighter: { [key: string]: string }, handleClick: (event: MouseEvent, fighter: { [key: string]: string }) => void) => void;
}

export default class GameFighterView extends FighterView implements IGameFighterView { 
    constructor(fighter: { [key: string]: string }, handleClick: (event: MouseEvent, fighter: { [key: string]: string }) => void) {
        super(fighter, handleClick);
    }

    public createFighter(fighter: { [key: string]: string }, handleClick: (event: MouseEvent, fighter: { [key: string]: string }) => void) {
        super.createFighter(fighter, handleClick);
        const healthElement = this._createHealthIndicator();
        this.element.append(this.nameElement, healthElement, this.imageElement);
        this.imageElement.addEventListener('click', event => handleClick(event, fighter), false);
    }

    private _createHealthIndicator(): HTMLElement {
        const healthElement = this.createElement('div', 'outerIndicator');
        const indicator = this.createElement('div', 'indicator');
        const percentage = this.createElement('span', 'percentage');
        healthElement.append(percentage);
        healthElement.append(indicator);
        return healthElement;
    }
}
