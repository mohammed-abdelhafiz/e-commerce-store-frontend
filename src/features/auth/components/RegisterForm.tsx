"use client";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
} from "@/shared/components/ui/field";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterDto } from "../schema/registerSchema";
import Link from "next/link";
import { motion } from "motion/react";
import { FormField } from "@/shared/components/FormField";
import useRegister from "../hooks/usRegister";

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDto>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { mutateAsync: signup, isPending } = useRegister();

  return (
    <div className="flex flex-col gap-5">
      <motion.h2
        className="text-2xl font-bold text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Create an account
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Card>
          <CardContent>
            <form noValidate onSubmit={handleSubmit((data) => signup(data))}>
              <FieldGroup className="space-y-0">
                <FormField
                  id="name"
                  label="Full Name"
                  type="text"
                  placeholder="John Doe"
                  registration={register("name")}
                  error={errors.name}
                />
                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="m@example.com"
                  registration={register("email")}
                  error={errors.email}
                />
                <FormField
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="********"
                  registration={register("password")}
                  error={errors.password}
                />
                <FormField
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  placeholder="********"
                  registration={register("confirmPassword")}
                  error={errors.confirmPassword}
                />
                <FieldGroup>
                  <Field>
                    <Button
                      type="submit"
                      disabled={isPending}
                      className="w-full"
                    >
                      {isPending ? "Creating Account..." : "Create Account"}
                    </Button>
                    <FieldDescription className="px-6 text-center">
                      Already have an account?
                      <Link
                        href="/login"
                        className="no-underline! hover:underline! cursor-pointer ml-1 text-primary"
                      >
                        Sign in
                      </Link>
                    </FieldDescription>
                  </Field>
                </FieldGroup>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
