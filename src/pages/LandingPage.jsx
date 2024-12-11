import { ArrowRight, ChevronDown } from 'lucide-react';
import React from 'react';
import { Code, Share2, Search, Zap } from "lucide-react";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Link } from 'react-router-dom';

const features = [
    {
        icon: <Code className="w-6 h-6 text-blue-600" />,
        title: "Enhanced Syntax Highlighting",
        description: "Experience superior syntax highlighting for over 150 programming languages, designed to improve code readability and streamline your workflow."
    },
    {
        icon: <Share2 className="w-6 h-6 text-blue-600" />,
        title: "Seamless Collaboration",
        description: "Collaborate effortlessly with your team by sharing code snippets securely, or contribute to the developer community by making them public."
    },
    {
        icon: <Search className="w-6 h-6 text-blue-600" />,
        title: "AI-Powered Search",
        description: "Quickly locate the exact code snippet you need using our intelligent AI search, boosting your efficiency and productivity."
    },
    {
        icon: <Zap className="w-6 h-6 text-blue-600" />,
        title: "Cross-Platform Access",
        description: "Access and manage your snippets anytime, anywhere with our responsive web app and lightweight browser extension."
    }
];

const stats = [
    { number: "200K+", label: "Active Developers" },
    { number: "2M+", label: "Snippets Stored" },
    { number: "100K+", label: "Teams Collaborating" },
    { number: "99.99%", label: "Uptime Guaranteed" }
];

const faqs = [
    {
        question: "How do I get started with CodeClip?",
        answer:
            "Simply sign up for a free account and start saving your code snippets. Our intuitive dashboard makes managing your code effortless."
    },
    {
        question: "Can I share snippets with my team?",
        answer:
            "Absolutely! CodeClip enables secure snippet sharing with team members, with options for private or public visibility."
    },
    {
        question: "What programming languages are supported?",
        answer:
            "CodeClip supports syntax highlighting for over 150 programming languages, including JavaScript, Python, Java, C++, Go, and many more."
    },
    {
        question: "Are there storage limitations?",
        answer:
            "Free accounts can store up to 200 snippets, while premium accounts offer unlimited storage along with exclusive features like advanced analytics."
    },
    {
        question: "Is my data secure?",
        answer:
            "Yes! We prioritize your data's security with end-to-end encryption and regular backups to ensure your snippets are always safe."
    }
];


function LandingPage() {
    return (
        <main className='relative w-full min-h-screen bg-gradient-to-b from-indigo-50 to-indigo-400 backdrop-blur-md'>
            {/* hero */}
            <section className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Store and Share Code Snippets
                        <br />
                        with Ease
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        A modern platform for developers to store, organize, and share code
                        snippets. Powered by AI for better code organization and discovery.
                    </p>
                    <div className="flex gap-4 justify-center">

                        <Link to={"/signup"} className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2 text-lg">
                            Get Started Free <ArrowRight className="w-4 h-4" />
                        </Link>

                        <Link to="/demo" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition text-lg">
                            View Demo
                        </Link>

                    </div>
                </div>
            </section>

            {/* features */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Everything you need to manage your code snippets
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <article
                                key={index}
                                className="p-6 rounded-xl border border-gray-200 hover:border-indigo-200 transition cursor-pointer hover:bg-indigo-600/10 flex items-center justify-start flex-col text-center"
                            >
                                <div className="mb-2">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                                <p className="text-gray-600 text-sm text-center">{feature.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* stats */}
            <section className="bg-indigo-100 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-indigo-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 text-sm sm:text-xl">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* faq */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="group border border-gray-200 rounded-lg"
                            >
                                <summary className="flex items-center justify-between p-6 cursor-pointer">
                                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                                </summary>
                                <div className="px-6 pb-6 text-gray-600 text-sm">{faq.answer}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* cta section */}
            <section className="py-20 bg-indigo-600/90">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to streamline your code management?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8">
                        Join thousands of developers who trust CodeClip for their code snippet
                        management.
                    </p>
                    <div className="flex gap-4 justify-center">

                        <Link to={"/signup"} className="bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition flex items-center gap-2 text-lg hover:bg-white/80">
                            Get Started Free <ArrowRight className="w-4 h-4" />
                        </Link>


                    </div>
                </div>
            </section>

            {/* footer */}
            <footer className="bg-gray-900 text-gray-300">
                <div className="max-w-7xl mx-auto px-6 py-12 text-center">
                    <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-sm">
                            © {new Date().getFullYear()} CodeClip. All rights reserved. <span className="text-red-600">❤️</span> by <a href="https://dhirajarya.com" className="hover:text-white transition" aria-label="Dhiraj Arya" target='_blank'>Dhiraj Arya</a>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://github.com/dhirajaryaa" className="hover:text-white transition" aria-label="Github" target='_blank'>
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://x.com/dhirajaryaa" className="hover:text-white transition" aria-label="Twitter" target='_blank'>
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/dhirajaryaa0/" className="hover:text-white transition" aria-label="Linkedin" target='_blank'>
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default LandingPage;

