<template>
  <ServicioDetalle :data="data" />
</template>

<script setup>
import ServicioDetalle from '../components/ServicioDetalle.vue'
import fachada from '../assets/images/coordinacion-fachada.jpeg'
import foto from '../assets/images/coordinacion-encargado.jpeg'

const data = {
  title: 'Coordinación académica',
  tagline: 'Novedades, programación de instructores y ambientes',
  color: '#1F7A6C',
  icon: 'badge',
  fachada,
  description:
    'La coordinación académica apoya las novedades de los aprendices: retiros, deserción, traslados y aplazamientos en la formación titulada del SENA. También gestiona la programación de instructores y la logística de los ambientes de formación, verificando que se encuentren en óptimas condiciones para el desarrollo de las clases.',
  horarios: [
    { dias: 'Lunes a viernes', rango: '7:30 a.m. - 12:00 p.m.' },
  ],
  telefono: null,
  correo: 'lreinas@sena.edu.com',
  encargado: {
    titulo: 'Encargado de atención al cliente',
    nombre: 'Luis Carlos Reina Sánchez',
    cargo: 'Coordinador académico',
    foto,
  },
}
</script>
