import {LemonIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ingredient',
  title: 'Ingredient',
  type: 'document',
  icon: LemonIcon,
  fields: [
    defineField({
      name: 'ingredientName',
      title: 'Ingredient Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ingredientNameBangla',
      title: 'Ingredient Name Bangla',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'ingredientImage',
        title: 'Ingredient Image',
        type: 'image',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name:'price',
        title:'Price',
        type:'number',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'status',
        title: 'Status',
        type: 'boolean',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name:'countryOfOrigin',
        title:'Country Of Origin',
        type:'string',
        validation: (Rule) => Rule.required(),
    }),
  ],
})
