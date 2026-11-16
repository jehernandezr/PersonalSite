# Notas para agentes

## ui-sdk

Antes de usar ui-sdk, sigue la skill `ui-sdk` si está instalada.

- La landing no tiene bundler: usa los web components alojados en `vendor/ui-sdk/` (la versión está en `vendor/ui-sdk/VERSION`). Cárgalos con `<script type="module" src="vendor/ui-sdk/web.js"></script>`, y `vendor/ui-sdk/web.css` solo si quieres su estilo por defecto. No los cargues desde ui-sdk.dev.
- Lee `~/.local/share/ui-sdk/current/docs/llms.txt`, que son los docs de esa misma versión. Para construir un componente nuevo, busca también por encabezado en `docs/core.md` y lee `docs/rendering.md`, que está al lado. Si esa carpeta no existe, usa https://ui-sdk.dev/web.md.
- Para actualizar ui-sdk, copia la carpeta `browser/` del paquete `@ui-sdk/web` en `vendor/ui-sdk/`, reemplaza `LICENSE` y actualiza `VERSION`.
