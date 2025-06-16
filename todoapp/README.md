# Nuxt 3 Todo App

A todo application built with Nuxt 3 following Vue.js best practices and conventions.

## Naming Conventions

This project follows the standard Nuxt 3 naming conventions for maintainable and scalable code.

### **Components** (`/components`)
- **Folder names**: `kebab-case` or `PascalCase`
- **File names**: `PascalCase.vue`
- **Auto-imported as**: `PascalCase`

```
components/
├── AppHeader.vue           → <AppHeader />
├── UserProfile.vue         → <UserProfile />
├── ui/
│   ├── BaseButton.vue     → <UiBaseButton />
│   └── FormInput.vue      → <UiFormInput />
└── layout/
    └── NavBar.vue         → <LayoutNavBar />
```

### **Composables** (`/composables`)
- **File names**: `camelCase.js` or `camelCase.ts`
- **Function names**: `camelCase` (start with `use`)
- **Auto-imported as**: function name

```
composables/
├── useAuth.js             → useAuth()
├── useTodos.ts            → useTodos()
├── useLocalStorage.js     → useLocalStorage()
└── utils/
    └── useDebounce.ts     → useDebounce()
```

### **Layouts** (`/layouts`)
- **File names**: `kebab-case.vue`
- **Referenced as**: `kebab-case`

```
layouts/
├── default.vue            → layout: 'default'
├── admin.vue              → layout: 'admin'
├── auth.vue               → layout: 'auth'
└── landing-page.vue       → layout: 'landing-page'
```

### **Pages** (`/pages`)
- **Folder names**: `kebab-case`
- **File names**: `kebab-case.vue`
- **Routes**: follow folder structure

```
pages/
├── index.vue              → /
├── about.vue              → /about
├── contact-us.vue         → /contact-us
├── auth/
│   ├── login.vue          → /auth/login
│   └── register.vue       → /auth/register
├── user/
│   ├── index.vue          → /user
│   ├── profile.vue        → /user/profile
│   └── [id].vue           → /user/:id
└── blog/
    ├── index.vue          → /blog
    └── [slug].vue         → /blog/:slug
```

### **Middleware** (`/middleware`)
```
middleware/
├── auth.js                → middleware: 'auth'
├── admin-only.ts          → middleware: 'admin-only'
└── guest.js               → middleware: 'guest'
```

### **Plugins** (`/plugins`)
```
plugins/
├── api.client.js          → client-side only
├── analytics.server.js    → server-side only
└── global-components.js   → both sides
```

### **Utils** (`/utils`)
```
utils/
├── formatDate.js          → formatDate()
├── validators.ts          → various validation functions
└── constants.js           → app constants
```

## **Key Naming Rules**
1. **Folders**: Always `kebab-case`
2. **Vue Components**: Always `PascalCase.vue`
3. **JavaScript/TypeScript**: `camelCase.js/.ts`
4. **Pages**: `kebab-case.vue` (affects URL structure)
5. **Auto-imports**: Follow the folder structure for component naming

## Flow of code run in this project
layout -> pages -> components
e.g.: visit home/ -> nuxt load / home page and render its content inside <slot/> of default.vue

## What is CSR and SSR
SSR : Server send ready-to-view pages with layouts, menu. Good for SEO, fast at page first load
CSR: Server send HTML shell and JS to browser, then browser start cooking that then display for users. Good for interactives feel like apps. 

## Purposes of layouts and pages
1. Layouts
- Purpose: Provide consistent structure and shared UI for multiple pages
- Normally use for: 
    a. Nav bars like top, side, of both
    b. Headers
    c. Global modules or notifications
    d. Theme/bg wrapper
    e. Shared sidebars
    f. Auth guards or loading overlay

2. Pages
- Purpose: Display unique content for a specific route
- Normally use for: 
    a. page specific conent. E.g.: forms, lists, dashboard...
    b. page logic