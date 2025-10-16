// Paso 1: Definir las fechas de tus eventos
const EVENTOS = [
    "15/10/2025",
    "20/10/2025",
    "25/10/2025",
    "10/11/2025",
    "15/01/2026"
];

// Función para formatear las fechas a un formato de comparación simple (DD/MM/YYYY)
function formatearFecha(fecha) {
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
}

// Función de ejemplo para renderizar los días (¡Esta es la parte clave!)
function renderizarCalendario(mes, anio) {
    const diasContenedor = document.getElementById('days');
    diasContenedor.innerHTML = ''; // Limpiar días anteriores

    // Suponiendo que 'fechaActual' es el día de hoy (15 de Octubre de 2025)
    const fechaActual = new Date(2025, 9, 15); 
    
    // Ejemplo de un mes con 30 días
    const numeroDeDias = 30; // Debes calcular esto de forma real

    for (let i = 1; i <= numeroDeDias; i++) {
        const diaDiv = document.createElement('div');
        diaDiv.classList.add('dia');
        diaDiv.textContent = i;

        // 1. Calcular la fecha completa del día que estamos dibujando
        const fechaDelDia = new Date(anio, mes, i);
        const fechaFormateada = formatearFecha(fechaDelDia);

        // 2. Aplicar el indicador de evento
        if (EVENTOS.includes(fechaFormateada)) {
            diaDiv.classList.add('con-evento');
        }

        // 3. Aplicar el indicador de hoy (Solo para Octubre 2025, día 15)
        if (fechaDelDia.getTime() === fechaActual.getTime()) {
             diaDiv.classList.add('hoy');
        }

        diasContenedor.appendChild(diaDiv);
    }
}

// ***************
// Llamada Inicial (Simula la carga del mes de Octubre)
// Mes: 9 (Octubre, ya que en JS los meses van de 0 a 11)
// Año: 2025
document.getElementById('month-year').textContent = "Octubre 2025";
renderizarCalendario(9, 2025); 
// ***************