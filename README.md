# Garden Store

**EN:** Online store for garden goods — a React single-page application. The UI is built from a [Figma design](https://www.figma.com/design/0pMguGfGcTgufmXlNJe5gO/IE-FE?node-id=1-856&t=Nv7SU0pgAuy1yUCU-1).

**RU:** Интернет-магазин садовых товаров — одностраничное приложение на React. Интерфейс сверстан по [макету в Figma](https://www.figma.com/design/0pMguGfGcTgufmXlNJe5gO/IE-FE?node-id=1-856&t=Nv7SU0pgAuy1yUCU-1).

---

## Tech Stack / Стек технологий

| Technology | Purpose (EN) | Назначение (RU) |
|------------|--------------|-----------------|
| **React 19** | UI library | Библиотека интерфейса |
| **TypeScript** | Static typing | Статическая типизация |
| **Vite** | Dev server & build tool | Сборка и dev-сервер |
| **React Router 7** | Client-side routing | Маршрутизация |
| **Redux Toolkit** | Global state (products, cart) | Глобальное состояние |
| **SCSS Modules** | Component-scoped styles | Стили компонентов |
| **React Hook Form + Yup** | Forms & validation | Формы и валидация |
| **Material UI (MUI)** | UI components (where used) | UI-компоненты |
| **@react-google-maps/api** | Store location map in footer | Карта в подвале сайта |
| **vite-plugin-svgr** | SVG as React components | SVG как React-компоненты |
| **ESLint, Prettier, Stylelint** | Code quality & formatting | Линтинг и форматирование |

---

## Features / Функционал

### Home / Главная

| EN | RU |
|----|-----|
| Hero section | Промо-блок (hero) |
| Preview of product categories (up to 4) with link to full list | Превью категорий (до 4) со ссылкой на полный список |
| Discount banner: sign up for 5% off on first order (name, phone, email) | Баннер скидки: заявка на 5% на первый заказ |

### Catalog / Каталог

| EN | RU |
|----|-----|
| **Categories** — list of categories with images | **Категории** — список с изображениями |
| **Category page** — products in selected category | **Страница категории** — товары выбранной категории |
| **All products** — full catalog with filters and sorting | **Все товары** — полный каталог с фильтрами и сортировкой |
| **Sale items** — products with a discount | **Распродажа** — товары со скидкой |
| **Product page** — image, price, discount badge, description, quantity counter, add to cart | **Карточка товара** — фото, цена, скидка, описание, счётчик, «В корзину» |

### Filters & sorting (All products) / Фильтры и сортировка

| EN | RU |
|----|-----|
| Price range (min / max) | Диапазон цен |
| “Discounted only” toggle | Только со скидкой |
| Sort: default, newest, price high→low, price low→high | Сортировка: по умолчанию, новинки, цена ↓/↑ |

### Cart & checkout / Корзина и заказ

| EN | RU |
|----|-----|
| Add products to cart from product page | Добавление в корзину со страницы товара |
| Shopping cart page with order summary | Страница корзины с итогом |
| Checkout form (name, phone, email) with validation | Форма заказа с валидацией |
| Order submission | Отправка заказа |

### Layout & other / Общее

| EN | RU |
|----|-----|
| Header with navigation and cart icon | Шапка с навигацией и иконкой корзины |
| Footer: phone, social links, address, hours, Google Map | Подвал: контакты, соцсети, адрес, часы, карта |
| Loading states and error messages | Состояния загрузки и ошибок |
| 404 page | Страница «Не найдено» |

---

## Project structure / Структура проекта

```
garden-store/
└── frontend/
    └── src/
        ├── api/       # HTTP requests
        ├── components/
        ├── pages/
        ├── store/     # Redux slices (products, cart)
        └── styles/
```

---

## Getting started / Запуск проекта

### Prerequisites / Требования

- **Node.js** (LTS recommended)
- **npm**

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open the URL shown in the terminal (typically **http://localhost:5173**).

Откройте адрес из терминала (обычно **http://localhost:5173**).

### API server (optional) / Сервер API (по необходимости)

For catalog, cart, and forms to work locally, start the API in a separate terminal:

Чтобы каталог, корзина и формы работали локально, в отдельном терминале:

```bash
cd backend
npm install
npm run dev
```

### Useful scripts / Скрипты

| Command | EN | RU |
|---------|----|----|
| `npm run dev` | Development server | Dev-сервер |
| `npm run build` | Production build | Сборка |
| `npm run preview` | Preview production build | Просмотр сборки |
| `npm run check` | Lint, format, stylelint | Проверка кода |

---

## Design / Дизайн

[Figma - Garden Store UI](https://www.figma.com/design/0pMguGfGcTgufmXlNJe5gO/IE-FE?node-id=1-856&t=Nv7SU0pgAuy1yUCU-1)
