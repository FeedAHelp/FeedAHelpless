import {defineField, defineType} from 'sanity'
import {BlockElementIcon} from '@sanity/icons'

export default defineType({
  name: 'deshiMenuIngredients',
  title: 'Deshi Menu Ingredient',
  type: 'document',
  icon: BlockElementIcon,
  fields: [
    defineField({
        name: 'englishName',
        title: 'English Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
    defineField({
        name: 'ingredient',
        title: 'Ingredient',
        type: 'reference',
        to: [{ type: 'ingredients' }],
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'quantity',
        title: 'Quantity',
        type: 'number',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'measuringUnit',
        title: 'Select a Unit',
        type: 'object',
        fields: [
          {
            title: 'Units',
            name: 'measuringUnits',
            type: 'reference',
            to: [{type: 'measuringUnits'}],
          },
        ],
        validation: (Rule) => Rule.required(),
      }),
  ],
})
