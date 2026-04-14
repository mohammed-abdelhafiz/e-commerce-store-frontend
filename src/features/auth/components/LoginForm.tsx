"use client";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Field, FieldDescription, FieldGroup } from "@/shared/components/ui/field";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginData } from "@/features/auth/schema/loginSchema";
import { FormField } from "@/shared/components/FormField";
import Link from "next/link";
import { motion } from "motion/react";

export function LoginForm({ ...props }: React.ComponentProps<typeof Card>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div className="flex flex-col gap-5">
      <motion.h2
        className="text-2xl font-bold text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Login to your account
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Card {...props}>
          <CardContent>
            <form
              noValidate
              onSubmit={handleSubmit((data) => console.log(data))}
            >
              <FieldGroup className="space-y-0">
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

                <FieldGroup>
                  <Field>
                    <Button type="submit">Login</Button>
                    <FieldDescription className="px-6 text-center">
                      Don&apos;t have an account?
                      <Link
                        href="/register"
                        className="no-underline! hover:underline! cursor-pointer ml-1 text-primary"
                      >
                        Sign up
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
