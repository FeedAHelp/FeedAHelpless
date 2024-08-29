import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export default defineType({
  name: 'HeroImages',
  title: 'FeedAHelp Hero Section',
  type: 'document',
  icon: ImageIcon,
  options: {
    max: 16,
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'imgSrc',
      title: 'ImgSrc',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
