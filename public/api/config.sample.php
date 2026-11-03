<?php
// Configuración para enviar el formulario por SMTP (servidor de correo del buzón).
//
// 1. Copia este fichero con el nombre  enersib-form-config.php
// 2. Súbelo a la carpeta principal de la web (junto a index.html) o, mejor, a la carpeta
//    que la contiene (un nivel por encima), para que no se borre al subir versiones nuevas.
// 3. Pon la contraseña del buzón info@enersib.com.
// 4. Comprueba que funciona abriendo /api/contacto.php?check=1

return [
    'host' => 'smtp.ionos.es', // el servidor SMTP de vuestro correo
    'port' => 587,
    'user' => 'info@enersib.com',
    'password' => 'CONTRASEÑA_DEL_BUZÓN',
];
