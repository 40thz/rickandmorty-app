export class LocalStorageSerivce {
  getStorageItem(key: string): string {
    const data = window.localStorage.getItem(key);
    return JSON.parse(data!);
  }

  setStorageItem(key: string, value: unknown) {
    return window.localStorage.setItem(key, JSON.stringify(value));
  }

  removeStorageItem(key: string) {
    return window.localStorage.removeItem(key);
  }

  clearStorage() {
    return window.localStorage.clear();
  }
}

export const localStorageService = new LocalStorageSerivce();
