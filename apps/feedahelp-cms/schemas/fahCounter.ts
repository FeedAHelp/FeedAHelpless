import {defineField, defineType} from 'sanity'
import {TransferIcon} from '@sanity/icons'

export default defineType({
    name: 'fahCounter',
    title: 'FeedAHel Counters',
    type: 'document',
    icon: TransferIcon,
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'value',
        title: 'Value',
        type: 'number',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'monthlyIncrease',
        title: 'Monthly Increase',
        type: 'string',
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
    ],
  })
  