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
            
            <!-- Encabezado con Icono Nativo en Verde -->
            <div class="row items-center no-wrap q-mb-md">
              <q-avatar 
                icon="restaurant" 
                size="56px" 
                color="green-1" 
                text-color="positive" 
                class="q-mr-md shadow-1" 
              />
              <div>
                <span class="text-caption text-uppercase text-weight-bolder text-positive tracking-wider">
                  Servicios de Alimentación
                </span>
                <h1 class="text-h4 text-weight-bolder text-grey-10 q-ma-none leading-tight">
                  Cafetería
                </h1>
                <p class="text-subtitle2 text-grey-7 q-ma-none q-mt-xs">
                  Alimentación para aprendices e instructores
                </p>
              </div>
            </div>

            <q-separator class="q-my-md" />

            <!-- Imagen e Icono Quasar -->
            <div class="relative-position rounded-borders overflow-hidden q-mb-lg shadow-1">
              <q-img :src="fachada" height="260px" fit="cover" />
              <div class="absolute-bottom bg-gradient-dark text-white q-pa-sm text-caption text-weight-medium flex items-center">
                <q-icon name="photo_camera" color="positive" size="18px" class="q-mr-xs" />
                Instalaciones de la Cafetería SENA
              </div>
            </div>

            <!-- Descripción -->
            <div class="text-h6 text-weight-bold text-grey-9 q-mb-xs flex items-center">
              <q-icon name="info" color="positive" class="q-mr-xs" size="24px" />
              Descripción del Servicio
            </div>
            <p class="text-body1 text-grey-8 leading-relaxed q-mb-lg">
              La cafetería del centro presta el servicio de venta y atención al cliente en alimentación para aprendices, instructores y funcionarios. Cuenta con turnos de atención distribuidos durante el día y los sábados, garantizando opciones de comida en las principales franjas horarias de la jornada.
            </p>

            <!-- Opciones y Servicios Incluidos con Iconos Quasar Verdes -->
            <div class="text-subtitle2 text-weight-bold text-grey-9 q-mb-sm">
              Servicios y atención disponible:
            </div>
            <div class="row q-col-gutter-sm">
              <div class="col-12 col-sm-6">
                <q-item class="bg-grey-2 rounded-borders border-light">
                  <q-item-section avatar min-width="32px">
                    <q-icon name="flatware" color="positive" size="20px" />
                  </q-item-section>
                  <q-item-section class="text-weight-bold text-grey-8">
                    Menú Diario y Almuerzos
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-12 col-sm-6">
                <q-item class="bg-grey-2 rounded-borders border-light">
                  <q-item-section avatar min-width="32px">
                    <q-icon name="coffee" color="positive" size="20px" />
                  </q-item-section>
                  <q-item-section class="text-weight-bold text-grey-8">
                    Bebidas y Snacks
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-12 col-sm-6">
                <q-item class="bg-grey-2 rounded-borders border-light">
                  <q-item-section avatar min-width="32px">
                    <q-icon name="groups" color="positive" size="20px" />
                  </q-item-section>
                  <q-item-section class="text-weight-bold text-grey-8">
                    Atención a Aprendices
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-12 col-sm-6">
                <q-item class="bg-grey-2 rounded-borders border-light">
                  <q-item-section avatar min-width="32px">
                    <q-icon name="badge" color="positive" size="20px" />
                  </q-item-section>
                  <q-item-section class="text-weight-bold text-grey-8">
                    Instructores y Funcionarios
                  </q-item-section>
                </q-item>
              </div>
            </div>

          </q-card>
        </div>

        <div class="col-12 col-md-5">

          <q-card flat bordered class="rounded-borders bg-white q-pa-lg q-mb-lg shadow-2">
            
            <div class="row items-center q-mb-lg">
              <span class="text-subtitle2 text-uppercase text-weight-bolder text-grey-7 flex items-center">
                <q-icon name="person" color="positive" size="20px" class="q-mr-xs" />
                Personal a Cargo
              </span>
            </div>

            <div class="column items-center text-center q-mb-lg">
              <q-avatar size="110px" class="shadow-4 border-positive-wide q-mb-md">
                <img :src="foto" alt="Encargada de cafetería" style="object-fit: cover;" />
              </q-avatar>

              <div class="text-h5 text-weight-bolder text-grey-10 leading-tight q-px-sm">
                Encargada de Cafetería
              </div>
              
              <div class="text-subtitle1 text-weight-bold text-positive flex items-center justify-center q-mt-xs">
                <q-icon name="badge" color="positive" size="20px" class="q-mr-xs" />
                Coordinadora de Cafetería
              </div>

              <q-chip dense flat color="green-1" text-color="positive" class="q-mt-sm text-caption text-weight-medium">
                <q-icon name="verified_user" size="14px" class="q-mr-xs" />
                Atención Presencial SENA
              </q-chip>
            </div>

            <q-separator class="q-mb-lg" />

            <div class="q-gutter-y-md">
              <q-btn
                type="a"
                href="tel:+573223038451"
                unelevated
                color="positive"
                icon="phone_in_talk"
                label="Llamar: +57 322 303 8451"
                size="md"
                class="full-width text-weight-bold rounded-borders q-py-sm"
                no-caps
              />
              <q-btn
                type="a"
                href="mailto:lcarreno@sena.edu.com"
                outline
                color="positive"
                icon="alternate_email"
                label="lcarreno@sena.edu.com"
                size="md"
                class="full-width text-weight-bold rounded-borders q-py-sm bg-green-1"
                no-caps
              />
            </div>
          </q-card>

          <q-card flat bordered class="rounded-borders bg-white q-pa-md shadow-1">
            <div class="text-subtitle1 text-weight-bold text-grey-9 q-mb-md flex items-center">
              <q-icon name="access_time" color="positive" class="q-mr-xs" size="22px" />
              Horarios de Atención
            </div>

            <q-list separator dense class="rounded-borders border-light">
              <q-item class="q-py-sm">
                <q-item-section avatar min-width="32px">
                  <q-icon name="light_mode" color="positive" size="20px" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold text-grey-9">Jornada Mañana</q-item-label>
                  <q-item-label caption class="text-grey-7">Lunes a Viernes</q-item-label>
                </q-item-section>
                <q-item-section side class="text-weight-bolder text-positive">
                  7:00 a.m. - 12:00 p.m.
                </q-item-section>
              </q-item>

              <q-item class="q-py-sm">
                <q-item-section avatar min-width="32px">
                  <q-icon name="wb_twilight" color="positive" size="20px" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold text-grey-9">Jornada Tarde</q-item-label>
                  <q-item-label caption class="text-grey-7">Lunes a Viernes</q-item-label>
                </q-item-section>
                <q-item-section side class="text-weight-bolder text-positive">
                  1:00 p.m. - 5:30 p.m.
                </q-item-section>
              </q-item>

              <q-item class="q-py-sm">
                <q-item-section avatar min-width="32px">
                  <q-icon name="dark_mode" color="positive" size="20px" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold text-grey-9">Jornada Noche</q-item-label>
                  <q-item-label caption class="text-grey-7">Lunes a Viernes</q-item-label>
                </q-item-section>
                <q-item-section side class="text-weight-bolder text-positive">
                  7:00 p.m. - 9:30 p.m.
                </q-item-section>
              </q-item>

              <q-item class="q-py-sm">
                <q-item-section avatar min-width="32px">
                  <q-icon name="today" color="positive" size="20px" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold text-grey-9">Fin de Semana</q-item-label>
                  <q-item-label caption class="text-grey-7">Sábados</q-item-label>
                </q-item-section>
                <q-item-section side class="text-weight-bolder text-positive">
                  7:30 a.m. - 12:00 p.m.
                </q-item-section>
              </q-item>
            </q-list>

            <div class="q-mt-md bg-green-1 q-pa-sm rounded-borders text-caption text-positive flex items-center border-green-light">
              <q-icon name="storefront" color="positive" class="q-mr-xs" size="20px" />
              <span>Recuerda asistir en las franjas de descanso asignadas para tu ficha de formación.</span>
            </div>
          </q-card>

        </div>

      </div>

    </div>
  </q-page>
</template>

<script setup>
import fachada from '../assets/images/cafeteria-fachada.jpeg'
import foto from '../assets/images/cafeteria-encargada.jpeg'
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