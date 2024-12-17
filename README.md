# Calculadora de Propinas y Consumo

## Descripción del Proyecto 📄

Esta aplicación simula una calculadora de propinas y consumo que pueda tener algún restaurante o similar. La aplicación tiene una interfaz básica, pero funcional, donde tienes tus productos del lado izquiero, los cuales puedes seleccionar dependiendo de lo que se ordene, y del lado derecho se muestran los productos que se seleccionaron, el subtotal de la cuenta, la propina y el total a pagar.

## Instalación 🔧

Clonar el repositorio.

```bash
git clone https://github.com/AlejandroDev8/Tip-Calculator-TS.git
```

Navegar a la carpeta del proyecto.

```bash
cd Tip-Calculator-TS
```

Instalar las dependencias.

```bash
npm install
```

Correr el proyecto.

```bash
npm run dev
```

## Estructura de Carpetas 📁

- [src](/src): Contiene el código fuente de la aplicación.
  - `components/`: Componentes de React.
    - [MenuItems](/src/components/MenuItems.tsx): Componente para mostrar los elementos del menú.
    - [OrderContents](/src/components/OrderContents.tsx): Componente para mostrar el contenido de la orden.
    - [OrderTotal](/src/components/OrderTotal.tsx): Componente para mostrar el total de la orden y la propina.
    - [TipPercentageForm](/src/components/TipPercentageForm.tsx): Componente para seleccionar el porcentaje de propina.
  - `data/`: Datos estáticos utilizados en la aplicación.
    - [database](/src/data/database.ts): Datos de los elementos del menú.
    - [databaseTip](/src/data/databaseTip.ts): Opciones de porcentaje de propina.
  - `helpers/`: Funciones de ayuda.
    - [index](/src/helpers/index.ts): Función para formatear la moneda.
  - `hooks/`: Hooks personalizados.
    - [UseOrder](/src/hooks/UseOrder.ts): Hook para gestionar el estado de la orden.
  - `types/`: Definiciones de tipos TypeScript.
    - [index](/src/types/index.ts): Tipos para los elementos del menú y la orden.

## Configuración 🛠️

- [tailwind.config.js](/tailwind.config.js): Configuración de Tailwind CSS.
- [vite.config.ts](/vite.config.ts): Configuración de Vite.
- [tsconfig.json](/tsconfig.json), [tsconfig.app.json](/tsconfig.app.json), [tsconfig.node.json](/tsconfig.node.json): Configuración de TypeScript.
- [eslint.config.js](/eslint.config.js): Configuración de ESLint.
- [postcss.config.js](/postcss.config.js): Configuración de PostCSS.

## Tecnologías Utilizadas 🛠️

- [React](https://es.reactjs.org/): Librería de JavaScript para construir interfaces de usuario.
- [TypeScript](https://www.typescriptlang.org/): Lenguaje de programación que añade tipos a JavaScript.
- [Tailwind CSS](https://tailwindcss.com/): Framework de CSS.
- [Vite](https://vitejs.dev/): Herramienta de desarrollo web.

## Qué Aprendí 🧠

- Mejor entendimiento de los [types](https://www.typescriptlang.org/docs/handbook/utility-types.html#handbook-content) de TypeScript.
- Un mejor entendimiento de los [hooks](https://es.reactjs.org/docs/hooks-intro.html) de React. Que en este caso fueron los **hooks** de **useState** y **useMemo** para hacer un coustom hook llamado **UseOrder**, para gestionar el estado de la orden.
- Como hacer uso del Framework de CSS [Tailwind CSS](https://tailwindcss.com/).

## Autor ✒️

- **Alejandro Olvera** - _Desarrollador_ - [AlejandroDev8](https://github.com/AlejandroDev8).
- **Juan Pablo de la Torre** - _Instructor_ - [Juan Pablo de la Torre](https://github.com/codigoconjuan) - [codigoconjuan](https://codigoconjuan.com/).
