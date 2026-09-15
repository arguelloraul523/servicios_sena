<template>
  <q-page class="bg-grey-1 q-pb-xl">
    <div class="container-main q-px-md q-py-lg">

      <!-- Navegación Superior -->
      <div class="row items-center justify-between q-mb-md">
        <q-btn
          flat
          no-caps
          color="positive"
          icon="arrow_back"
          label="Volver al Inicio"
          to="/"
          class="text-weight-bold"
        />
      </div>

      <!-- Layout Principal en Grid -->
      <div class="row q-col-gutter-lg">

        <!-- COLUMNA IZQUIERDA: Información del Servicio -->
        <div class="col-12 col-md-7">
          <q-card flat bordered class="rounded-borders bg-white q-pa-lg shadow-1">
            
            <!-- Encabezado con Iconografía Quasar -->
            <div class="row items-center no-wrap q-mb-md">
              <q-avatar size="56px" color="green-1" text-color="positive" class="q-mr-md shadow-1">
                <q-icon name="health_and_safety" size="32px" color="positive" />
              </q-avatar>
              <div>
                <span class="text-caption text-uppercase text-weight-bolder text-positive tracking-wider">
                  Área de Salud y Bienestar
                </span>
                <h1 class="text-h4 text-weight-bolder text-grey-10 q-ma-none leading-tight">
                  Enfermería
                </h1>
                <p class="text-subtitle2 text-grey-7 q-ma-none q-mt-xs">
                  Primeros auxilios y promoción de la salud
                </p>
              </div>
            </div>

            <q-separator class="q-my-md" />

            <!-- Imagen e Icono de Fotografía -->
            <div class="relative-position rounded-borders overflow-hidden q-mb-lg shadow-1">
              <q-img :src="fachada" height="260px" fit="cover" />
              <div class="absolute-bottom bg-gradient-dark text-white q-pa-sm text-caption text-weight-medium flex items-center">
                <q-icon name="photo_camera" color="positive" size="18px" class="q-mr-xs" />
                Instalaciones de Enfermería SENA
              </div>
            </div>

            <!-- Descripción Detallada -->
            <div class="text-h6 text-weight-bold text-grey-9 q-mb-xs flex items-center">
              <q-icon name="medical_services" color="positive" class="q-mr-xs" size="24px" />
              Descripción del Servicio
            </div>
            <p class="text-body1 text-grey-8 leading-relaxed q-mb-lg">
              Aquí se ofrecen los servicios de promoción y prevención de enfermedades, así como atención básica en primeros auxilios para los aprendices e instructores del centro. El equipo de enfermería acompaña situaciones de salud que se presenten durante la jornada formativa y orienta sobre el manejo de urgencias menores dentro de las instalaciones.
            </p>

            <!-- Lista de Cobertura con Iconos Quasar -->
            <div class="text-subtitle2 text-weight-bold text-grey-9 q-mb-sm">
              Servicios y cobertura incluida:
            </div>
            <div class="row q-col-gutter-sm">
              <div class="col-12 col-sm-6">
                <q-item class="bg-grey-2 rounded-borders border-light">
                  <q-item-section avatar min-width="32px">
                    <q-icon name="check_circle" color="positive" size="20px" />
                  </q-item-section>
                  <q-item-section class="text-weight-bold text-grey-8">
                    Primeros Auxilios
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-12 col-sm-6">
                <q-item class="bg-grey-2 rounded-borders border-light">
                  <q-item-section avatar min-width="32px">
                    <q-icon name="check_circle" color="positive" size="20px" />
                  </q-item-section>
                  <q-item-section class="text-weight-bold text-grey-8">
                    Promoción y Prevención
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-12 col-sm-6">
                <q-item class="bg-grey-2 rounded-borders border-light">
                  <q-item-section avatar min-width="32px">
                    <q-icon name="check_circle" color="positive" size="20px" />
                  </q-item-section>
                  <q-item-section class="text-weight-bold text-grey-8">
                    Urgencias Menores
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-12 col-sm-6">
                <q-item class="bg-grey-2 rounded-borders border-light">
                  <q-item-section avatar min-width="32px">
                    <q-icon name="check_circle" color="positive" size="20px" />
                  </q-item-section>
                  <q-item-section class="text-weight-bold text-grey-8">
                    Atención a Aprendices
                  </q-item-section>
                </q-item>
              </div>
            </div>

          </q-card>
        </div>

        <!-- COLUMNA DERECHA: Personal a Cargo (Sin badge de disponible) y Horarios -->
        <div class="col-12 col-md-5">

          <!-- TARJETA DE PERSONAL A CARGO -->
          <q-card flat bordered class="rounded-borders bg-white q-pa-lg q-mb-lg shadow-2">
            
            <!-- Encabezado de la Tarjeta -->
            <div class="row items-center q-mb-lg">
              <span class="text-subtitle2 text-uppercase text-weight-bolder text-grey-7 flex items-center">
                <q-icon name="person" color="positive" size="20px" class="q-mr-xs" />
                Personal a Cargo
              </span>
            </div>

            <!-- Perfil Principal -->
            <div class="column items-center text-center q-mb-lg">
              <q-avatar size="110px" class="shadow-4 border-positive-wide q-mb-md">
                <img :src="foto" alt="María Fernanda Gómez Reyes" style="object-fit: cover;" />
              </q-avatar>

              <div class="text-h5 text-weight-bolder text-grey-10 leading-tight q-px-sm">
                María Fernanda Gómez Reyes
              </div>
              
              <div class="text-subtitle1 text-weight-bold text-positive flex items-center justify-center q-mt-xs">
                <q-icon name="badge" color="positive" size="20px" class="q-mr-xs" />
                Enfermera / Atención Directa
              </div>

              <q-chip dense flat color="green-1" text-color="positive" class="q-mt-sm text-caption text-weight-medium">
                <q-icon name="verified_user" size="14px" class="q-mr-xs" />
                Atención Presencial SENA
              </q-chip>
            </div>

            <q-separator class="q-mb-lg" />

            <!-- Botones de Acción / Contacto -->
            <div class="q-gutter-y-md">
              <q-btn
                type="a"
                href="tel:+573214153995"
                unelevated
                color="positive"
                icon="phone_in_talk"
                label="Llamar: +57 321 415 3995"
                size="md"
                class="full-width text-weight-bold rounded-borders q-py-sm"
                no-caps
              />
              <q-btn
                type="a"
                href="mailto:Mafecita1118@gmail.com"
                outline
                color="positive"
                icon="alternate_email"
                label="Mafecita1118@gmail.com"
                size="md"
                class="full-width text-weight-bold rounded-borders q-py-sm bg-green-1"
                no-caps
              />
            </div>
          </q-card>

          <!-- Tarjeta de Horarios con Iconografía de Jornada -->
          <q-card flat bordered class="rounded-borders bg-white q-pa-md shadow-1">
            <div class="text-subtitle1 text-weight-bold text-grey-9 q-mb-md flex items-center">
              <q-icon name="access_time" color="positive" class="q-mr-xs" size="22px" />
              Horario de Atención
            </div>

            <q-list separator dense class="rounded-borders border-light">
              <q-item class="q-py-md">
                <q-item-section avatar min-width="32px">
                  <q-icon name="light_mode" color="positive" size="22px" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold text-grey-9">Jornada Mañana</q-item-label>
                  <q-item-label caption class="text-grey-7">Lunes a Viernes</q-item-label>
                </q-item-section>
                <q-item-section side class="text-weight-bolder text-positive">
                  6:30 a.m. - 10:30 a.m.
                </q-item-section>
              </q-item>

              <q-item class="q-py-md">
                <q-item-section avatar min-width="32px">
                  <q-icon name="dark_mode" color="positive" size="22px" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold text-grey-9">Jornada Tarde / Noche</q-item-label>
                  <q-item-label caption class="text-grey-7">Lunes a Viernes</q-item-label>
                </q-item-section>
                <q-item-section side class="text-weight-bolder text-positive">
                  4:00 p.m. - 8:00 p.m.
                </q-item-section>
              </q-item>
            </q-list>

            <div class="q-mt-md bg-green-1 q-pa-sm rounded-borders text-caption text-positive flex items-center border-green-light">
              <q-icon name="error_outline" color="positive" class="q-mr-xs" size="18px" />
              <span>Para urgencias fuera de horario, dirígete al puesto de vigilancia del centro.</span>
            </div>
          </q-card>

        </div>

      </div>

    </div>
  </q-page>
</template>

<script setup>
import fachada from '../assets/images/enfermeria-fachada.jpeg'
import foto from '../assets/images/enfermeria-encargada.jpeg'
</script>

<style scoped>
.container-main {
  max-width: 1100px;
  margin: 0 auto;
}

.leading-tight {
  line-height: 1.2;
}

.leading-relaxed {
  line-height: 1.6;
}

.tracking-wider {
  letter-spacing: 0.8px;
}

.border-light {
  border: 1px solid #e0e0e0;
}

.border-positive-wide {
  border: 3px solid #2e7d32;
}

.border-green-light {
  border: 1px solid #c8e6c9;
}

.bg-gradient-dark {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
}
</style>