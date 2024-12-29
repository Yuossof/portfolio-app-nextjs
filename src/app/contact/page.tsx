"use client"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
// import { Mail, User, MessageSquare } from 'lucide-react'
// import { useState } from "react"

export default function ContactPage() {
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");
    // const [name, setName] = useState("");
    // const [isLoading, setIsLoading] = useState(false)
    // const [result, setResult] = useState("")

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setIsLoading(true)
    //     const response = await fetch(`${process.env.NEXT_BASE_URL}/api/contact`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ email, message, name }),
    //     });
    //     const res = await response.json();
    //     console.log(res)
    //     setResult(res.message)
    //     setIsLoading(false)
    // };


    return (
        <main className="flex items-center  justify-center w-full m-auto bg-gray-900 min-h-screen relative overflow-visible">
            <div className="container mx-auto px-4 py-16 flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-100">Get in Touch</h1>
                {/* <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>Contact Me</CardTitle>
                        <CardDescription>Fill out the form below and I&apos;ll get back to you as soon as possible.</CardDescription>
                    </CardHeader>
                    <form action="" onSubmit={handleSubmit}>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <User className="text-gray-400" />
                                <Input value={name} onChange={(eo)=> setName(eo.target.value)} placeholder="Your Name" />
                            </div>
                            <div className="flex items-center space-x-4">
                                <Mail className="text-gray-400" />
                                <Input value={email} onChange={(eo)=> setEmail(eo.target.value)} type="email" placeholder="Your Email" />
                            </div>
                            <div className="flex items-start space-x-4">
                                <MessageSquare className="text-gray-400 mt-2" />
                                <Textarea value={message} onChange={(eo)=> setMessage(eo.target.value)} placeholder="Your Message" rows={4} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <span className="text-green-600">{result}</span>
                            <Button disabled={isLoading} type="submit" className="w-full">Send Message</Button>
                        </CardFooter>
                    </form>
                </Card> */}
                <div className="mt-12 text-center">
                    {/* <h2 className="text-2xl font-semibold mb-4 text-gray-100">Other Ways to Connect</h2> */}
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="text-blue-500 hover:text-blue-600">LinkedIn</a>
                        <a href="#" className="text-blue-500 hover:text-blue-600">Twitter</a>
                        <a href="#" className="text-blue-500 hover:text-blue-600">GitHub</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

