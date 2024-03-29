import {defineField, defineType} from 'sanity'
import {MenuIcon} from '@sanity/icons'

export default defineType({
  name: 'deshiMenus',
  title: 'Deshi Menus',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'isPublished',
      title: 'Published?',
      type: 'boolean',
      initialValue: false
    }),
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
      name: 'imageIngredient',
      title: 'Image Ingredeints',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'pricePerPerson',
      title: 'Price Per Person ($)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
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
    defineField({
      name: 'mainContents',
      type: 'array',
      of: [
          {
              name: 'deshiMenuMainContent',
              type: 'reference',
              to: [{type: 'deshiMenuMainContent'}],
              title: 'Make reference to Deshi Menus Main Content',
          },
      ]
    }),
  ],
})
