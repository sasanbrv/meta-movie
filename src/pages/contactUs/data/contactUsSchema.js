import * as z from "zod";

const CONTACT_US_SCHEMA = z.object({
  firstName: z
    .string()
    .trim()
    .min(3, "First name must be at least 3 characters.")
    .max(20, "First name cannot exceed 20 characters.")
    .regex(
      /^[A-Za-z\s'-]+$/,
      "First name can only contain letters, spaces, apostrophes, and hyphens."
    ),

  lastName: z
    .string()
    .trim()
    .min(3, "Last name must be at least 3 characters.")
    .max(20, "Last name cannot exceed 20 characters.")
    .regex(
      /^[A-Za-z\s'-]+$/,
      "Last name can only contain letters, spaces, apostrophes, and hyphens."
    ),

  email: z
    .email("Please enter a valid email address."),

  subject: z
    .string()
    .trim()
    .min(5, "Subject must be at least 5 characters.")
    .max(100, "Subject cannot exceed 100 characters."),

  message: z
    .string()
    .trim()
    .min(20, "Message must be at least 20 characters.")
    .max(1000, "Message cannot exceed 1000 characters."),
});

export default CONTACT_US_SCHEMA;