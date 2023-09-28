import {defineField, defineType} from 'sanity'
import {MenuIcon} from '@sanity/icons'

export default defineType({
  name: 'deshiMenus',
  title: 'Deshi Menus',
  type: 'document',
  icon: MenuIcon,
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
        validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pricePerPerson',
      title: 'Price Per Person',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'string',
    }),
    defineField({
      name: 'totalTimePrepare',
      title: 'Total Time to Prepare',
      type: 'string',
    }),
    defineField({
      name: 'totalDonated',
      title: 'Total Donated',
      type: 'string',
    }),
    defineField({
      name: 'totalChefCooked',
      title: 'Total Chef Cooked',
      type: 'string',
    }),
    defineField({
      name: 'totalTimeCooked',
      title: 'Total Time To Cooked',
      type: 'string',
    }),
    defineField({
      name: 'totalPersonFed',
      title: 'Total Person Feed',
      type: 'string',
    }),
    defineField({
      name: 'totalVideo',
      title: 'Total Video Shout',
      type: 'string',
    }),
    defineField({
        name: 'Ingredients',
        type: 'array',
        of: [
            {
                name: 'Ingredients',
                type: 'reference',
                to: [{type: 'deshiMenuIngredients'}],
                title: 'Make reference to Ingredient',
            },
        ]
    }),
  ],
})
