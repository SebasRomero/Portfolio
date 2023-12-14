import Image from "next/image";
import Link from "next/link";
import React, { useState, FormEvent } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import getInTouch from "../public/assets/getintouch.jpg"

const ContactForm = () => {

    const [isSubmitted, setSubmitted] = useState(false)
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name, phoneNumber, email, subject, message
                }),
                headers: {
                    'content-type': 'application/json'
                },
            })
            if (res.status === 200) {
                setSubmitted(true)
            }
        } catch (err: any) {
            console.error('Err', err)
        }
    }

    return (
        isSubmitted ? (
            <div>
                <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
                    <div className='max-w-[1240px] m-auto md:grid gap-8'>
                        <h2 className='py-4'>Message succesfully received!</h2>
                    </div>
                </div>
            </div>
        ) : (
            <div id="contact" className="w-full lg:h-screen">
                <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                    <p className="text-xl tracking-widest uppercase text-teal-300">Contact</p>
                    <h2 className="py-4">Get In Touch</h2>
                    <div className="grid lg:grid-cols-5 gap-8">
                        <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                            <div className="lg:p-4 h-full">
                                <Image
                                    className="rounded-xl hover:scale-105 ease-in duration-300"
                                    src={getInTouch}
                                    width="900"
                                    height="60"
                                    alt="/"
                                ></Image>
                                <div>
                                    <h2 className="py-2">Sebastian Romero</h2>
                                    <p>Back-end Developer</p>
                                    <p className="py-4">I am excited to work with you! Contact me and let's talk.</p>
                                </div>
                                <div>
                                    <p className="uppercase pt-8">Connect With Me</p>
                                    <div className="flex items-center justify-between py-4">
                                        <Link href="https://github.com/SebasRomero">
                                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursos-pointer hover:scale-125 ease-in duration-300">
                                                <FaGithub />
                                            </div>
                                        </Link>
                                        <Link href="https://www.linkedin.com/in/sebastian-romero-0a8b57128/">
                                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursos-pointer hover:scale-125 ease-in duration-300">
                                                <FaLinkedinIn />
                                            </div>
                                        </Link>
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursos-pointer hover:scale-125 ease-in duration-300">
                                            <AiOutlineMail />
                                        </div>
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursos-pointer hover:scale-125 ease-in duration-300">
                                            <BsFillPersonLinesFill />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                            <div className="p-4">
                                <form onSubmit={onSubmit} action="">
                                    <div className="grid md:grid-cols2 gap-4 w-full py-2">
                                        <div className="flex flex-col">
                                            <label className="uppercase text-sm py-2">Name</label>
                                            <input value={name} onChange={e => setName(e.target.value)} className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="uppercase text-sm py-2">Phone Number</label>
                                            <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col py-2">
                                        <label className="uppercase text-sm py-2">Email</label>
                                        <input value={email} onChange={e => setEmail(e.target.value)} className="border-2 rounded-lg p-3 flex border-gray-300" type="email" />
                                    </div>
                                    <div className="flex flex-col py-2">
                                        <label className="uppercase text-sm py-2">Subject</label>
                                        <input value={subject} onChange={e => setSubject(e.target.value)} className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                                    </div>
                                    <div className="flex flex-col py-2">
                                        <label className="uppercase text-sm py-2">Message</label>
                                        <textarea value={message} onChange={e => setMessage(e.target.value)} className="border-2 rounded-lg p-3 border-gray-300" rows={10}></textarea>
                                    </div>
                                    <button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center py-12">
                        <Link href='/'>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursos-pointer hover:scale-125 ease-in duration-300">
                                <HiOutlineChevronDoubleUp className="text-teal-300" size={30} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>)
    );
};

export default ContactForm;
