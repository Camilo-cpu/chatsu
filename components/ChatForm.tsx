"use client";

import React from 'react'
import { Button } from "@/components/ui/button"
import { string, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { CircleArrowRight } from 'lucide-react';
import { Textarea } from './ui/textarea';

const formSchema = z.object({
    mensaje: z.string().min(2),
  })


type Props = {
    setChat: (mensaje: MensajeProps) => void
}
const ChatForm = ({setChat}: Props) => {


     // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mensaje: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const mensajeNuevo = {

        role: 'user',
        content: values.mensaje,

    }
    setChat(mensajeNuevo);
    form.reset();
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey ) {
        e.preventDefault();
        form.handleSubmit(onSubmit)();
    }
  }

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
                  <Textarea placeholder="Habla con Chatsu"
                  className='text-gray-100 w-full bg-transparent border-2 border-gray-400 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0'
                  {...field} 
                  onKeyDown={handleKeyDown}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className='flex bg-slate-900 h-14 hover:animate-pulse hover:bg-slate-700'><CircleArrowRight/></Button>
          </div>
        </form>
        
      </Form>
    )
}

export default ChatForm