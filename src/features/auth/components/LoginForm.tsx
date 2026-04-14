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
import { loginSchema, LoginData } from "@/features/auth/schema/loginSchema";
import ErrorTooltip from "@/shared/components/ErrorTooltip";
import Link from "next/link";

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
    <Card {...props}>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form noValidate onSubmit={handleSubmit((data) => console.log(data))}>
          <FieldGroup className="space-y-0">
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
  );
}
