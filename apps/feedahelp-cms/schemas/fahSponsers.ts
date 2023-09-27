import { defineField, defineType } from 'sanity'
import { RocketIcon } from '@sanity/icons'

export default defineType({
    name: 'fahSponsers',
    title: 'FeedAHelp Sponsers',
    type: 'document',
    icon: RocketIcon,
    fields: [
      defineField({
        name: 'sponserName',
        title: 'Sponser Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'image',
        title: 'Sponser Logo',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required(),
    }),
    ],
  })
  