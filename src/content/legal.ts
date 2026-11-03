// Aviso legal, privacidad y cookies (HTML por idioma). Los datos del titular vienen de `company`.
import { company } from '../i18n/ui';

const o = company.owner;
const titular = `${o.name} (Enersib) · NIF ${o.nif}<br />${o.address}, ${o.city}<br /><a href="mailto:${company.email}">${company.email}</a>`;
const mail = `<a href="mailto:${company.email}">${company.email}</a>`;
const aepd = '<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>';
const gcookies = 'https://policies.google.com/technologies/cookies';

export const legal = {
  es: `
<h2>Aviso legal</h2>
<p>Esta web es propiedad de:</p>
<p>${titular}</p>
<h2>Privacidad</h2>
<p><strong>Responsable:</strong> ${company.owner.name}.</p>
<p><strong>Qué datos tratamos y para qué:</strong> los que nos envías con el formulario de contacto (nombre, email, teléfono y mensaje) o por email y teléfono, solo para responder a tu consulta y, si nos lo pides, preparar un presupuesto o realizar el servicio.</p>
<p><strong>Legitimación:</strong> tu consentimiento al enviar el formulario y, en su caso, la relación contractual.</p>
<p><strong>Conservación:</strong> el tiempo necesario para atender tu consulta y cumplir las obligaciones legales.</p>
<p><strong>Destinatarios:</strong> no cedemos datos a terceros, salvo obligación legal o a los proveedores necesarios para prestar el servicio (alojamiento web y correo).</p>
<p><strong>Derechos:</strong> puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ${mail}. También puedes reclamar ante la Agencia Española de Protección de Datos (${aepd}).</p>
<h2>Cookies</h2>
<p>Esta web no usa cookies propias ni de análisis.</p>
<p>El mapa de la página de contacto es de Google Maps y solo se carga si pulsas «Ver el mapa». En ese momento Google puede instalar sus propias cookies, según su <a href="${gcookies}" target="_blank" rel="noopener">política de cookies</a>.</p>`,
  ca: `
<h2>Avís legal</h2>
<p>Aquesta web és propietat de:</p>
<p>${titular}</p>
<h2>Privacitat</h2>
<p><strong>Responsable:</strong> ${company.owner.name}.</p>
<p><strong>Quines dades tractam i per a què:</strong> les que ens envies amb el formulari de contacte (nom, correu, telèfon i missatge) o per correu i telèfon, només per respondre la teva consulta i, si ens ho demanes, preparar un pressupost o fer el servei.</p>
<p><strong>Legitimació:</strong> el teu consentiment en enviar el formulari i, si escau, la relació contractual.</p>
<p><strong>Conservació:</strong> el temps necessari per atendre la teva consulta i complir les obligacions legals.</p>
<p><strong>Destinataris:</strong> no cedim dades a tercers, excepte per obligació legal o als proveïdors necessaris per prestar el servei (allotjament web i correu).</p>
<p><strong>Drets:</strong> pots exercir els teus drets d'accés, rectificació, supressió, oposició, limitació i portabilitat escrivint a ${mail}. També pots reclamar davant l'Agència Espanyola de Protecció de Dades (${aepd}).</p>
<h2>Galetes</h2>
<p>Aquesta web no fa servir galetes pròpies ni d'anàlisi.</p>
<p>El mapa de la pàgina de contacte és de Google Maps i només es carrega si pitges «Veure el mapa». En aquest moment Google pot instal·lar les seves pròpies galetes, segons la seva <a href="${gcookies}" target="_blank" rel="noopener">política de galetes</a>.</p>`,
  en: `
<h2>Legal notice</h2>
<p>This website is owned by:</p>
<p>${titular}</p>
<h2>Privacy</h2>
<p><strong>Controller:</strong> ${company.owner.name}.</p>
<p><strong>What data we process and why:</strong> the details you send us through the contact form (name, email, phone and message) or by email and phone, only to answer your enquiry and, if you ask us to, prepare a quote or carry out the work.</p>
<p><strong>Legal basis:</strong> your consent when sending the form and, where applicable, the contract with you.</p>
<p><strong>Retention:</strong> as long as needed to deal with your enquiry and meet our legal obligations.</p>
<p><strong>Recipients:</strong> we do not share data with third parties, except where required by law or with the providers needed to run the service (web hosting and email).</p>
<p><strong>Your rights:</strong> you can exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to ${mail}. You may also complain to the Spanish Data Protection Agency (${aepd}).</p>
<h2>Cookies</h2>
<p>This website does not use its own cookies or analytics cookies.</p>
<p>The map on the contact page is provided by Google Maps and only loads if you click “Show map”. Google may then set its own cookies, under its <a href="${gcookies}" target="_blank" rel="noopener">cookie policy</a>.</p>`,
  de: `
<h2>Impressum</h2>
<p>Diese Website gehört:</p>
<p>${titular}</p>
<h2>Datenschutz</h2>
<p><strong>Verantwortlicher:</strong> ${company.owner.name}.</p>
<p><strong>Welche Daten wir verarbeiten und wozu:</strong> die Angaben, die Sie uns über das Kontaktformular (Name, E-Mail, Telefon und Nachricht) oder per E-Mail und Telefon senden – nur, um Ihre Anfrage zu beantworten und auf Wunsch ein Angebot zu erstellen oder den Auftrag auszuführen.</p>
<p><strong>Rechtsgrundlage:</strong> Ihre Einwilligung beim Absenden des Formulars und gegebenenfalls das Vertragsverhältnis.</p>
<p><strong>Speicherdauer:</strong> so lange, wie es für Ihre Anfrage und unsere gesetzlichen Pflichten nötig ist.</p>
<p><strong>Empfänger:</strong> Wir geben keine Daten an Dritte weiter, außer bei gesetzlicher Verpflichtung oder an die für den Betrieb nötigen Dienstleister (Webhosting und E-Mail).</p>
<p><strong>Ihre Rechte:</strong> Auskunft, Berichtigung, Löschung, Widerspruch, Einschränkung und Datenübertragbarkeit können Sie per E-Mail an ${mail} geltend machen. Sie können sich auch bei der spanischen Datenschutzbehörde beschweren (${aepd}).</p>
<h2>Cookies</h2>
<p>Diese Website verwendet keine eigenen Cookies und keine Analyse-Cookies.</p>
<p>Die Karte auf der Kontaktseite stammt von Google Maps und wird nur geladen, wenn Sie auf „Karte anzeigen“ klicken. Dann kann Google eigene Cookies setzen, gemäß seiner <a href="${gcookies}" target="_blank" rel="noopener">Cookie-Richtlinie</a>.</p>`,
};
