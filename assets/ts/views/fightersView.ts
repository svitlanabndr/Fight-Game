import View from './view';
import RootFighterView, {IRootFighterView} from './rootFighterView';
import { fightersDataSource } from '../sources/fighterDataSource';
import DetailView from './detailView';
import App from '../app'

export default class FightersView extends View {
    constructor(fighters: Array< { [key: string]: string }>) {
        super();
        this.handleClick = this._handleFighterClick.bind(this);
        this._createFighters(fighters);
    }
    readonly handleClick: (event: MouseEvent, fighter: { [key: string]: string }) => void;

    private _createFighters(fighters:Array< { [key: string]: string }>) {
        const fighterElements = fighters.map(fighter => {
            const fighterView: IRootFighterView = new RootFighterView(fighter, this.handleClick);
            return fighterView.element;
        });
        this.element = this.createElement('div', 'fighters');
        this.element.append(...fighterElements);
    }
  
    private async _handleFighterClick(event: MouseEvent, fighter: { [key: string]: string }) {
        try {
            let detailedFighter = await fightersDataSource.getFighterById(fighter._id);
            const previousModals = document.querySelectorAll('div.tingle-modal');
            for (let i = 0; i < previousModals.length; i++) {
                previousModals[i].parentNode.removeChild(previousModals[i]);
            }
            new DetailView(detailedFighter);
        } catch (error) {
            console.warn(error);
            App.rootElement.innerText = 'Failed to load details';
        }
    }
}
