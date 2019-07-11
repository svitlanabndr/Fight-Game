import { fighterService } from '../services/fighterService';

interface IFightersDataSource {
    fightersDetailsMap: Map<string, object>;
    getFighterById: (id: string) => object;
}

class FightersDataSource implements IFightersDataSource{
    fightersDetailsMap: Map<string, {
        [key: string]: string
    }> = new Map();

    async getFighterById(id: string) {
        let detailedFighter: {
            [key: string]: string
        };

        if (this.fightersDetailsMap.has(id)) {
            detailedFighter = this.fightersDetailsMap.get(id);
        } 
        else {
            detailedFighter = await fighterService.getFighterDetails(id);
            this.fightersDetailsMap.set(id, detailedFighter);
        }
        return detailedFighter;
    }
}

export const fightersDataSource = new FightersDataSource();