<template>
  <div>
    <div>
      <el-table :data="items" border style="width: 100%">
        <el-table-column prop="fullName" label="fullName" width="500" />
        <el-table-column prop="birthDate" label="birthDate" width="120" />
        <el-table-column prop="gradeLevel" label="gradeLevel" width="120" />
        <el-table-column prop="sex" label="sex" width="120" />
        <el-table-column fixed="right" label="Operations" min-width="120">
          <template #default>
            <el-button link size="small" @click="drawer = true"
              ><el-icon><Edit color="blue" /></el-icon
            ></el-button>
            <el-button link size="small" @click="handleClick">
              <el-icon><Delete class="text-red-400" /></el-icon>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-drawer v-model="drawer" title="I am the title" :with-header="false">
        <StudentForm/>
      </el-drawer>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useStudentStore } from '@/stores/StudentStore.js'

import StudentForm from '@/components/Forms/StudentForm.vue'

const studentStore = useStudentStore()
const drawer = ref(false)
const handleClick = () => {
  console.log('click')
}

const items = ref([])
onMounted(async () => {
  await studentStore.getStudents()
  items.value = studentStore.data
})
</script>
