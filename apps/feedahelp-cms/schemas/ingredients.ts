import {LemonIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

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
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imgUrl',
      title: 'Image Url',
      type: 'string',
    }),
    defineField({
        name:'price',
        title:'Price (BDT)/Per Unit',
        type:'number',
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
    defineField({
        name:'countryOfOrigin',
        title:'Country Of Origin',
        type:'string',
    })
  ],
})
