import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get(context) {
  const variedades = await getCollection("variedades");

  return rss({
    title: "Delómai Cerveza Artesanal",
    description: "Cerveza Artesanal elaborada en Rancagua, región de O'Higgins",
    site: context.site || "https://www.delomai.cl", // Proporciona una URL por defecto
    items: variedades.map((variedad) => ({
      ...variedad.data,
      link: `/variedades/${variedad.slug}/`, // Asegúrate de que slug esté disponible
    })),
  });
}
