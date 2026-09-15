<template>
  <q-page class="servicio-page" :style="{ '--accent': data.color }">
    <div class="container">

      <router-link to="/" class="volver">
        <q-icon name="arrow_back" size="18px" />
        Servicios
      </router-link>

      <div class="cabecera">
        <div class="cabecera-texto">
          <span class="ruta">Servicios / {{ data.title }}</span>
          <h1 class="titulo">{{ data.title }}</h1>
          <p class="tagline">{{ data.tagline }}</p>
        </div>
        <div class="cabecera-icono">
          <q-icon :name="data.icon" size="32px" />
        </div>
      </div>

      <q-img :src="data.fachada" :ratio="21 / 9" class="banner" />

      <p class="descripcion">{{ data.description }}</p>

      <div class="paneles">
        <section class="panel">
          <header class="panel-header">
            <q-icon name="schedule" size="20px" />
            <h2>Horario de atención</h2>
          </header>
          <ul class="horarios">
            <li v-for="(h, i) in data.horarios" :key="i">
              <span class="horario-dias">{{ h.dias }}</span>
              <span class="horario-rango">{{ h.rango }}</span>
            </li>
          </ul>
        </section>

        <section class="panel">
          <header class="panel-header">
            <q-icon name="call" size="20px" />
            <h2>Contacto</h2>
          </header>

          <div class="contacto-cuerpo">
            <div v-if="data.telefono" class="telefono">{{ data.telefono }}</div>
            <p v-else class="sin-telefono">Este servicio se atiende por correo electrónico.</p>

            <div class="acciones">
              <q-btn
                v-if="data.telefono"
                unelevated
                class="btn-llamar"
                icon="call"
                label="Llamar"
                :href="'tel:' + telefonoLimpio"
              />
              <q-btn
                outline
                class="btn-correo"
                icon="mail"
                label="Enviar correo"
                :href="'mailto:' + data.correo"
              />
            </div>
          </div>
        </section>
      </div>

      <section class="encargado">
        <q-avatar size="76px" class="encargado-avatar">
          <img :src="data.encargado.foto" :alt="data.encargado.nombre">
        </q-avatar>
        <div class="encargado-texto">
          <span class="encargado-etiqueta">{{ data.encargado.titulo }}</span>
          <div class="encargado-nombre">{{ data.encargado.nombre }}</div>
          <div class="encargado-cargo">{{ data.encargado.cargo }}</div>
          <a class="encargado-correo" :href="'mailto:' + data.correo">
            <q-icon name="mail" size="14px" />
            {{ data.correo }}
          </a>
        </div>
      </section>

    </div>
  </q-page>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})

const telefonoLimpio = computed(() =>
  props.data.telefono ? props.data.telefono.replace(/\s+/g, '') : ''
)
</script>

<style scoped>
.servicio-page {
  padding: 28px 16px 56px;
}
.container {
  max-width: 860px;
  margin: 0 auto;
}

.volver {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-soft);
  text-decoration: none;
  margin-bottom: 20px;
}
.volver:hover {
  color: var(--accent);
}

.cabecera {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
}
.ruta {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 6px;
}
.titulo {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 6px;
  color: var(--ink);
}
.tagline {
  font-size: 15px;
  color: var(--ink-soft);
  margin: 0;
  max-width: 46ch;
}
.cabecera-icono {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, var(--accent) 14%, white);
  color: var(--accent);
}

.banner {
  border-radius: 18px;
  overflow: hidden;
  border-top: 5px solid var(--accent);
  box-shadow: 0 10px 24px rgba(20, 30, 15, 0.12);
  margin-bottom: 22px;
}

.descripcion {
  font-size: 15.5px;
  line-height: 1.7;
  color: var(--ink-soft);
  max-width: 68ch;
  margin: 0 0 28px;
  padding-left: 16px;
  border-left: 3px solid color-mix(in srgb, var(--accent) 40%, white);
}

.paneles {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}
.panel {
  background: #fff;
  border: 1px solid #E7E9E2;
  border-radius: 16px;
  padding: 20px;
}
.panel-header {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--accent);
  margin-bottom: 14px;
}
.panel-header h2 {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 600;
  color: var(--ink);
  margin: 0;
}

.horarios {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.horarios li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 10px;
  background: color-mix(in srgb, var(--accent) 7%, white);
  font-size: 14px;
}
.horario-dias {
  color: var(--ink);
  font-weight: 600;
}
.horario-rango {
  color: var(--ink-soft);
}

.contacto-cuerpo {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.telefono {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  color: var(--ink);
}
.sin-telefono {
  font-size: 14px;
  color: var(--ink-soft);
  margin: 0;
}
.acciones {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.btn-llamar {
  background: var(--accent);
  color: #fff;
  border-radius: 10px;
  font-weight: 600;
  text-transform: none;
  padding: 0 16px;
}
.btn-correo {
  color: var(--accent);
  border-color: color-mix(in srgb, var(--accent) 45%, white);
  border-radius: 10px;
  font-weight: 600;
  text-transform: none;
  padding: 0 16px;
}

.encargado {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 20px;
  border-radius: 16px;
  background: color-mix(in srgb, var(--accent) 8%, white);
}
.encargado-avatar {
  border: 3px solid #fff;
  box-shadow: 0 4px 10px rgba(20, 30, 15, 0.12);
}
.encargado-etiqueta {
  display: block;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 2px;
}
.encargado-nombre {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 700;
  color: var(--ink);
}
.encargado-cargo {
  font-size: 14px;
  color: var(--ink-soft);
  margin-bottom: 4px;
}
.encargado-correo {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 13.5px;
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
}
.encargado-correo:hover {
  text-decoration: underline;
}

@media (max-width: 680px) {
  .paneles {
    grid-template-columns: 1fr;
  }
  .titulo {
    font-size: 26px;
  }
  .encargado {
    align-items: flex-start;
  }
}
</style>
