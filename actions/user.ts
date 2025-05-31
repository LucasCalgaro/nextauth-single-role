"use server";

import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";

export const user = async () => {
  const role = await currentRole();

  if (role === UserRole.USER) {
    return { success: "Allowed Server Action!" };
  }

  return { error: "Forbidden Server Action!" };
};
