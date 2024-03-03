import { ResponseWithInfo } from '@store/slices/types';
import { HTTPTransport } from '@utils/HTTPTransport';
import { API_PATH } from './types';
import { Location } from '@/store/slices/locationSlice/types';

class LocationService extends HTTPTransport {
  constructor() {
    super(API_PATH.LOCATION);
  }

  async find(query?: string | number[]) {
    const { data } = await this.http.get<ResponseWithInfo<Location[]>>(`/${query}`);

    return data;
  }
}

export const locationService = new LocationService();
