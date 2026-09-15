<template>
  <ServicioDetalle :data="data" />
</template>

<script setup>
import ServicioDetalle from '../components/ServicioDetalle.vue'
import fachada from '../assets/images/enfermeria-fachada.jpeg'
import foto from '../assets/images/enfermeria-encargada.jpeg'

const data = {
  title: 'Enfermería',
  tagline: 'Primeros auxilios y promoción de la salud',
  color: '#D65A5A',
  icon: 'medical_services',
  fachada,
  description:
    'Aquí se ofrecen los servicios de promoción y prevención de enfermedades, así como atención básica en primeros auxilios para los aprendices e instructores del centro. El equipo de enfermería acompaña situaciones de salud que se presenten durante la jornada formativa y orienta sobre el manejo de urgencias menores dentro de las instalaciones.',
  horarios: [
    { dias: 'Lunes a viernes', rango: '6:30 a.m. - 10:30 a.m.' },
    { dias: 'Lunes a viernes', rango: '4:00 p.m. - 8:00 p.m.' },
  ],
  telefono: '+57 321 415 3995',
  correo: 'Mafecita1118@gmail.com',
  encargado: {
    titulo: 'Encargada de atención al cliente',
    nombre: 'María Fernanda Gómez Reyes',
    cargo: 'Enfermera',
    foto,
  },
}
</script>
