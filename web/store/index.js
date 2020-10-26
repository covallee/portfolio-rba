import sanityClient from '~/sanityClient'

export const state = () => ({
  projects: [],
})

export const getters = {
  getProjects(state) {
    return state.projects
  },
}

export const mutations = {
  setProjects(state, projects) {
    state.projects = projects
  },
}

// const query = `
//   *[_type == 'project'] {
//     _id,
//     title,
//     "link": slug.current
//   }
// `

const query = `*[_type == "siteSettings"] {
  projectOrder[]->{
    _id,
    title,
    "link": slug.current
  }
}`

export const actions = {
  async nuxtServerInit({ commit }) {
    const projects = await sanityClient.fetch(query)
    // .catch((e) => console.error(e))

    commit('setProjects', projects[0].projectOrder)
  },
}
