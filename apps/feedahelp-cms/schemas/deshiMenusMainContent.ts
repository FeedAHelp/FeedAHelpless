import { LemonIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'deshiMenuMainContent',
  title: 'Deshi Menu Main Content',
  type: 'document',
  icon: LemonIcon,
  fields: [
    defineField({
      name: 'contentName',
      title: 'Centent Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contentValue',
      title: 'Centent Value',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
