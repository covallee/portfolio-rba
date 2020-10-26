import S from "@sanity/desk-tool/structure-builder";

const artwork = S.listItem()
  .title("Artworks")
  .child(
    S.list()
      .title("Artworks")
      .items([
        S.documentTypeListItem("artwork").title("All Artworks"),
        S.listItem()
          .title("Artworks by category")
          .child(
            S.documentTypeList("category")
              .title("Artworks by category")
              .child((catId) =>
                S.documentList()
                  .schemaType("artwork")
                  .title("Artwork")
                  .filter(
                    '_type == "artwork" && $catId in categories[]._ref'
                  )
                  .params({ catId })
              )
          ),
        S.listItem()
          .title("Artworks by project")
          .child(
            S.documentTypeList("project")
              .title("Artworks by project")
              .child((id) =>
                S.documentList()
                  .schemaType("artwork")
                  .title("Artworks")
                  .filter(
                    '_type == "artwork" && projectRef[]._ref == $id'
                  )
                  .params({ id })
              )
          ),
        S.divider(),
        S.documentTypeListItem("category").title("Categories"),
      ])
  );

export default artwork;
