[![Vite CI/CD](https://github.com/professor-severus-snape/menu-router/actions/workflows/vite_ci-cd.yml/badge.svg)](https://github.com/professor-severus-snape/menu-router/actions/workflows/vite_ci-cd.yml)

# Навигационное меню гоночного такси

React-приложение с навигационным меню для сайта гоночного такси с пунктами:

- «Главная»
- «Дрифт-такси»
- «Time Attack»
- «Forza Karting»

При переходе на страницу соответствующий пункт меню подсвечивается.

![Меню](./docs/menu.jpg)

## Демо

Посмотреть демо можно [здесь](https://professor-severus-snape.github.io/menu-router/).

## Возможности и логика работы

- SPA-навигация между страницами с подсветкой активного пункта
- Поддержка React Router v7 с вложенными маршрутами
- Корректная работа на GitHub Pages благодаря `basename` и `404.html`

### Компоненты

- **App** — создаёт маршруты (`createBrowserRouter`), оборачивает в `RouterProvider`
- **Layout** — общий шаблон с `Menu` и `Outlet`
- **Menu** — меню с подсветкой активного пункта через `NavLink`
- **HomePage, DriftPage, TimeAttackPage, ForzaPage** — страницы приложения
- **ErrorPage** — отображает непредвиденные ошибки
- **NotFoundPage** — 404 страница с кнопкой «Вернуться назад»

## Технологии

- React v19
  - JSX
  - functional components
- React Router v7 
  - createBrowserRouter
  - RouterProvider
  - Outlet
  - Link / NavLink
  - useNavigate
- типизация - TypeScript v6
- линтинг - ESLint v10
- сборка - Vite v8

## CI/CD

- GitHub Actions - линтинг и сборка проекта (CI)
- GitHub Pages - автоматический деплой приложения (CD)
