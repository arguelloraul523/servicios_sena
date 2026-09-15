import fachadaEnfermeria from '../assets/images/enfermeria-fachada.jpeg'
import fachadaBienestar from '../assets/images/bienestar-fachada.jpeg'
import fachadaBiblioteca from '../assets/images/biblioteca-fachada.jpeg'
import fachadaCafeteria from '../assets/images/cafeteria-fachada.jpeg'
import fachadaCoordinacion from '../assets/images/coordinacion-fachada.jpeg'

// Paleta de acento por servicio: mantiene el verde SENA como color
// institucional principal y usa un color propio por área para que cada
// una sea reconocible de un vistazo, tanto en Inicio como en su página.
export const servicios = [
  {
    slug: 'enfermeria',
    to: '/enfermeria',
    title: 'Enfermería',
    tagline: 'Primeros auxilios y promoción de la salud',
    icon: 'medical_services',
    color: '#D65A5A',
    img: fachadaEnfermeria,
  },
  {
    slug: 'bienestar',
    to: '/bienestar',
    title: 'Bienestar al aprendiz',
    tagline: 'Acompañamiento, deporte y apoyos socioeconómicos',
    icon: 'spa',
    color: '#E8A33D',
    img: fachadaBienestar,
  },
  {
    slug: 'biblioteca',
    to: '/biblioteca',
    title: 'Biblioteca',
    tagline: 'Préstamos, consultas y talleres de lectura',
    icon: 'menu_book',
    color: '#3B6FA0',
    img: fachadaBiblioteca,
  },
  {
    slug: 'cafeteria',
    to: '/cafeteria',
    title: 'Cafetería',
    tagline: 'Alimentación para aprendices e instructores',
    icon: 'restaurant',
    color: '#D9782E',
    img: fachadaCafeteria,
  },
  {
    slug: 'coordinacion',
    to: '/coordinacion',
    title: 'Coordinación académica',
    tagline: 'Novedades, programación de instructores y ambientes',
    icon: 'badge',
    color: '#1F7A6C',
    img: fachadaCoordinacion,
  },
]
