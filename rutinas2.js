const modal = document.getElementById("modal");
const body = document.getElementById("modal-body");

function openRoutine(id){

document.body.classList.add("modal-open");

    let content = "";



if(id === "r1"){
content = `
<h2>💪 PPL / UPPER LOWER</h2>

<p>
📈 <b>Nivel:</b> Intermedio / Avanzado<br>
🗓️ <b>Frecuencia:</b> 5 días por semana<br>
🎯 <b>Objetivo:</b> Hipertrofia y estética
</p>

<hr>

<h3> 🟢 Día 1 – Push</h3>

<ul>
<li><b>Pecho:</b> 2 ejercicios</li>
<li><b>Hombro lateral:</b> 1 ejercicio</li>
<li><b>Hombro frontal:</b> 1 ejercicio</li>
<li><b>Tríceps:</b> 2 ejercicios</li>
</ul>

<hr>

<h3> 🟢 Día 2 – Pull</h3>

<ul>
<li><b>Espalda:</b> 3 ejercicios</li>
<li><b>Deltoide posterior:</b> 1 ejercicio</li>
<li><b>Bíceps:</b> 2 ejercicios</li>
<li><b>Antebrazo:</b> 1 ejercicio</li>
</ul>

<hr>

<h3> 🟢 Día 3 – Piernas</h3>

<ul>
<li><b>Cuádriceps:</b> 2 ejercicios</li>
<li><b>Femoral:</b> 2 ejercicios</li>
<li><b>Abductores:</b> 1 ejercicio</li>
<li><b>Pantorrillas:</b> 1 ejercicio</li>
</ul>

<hr>

<h3>😴 Día 4 – Descanso / Cardio</h3>

<p>
Caminata, bicicleta o cardio suave durante 20-30 minutos.
</p>

<hr>

<h3> 🟢 Día 5 – Upper</h3>

<ul>
<li><b>Pecho:</b> 2 ejercicios</li>
<li><b>Espalda:</b> 2 ejercicios</li>
<li><b>Hombros:</b> 2 ejercicios</li>
<li><b>Brazos:</b> 2 ejercicios</li>
</ul>

<hr>

<h3> 🟢 Día 6 – Lower</h3>

<ul>
<li><b>Cuádriceps:</b> 2 ejercicios</li>
<li><b>Femoral:</b> 2 ejercicios</li>
<li><b>Glúteos:</b> 1 ejercicio</li>
<li><b>Abdominales:</b> 1 ejercicio</li>
</ul>

<hr>

<h3>✅ Ventajas</h3>

<ul>
<li>Excelente frecuencia de entrenamiento.</li>
<li>Gran equilibrio entre volumen y recuperación.</li>
<li>Ideal para ganar masa muscular.</li>
<li>Muy buena para estética corporal.</li>
</ul>

`;
}

if(id === "r2"){
content = `
<h2> 🔥 BRO SPLIT + PPL </h2>

<p>
📈 <b>Nivel:</b> Intermedio<br>
🗓️ <b>Frecuencia:</b> 6 días por semana<br>
🎯 <b>Objetivo:</b> Hipertrofia + quema de grasa
</p>

<hr>

<h3> 🟢 Día 1 – Pecho y abdomen </h3>
<ul>
<li>Press banca inclinado — 4x10-12</li>
<li>Press en maquina smith — 3x10-12</li>
<li>Aperturas en cable — 3x12-15</li>
<li>Fondos — 3x8-12</li>
<li>Flexiones — 2x18-20</li>
<li>Crunches con cable — 2x15-20</li>
</ul>

<hr>

<h3> 🟢 Día 2 – Espalda y biceps </h3>
<ul>
<li>Dominadas — 4x6-12</li>
<li>Remo con barra — 3x10-15</li>
<li>Pullover — 3x9-12</li>
<li>Jalon de cable a una mano — 2x10-12</li>
<li>Curl inclinado con mancuernas — 3x11-15</li>
<li>Curl con barra — 3x8-12</li>
</ul>

<hr>

<h3> 🟢 Día 3 – Piernas centrado en los cuadriceps </h3>
<ul>
<li>Sentadilla concentrada — 4x8-12</li>
<li>Sentadilla elevada — 2x10-12</li>
<li>Prensa — 3x10-12</li>
<li>Extensión de cuádriceps — 3x8-13</li>
</ul>

<hr>

<h3> 🟢 Día 4 – Hombros y abdomen </h3>
<ul>
<li>Elevaciones laterales con cable o mancuernas — 4x7-10</li>
<li>Elevaciones remo vertical con barra — 3x7-12</li>
<li>Press militar con barra — 2x8-13</li>
<li>Face pull — 3x12-15</li>  
<li>Crunches con cable — 3x10-15</li>
<li>Bandera — 2x9-15</li>
</ul>

<hr>

<h3> 🟢 Día 5 – Piernas centrado en los isquiotibiales </h3>
<ul>
<li>Peso muerto rumano — 3x8-13</li>
<li>Zancadas con mancuernas — 3x10-15</li>
<li>zancadas hacia atras — 3x8-12</li>
<li>Elevaciones de talones — 3x10-12</li>
</ul>

<hr>

<h3> 🟢 Día 6 – Biceps y tríceps </h3>
<ul>
<li>Curl inclinado con mancuernas — 3x10-13</li>
<li>Press francés — 3x9-13</li>
<li>Extensión tríceps — 3x8-13</li>
<li>Curl con barra — 3x8-12</li>
</ul>

<hr>

<h3>✅ Ventajas</h3>
<ul>
<li>Excelente combinación de ganancia de masa muscular y quema de grasa. </li>
<li> Te mantiene definido con bajo porcentaje de grasa. </li>
<li>Buen equilibrio físico. </li>
</ul>

`;
}

if(id === "r5"){
content = `

<h2> 🔩 CALISTENIA + PESAS</h2>

<p>
📈 <b>Nivel:</b> Intermedio<br>
🗓️ <b>Frecuencia:</b> 6 días por semana<br>
🎯 <b>Objetivo:</b> Fuerza funcional + hipertrofia
</p>

<hr>

<h3> 🟢 Día 1 – Pecho</h3>
<ul>
<li>Flexiones — 4x al fallo</li>
<li>Flexiones inclinadas — 3x12-15</li>
<li>Fondos — 3x8-12</li>
</ul>

<hr>

<h3> 🟢 Día 2 – Piernas</h3>
<ul>
<li>Sentadilla — 4x12-15</li>
<li>Bulgaras — 3x10-12</li>
<li>Peso muerto — 3x8-12</li>
<li>Pantorrillas — 4x15-20</li>
</ul>

<hr>

<h3> 🟢 Día 3 – Espalda</h3>
<ul>
<li>Dominadas — 4x6-10</li>
<li>Remo con mancuerna — 3x10-12</li>
<li>Superman — 3x15</li>
</ul>

<hr>

<h3> 🟢 Día 4 – Hombros</h3>
<ul>
<li>Elevaciones laterales — 4x12-15</li>
<li>Pike push ups — 3x8-12</li>
<li>Face pull — 3x12-15</li>
</ul>

<hr>

<h3> 🟢 Día 5 – Brazos</h3>
<ul>
<li>Curl mancuerna — 3x10-12</li>
<li>Curl martillo — 3x10-12</li>
<li>Fondos tríceps — 4x8-12</li>
</ul>

<hr>

<h3> 🟢 Día 6 – Full cuerpo</h3>
<ul>
<li>Flexiones — 3x al fallo</li>
<li>Sentadilla — 3x15</li>
<li>Dominadas — 3x al fallo</li>
</ul>

<hr>

<h3>✅ Ventajas</h3>
<ul>
<li>Fuerza funcional real</li>
<li>Buena estética</li>
<li>No requiere mucho equipo</li>
</ul>

`;
}

if(id === "r6"){
content = `

<h2> 💀 UPPER / LOWER</h2>

<p>
📈 <b>Nivel:</b> Principiante / Intermedio<br>
🗓️ <b>Frecuencia:</b> 4 días por semana<br>
🎯 <b>Objetivo:</b> Ganancia de masa muscular base
</p>

<hr>

<h3> 🟢 Día 1 – Upper</h3>
<ul>
<li>Press banca — 4x6-10</li>
<li>Remo con barra — 4x8-12</li>
<li>Press militar — 3x8-12</li>
<li>Curl bíceps — 3x10-12</li>
<li>Tríceps polea — 3x10-12</li>
</ul>

<hr>

<h3> 🟢 Día 2 – Lower</h3>
<ul>
<li>Sentadilla — 4x6-10</li>
<li>Peso muerto rumano — 3x8-12</li>
<li>Prensa — 3x10-12</li>
<li>Pantorrillas — 4x15-20</li>
</ul>

<hr>

<h3> 🟢 Día 3 – Descanso</h3>

<p>Recuperación activa</p>

<hr>

<h3> 🟢 Día 4 – Upper</h3>
<ul>
<li>Press inclinado — 4x8-12</li>
<li>Jalón al pecho — 4x8-12</li>
<li>Elevaciones laterales — 3x12-15</li>
<li>Curl martillo — 3x10-12</li>
<li>Fondos — 3x8-12</li>
</ul>

<hr>

<h3> 🟢 Día 5 – Lower</h3>
<ul>
<li>Sentadilla frontal — 4x6-10</li>
<li>Curl femoral — 3x10-12</li>
<li>Hip thrust — 3x8-12</li>
<li>Pantorrillas — 4x15-20</li>
</ul>

<hr>

<h3>✅ Ventajas</h3>
<ul>
<li>Perfecta para progresión</li>
<li>Equilibrio fuerza/masa</li>
<li>Muy buena para principiantes</li>
</ul>

`;
}

if(id === "r3"){
content = `
<h2>⚡ HEAVY DUTY</h2>

<p>
📈 <b>Nivel:</b> Avanzado<br>
🗓️ <b>Frecuencia:</b> 3 días por semana<br>
🎯 <b>Objetivo:</b> Máxima intensidad + crecimiento muscular con bajo volumen
</p>

<hr>

<div class="routine-section">
  <div class="routine-title"> 🟢 Día 1 – Pecho, Espalda y Hombros</div>
  <div class="routine-info">
    <ul>
     <li> Press en banca inclinado o en máquina - 1 set al fallo</li>
      <li> Aperturas o cruces de cable - 1 set al fallo</li>
      <li> Dominadas o jalón - 1 set al fallo</li>
      <li> Remo con barra o máquina - 1 set al fallo</li>
      <li> Press militar - 1 set al fallo</li>
    </ul>
  </div>
</div>

<div class="routine-section">
  <div class="routine-title"> 🟢 Día 2 – Piernas</div>
  <div class="routine-info">
    <ul>
      <li> Extensiones de cuádriceps - 1 set al fallo</li>
      <li> Sentadillas o prensa de piernas - 1 set al fallo</li>
      <li> Peso muerto rumano o curl femoral - 1 set al fallo</li>
      <li> Elebacion de talones - 1 set al fallo</li>
      <li> Abdominales un set controlado hasta que ardan</li>
    </ul>
  </div>
</div>

<div class="routine-section">
  <div class="routine-title"> 🟢 Día 3 – Brazos</div>
  <div class="routine-info">
    <ul>
      <li> Curl de bíceps con barra o mancuernas-1 set al fallo</li>
      <li> Curl concentrado o predicador - 1 set al fallo</li>
      <li> Press francés o jalón dorsal - 1 set al fallo</li>
      <li> Fondos en paralelas o banca - 1 set al fallo</li>
      <li> Antebrazos con barra o mancuernas - 1 set al fallo</li>
    </ul>
  </div>
</div>

<hr>

<h3>⚠️ Reglas importantes</h3>
<ul>
<li>Solo 1–2 series efectivas por ejercicio</li>
<li>Llevar cada serie al fallo real</li>
<li>Descanso largo entre sesiones</li>
<li>Priorizar recuperación y sueño</li>
</ul>

<hr>

<h3>✅ Ventajas</h3>
<ul>
<li>Muy eficiente en tiempo</li>
<li>Alta intensidad real</li>
<li>Excelente para avanzados</li>
<li>Gran estímulo muscular con poco volumen</li>
</ul>

`;
}

if(id === "r4"){
content = `
<h2>🏃 BRO SPLIT</h2>

<p>
📈 <b>Nivel:</b> Intermedio<br>
🗓️ <b>Frecuencia:</b> 5 días por semana<br>
🎯 <b>Objetivo:</b> Hipertrofia + quema de grasa + condición física
</p>

<hr>

<div class="routine-section">
  <div class="routine-title"> 🟢 Día 1 – Pecho y abdomen</div>
  <div class="routine-info">
    <ul>
      <li>Press banca — 4x6-10</li>
      <li>Press inclinado mancuernas — 3x8-12</li>
      <li>Aperturas en cable — 3x12-15</li>
      <li>Abdominales — 3x15-20</li>
      <li>Plancha — 3x30-60s</li>
    </ul>
  </div>
</div>

<div class="routine-section">
  <div class="routine-title"> 🟢 Día 2 – Espalda</div>
  <div class="routine-info">
    <ul>
      <li>Dominadas — 4x6-10</li>
      <li>Remo con barra — 4x8-12</li>
      <li>Jalón al pecho — 3x10-12</li>
      <li>Pullover — 3x12-15</li>
    </ul>
  </div>
</div>

<div class="routine-section">
  <div class="routine-title"> 🟢 Día 3 – Descanso</div>
  <div class="routine-info">
    <ul>
      <li><strong>Dormir o ver una película</strong></li>
    </ul>
  </div>
</div>

<div class="routine-section">
  <div class="routine-title"> 🟢 Día 4 – Hombros y pantorrillas</div>
  <div class="routine-info">
    <ul>
      <li>Press militar — 4x6-10</li>
      <li>Elevaciones laterales — 4x12-15</li>
      <li>Face pull — 3x12-15</li>
      <li>Elevación de talones — 4x15-20</li>
    </ul>
  </div>
</div>

<div class="routine-section">
  <div class="routine-title"> 🟢 Día 5 – Brazos</div>
  <div class="routine-info">
    <ul>
      <li>Curl con barra — 4x8-12</li>
      <li>Curl martillo — 3x10-12</li>
      <li>Press francés — 4x8-12</li>
      <li>Extensión en polea — 3x10-12</li>
    </ul>
  </div>
</div>

<div class="routine-section">
  <div class="routine-title"> 🟢 Día 6 – Piernas</div>
  <div class="routine-info">
    <ul>
      <li>Sentadilla — 4x6-10</li>
      <li>Prensa — 3x10-12</li>
      <li>Peso muerto rumano — 3x8-12</li>
      <li>Pantorrillas — 4x15-20</li>
    </ul>
  </div>
</div>

<hr>

<h3>✅ Ventajas</h3>
<ul>
<li>Mejora estética y definición</li>
<li>Excelente combinación de fuerza + cardio</li>
<li>Quema de grasa eficiente</li>
<li>Buen equilibrio físico general</li>
</ul>

`;
}

if(id === "r5"){
content = `
<h2> 🔩 CALISTENIA + PESAS</h2>

<p>
📈 <b>Nivel:</b> Intermedio<br>
🗓️ <b>Frecuencia:</b> 6 días por semana<br>
🎯 <b>Objetivo:</b> Fuerza funcional + hipertrofia + control corporal
</p>

<hr>

<div class="routine-section">
  <div class="routine-title"> 🟢 Día 1 – Pecho</div>
  <div class="routine-info">
    <ul>
      <li>https://youtu.be/rCx4p0VpK80?si=bI7Wc-8hwevwrcz-</li>
    </ul>
  </div>
</div>

<div class="routine-section">
  <div class="routine-title"> 🟢 Día 2 – Piernas</div>
  <div class="routine-info">
    <ul>
      <li>Sentadilla — 3x10-14</li>
      <li>Sentadilla búlgara — 3x10-12</li>
      <li>Peso muerto — 3x8-12</li>
      <li>Elevación de pantorrillas — 3x20-25</li>
    </ul>
  </div>
</div>

<div class="routine-section">
  <div class="routine-title"> 🟢 Día 3 – Brazos </div>
  <div class="routine-info">
    <ul>
      <li>Curl con mancuernas — 3x11-15</li>
      <li>Curl martillo — 3x10-14</li>
      <li>Extensiones de tríceps — 4x8-12</li>
    </ul>
  </div>
</div>

<div class="routine-section">
  <div class="routine-title"> 🟢 Día 4 – Pecho</div>
  <div class="routine-info">
    <ul>
      <li>https://youtu.be/pTxxpLMKosM?si=3NjeiFuK7cUKRERi</li>
    </ul>
  </div>
</div>

<div class="routine-section">
  <div class="routine-title"> 🟢 Día 5 – Piernas</div>
  <div class="routine-info">
    <ul>
      <li>Sentadilla — 3x10-14</li>
      <li>Sentadilla búlgara — 3x10-12</li>
      <li>Peso muerto — 3x8-12</li>
      <li>Elevación de pantorrillas — 3x20-25</li>
    </ul>
  </div>
</div>

<div class="routine-section">
  <div class="routine-title"> 🟢 Día 6 – Brazos</div>
  <div class="routine-info">
    <ul>
      <li>Curl con mancuernas — 3x11-15</li>
      <li>Curl martillo — 3x10-14</li>
      <li>Extensiones de tríceps — 4x8-12</li>
    </ul>
  </div>
</div>

<hr>

<h3>✅ Ventajas</h3>
<ul>
<li>Fuerza funcional real</li>
<li>Mejora control corporal</li>
<li>Buen desarrollo muscular general</li>
<li>No depende totalmente del gimnasio</li>
</ul>

`;

}

if(id === "r6"){
content = `
<h2> 💀 UPPER / LOWER</h2>

<p>
📈 <b>Nivel:</b> Principiante / Intermedio<br>
🗓️ <b>Frecuencia:</b> 4 días por semana<br>
🎯 <b>Objetivo:</b> Ganancia de masa muscular + base de fuerza
</p>

<hr>

<div class="routine-section">
  <div class="routine-title"> 🟢 Día 1 – Upper</div>
  <div class="routine-info">
    <ul>
   <li> PRESS DE BANCA (4x8-12)</li>
    <li>EXTENSIÓN DE TRÍCEPS EN POLEA (3x10-12)</li>
    <li>JALÓN AL PECHO (4x8-10)</li>
    <li>CURL DE BÍCEPS CON MANCUERNAS (3x10-12)</li>
    <li>ELEVACIONES LATERALES CON MANCUERNAS (3x8-12)</li>
    <li>ELEVACIONES POSTERIORES CON MANCUERNAS (3x8-10)</li>
    <li>HIIT EN BICI (15 MIN.)</li>

    <li><strong>Descanso de 1:30 min. a 3:00 min. entre series</strong></li>
    <li><strong>y de 3:00 min. a 5:00 min. entre ejercicios</strong></li>
    </ul>
  </div>
</div>

<div class="routine-section">
  <div class="routine-title"> 🟢 Día 2 – Lower</div>
  <div class="routine-info">
    <ul>
      <li>SENTADILLA LIBRE CON BARRA ALTA (4x8-10)</li>
      <li>PRENSA (2x6-8)</li>
      <li>ADUCCIONES EN MÁQUINA (2x10-12)</li>
      <li>CURL FEMORAL SENTADO (4x10-12)</li>
      <li>ELEVACIÓN DE TELONES (3x15)</li>
      <li>CIRCUITO DE ABDOMINALES (10 MIN.)</li>

      <li><strong>Descanso de 1:30 min. a 3:00 min. entre series</strong></li>
      <li><strong>y de 3:00 min. a 5:00 min. entre ejercicios</strong></li>
    </ul>
  </div>
</div>

<div class="routine-section">
  <div class="routine-title"> 😴 Día 3 – Descanso</div>
  <div class="routine-info">
    <p>Recuperación activa: caminata, movilidad o cardio suave.</p>
  </div>
</div>

<div class="routine-section">
  <div class="routine-title"> 🟢 Día 4 – Upper (variación)</div>
  <div class="routine-info">
    <ul>
      <li>PRESS DE BANCA (4x8-12)</li>
      <li>EXTENSIÓN DE TRÍCEPS EN POLEA (3x10-12)</li>
      <li>REMO EN POLEA (4x8-10)</li>
      <li>CURL DE BÍCEPS CON MANCUERNAS (3x10-12)</li>
      <li>ELEVACIONES LATERALES CON MANCUERNAS (3x8-12)</li>
      <li>ELEVACIONES POSTERIORES CON MANCUERNAS (3x8-10)</li>
      <li>HIIT EN BICI (15 MIN.)</li>
      <li><strong>Descanso de 1:30 min. a 3:00 min. entre series</strong></li>
      <li><strong>y de 3:00 min. a 5:00 min. entre ejercicios</strong></li>
    </ul>
  </div>
</div>

<div class="routine-section">
  <div class="routine-title"> 🟢 Día 5 – Lower (variación)</div>
  <div class="routine-info">
    <ul>
      <li>SENTADILLA EN MÁQUINA SMITH (4x10-12)</li>
      <li>PRENSA (2x6-8)</li>
      <li>ADUCCIONES EN MÁQUINA (2x10-12)</li>
      <li>CURL FEMORAL SENTADO (4x10-12)</li>
      <li>ELEVACIÓN DE TELONES (3x15)</li>
      <li>CIRCUITO DE ABDOMINALES (10 MIN.)</li>
      <li><strong>Descanso de 1:30 min. a 3:00 min. entre series</strong></li>
      <li><strong>y de 3:00 min. a 5:00 min. entre ejercicios</strong></li>
    </ul>
  </div>
</div>

<hr>
<h3>✅ Ventajas</h3>
<ul>
<li>Perfecta para progresión constante</li>
<li>Excelente equilibrio entre fuerza y volumen</li>
<li>Ideal para principiantes en gimnasio</li>
<li>Muy buena base para rutinas avanzadas</li>
</ul>

`;
}

body.innerHTML = content;

modal.style.display = "flex";

setTimeout(()=>{
modal.classList.add("show");
},10);
}

function closeRoutine(){

    document.body.classList.remove("modal-open");
    modal.classList.remove("show");


setTimeout(()=>{
modal.style.display = "none";
},200);
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if(menuToggle && nav){
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}