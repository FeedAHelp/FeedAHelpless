import {LemonIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ingredients',
  title: 'Ingredients',
  type: 'document',
  icon: LemonIcon,
  fields: [
    defineField({
      name: 'englishName',
      title: 'English Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'banglaName',
      title: 'Bangla Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'image',
        title: 'Image',
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
      name:'measuringQuantity',
      title:'Measur Quantity', 
      type:'number',
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
    defineField({
      name:'imageUrl',
      title:'Image Url',
      type:'string',
    }),
  ],
})
