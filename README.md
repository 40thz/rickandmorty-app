# RickAndMorty APP

<p align="center">
    	<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
    	<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
    	<img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white">
    	<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
    	<img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white">
</p>

# Инфо

[Демо](https://rickandmorty-aspirity.netlify.app/)

[API](https://rickandmortyapi.com/)

# Команды
`npm i` - Устанавливает зависимости

`npm run dev` - Запускает режим разработки

`npm run build` - Собирает приложение

`npm run preview` - Запускает production режим

`npm run lint` - Запускает проверку кода

`npm run lint:fix` - Запускает проверку кода и исправляет

`npm run test` - Запускает тесты

# Задачи
* Таблица с возможностью поиска по персонажам с фильтрацией.
* Таблица с возможностью поиска по эпизодам с фильтрацией.
* Таблица с возможностью поиска по локациям с фильтрацией.
* Режимы Table / Grid для каждой из таблиц
* Синхронизация redux с localstorage
* Написание тестов

# Структура приложения
![Screenshot_17](https://github.com/40thz/rickandmorty-app/assets/68428668/471ad5ea-a466-4d7a-a93a-a72d2f6d3980)

    ├── src 
    │   ├── App.tsx 
    │   ├── index.css 
    │   ├── main.ts
    │   ├── types.ts
    │   ├── components 
    │   │   ├── Character
    │   │   │   ├── CharacterTable.tsx 
    │   │   │   ├── index.ts 
    │   │   │   ├── CharacterGrid 
    │   │   │   │   ├── CharacterGrid.tsx 
    │   │   │   │   ├── CharacterSidebar.tsx 
    │   │   │   │   ├── index.ts 
    │   │   │   ├── Modal 
    │   │   │   │   ├── CharacterInformation.tsx 
    │   │   │   │   ├── CharacterModal.tsx 
    │   │   ├── Episode 
    │   │   │   ├── EpisodeTable.tsx 
    │   │   │   ├── index.ts 
    │   │   │   ├── EpisodeGrid 
    │   │   │   │   ├── EpisodeGrid.tsx 
    │   │   │   │   ├── EpisodeSidebar.tsx 
    │   │   │   │   ├── index.ts 
    │   │   │   ├── Modal 
    │   │   │   │   ├── EpisodeInformation.tsx 
    │   │   │   │   ├── EpisodeModal.tsx 
    │   │   ├── Location 
    │   │   │   ├── index.ts 
    │   │   │   ├── LocationTable.tsx 
    │   │   │   ├── LocationGrid 
    │   │   │   │   ├── index.ts 
    │   │   │   │   ├── LocationGrid.tsx 
    │   │   │   │   ├── LocationSidebar.tsx 
    │   │   │   ├── Modal 
    │   │   │   │   ├── LocationIformation.tsx 
    │   │   │   │   ├── LocationModal.tsx 
    │   │   ├── shared 
    │   │   │   ├── Menu.tsx 
    │   │   │   ├── layouts 
    │   │   │   │   ├── ContainerLayout.tsx 
    │   │   │   │   ├── GridLayout.tsx 
    │   │   │   │   ├── index.ts 
    │   │   │   │   ├── ModeLayout.tsx 
    │   │   │   ├── Table 
    │   │   │   │   ├── index.ts 
    │   │   │   │   ├── InputColumnFilter.tsx 
    │   │   │   │   ├── SelectorColumnFilter.tsx 
    │   │   │   │   ├── Table.tsx 
    │   │   │   │   ├── types.ts 
    │   │   │   │   ├── __tests__ 
    │   │   │   │   │   ├── Table.test.tsx 
    │   │   │   ├── ui 
    │   │   │   │   ├── Button.tsx 
    │   │   │   │   ├── Cart.tsx 
    │   │   │   │   ├── ErrorBoundary.tsx 
    │   │   │   │   ├── ErrorMessage.tsx 
    │   │   │   │   ├── Input.tsx 
    │   │   │   │   ├── Loader.tsx 
    │   │   │   │   ├── Modal.tsx 
    │   │   │   │   ├── Selector.tsx 
    │   │   │   │   ├── icons 
    │   │   │   │   │   ├── GridIcon.tsx 
    │   │   │   │   │   ├── TableIcon.tsx 
    │   ├── constants 
    │   │   ├── character 
    │   │   │   ├── characterOptionsData.ts 
    │   │   │   ├── index.ts 
    │   ├── containers 
    │   │   ├── Character.tsx 
    │   │   ├── Episode.tsx 
    │   │   ├── Location.tsx 
    │   ├── context 
    │   │   ├── AppContext.ts 
    │   ├── hooks 
    │   │   ├── useRequest.ts 
    │   ├── services 
    │   │   ├── character.service.ts 
    │   │   ├── episode.service.ts 
    │   │   ├── location.service.ts 
    │   │   ├── types.ts 
    │   ├── store 
    │   │   ├── hooks.ts 
    │   │   ├── index.ts 
    │   │   ├── store.ts 
    │   │   ├── slices 
    │   │   │   ├── types.ts 
    │   │   │   ├── characterSlice 
    │   │   │   │   ├── reducers.ts 
    │   │   │   │   ├── slice.ts 
    │   │   │   │   ├── index.ts
    │   │   │   │   ├── types.ts 
    │   │   │   ├── episodeSlice 
    │   │   │   │   ├── reducers.ts 
    │   │   │   │   ├── slice.ts 
    │   │   │   │   ├── index.ts 
    │   │   │   │   ├── types.ts 
    │   │   │   ├── locationSlice 
    │   │   │   │   ├── reducers.ts 
    │   │   │   │   ├── slice.ts 
    │   │   │   │   ├── index.ts 
    │   │   │   │   ├── types.ts 
    │   ├── utils 
    │   │   ├── debounce.ts 
    │   │   ├── getIdFromUrlArr.ts 
    │   │   ├── getNested.ts 
    │   │   ├── LocalStorageService.ts 
    │   │   ├── HTTPTransport 
    │   │   │   ├── axiosInstance.ts 
    │   │   │   ├── HTTPTransport.ts 
    │   │   │   ├── index.ts 
    │   │   ├── __tests__ 
    │   │   │   ├── LocalStroageService.test.ts 
