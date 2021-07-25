import Vue from 'vue'

Vue.filter('formatDate', (value) => {
  const date = new Date(Date.parse(value))
  return date.toLocaleString([], {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })
})
