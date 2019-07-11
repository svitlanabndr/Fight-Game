import View, {IView} from './view';
import RootFighterView from './rootFighterView';
import { fightersDataSource } from '../sources/fighterDataSource';
import DetailView from './detailView';
import App from '../app'

interface IFightersView extends IView {

}

export default class FightersView extends View implements IFightersView{
    constructor(fighters: Array< { [key: string]: string }>) {
        super();
        this.handleClick = this.handleFighterClick.bind(this);
        this.createFighters(fighters);
    }
    handleClick: (event: MouseEvent, fighter: { [key: string]: string }) => void;

    createFighters(fighters:Array< { [key: string]: string }>) {
        const fighterElements = fighters.map(fighter => {
            const fighterView = new RootFighterView(fighter, this.handleClick);
            return fighterView.element;
        });
        this.element = this.createElement('div', 'fighters');
        this.element.append(...fighterElements);
    }
  
    async handleFighterClick(event: MouseEvent, fighter: { [key: string]: string }) {
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
