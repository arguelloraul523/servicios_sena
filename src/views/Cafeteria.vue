<template>
  <ServicioDetalle :data="data" />
</template>

<script setup>
import ServicioDetalle from '../components/ServicioDetalle.vue'
import fachada from '../assets/images/cafeteria-fachada.jpeg'
import foto from '../assets/images/cafeteria-encargada.jpeg'

const data = {
  title: 'Cafetería',
  tagline: 'Alimentación para aprendices e instructores',
  color: '#D9782E',
  icon: 'restaurant',
  fachada,
  description:
    'La cafetería del centro presta el servicio de venta y atención al cliente en alimentación para aprendices, instructores y funcionarios. Cuenta con turnos de atención distribuidos durante el día y los sábados, garantizando opciones de comida en las principales franjas horarias de la jornada.',
  horarios: [
    { dias: 'Lunes a viernes', rango: '7:00 a.m. - 12:00 p.m.' },
    { dias: 'Lunes a viernes', rango: '1:00 p.m. - 5:30 p.m.' },
    { dias: 'Lunes a viernes', rango: '7:00 p.m. - 9:30 p.m.' },
    { dias: 'Sábados', rango: '7:30 a.m. - 12:00 p.m.' },
  ],
  telefono: '+57 322 303 8451',
  correo: 'lcarreno@sena.edu.com',
  encargado: {
    titulo: 'Encargada de atención al cliente',
    nombre: 'Encargada de cafetería',
    cargo: 'Coordinadora de cafetería',
    foto,
  },
}
</script>
