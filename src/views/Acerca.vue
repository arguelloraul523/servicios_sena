<template>
  <q-page class="bg-grey-1 q-pb-xl">
    <div class="container-main q-px-md q-py-lg">

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

      <div class="row q-col-gutter-lg">

        <div class="col-12 col-md-7">
          <q-card flat bordered class="rounded-borders bg-white q-pa-lg shadow-1">
            
            <div class="row items-center no-wrap q-mb-md">
              <q-avatar 
                icon="domain" 
                size="56px" 
                color="green-1" 
                text-color="positive" 
                class="q-mr-md shadow-1" 
              />
              <div>
                <span class="text-caption text-uppercase text-weight-bolder text-positive tracking-wider">
                  Información Institucional
                </span>
                <h1 class="text-h4 text-weight-bolder text-grey-10 q-ma-none leading-tight">
                  Acerca de
                </h1>
                <p class="text-subtitle2 text-grey-7 q-ma-none q-mt-xs">
                  Centro Agroturístico Regional Santander
                </p>
              </div>
            </div>

            <q-separator class="q-my-md" />

            <div class="text-h6 text-weight-bold text-grey-9 q-mb-xs flex items-center">
              <q-icon name="info" color="positive" class="q-mr-xs" size="24px" />
              Sobre el Centro
            </div>
            <p class="text-body1 text-grey-8 leading-relaxed q-mb-lg">
              El Centro Agroturístico Regional Santander (SENA) forma aprendices en programas relacionados con el sector agropecuario y turístico. Esta aplicación reúne en un solo lugar la información de los principales servicios de apoyo al aprendiz que ofrece el centro: enfermería, bienestar, biblioteca, cafetería y coordinación académica, con sus horarios, contactos y encargados de atención.
            </p>

            <div class="text-subtitle2 text-weight-bold text-grey-9 q-mb-sm">
              Servicios integrados en esta plataforma:
            </div>
            <div class="row q-col-gutter-sm">
              <div class="col-12 col-sm-6">
                <q-item class="bg-grey-2 rounded-borders border-light">
                  <q-item-section avatar min-width="32px">
                    <q-icon name="medical_services" color="positive" size="20px" />
                  </q-item-section>
                  <q-item-section class="text-weight-bold text-grey-8">
                    Enfermería
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-12 col-sm-6">
                <q-item class="bg-grey-2 rounded-borders border-light">
                  <q-item-section avatar min-width="32px">
                    <q-icon name="spa" color="positive" size="20px" />
                  </q-item-section>
                  <q-item-section class="text-weight-bold text-grey-8">
                    Bienestar al Aprendiz
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-12 col-sm-6">
                <q-item class="bg-grey-2 rounded-borders border-light">
                  <q-item-section avatar min-width="32px">
                    <q-icon name="menu_book" color="positive" size="20px" />
                  </q-item-section>
                  <q-item-section class="text-weight-bold text-grey-8">
                    Biblioteca
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-12 col-sm-6">
                <q-item class="bg-grey-2 rounded-borders border-light">
                  <q-item-section avatar min-width="32px">
                    <q-icon name="restaurant" color="positive" size="20px" />
                  </q-item-section>
                  <q-item-section class="text-weight-bold text-grey-8">
                    Cafetería
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-12 col-sm-6">
                <q-item class="bg-grey-2 rounded-borders border-light">
                  <q-item-section avatar min-width="32px">
                    <q-icon name="school" color="positive" size="20px" />
                  </q-item-section>
                  <q-item-section class="text-weight-bold text-grey-8">
                    Coordinación Académica
                  </q-item-section>
                </q-item>
              </div>
            </div>

          </q-card>
        </div>

        <div class="col-12 col-md-5">

          <q-card flat bordered class="rounded-borders bg-white q-pa-lg shadow-2">
            
            <div class="row items-center q-mb-lg">
              <span class="text-subtitle2 text-uppercase text-weight-bolder text-grey-7 flex items-center">
                <q-icon name="code" color="positive" size="20px" class="q-mr-xs" />
                Desarrollo de Software
              </span>
            </div>

            <div class="column items-center text-center q-mb-lg">
              <q-avatar size="110px" text-color="white">
                <img src="https://avatars.githubusercontent.com/u/101382864?v=4">
              </q-avatar>

              <div class="text-h5 text-weight-bolder text-grey-10 leading-tight q-px-sm">
                {{ equipo.nombre }}
              </div>
              
              <div class="text-subtitle1 text-weight-bold text-positive flex items-center justify-center q-mt-xs">
                <q-icon name="terminal" color="positive" size="20px" class="q-mr-xs" />
                {{ equipo.rol }}
              </div>

              <q-chip dense flat color="green-1" text-color="positive" class="q-mt-sm text-caption text-weight-medium">
                <q-icon name="verified_user" size="14px" class="q-mr-xs" />
                Aprendiz SENA
              </q-chip>
            </div>

            <q-separator class="q-mb-lg" />

            <div class="bg-green-1 q-pa-md rounded-borders text-caption text-positive flex items-center border-green-light">
              <q-icon name="verified" color="positive" class="q-mr-sm" size="22px" />
              <span>Proyecto orientado a facilitar la consulta de información para toda la comunidad educativa SENA.</span>
            </div>
          </q-card>

        </div>

      </div>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const equipo = ref({
  nombre: 'Raul Arguello',
  rol: 'Desarrollo Frontend',
  iniciales: 'R'
})
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
</style>