"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const FormSchema = z.object({
  firstName: z.string().min(1, "FirstName is required").max(100),
  lastName: z.string().min(1, "FirstName is required").max(100),
  pointSystem: z.string().min(1, "FirstName is required").max(100),
  remarks: z.string().min(1, "FirstName is required").max(100),
  addedBy: z.string().min(1, "FirstName is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
});

const SignUpForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "testttt",
      pointSystem: "test",
      remarks: "test1",
      addedBy: "test1",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch("api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        pointSystem: values.pointSystem,
        remarks: values.remarks,
        addedBy: values.addedBy,
        email: values.email,
      }),
    });
    if (response.ok) {
      console.log("dataa in");
    } else {
      console.log("error");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>firstName</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="mail@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full mt-6" type="submit">
          Sign up
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
