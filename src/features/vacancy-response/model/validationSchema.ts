import { z } from "zod";

export const responseFormSchema = z.object({
  id: z.number(),
  jobTitle: z.string().refine((value) => value === "" || value.length > 5, { message: "Название вакансии не указано" }),
  fio: z
    .string()
    .refine((value) => value === "" || /^[А-Яа-яЁё\s-]+$/.test(value), { message: "Только русские буквы" })
    .refine((value) => value === "" || value.length > 2, { message: "Минимум 3 символа" })
    .refine((value) => value === "" || value.length < 100, { message: "Максимум 100 символов" }),
  email: z.string().refine((value) => value === "" || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value), { message: "Некорректный email" }),
  tel: z.string().refine((value) => value === "" || (value.length >= 10 && value.length <= 15), {
    message: "Телефон должен содержать от 10 до 15 символов",
  }),
  vcss: z
    .object({
      gitHub: z
        .object({
          nickname: z
            .string()
            .refine((value) => value === "" || value.length >= 4, {
              message: "Минимум 4 символа",
            })
            .refine((value) => value === "" || /^[A-Za-z\s-]+$/.test(value), {
              message: "Только английские буквы",
            }),
          subscribers: z.string().refine((value) => value === "" || ["1-5", "5-10", "10+"].includes(value), {
            message: "Не выбрано",
          }),
        })
        .optional(),
      gitLab: z
        .object({
          nickname: z
            .string()
            .refine((value) => value === "" || value.length >= 4, {
              message: "Минимум 4 символа",
            })
            .refine((value) => value === "" || /^[A-Za-z\s-]+$/.test(value), {
              message: "Только английские буквы",
            }),
          subscribers: z
            .string()
            .refine((value) => value === "" || ["1-5", "5-10", "10+"].includes(value), {
              message: "Не выбрано",
            })
            .optional(),
        })
        .optional(),
    })
    .optional()
    .refine(
      (data) => {
        if (data?.gitHub?.subscribers && !data?.gitHub?.nickname) {
          return false;
        }

        if (data?.gitLab?.subscribers && !data?.gitLab?.nickname) {
          return false;
        }

        return true;
      },
      {
        message: "Если вы заполнили подписчиков, то имя также должно быть заполнено",
      }
    ),
});

export type ResponseFormSchema = z.infer<typeof responseFormSchema>;
