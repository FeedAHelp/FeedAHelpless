import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export default defineType({
    name: 'fahSocialMedia',
    title: 'FeedAHelp Social Media',
    type: 'document',
    icon: LinkIcon,
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'imageIcon',
        title: 'Image Icon',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'solicalLinkUrl',
        title: 'Url',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
    ],
  })
  