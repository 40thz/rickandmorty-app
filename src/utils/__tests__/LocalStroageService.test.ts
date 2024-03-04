import { expect } from '@jest/globals';
import { localStorageService } from '../LocalStorageService';

beforeEach(() => {
  window.localStorage.clear();
});

describe('LocalStorage Service', () => {
  it('Should save data to localstorage', () => {
    const MOCK_KEY = '123';
    const MOCK_DATA = '1234';

    localStorageService.setStorageItem(MOCK_KEY, MOCK_DATA);
    expect(localStorage.getItem(MOCK_KEY)).toEqual(JSON.stringify(MOCK_DATA));
  });

  it('Should get data from localstorage', () => {
    const MOCK_KEY = '1234';
    const MOCK_DATA = '12345';

    localStorageService.setStorageItem(MOCK_KEY, MOCK_DATA);
    expect(localStorageService.getStorageItem(MOCK_KEY)).toEqual(MOCK_DATA);
  });

  it('Should change data in localstorage', () => {
    const MOCK_KEY = '12345';
    const MOCK_DATA_OLD = '123456';
    const MOCK_DATA_NEW = '1234567';

    localStorageService.setStorageItem(MOCK_KEY, MOCK_DATA_OLD);
    expect(localStorage.getItem(MOCK_KEY)).toEqual(JSON.stringify(MOCK_DATA_OLD));

    localStorageService.setStorageItem(MOCK_KEY, MOCK_DATA_NEW);
    expect(localStorage.getItem(MOCK_KEY)).toEqual(JSON.stringify(MOCK_DATA_NEW));
  });
});
