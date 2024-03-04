import { Episode } from '@@/store/slices/episodeSlice/types';
import { ResponseWithInfo } from '@@/store/slices/types';
import { HTTPTransport } from '@@/utils/HTTPTransport';
import { API_PATH } from './types';

class EpisodeService extends HTTPTransport {
  constructor() {
    super(API_PATH.EPISODE);
  }

  async find(query?: string | number[]) {
    const { data } = await this.http.get<ResponseWithInfo<Episode[]>>(`/${query}`);

    return data;
  }

  async findById(ids: number[]) {
    const { data } = await this.http.get<Episode | Episode[]>(`/${ids}`);

    return data;
  }
}

export const episodeService = new EpisodeService();
