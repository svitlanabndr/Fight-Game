import Fighter, { IFighter } from '../fighter';
import GameFighterView from './gameFighterView';
import Modal from './modalView'
import View, { IView } from './view';
import { fightersDataSource } from '../sources/fighterDataSource'
import { modal } from 'tingle.js';

interface IGameView extends IView {
    readonly gameEl: HTMLElement;
    readonly modal: modal;
}
 
export default class GameView extends View implements IGameView {
    constructor(first: string, second: string, gameEl: HTMLElement) {
        super();
        this.gameEl = gameEl;
        this._setupView(first, second);
        this.modal = Modal.createModal([]);
    }
    readonly gameEl: HTMLElement;
    readonly modal: modal;

    private async _setupView(id1: string, id2: string) {
        this.gameEl.classList.remove('hidden');

        const fighterObj1 = await fightersDataSource.getFighterById(id1);   
        const fighterObj2 = await fightersDataSource.getFighterById(id2);

        const fighter1: IFighter = new Fighter(fighterObj1);
        const fighter2: IFighter = new Fighter(fighterObj2);

        const fighterView1: HTMLElement = new GameFighterView(fighterObj1, () => this._handleFighterClick(fighter2, fighter1, fighterView1)).element;
        const fighterView2: HTMLElement = new GameFighterView(fighterObj2, () => this._handleFighterClick(fighter1, fighter2, fighterView2)).element;

        (<HTMLElement>fighterView1.childNodes[1].firstChild).innerText = fighter1.health.toString();
        (<HTMLElement>fighterView2.childNodes[1].firstChild).innerText = fighter2.health.toString();

        (<HTMLElement>fighterView2.lastChild).classList.add('mirror');

        this.element = this.createElement('div', 'fighters');
        this.element.append(fighterView1, fighterView2);

        const message = this.createElement('div', 'message');
        message.innerText = 'Start the fight! Just click on the players! Let the strongest win !!!'
        this.gameEl.append(this.element, message);
    }

    private _handleFighterClick(attacker: IFighter, attacked: IFighter, view: HTMLElement) {
        let damage = attacker.getHitPower() - attacked.getBlockPower();
        if (damage < 0) damage = 0;
        this._updateIndicator(attacker, attacked, damage, view);
        this._createMessage(attacker, damage);
    }

    private _createMessage(attacker: IFighter, delta: number) {
        const message: HTMLElement = document.querySelector('.message');
        if(delta === 0) {
            message.innerText = 'Hmm... You missed, ';
        }
        else if (delta < 1) {
            message.innerText = 'You beat like a girl, ';
        }
        else if (delta < 2) {
            message.innerText = 'Good blow, ';
        }
        else {
            message.innerText = "Right in the bull's eye, ";
        }
        message.innerText += attacker.name;
    }

    private _updateIndicator(attacker: IFighter, attacked: IFighter, delta: number, view: HTMLElement){
        attacked.health -= delta;
        const indicator = <HTMLElement>view.childNodes[1].lastChild;
        const percents = <HTMLElement>view.childNodes[1].firstChild;
        const health = Math.round(attacked.health);
        const width = attacked.health / attacked.fullHealth * 100;

        if (health >= 0 ) {
            percents.innerText = health.toString();
            indicator.style.width = width + '%';
        } else {
            percents.innerText = '0';
            indicator.style.width = '0%';
        }
        if (width <= 0) {
            this._showWinner(attacker);
        }
    }

    private _showWinner(winner: IFighter) {
        this.modal.setContent('You are win ' + winner.name);
        this.modal.addFooterBtn('New Game', 'tingle-btn tingle-btn--primary', () => {
            this._newGame();
            this.modal.destroy();
        });
        this.modal.open();
    }

    private _newGame() {
        document.getElementById('game').innerHTML = '';
        document.querySelector('div#root button').classList.add('unavailable');
        const checkboxes = <HTMLCollection>document.getElementsByClassName('check');
        for (let i = 0; i < checkboxes.length; i++) {
            if ((<HTMLInputElement>checkboxes[i]).checked) {
                (<HTMLInputElement>checkboxes[i]).checked = false;
            }
            else {
                (<HTMLElement>checkboxes[i].parentNode).classList.remove('unavailable');
            }
        }
        document.getElementById('root').classList.remove('hidden');
    }
}
