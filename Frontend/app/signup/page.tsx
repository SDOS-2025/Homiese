'use client';
import {useForm} from "react-hook-form"
import signUpSchema from '@/formSchema/signUpPage';
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import Link from "next/link";
import {NEXT_PUBLIC_SERVER_URL} from "@/config/config.js";

// SERVER_URL is the base URL

export default function SignupPage() {

  console.log(NEXT_PUBLIC_SERVER_URL)

  const form = useForm<z.infer<typeof signUpSchema>>(
      {
        resolver : zodResolver(signUpSchema),
        defaultValues : {
          username : "",
          email : "",
          password: "",
          confirmPassword: "",
        }
      }
  );

  async function onSubmit(values : z.infer<typeof signUpSchema>) {
    try{
        const response = await axios.post("http://localhost:8000/api/v1/auth/sign-up", {
        username : values.username,
        email : values.email,
        password: values.password,
      })

      if(response.status === 201){
        //successful operation redirect it to the main page?
        console.log("Redirecting")
      }
      else if(response.status === 202){
        console.log("User Already Exists it is trying to sign in");
      }
      else {
        console.log("Some Error for now")
      }
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <main className={"h-[100vh] bg-gray-100 flex justify-center items-center "}>

        <div className={"bg-white p-8 rounded-lg shadow-lg w-96  "}>
            <h2 className="text-2xl font-semibold text-center mb-6 text-black">Sign Up</h2>

            <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-1"}>
            <FormField
                name={"username"}
                control ={form.control}
                render = {({field}) =>(

                    <FormItem>
                      <FormLabel>
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input type={"string"} {...field}/>
                      </FormControl>
                      <FormDescription >

                      </FormDescription>
                      <FormMessage>

                      </FormMessage>
                    </FormItem>
                )}
            />


            <FormField name={"email"} control = {form.control}
                       render={({field}) => (
                           <FormItem>
                             <FormLabel>
                               Email
                             </FormLabel>
                             <FormControl>
                               <Input type={"email"} {...field}/>
                             </FormControl>
                             <FormDescription />
                             <FormMessage />
                           </FormItem>
                       )} />


            <FormField name={"password"} control = {form.control}
                       render={({field})=>(
                           <FormItem>
                             <FormLabel>
                               Password
                             </FormLabel>
                             <FormControl>
                               <Input type={"password"} {...field}/>
                             </FormControl>
                             <FormDescription />
                             <FormMessage />
                           </FormItem>
                       )} />


            <FormField control={form.control} name={"confirmPassword"}
                       render={({field}) => (
                           <FormItem>
                             <FormLabel>
                               Confirm Password
                             </FormLabel>
                             <FormControl>
                               <Input type={"password"} {...field}/>
                             </FormControl>
                             <FormDescription />
                             <FormMessage />
                           </FormItem>
                       )}
            />

            <Button type="submit" variant="outline">
              Submit
            </Button>
          </form>
        </Form>
          <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
          </p>
      </div>
    </main>
  );
}
