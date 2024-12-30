import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const url = 'http://localhost:5296/Student/'

export const useStudentStore = defineStore('students', () => {
  const data = ref([])
  const error = ref(null)
  const isLoading = ref(false)
  const currentStudent = ref(null)

  const searchByName = async (params) => {
    isLoading.value = true
    try {
      const response = await axios.get(`${url}search`, { params })
      data.value = response.data
      error.value = null
    } catch (error) {
      error.value = error
      data.value = null
    } finally {
      isLoading.value = false
    }
  }

  const getStudents = async () => {
    isLoading.value = true
    try {
      const response = await axios.get(url)
      data.value = response.data
      error.value = null
    } catch (error) {
      error.value = error
      data.value = null
    } finally {
      isLoading.value = false
    }
  }

  const getStudentById = async (id) => {
    isLoading.value = true
    try {
      const response = await axios.get(`${url}${id}`)
      currentStudent.value = response.data
      error.value = null
    } catch (error) {
      error.value = error
      currentStudent.value = null
    } finally {
      isLoading.value = false
    }
  }

  const editStudent = async (params) => {
    isLoading.value = true
    try {
      const response = await axios.put(`${url}${params.id}`, params)
      const student = response.data
      const index = data.value.findIndex((item) => item.id === student.id)
      if (index !== -1) {
        data.value.splice(index, 1, student)
      }
      error.value = null
    } catch (error) {
      error.value = error
      data.value = null
    } finally {
      isLoading.value = false
    }
  }

  const addStudent = async (params) => {
    isLoading.value = true
    try {
      const response = await axios.post(`${url}`, params)
      const student = response.data
      data.value.push(student)
      error.value = null
    } catch (error) {
      error.value = error
      data.value = null
    } finally {
      isLoading.value = false
    }
  }

  const deleteStudent = async (id) => {
    isLoading.value = true
    try {
      const response = await axios.delete(`${url}${id}`)
      const studentId = response.data
      data.value = data.value.filter((t) => t.id !== studentId)
    } catch (error) {
      error.value = error
      data.value = null
    } finally {
      isLoading.value = false
    }
  }

  const studentsCount = computed(() => data.value.length)

  return {
    data,
    error,
    isLoading,
    currentStudent,
    searchByName,
    getStudents,
    getStudentById,
    editStudent,
    addStudent,
    deleteStudent,
    studentsCount
  }
})
