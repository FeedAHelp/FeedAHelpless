import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ingredients',
  title: 'Ingredients',
  type: 'object',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'text',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
    }),
    defineField({
        name: 'ingredientImg',
        title: 'Ingredient Image',
        type: 'image',
        options: {
          hotspot: true,
        },
    }),
  ],
})
