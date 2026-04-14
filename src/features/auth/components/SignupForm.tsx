"use client";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupData } from "../schema/signupSchema";
import ErrorTooltip from "@/shared/components/ErrorTooltip";
import Link from "next/link";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form noValidate onSubmit={handleSubmit((data) => console.log(data))}>
          <FieldGroup className="space-y-0">
            <Field>
              <div className="flex items-center gap-1">
                <FieldLabel htmlFor="name" className="relative">
                  Full Name
                </FieldLabel>
                {errors.name && (
                  <ErrorTooltip
                    message={errors.name.message || "Invalid name"}
                  />
                )}
              </div>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                {...register("name")}
              />
            </Field>
            <Field>
              <div className="flex items-center gap-1">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                {errors.email && (
                  <ErrorTooltip
                    message={errors.email.message || "Invalid email"}
                  />
                )}
              </div>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email")}
              />
            </Field>
            <Field>
              <div className="flex items-center gap-1">
                <FieldLabel htmlFor="password">Password</FieldLabel>
                {errors.password && (
                  <ErrorTooltip
                    message={errors.password.message || "Invalid password"}
                  />
                )}
              </div>
              <Input id="password" type="password" {...register("password")} />
            </Field>
            <Field>
              <div className="flex items-center gap-1">
                <FieldLabel htmlFor="confirmPassword">
                  Confirm Password
                </FieldLabel>
                {errors.confirmPassword && (
                  <ErrorTooltip
                    message={
                      errors.confirmPassword.message ||
                      "Invalid confirm password"
                    }
                  />
                )}
              </div>
              <Input
                id="confirmPassword"
                type="password"
                {...register("confirmPassword")}
              />
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit">Create Account</Button>
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
  );
}
