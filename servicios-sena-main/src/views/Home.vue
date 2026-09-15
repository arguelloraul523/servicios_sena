<template>
  <q-page class="home">

    <section class="hero">
      <div class="hero-texto">
        <div class="hero-marca">
          <q-avatar size="44px" class="hero-logo">
            <img :src="senaLogo" alt="Logo SENA">
          </q-avatar>
          <span>Centro Agroturístico Regional Santander</span>
        </div>

        <h1 class="hero-titulo">
          Encuentra el servicio<br>que necesitas hoy
        </h1>

        <p class="hero-descripcion">
          Horarios de atención, teléfonos y el equipo responsable de cada
          área de bienestar y apoyo del centro, reunidos en un solo lugar.
        </p>

        <q-btn
          unelevated
          class="hero-btn"
          label="Ver los servicios"
          icon-right="arrow_downward"
          @click="irAServicios"
        />
      </div>

      <div class="hero-grafico" aria-hidden="true">
        <div class="blob blob-a"></div>
        <div class="blob blob-b"></div>
        <q-avatar size="96px" class="hero-grafico-logo">
          <img :src="senaLogo" alt="">
        </q-avatar>
      </div>
    </section>

    <section class="servicios" ref="serviciosRef">
      <div class="servicios-titulo">
        <h2>Servicios</h2>
        <p>Elige un área para ver su horario, contacto y responsable.</p>
      </div>

      <div class="grid">
        <router-link
          v-for="s in servicios"
          :key="s.slug"
          :to="s.to"
          class="card"
          :style="{ '--accent': s.color }"
        >
          <div class="card-media">
            <q-img :src="s.img" class="card-img" />
            <div class="card-icono">
              <q-icon :name="s.icon" size="20px" />
            </div>
          </div>

          <div class="card-body">
            <h3 class="card-titulo">{{ s.title }}</h3>
            <p class="card-desc">{{ s.tagline }}</p>
            <span class="card-link">
              Ver más
              <q-icon name="arrow_forward" size="14px" />
            </span>
          </div>
        </router-link>
      </div>
    </section>

    <section class="franja">
      <div class="franja-item">
        <q-icon name="location_on" size="18px" />
        Centro Agroturístico Regional Santander
      </div>
      <router-link to="/acerca" class="franja-item franja-link">
        <q-icon name="info" size="18px" />
        Conoce más del centro
      </router-link>
    </section>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import senaLogo from '../assets/images/sena.jpeg'
import { servicios } from '../data/servicios.js'

const serviciosRef = ref(null)
function irAServicios () {
  serviciosRef.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.home {
  padding-bottom: 40px;
}

/* --- Hero --- */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 48px 24px;
  max-width: 1100px;
  margin: 0 auto;
}
.hero-texto {
  max-width: 480px;
}
.hero-marca {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--ink-soft);
  margin-bottom: 20px;
}
.hero-logo {
  background: #fff;
  border: 1px solid #E7E9E2;
}
.hero-logo img {
  object-fit: contain;
  padding: 4px;
}
.hero-titulo {
  font-family: var(--font-display);
  font-size: 40px;
  line-height: 1.15;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 16px;
}
.hero-descripcion {
  font-size: 16px;
  line-height: 1.6;
  color: var(--ink-soft);
  margin: 0 0 28px;
}
.hero-btn {
  background: var(--sena-green);
  color: #fff;
  font-weight: 600;
  text-transform: none;
  font-size: 15px;
  border-radius: 12px;
  padding: 10px 20px;
}

.hero-grafico {
  position: relative;
  width: 260px;
  height: 260px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.blob {
  position: absolute;
  inset: 0;
}
.blob-a {
  background: linear-gradient(135deg, var(--sena-green), #7bd34a);
  border-radius: 62% 38% 55% 45% / 45% 55% 45% 55%;
  opacity: 0.95;
}
.blob-b {
  background: #E8A33D;
  border-radius: 45% 55% 40% 60% / 55% 45% 60% 40%;
  opacity: 0.35;
  transform: scale(0.78) rotate(20deg) translate(10px, 14px);
}
.hero-grafico-logo {
  position: relative;
  background: #fff;
  box-shadow: 0 12px 28px rgba(20, 30, 15, 0.18);
  border: 4px solid #fff;
}
.hero-grafico-logo img {
  object-fit: contain;
  padding: 10px;
}

/* --- Servicios --- */
.servicios {
  max-width: 900px;
  margin: 16px auto 0;
  padding: 0 24px;
  scroll-margin-top: 24px;
}
.servicios-titulo h2 {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 4px;
}
.servicios-titulo p {
  font-size: 14.5px;
  color: var(--ink-soft);
  margin: 0 0 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 18px;
}
.card {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background: #fff;
  border: 1px solid #E7E9E2;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 28px rgba(20, 30, 15, 0.12);
}
.card-media {
  position: relative;
  height: 120px;
}
.card-img {
  height: 100%;
}
.card-icono {
  position: absolute;
  left: 16px;
  bottom: -20px;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent);
  color: #fff;
  box-shadow: 0 6px 14px rgba(20, 30, 15, 0.22);
}
.card-body {
  padding: 32px 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}
.card-titulo {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 16px;
  color: var(--ink);
  margin: 0;
}
.card-desc {
  font-size: 13.5px;
  line-height: 1.5;
  color: var(--ink-soft);
  margin: 0;
  flex: 1;
}
.card-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent);
}


.franja {
  max-width: 900px;
  margin: 32px auto 0;
  padding: 20px 24px 0;
  border-top: 1px solid #E7E9E2;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 13.5px;
  color: var(--ink-soft);
}
.franja-item {
  display: flex;
  align-items: center;
  gap: 6px;
}
.franja-link {
  text-decoration: none;
  color: var(--sena-green-dark);
  font-weight: 600;
}
.franja-link:hover {
  text-decoration: underline;
}

@media (max-width: 720px) {
  .hero {
    flex-direction: column;
    text-align: left;
    padding: 32px 20px;
  }
  .hero-titulo {
    font-size: 32px;
  }
  .hero-grafico {
    width: 180px;
    height: 180px;
  }
}
</style>