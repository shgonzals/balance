<template>
  <section class="dashboard-root">
    <div class="header-block">
      <h2 class="title">Overview</h2>
      <p class="subtitle">Hola, {{ user?.username }}. Este panel resume tu actividad.</p>
    </div>

    <v-card class="section-card mb-6" elevation="0" rounded="xl">
      <v-card-title class="text-subtitle-1 font-weight-medium">Recent files</v-card-title>
      <v-card-text>
        <v-row>
          <v-col v-for="item in recentFiles" :key="item.name" cols="12" sm="6" md="3">
            <v-sheet class="file-chip px-4 py-3" rounded="lg">
              <div class="file-title">{{ item.name }}</div>
              <div class="file-size">{{ item.size }}</div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card class="section-card" elevation="0" rounded="xl">
      <v-card-title class="text-subtitle-1 font-weight-medium">All files</v-card-title>
      <v-card-text>
        <v-table density="comfortable">
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Type</th>
              <th class="text-left">Size</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in allFiles" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.type }}</td>
              <td>{{ item.size }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </section>
</template>

<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'

const { user } = useAuth()

const recentFiles = [
  { name: 'Invoice.pdf', size: '2.8 MB' },
  { name: 'Hero5.mp4', size: '74.1 MB' },
  { name: 'Request.doc', size: '1.2 MB' },
  { name: 'Logo_no_bg.svg', size: '283 KB' }
]

const allFiles = [
  { name: 'Invoice', type: 'PDF Document', size: '2.8 MB' },
  { name: 'Logo_no_bg', type: 'SVG File', size: '283 KB' },
  { name: 'Hero5', type: 'QT Movie', size: '74.1 MB' },
  { name: 'Request', type: 'Word File', size: '1.2 MB' }
]
</script>

<style scoped>
.dashboard-root {
  max-width: 100%;
}

.header-block {
  margin-bottom: 18px;
}

.title {
  font-size: 2rem;
  line-height: 1.2;
  margin-bottom: 4px;
}

.subtitle {
  color: rgba(15, 23, 42, 0.66);
}

.section-card {
  border: 1px solid rgba(15, 23, 42, 0.08);
}

.file-chip {
  background: rgba(var(--v-theme-secondary), 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.file-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(51, 65, 85, 0.16);
}

.file-title {
  font-size: 0.95rem;
  font-weight: 500;
}

.file-size {
  margin-top: 2px;
  font-size: 0.82rem;
  color: rgba(15, 23, 42, 0.58);
}
</style>
