import { schema } from "normalizr";

export const article = new schema.Entity("articles");

export const articleSource = new schema.Entity("articleSources", {
  idAttribute: "sourceId",
  articles: [ article ],
});

