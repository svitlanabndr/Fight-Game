import FightersView from './views/fightersView';
import ButtonView from './views/buttonView';
import GameView from './views/gameView';
import { fighterService } from './services/fighterService';

export default class App {
    constructor() {
      this._startApp();
    }
    static rootElement = document.getElementById('root');
    static loadingElement = document.getElementById('loading-overlay');
    static gameElement = document.getElementById('game');
    private async _startApp() {
        try {
            App.loadingElement.style.visibility = 'visible';
            App.gameElement.classList.add('hidden');
            const fighters: Array<{ }> = await fighterService.getFighters(); 

            const fightersView = new FightersView(fighters);
            const fightersElement = fightersView.element;
            const buttonView = new ButtonView( ids => {
                App.rootElement.classList.add('hidden');
                let [first, second] = ids;
                new GameView(first, second, App.gameElement);
            }); 
            const buttonElement = buttonView.element;
            App.rootElement.append(fightersElement, buttonElement);
        } catch (error) {
            console.warn(error);
            App.rootElement.innerText = 'Failed to load data';
        } finally {
            App.loadingElement.style.visibility = 'hidden';
        }
    }
}
  