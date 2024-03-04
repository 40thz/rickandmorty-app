import { Character } from '@@/store/slices/characterSlice/types';
import { ResponseWithInfo } from '@@/store/slices/types';
import { HTTPTransport } from '@@/utils/HTTPTransport';
import { API_PATH } from './types';

class CharacterService extends HTTPTransport {
  constructor() {
    super(API_PATH.CHARACTER);
  }

  async find(query?: string | number[]) {
    const { data } = await this.http.get<ResponseWithInfo<Character[]>>(`/${query}`);

    return data;
  }

  async findById(ids: number[]) {
    const { data } = await this.http.get<Character | Character[]>(`/${ids}`);

    return data;
  }
}

export const characterService = new CharacterService();
