#  NotiToast.js — Componente Visual de Notificaciones

**Autor:** Jordi Moises Alvarez Mora  
**Materia:** Programación Web  
**Componente:** NotiToast.js (Vanilla JS Component)

---

##  Descripción y Problema que Resuelve

En el desarrollo web moderno, notificar al usuario sobre el resultado de sus acciones (como guardar datos, errores de red o advertencias) suele hacerse con alertas nativas (`alert()`) que interrumpe bruscamente la experiencia de navegación.

**NotiToast.js** resuelve esto ofreciendo un componente visual interactivo, liviano y 100% reutilizable que genera notificaciones flotantes animadas (*Toasts*) dinámicamente desde JavaScript. Cuenta con barra de tiempo, pausa al pasar el cursor y soporte para múltiples estados visuales sin depender de ninguna librería externa.

---

##  Instalación

Incluye el archivo de estilos CSS dentro de la etiqueta `<head>` y el archivo de JavaScript antes del cierre de `</body>`:

```html
<link rel="stylesheet" href="css/componente.css">

<script src="js/componente.js"></script>
```

##  Uso con Ejemplos de Codigo

### 1. Notificación de Éxito
```javascript
Toast.show({
    title: '¡Operación Exitosa!',
    message: 'El registro ha sido creado correctamente.',
    type: 'success',
    duration: 3000,
    position: 'top-right'
});
```

### 2. Notificación de Error
```javascript
Toast.show({
    title: 'Error Inesperado',
    message: 'No se pudieron validar las credenciales de acceso.',
    type: 'error',
    duration: 4000,
    position: 'top-right'
}); 
```

### 3. Notificación de Advertencia
```javascript
Toast.show({
    title: 'Atención Requerida',
    message: 'Tu sesión caducará en 5 minutos.',
    type: 'warning',
    duration: 5000,
    position: 'top-left'
}); 
```

### 4. Notificación Informativa
```javascript
Toast.show({
    title: 'Información del Sistema',
    message: 'Se ha completado el mantenimiento programado.',
    type: 'info',
    duration: 3500,
    position: 'bottom-right'
});
```
---

##  Capturas de Pantalla

### 1. Demo de notificación tipo toast

![Demo completa](img/img1.jpg)

---

### 2. Prueba de consola del navegardor

![Probando las 4 acciones](img/img2.jpg)

---

### 3. Notificaciones funcionando
Validación de todas las notificaciones correctamente

![Notificaciones funcionales](img/img3.jpg)
---

##  Video Demonstrativo 
(https://youtube.com/shorts/XBIq0vfCY80?feature=share)