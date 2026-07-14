import * as z from "zod";

const LOGIN_SCHEMA = z.object({
  email: z.string().email("the Email is not valid!"),

  password: z
    .string()
    .min(8, "the password must be more than 8 character!")
    .max(128, "the password can not be more than 128 character!")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,"the password must contain uppercase and lowercase and number!",),
});

export default LOGIN_SCHEMA;
