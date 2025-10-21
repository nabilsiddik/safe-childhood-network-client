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

// User registration Zod schema
const userRegistrationSchema = z
    .object({
        fullName: z.string().min(1, 'Full Name is required'),
        email: z.string().email('Invalid email address'),
        password: z
            .string()
            .min(6, 'Password must be at least 6 characters')
            .max(12, 'Password must be at most 12 characters'),
        confirmPassword: z
            .string()
            .min(6, 'Password must be at least 6 characters')
            .max(12, 'Password must be at most 12 characters'),
        address: z.string().optional(),
        gender: z.nativeEnum(Gender, 'Gender is required')
            .optional(),
        profilePhoto: z.any().optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    });

type RegistrationFormValues = z.infer<typeof userRegistrationSchema>;

const RegistrationForm = () => {
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<RegistrationFormValues>({
        resolver: zodResolver(userRegistrationSchema),
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            address: '',
            gender: undefined,
            profilePhoto: undefined,
        },
    });

    const onSubmit = async (values: RegistrationFormValues) => {

        const formData = new FormData();

        const userData = {
            fullName: values.fullName,
            email: values.email,
            password: values.password
        }

        formData.append('data', JSON.stringify(userData))

        try {
            setIsLoading(true)
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`, {
                method: 'POST',
                body: formData
            })

            const data = await res.json();

            if(data?.success){
                toast.success('রেজিস্ট্রেশন সফল হয়েছে')
                form.reset();
            }else{
                toast.error('দুঃখিত, রেজিস্ট্রেশন টি গ্রহনযোগ্য হয় নি।')
            }
            
        } catch (err) {
            console.error(err);
        } finally{
            setIsLoading(false)
        }
    };

    return (
        <div className='bg-secondary p-5 rounded-lg'>
            <h1 className='text-3xl font-bold text-center my-5'>একাউন্ট</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Full Name */}
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-bold'>আপনার নাম</FormLabel>
                                <FormControl className='bg-white py-6 rounded-3xl'>
                                    <Input placeholder="উদাহরনঃ Halum" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

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

                    {/* Confirm Password */}
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-bold'>কনফার্ম পাসওয়ার্ড</FormLabel>
                                <FormControl className='bg-white py-6 rounded-3xl'>
                                    <Input type="password" placeholder="পাসওয়ার্ড কনফার্ম করুন" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex justify-end">
                        <Button type="submit" className='w-full py-6 text-lg mb-3 rounded-3xl cursor-pointer'>{isLoading ? <span className='flex items-center gap-3'>রেজিস্ট্রেশন চলমান <Spinner /></span> : 'রেজিস্ট্রেশন করুন'}</Button>
                    </div>
                </form>
            </Form>

            <p className='mt-3 text-right'>একাউন্ট করা আছে? <Link href={'/login'} className='underline'>লগিন করুন</Link></p>
        </div>
    );
};

export default RegistrationForm;
