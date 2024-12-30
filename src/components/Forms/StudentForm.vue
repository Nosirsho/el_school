<template>
  <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="Фамилия">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Имя">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Отчество">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Пол">
      <el-select v-model="form.region" placeholder="please select your zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Дата рождения">
      <el-date-picker
        v-model="form.date1"
        type="date"
        placeholder="Pick a date"
        style="width: 40%"
      />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
