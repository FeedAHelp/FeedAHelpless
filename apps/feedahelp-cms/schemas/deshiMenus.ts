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
        name: 'Ingredients',
        type: 'array',
        of: [
            {
                name: 'Ingredients',
                type: 'reference',
                to: [{type: 'deshiMenuIngredients'}],
                title: 'Make reference to Ingredient',
            },
        ],
        validation: (Rule) => Rule.required(),
    }),
  ],
})
