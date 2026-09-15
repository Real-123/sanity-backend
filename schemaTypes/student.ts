import { defineField, defineType } from 'sanity';

export const studentSchema = defineType({
  name: 'student',
  title: 'Student',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'password',
      title: 'Password',
      type: 'string',
      description: 'Hashed password for NextAuth credentials login.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feesPaid',
      title: 'Fees Paid',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'totalFees',
      title: 'Total Fees',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'attendancePercentage',
      title: 'Attendance Percentage',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).max(100),
    }),
    defineField({
      name: 'grades',
      title: 'Grades',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'subject', title: 'Subject', type: 'string' },
            { name: 'score', title: 'Score', type: 'number', validation: (Rule) => Rule.min(0).max(100) },
          ],
        },
      ],
    }),
  ],
});
