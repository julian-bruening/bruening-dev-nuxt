export const state = () => ({
  list: [],
  filteredList: [],
  filter: {
    technologies: []
  }
})

export const mutations = {
  add (state, projects) {
    state.list.push(...projects)
    state.filteredList.push(...projects)
  },
  filter (state, filter) {
    state.filter = filter
    state.filteredList = state.list.filter((p) => {
      for (const tech of filter.technologies) {
        if (!p.technologies.includes(tech)) {
          return false
        }
      }
      return true
    })
  }
}
