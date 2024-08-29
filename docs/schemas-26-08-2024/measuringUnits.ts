import {defineField, defineType} from 'sanity'
import {TruncateIcon} from '@sanity/icons'

export default defineType({
    name: 'measuringUnits',
    title: 'Measuring Units',
    type: 'document',
    icon: TruncateIcon,
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
        name: 'value',
        title: 'Value',
        type: 'string',
        validation: (Rule) => Rule.required(),
      })
    ],
  })
  