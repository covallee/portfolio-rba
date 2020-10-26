import sanityClient from '~/sanityClient'

const query = `{
  "projects": *[_type == 'project'] {
    _id,
    title,
    "link": slug.current
  }
}`

export default ({ store }) => {
  return sanityClient.fetch(query).then(({ projects }) => {
    store.commit('setProjects', projects)
  })
}
