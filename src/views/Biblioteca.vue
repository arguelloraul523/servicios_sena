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
                icon="menu_book" 
                size="56px" 
                color="green-1" 
                text-color="positive" 
                class="q-mr-md shadow-1" 
              />
              <div>
                <span class="text-caption text-uppercase text-weight-bolder text-positive tracking-wider">
                  Recursos Académicos e Investigación
                </span>
                <h1 class="text-h4 text-weight-bolder text-grey-10 q-ma-none leading-tight">
                  Biblioteca
                </h1>
                <p class="text-subtitle2 text-grey-7 q-ma-none q-mt-xs">
                  Préstamos, consultas y talleres de lectura
                </p>
              </div>
            </div>

            <q-separator class="q-my-md" />

            <div class="relative-position rounded-borders overflow-hidden q-mb-lg shadow-1">
              <q-img :src="fachada" height="260px" fit="cover" />
              <div class="absolute-bottom bg-gradient-dark text-white q-pa-sm text-caption text-weight-medium flex items-center">
                <q-icon name="photo_camera" color="positive" size="18px" class="q-mr-xs" />
                Instalaciones de la Biblioteca SENA
              </div>
            </div>

            <div class="text-h6 text-weight-bold text-grey-9 q-mb-xs flex items-center">
              <q-icon name="info" color="positive" class="q-mr-xs" size="24px" />
              Descripción del Servicio
            </div>
            <p class="text-body1 text-grey-8 leading-relaxed q-mb-lg">
              La biblioteca ofrece consultas en sala, préstamos a domicilio y préstamo interbibliotecario (PIP), además de talleres de lectura, capacitaciones y acceso a TIC. El equipo brinda asesorías en búsqueda de información y en el uso adecuado del catálogo bibliográfico para apoyar el proceso formativo de los aprendices.
            </p>

            <div class="text-subtitle2 text-weight-bold text-grey-9 q-mb-sm">
              Servicios y recursos disponibles:
            </div>
            <div class="row q-col-gutter-sm">
              <div class="col-12 col-sm-6">
                <q-item class="bg-grey-2 rounded-borders border-light">
                  <q-item-section avatar min-width="32px">
                    <q-icon name="local_library" color="positive" size="20px" />
                  </q-item-section>
                  <q-item-section class="text-weight-bold text-grey-8">
                    Consultas en Sala
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-12 col-sm-6">
                <q-item class="bg-grey-2 rounded-borders border-light">
                  <q-item-section avatar min-width="32px">
                    <q-icon name="auto_stories" color="positive" size="20px" />
                  </q-item-section>
                  <q-item-section class="text-weight-bold text-grey-8">
                    Préstamo a Domicilio y PIP
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-12 col-sm-6">
                <q-item class="bg-grey-2 rounded-borders border-light">
                  <q-item-section avatar min-width="32px">
                    <q-icon name="school" color="positive" size="20px" />
                  </q-item-section>
                  <q-item-section class="text-weight-bold text-grey-8">
                    Talleres de Lectura
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-12 col-sm-6">
                <q-item class="bg-grey-2 rounded-borders border-light">
                  <q-item-section avatar min-width="32px">
                    <q-icon name="devices" color="positive" size="20px" />
                  </q-item-section>
                  <q-item-section class="text-weight-bold text-grey-8">
                    Acceso a TIC y Capacitaciones
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-12 col-sm-6">
                <q-item class="bg-grey-2 rounded-borders border-light">
                  <q-item-section avatar min-width="32px">
                    <q-icon name="manage_search" color="positive" size="20px" />
                  </q-item-section>
                  <q-item-section class="text-weight-bold text-grey-8">
                    Asesoría en Búsqueda
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-12 col-sm-6">
                <q-item class="bg-grey-2 rounded-borders border-light">
                  <q-item-section avatar min-width="32px">
                    <q-icon name="import_contacts" color="positive" size="20px" />
                  </q-item-section>
                  <q-item-section class="text-weight-bold text-grey-8">
                    Catálogo Bibliográfico
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
                <img :src="foto" alt="Yudith Milagros Martínez Bautista" style="object-fit: cover;" />
              </q-avatar>

              <div class="text-h5 text-weight-bolder text-grey-10 leading-tight q-px-sm">
                Yudith Milagros Martínez Bautista
              </div>
              
              <div class="text-subtitle1 text-weight-bold text-positive flex items-center justify-center q-mt-xs">
                <q-icon name="badge" color="positive" size="20px" class="q-mr-xs" />
                Bibliotecaria
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
                href="tel:+573125848032"
                unelevated
                color="positive"
                icon="phone_in_talk"
                label="Llamar: +57 312 584 8032"
                size="md"
                class="full-width text-weight-bold rounded-borders q-py-sm"
                no-caps
              />
              <q-btn
                type="a"
                href="mailto:ymmartinez@sena.edu.co"
                outline
                color="positive"
                icon="alternate_email"
                label="ymmartinez@sena.edu.co"
                size="md"
                class="full-width text-weight-bold rounded-borders q-py-sm bg-green-1"
                no-caps
              />
            </div>
          </q-card>

          <q-card flat bordered class="rounded-borders bg-white q-pa-md shadow-1">
            <div class="text-subtitle1 text-weight-bold text-grey-9 q-mb-md flex items-center">
              <q-icon name="access_time" color="positive" class="q-mr-xs" size="22px" />
              Horario de Atención
            </div>

            <q-list separator dense class="rounded-borders border-light">
              <q-item class="q-py-md">
                <q-item-section avatar min-width="32px">
                  <q-icon name="wb_sunny" color="positive" size="22px" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold text-grey-9">Jornada Mañana</q-item-label>
                  <q-item-label caption class="text-grey-7">Lunes a Viernes</q-item-label>
                </q-item-section>
                <q-item-section side class="text-weight-bolder text-positive">
                  7:00 a.m. - 10:00 a.m.
                </q-item-section>
              </q-item>
            </q-list>

            <div class="q-mt-md bg-green-1 q-pa-sm rounded-borders text-caption text-positive flex items-center border-green-light">
              <q-icon name="laptop_chromebook" color="positive" class="q-mr-xs" size="20px" />
              <span>Accede también al Sistema de Bibliotecas SENA en línea para bases de datos digitales.</span>
            </div>
          </q-card>

        </div>

      </div>

    </div>
  </q-page>
</template>

<script setup>
import fachada from '../assets/images/biblioteca-fachada.jpeg'
import foto from '../assets/images/biblioteca-encargada.jpeg'
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