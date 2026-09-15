<template>
  <q-page class="bg-grey-1 q-pb-xl">

    <section class="container-main q-px-md q-py-xl">
      <div class="row items-center q-col-gutter-xl">
        
        <div class="col-12 col-md-7">
          <div class="row items-center q-gutter-xs q-mb-md">
            <q-avatar size="38px" class="bg-white border-grey shadow-1">
              <img :src="senaLogo" alt="Logo SENA" style="padding: 4px; object-fit: contain;" />
            </q-avatar>
            <span class="text-subtitle2 text-weight-bold text-grey-8 q-ml-sm">
              Centro Agroturístico Regional Santander
            </span>
          </div>

          <h1 class="text-h3 text-weight-bolder text-grey-10 q-mb-md leading-tight q-mt-none">
            Encuentra el servicio<br />que necesitas hoy
          </h1>

          <p class="text-body1 text-grey-7 q-mb-lg max-width-p">
            Horarios de atención, teléfonos y el equipo responsable de cada área de bienestar y apoyo del centro, reunidos en un solo lugar.
          </p>

          <q-btn
            unelevated
            color="positive"
            size="lg"
            no-caps
            class="text-weight-bold rounded-borders shadow-2"
            label="Ver los servicios"
            icon-right="arrow_downward"
            @click="irAServicios"
          />
        </div>

        <div class="col-12 col-md-5 flex flex-center">
          <div class="relative-position flex flex-center">
            <q-avatar size="210px" class="bg-green-2 shadow-3">
              <q-avatar size="180px" class="bg-white shadow-4">
                <img :src="senaLogo" alt="SENA Logo" style="padding: 16px; object-fit: contain;" />
              </q-avatar>
            </q-avatar>
          </div>
        </div>

      </div>
    </section>

    <section ref="serviciosRef" class="container-main q-px-md q-pt-lg">
      <div class="q-mb-lg">
        <h2 class="text-h4 text-weight-bolder text-grey-9 q-ma-none">Servicios</h2>
        <p class="text-subtitle1 text-grey-7 q-mt-xs q-mb-none">
          Elige un área para ver su horario, contacto y responsable.
        </p>
      </div>

      <div class="row q-col-gutter-md">
        <div
          v-for="s in servicios"
          :key="s.slug"
          class="col-12 col-sm-6 col-md-4"
        >
          <q-card
            clickable
            v-ripple
            @click="irADetalle(s.to)"
            class="full-height flex column card-hover shadow-1 rounded-borders overflow-hidden cursor-pointer"
          >
            <q-img :src="s.img" height="150px" />

            <q-card-section class="q-pa-md col-grow flex column justify-between">
              <div>
                <div class="text-h6 text-weight-bold text-grey-9 q-mb-xs">
                  {{ s.title }}
                </div>
                <div class="text-body2 text-grey-7">
                  {{ s.tagline }}
                </div>
              </div>

              <div 
                class="q-mt-md flex items-center text-weight-bold" 
                :style="{ color: s.color || '#2e7d32' }"
              >
                <span>Ver más</span>
                <q-icon name="arrow_forward" size="16px" class="q-ml-xs" />
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>


    <section class="container-main q-px-md q-mt-xl">
      <q-separator class="q-mb-md" />
      <div class="row items-center justify-between q-col-gutter-sm text-grey-7">
        <div class="row items-center text-body2">
          <q-icon name="location_on" color="positive" size="20px" class="q-mr-xs" />
          <span>Centro Agroturístico Regional Santander</span>
        </div>

        <q-btn
          flat
          no-caps
          color="positive"
          to="/acerca"
          icon="info"
          label="Conoce más del centro"
          class="text-weight-bold"
        />
      </div>
    </section>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import senaLogo from '../assets/images/sena.jpeg'
import { servicios } from '../data/servicios.js'

const router = useRouter()
const serviciosRef = ref(null)

function irAServicios () {
  serviciosRef.value?.scrollIntoView({ behavior: 'smooth' })
}

function irADetalle (ruta) {
  if (ruta) {
    router.push(ruta)
  }
}
</script>

<style scoped>
.container-main {
  max-width: 1100px;
  margin: 0 auto;
}

.leading-tight {
  line-height: 1.15;
}

.max-width-p {
  max-width: 520px;
}

.border-grey {
  border: 1px solid #e7e9e2;
}

.card-hover {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12) !important;
}
</style>