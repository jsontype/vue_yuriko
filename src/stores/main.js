import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useMainStore = defineStore('main', () => {
  const userName = ref('John Doe')
  const userEmail = ref('doe.doe.doe@example.com')

  const userAvatar = computed(
    () =>
      `https://api.dicebear.com/7.x/avataaars/svg?seed=${userEmail.value.replace(
        /[^a-z0-9]+/gi,
        '-'
      )}`
  )

  const isFieldFocusRegistered = ref(false)

  const clients = ref([])
  const history = ref([])

  function setUser(payload) {
    if (payload.name) {
      userName.value = payload.name
    }
    if (payload.email) {
      userEmail.value = payload.email
    }
  }

  // function fetchSampleClients() {
  //   axios
  //     .get(`data-sources/clients.json?v=3`)
  //     .then((result) => {
  //       clients.value = result?.data?.data
  //     })
  //     .catch((error) => {
  //       alert(error.message)
  //     })
  // }

  function fetchSampleClients() {
    axios
      .get(`https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=50`)
      .then((res) => {
        clients.value = res.data.data.movies
        console.log('movie api: ', clients.value)
      })
      .catch((e) => {
        console.error(e)
      })
  }

  // const movies = ref([])

  // function getMovies() {
  //   fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
  //     .then(res => res.json())
  //     .then(json => {
  //       movies.value = json.data.movies
  //       console.log(movies.value)
  //     })
  // }

  // onMounted(() => {
  //   getMovies()
  // })

  function fetchSampleHistory() {
    axios
      .get(`data-sources/history.json`)
      .then((result) => {
        history.value = result?.data?.data
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return {
    userName,
    userEmail,
    userAvatar,
    isFieldFocusRegistered,
    clients,
    history,
    setUser,
    fetchSampleClients,
    fetchSampleHistory
  }
})
