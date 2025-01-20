"use client";  // Enables client-side rendering in Next.js

import React from 'react';
import { Button } from "@/components/ui/button";  // Custom button component
import { string, z } from "zod";  // Zod library for schema validation
import { zodResolver } from "@hookform/resolvers/zod";  // Zod resolver for React Hook Form
import { useForm } from "react-hook-form";  // Hook for handling forms

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";  // UI components for form structure
import { Input } from "@/components/ui/input";  // Input component (not used here)
import { CircleArrowRight } from 'lucide-react';  // Icon for the submit button
import { Textarea } from './ui/textarea';  // Custom textarea component

// Define a schema for form validation using Zod
const formSchema = z.object({
  mensaje: z.string().min(2),  // The `mensaje` field must be a string with at least 2 characters
});

// Props type for ChatForm component
type Props = {
  setChat: (mensaje: MensajeProps) => void;  // Function to set the chat message
};

/**
 * ChatForm component allows users to enter and submit chat messages.
 * 
 * @component
 * @param {Props} props - Contains a `setChat` function to handle new messages.
 * @returns {JSX.Element} The form element for user input.
 */
const ChatForm = ({ setChat }: Props) => {
  // Initialize form handling with schema validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),  // Uses Zod schema for validation
    defaultValues: {
      mensaje: "",  // Default empty message
    },
  });

  /**
   * Handles form submission.
   * @param {z.infer<typeof formSchema>} values - Validated form values.
   */
  function onSubmit(values: z.infer<typeof formSchema>) {
    const mensajeNuevo = {
      role: 'user',
      content: values.mensaje,  // Prepare a new message object for the chat
    };
    setChat(mensajeNuevo);  // Pass the message to parent component
    form.reset();  // Reset the form after submission
  }

  /**
   * Handles keydown events for textarea to submit on Enter without Shift.
   * @param {React.KeyboardEvent<HTMLTextAreaElement>} e - Keyboard event.
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();  // Prevent newline
      form.handleSubmit(onSubmit)();  // Trigger form submission
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className='flex gap-4 p-2 bg-transparent'>
          <FormField
            control={form.control}
            name="mensaje"
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Textarea
                    placeholder="Habla con Chatsu"  // Placeholder text
                    className='text-gray-100 w-full bg-transparent border-2 border-gray-400 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0'
                    {...field}
                    onKeyDown={handleKeyDown}  // Handles keyboard submission
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className='flex bg-slate-900 h-14 hover:animate-pulse hover:bg-slate-700'>
            <CircleArrowRight />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ChatForm;  // Export the ChatForm component as default