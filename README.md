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

- [src](http://_vscodecontentref_/24): Contiene el código fuente de la aplicación.
  - `components/`: Componentes de React.
    - [MenuItems](http://_vscodecontentref_/25): Componente para mostrar los elementos del menú.
    - [OrderContents](http://_vscodecontentref_/26): Componente para mostrar el contenido de la orden.
    - [OrderTotal](http://_vscodecontentref_/27): Componente para mostrar el total de la orden y la propina.
    - [TipPercentageForm](http://_vscodecontentref_/28): Componente para seleccionar el porcentaje de propina.
  - `data/`: Datos estáticos utilizados en la aplicación.
    - [database](http://_vscodecontentref_/29): Datos de los elementos del menú.
    - [databaseTip](http://_vscodecontentref_/30): Opciones de porcentaje de propina.
  - `helpers/`: Funciones de ayuda.
    - [index](http://_vscodecontentref_/31): Función para formatear la moneda.
  - `hooks/`: Hooks personalizados.
    - [UseOrder](http://_vscodecontentref_/32): Hook para gestionar el estado de la orden.
  - `types/`: Definiciones de tipos TypeScript.
    - [index](http://_vscodecontentref_/33): Tipos para los elementos del menú y la orden.

## Configuración 🛠️

- [tailwind.config.js](http://_vscodecontentref_/34): Configuración de Tailwind CSS.
- [vite.config.ts](http://_vscodecontentref_/35): Configuración de Vite.
- [tsconfig.json](http://_vscodecontentref_/36), [tsconfig.app.json](http://_vscodecontentref_/37), [tsconfig.node.json](http://_vscodecontentref_/38): Configuración de TypeScript.
- [eslint.config.js](http://_vscodecontentref_/39): Configuración de ESLint.
- [postcss.config.js](http://_vscodecontentref_/40): Configuración de PostCSS.

## Tecnologías Utilizadas 🛠️

- [React](http://_vscodecontentref_/41): Biblioteca de JavaScript para construir interfaces de usuario.
- [TypeScript](http://_vscodecontentref_/42): Lenguaje de programación que añade tipado estático a JavaScript.
- [Tailwind CSS](http://_vscodecontentref_/43): Framework de CSS.
- [Vite](http://_vscodecontentref_/44): Herramienta de desarrollo web.

## Qué Aprendí 🧠

- Mejor entendimiento de los [types](https://www.typescriptlang.org/docs/handbook/utility-types.html#handbook-content) de TypeScript.
- Un mejor entendimiento de los [hooks](https://es.reactjs.org/docs/hooks-intro.html) de React. Que en este caso fueron los **hooks** de **useState** y **useMemo**.
- Como hacer uso del Framework de CSS [Tailwind CSS](https://tailwindcss.com/).

## Autor ✒️

- **Alejandro Olvera** - _Desarrollador_ - [AlejandroDev8](https://github.com/AlejandroDev8).
- **Juan Pablo de la Torre** - _Instructor_ - [Juan Pablo de la Torre](https://github.com/codigoconjuan) - [codigoconjuan](https://codigoconjuan.com/).
