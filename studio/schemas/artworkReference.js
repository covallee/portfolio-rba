export default {
  name: 'artworkReference',
  type: 'object',
  title: 'Artwork reference',
  fields: [
    {
      type: 'reference',
      name: 'artwork',
      to: [
        {
          type: 'artwork'
        }
      ],
      options: {
        filter: ({document}) => {
          // Always make sure to check for document properties
          // before attempting to use them
          console.log(document);
          let id = document._id.split('drafts.')[1];
          if (!document.title) {
            return {}
          }
          
          return {
            filter: '_type == "artwork" && projectRef[]._ref == $project',
            params: {
              project: id
            }
          }
        }
      }
    }
  ],
  preview: {
    select: {
      title: 'artwork.title',
      media: 'artwork.poster.asset'
    }
  }
}