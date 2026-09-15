<template>
  <ServicioDetalle :data="data" />
</template>

<script setup>
import ServicioDetalle from '../components/ServicioDetalle.vue'
import fachada from '../assets/images/biblioteca-fachada.jpeg'
import foto from '../assets/images/biblioteca-encargada.jpeg'

const data = {
  title: 'Biblioteca',
  tagline: 'Préstamos, consultas y talleres de lectura',
  color: '#3B6FA0',
  icon: 'menu_book',
  fachada,
  description:
    'La biblioteca ofrece consultas en sala, préstamos a domicilio y préstamo interbibliotecario (PIP), además de talleres de lectura, capacitaciones y acceso a TIC. El equipo brinda asesorías en búsqueda de información y en el uso adecuado del catálogo bibliográfico para apoyar el proceso formativo de los aprendices.',
  horarios: [
    { dias: 'Lunes a viernes', rango: '7:00 a.m. - 10:00 a.m.' },
  ],
  telefono: '+57 312 584 8032',
  correo: 'ymmartinez@sena.edu.co',
  encargado: {
    titulo: 'Encargada de atención al cliente',
    nombre: 'Yudith Milagros Martínez Bautista',
    cargo: 'Bibliotecaria',
    foto,
  },
}
</script>
