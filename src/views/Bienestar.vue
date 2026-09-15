<template>
  <ServicioDetalle :data="data" />
</template>

<script setup>
import ServicioDetalle from '../components/ServicioDetalle.vue'
import fachada from '../assets/images/bienestar-fachada.jpeg'
import foto from '../assets/images/bienestar-encargada.jpeg'

const data = {
  title: 'Bienestar al aprendiz',
  tagline: 'Acompañamiento, deporte y apoyos socioeconómicos',
  color: '#E8A33D',
  icon: 'spa',
  fachada,
  description:
    'Bienestar al aprendiz es una estrategia institucional para contribuir en la permanencia de los aprendices en su proceso formativo. Gestiona temas de salud física y mental, fortalecimiento de habilidades blandas y para la vida, deporte y aprovechamiento del tiempo libre, expresiones artísticas, apoyos socioeconómicos (sostenimiento, FIC, medios tecnológicos, alimentación y transporte), monitorías y liderazgo.',
  horarios: [
    { dias: 'Lunes a viernes', rango: '7:30 a.m. - 12:00 p.m.' },
    { dias: 'Lunes a viernes', rango: '2:00 p.m. - 6:00 p.m.' },
  ],
  telefono: '+57 317 637 7670',
  correo: 'mdarenas@sena.edu.com',
  encargado: {
    titulo: 'Encargada de atención al cliente',
    nombre: 'María Delea Arenas Mejía',
    cargo: 'Líder de Bienestar al Aprendiz',
    foto,
  },
}
</script>
