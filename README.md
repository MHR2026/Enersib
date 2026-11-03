# Enersib — web

Web de **Enersib S.L.** (https://www.enersib.com): energía solar fotovoltaica y calderas de biomasa en Mallorca.
Hecha con [Astro](https://astro.build) + Tailwind CSS, en castellano, catalán, inglés y alemán.
Sustituye a la web antigua en WordPress. Es estática; solo el formulario de contacto usa PHP.

## Uso

```bash
npm install
npm run dev      # desarrollo en http://localhost:4321
npm run build    # genera la web en dist/
```

## Dónde se edita el contenido

| Qué | Dónde |
| --- | --- |
| Datos de la empresa y departamentos (teléfonos) | `company` y `departments` en `src/i18n/ui.ts` |
| Textos en ES / CA / EN / DE | `src/i18n/ui.ts` |
| Páginas | `src/pages/[lang]/` (inicio, `energia-solar`, `calderas`, `contacto`, `legal`) |
| Aviso legal, privacidad y cookies | `src/content/legal.ts` |
| Formulario de contacto (PHP) | `public/api/contacto.php` → envía a `info@enersib.com` |
| Redirecciones de las URLs de WordPress, https | `public/.htaccess` |

## Formulario de contacto

`public/api/contacto.php` recibe el formulario y lo envía por email a `info@enersib.com` con `mail()` de PHP.
Si el hosting no entrega esos correos, se puede enviar por SMTP: copiar `public/api/config.sample.php` como
`enersib-form-config.php`, poner la contraseña del buzón y subirlo a la raíz de la web (o un nivel por encima).
Diagnóstico: abrir `/api/contacto.php?check=1`. Los errores quedan en `api/errores.log` (no accesible desde la web).

## Publicación

Subir el contenido de `dist/` a la raíz de la web (incluido el archivo oculto `.htaccess`).
`.github/workflows/deploy.yml` lo hace solo por SFTP en cada cambio de `main` cuando se configuran los secretos
`SFTP_HOST`, `SFTP_USER`, `SFTP_PASSWORD` y `SFTP_PATH`.
