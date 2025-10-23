'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Gender } from '@/types/userTypes';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from './ui/form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';
import { Spinner } from "@/components/ui/spinner"
import Link from 'next/link';

// User login Zod schema
const userLogin = z
    .object({
        email: z.string().email('Invalid email address'),
        password: z
            .string()
            .min(6, 'Password must be at least 6 characters')
            .max(12, 'Password must be at most 12 characters')
    })

type RegistrationFormValues = z.infer<typeof userLogin>;

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<RegistrationFormValues>({
        resolver: zodResolver(userLogin),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (values: RegistrationFormValues) => {

        const userData = {
            email: values.email,
            password: values.password
        }

        try {
            setIsLoading(true)
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData),
                credentials: 'include'
            })

            const data = await res.json();

            if(data?.success){
                toast.success('লগিন সফল হয়েছে')
                form.reset();
            }else{
                toast.error('দুঃখিত, লগিন সফল হয় নি।')
            }
            
        } catch (err) {
            console.error(err);
        } finally{
            setIsLoading(false)
        }
    };

    return (
        <div className='bg-secondary p-5 rounded-lg'>
            <h1 className='text-3xl font-bold text-center my-5'>লগিন করুন</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Email */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-bold'>আপনার ইমেইল</FormLabel>
                                <FormControl className='bg-white py-6 rounded-3xl'>
                                    <Input type="email" placeholder="উদাহরনঃ example@gmail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Password */}
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-bold'>পাসওয়ার্ড</FormLabel>
                                <FormControl className='bg-white py-6 rounded-3xl'>
                                    <Input type="password" placeholder="পাসওয়ার্ড দিন" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex justify-end">
                        <Button type="submit" className='w-full py-6 text-lg mb-3 rounded-3xl cursor-pointer'>{isLoading ? <span className='flex items-center gap-3'>লগিন চলমান <Spinner /></span> : 'লগিন করুন'}</Button>
                    </div>
                </form>
            </Form>

            <p className='mt-3 text-right'>একাউন্ট নেই? <Link href={'/registration'} className='underline'>রেজিস্ট্রেশন করুন</Link></p>
        </div>
    );
};

export default LoginForm;
