export const convertDate = (date: any) => {
    const fechaActual: any = new Date();

    // Supongamos que tienes una fecha específica en el formato YYYY-MM-DD
    const fechaEspecifica: any = new Date(date);

    // Calcular la diferencia en milisegundos
    const diferenciaEnMilisegundos = fechaActual - fechaEspecifica;

    // Convertir la diferencia de milisegundos a días
    const unDiaEnMilisegundos = 1000 * 60 * 60 * 24;
    return Math.floor(diferenciaEnMilisegundos / unDiaEnMilisegundos);
};