# Portal Académico y Científico - Dr. Alejandro Baeza (UNAM)

Portal web oficial para difusión científica, laboratorio de investigación, docencia y publicaciones del **Dr. Alejandro Baeza** en la **Facultad de Química, UNAM**.

---

## 📝 Guía de Edición para Usuarios No Expertos

Toda la información del portal (textos, publicaciones, proyectos, asignaturas docentes y enlaces de contacto) se encuentra centralizada en un solo archivo fácil de editar:

📍 **`/src/data.ts`**

### ¿Cómo actualizar el contenido?
1. Abra el archivo `src/data.ts` en cualquier editor de texto o en GitHub.
2. Busque la sección que desea actualizar:
   - **`RESEARCH_LINES`**: Líneas de investigación científica.
   - **`PUBLICATIONS`**: Artículos, libros y publicaciones de revista.
   - **`PROJECTS`**: Proyectos PAPIIT, PAPIME o financiamientos.
   - **`COURSES`**: Cursos impartidos en licenciatura y posgrado.
   - **`CONTACT_INFO`**: Correos, teléfono, oficina, ORCID y Google Scholar.
3. Modifique el texto dentro de las comillas (`"texto"`).
4. Guarde los cambios. El portal se actualizará automáticamente sin necesidad de tocar código HTML o React.

---

## 🚀 Despliegue en GitHub Pages

Este sitio web está optimizado para funcionar directamente en **GitHub Pages** como un servidor estático sin costo.

### Opción A: Despliegue Automático con GitHub Actions (Recomendado)
1. Suba este repositorio a GitHub.
2. Vaya a **Settings** > **Pages** en su repositorio en GitHub.
3. En **Source**, seleccione **GitHub Actions**.
4. GitHub detectará el proyecto Vite/React y compilará el sitio automáticamente cada vez que edite un dato.

### Opción B: Compilación Manual
1. Ejecute en su terminal:
   ```bash
   npm run build
   ```
2. Se generará una carpeta llamada `dist/`.
3. Suba el contenido de la carpeta `dist/` a la rama `gh-pages` o active GitHub Pages apuntando a la rama elegida.

---

## 💡 Ventajas de Configuración GitHub Pages
- **Rutas por Hash (`#inicio`, `#laboratorio`, etc.)**: Garantiza que al refrescar la página en GitHub Pages nunca aparezca un error 404.
- **Rutas relativas (`base: './'`)**: Funciona en cualquier subdominio o nombre de repositorio de GitHub Pages (`https://usuario.github.io/nombre-repo/`).
