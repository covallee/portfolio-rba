// import artwork from "./artwork";
import { MdSettings } from "react-icons/md";

export default (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentListItem()
        .schemaType("siteSettings")
        .title("Site settings")
        .icon(MdSettings)
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .views([S.view.form()])
        ),
      S.listItem()
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
        ),
      S.documentTypeListItem("project").title("Project"),
      S.documentTypeListItem("artist").title("Artist"),
    ]);
