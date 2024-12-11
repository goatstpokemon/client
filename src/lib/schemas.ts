import { z } from 'zod';

export const memberSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: 'Voornaam moet minimaal 2 karakters lang zijn'
    })
    .max(50, {
      message: 'Voornaam mag maximaal 50 karakters lang zijn'
    }),
  middleName: z
    .string()
    .min(2, { message: 'Tussenvoegsels moet minimaal 2 karakters lang zijn ' })
    .max(50, { message: 'Tussenvoegsels mag maximaal 50 karakters lang zijn' })
    .optional(),
  lastName: z.string().min(2, {message: 'Achternaam moet minimaal 2 karakters lang zijn'}).max(50, {message: 'Achternaam mag maximaal 50 karakters lang zijn'}),
  gender: z.string().min(4).max(6),
  dob: z.date(),
  studentNumber: z.string().min(8, {message: 'Een studentnummer is altijd 8 karacters'}).max(8,{message: 'Een studentnummer is altijd 8 characters'}).optional(),
  module: z.string().min(2).max(50),
  street: z.string().min(2, {message: 'Een straatnaam moet minimaal 2 karakters lang zijn'}).max(100, {message: 'Een straatnaam mag maximaal 100 karakters lang zijn'}),
  houseNumber: z.string().min(1).max(5),
  city: z.string().min(2, {message: 'Een stad moet minimaal 8 karakters lang zijn'}).max(100, {message: 'Een stad mag maximaal 100 karakters lang zijn'}),
  postalCode: z.string().min(6, {message: 'Een postcode is altijd 6 karakters lang'}).max(6,{message: 'Een postcode is altijd 6 karakters lang'}),
  email: z.string().email(),
  phoneNumber: z.string().min(10, {message: 'Een telefoonnummer heeft minimaal 10 cijfers'}).max(11)
});