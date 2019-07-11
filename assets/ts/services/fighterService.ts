import { callApi } from '../helpers/apiHelper';

interface IFighterService {
    getFighters: () => Promise <object>;
    getFighterDetails: (_id: any) => Promise <object>;
}

class FighterService implements IFighterService {
  public async getFighters(): Promise <Array<object>> {
    try {
      const endpoint = 'fighters.json';
      const apiResult = await callApi(endpoint, 'GET');
      return JSON.parse(atob(apiResult.content));
    } catch (error) {
      throw error;
    }
  }

  public async getFighterDetails(_id: string) {
      try {
        const apiResult = await callApi(`details/fighter/${_id}.json`, 'GET');
        return JSON.parse(atob(apiResult.content));
      } catch (error) {
        throw error;
      }
  }
}

export const fighterService = new FighterService();
