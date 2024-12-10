import { ArrowRight, ChevronDown } from 'lucide-react';
import React from 'react';
import { Code, Share2, Search, Zap } from "lucide-react";
import { Code2, Github, Twitter, Linkedin } from "lucide-react";

const features = [
    {
        icon: <Code className="w-6 h-6 text-blue-600" />,
        title: "Syntax Highlighting",
        description: "Enjoy seamless coding with beautiful syntax highlighting for over 100 programming languages, making your code easy to read and understand."
    },
    {
        icon: <Share2 className="w-6 h-6 text-blue-600" />,
        title: "Easy Sharing",
        description: "Effortlessly share your snippets with teammates or make them public to help the developer community grow and collaborate."
    },
    {
        icon: <Search className="w-6 h-6 text-blue-600" />,
        title: "Smart Search",
        description: "Use AI-powered search to quickly find the snippets you need, saving you time and boosting productivity."
    },
    {
        icon: <Zap className="w-6 h-6 text-blue-600" />,
        title: "Quick Access",
        description: "Access your snippets from anywhere with our lightweight browser extension, designed for maximum convenience."
    }
];

const stats = [
    { number: "100K+", label: "Developers" },
    { number: "1M+", label: "Snippets Stored" },
    { number: "50K+", label: "Teams" },
    { number: "99.9%", label: "Uptime" }
];

const faqs = [
    {
        question: "How do I get started with CodeClip?",
        answer:
            "Sign up for a free account and start storing your code snippets right away. Our intuitive interface makes it easy to organize and manage your code."
    },
    {
        question: "Can I share snippets with my team?",
        answer:
            "Yes! CodeClip offers team collaboration features. You can share snippets privately with team members or make them public for the community."
    },
    {
        question: "What programming languages are supported?",
        answer:
            "We support over 100 programming languages with syntax highlighting, including JavaScript, Python, Ruby, Java, C++, and many more."
    },
    {
        question: "Is there a limit to how many snippets I can store?",
        answer:
            "Free accounts can store up to 100 snippets. Premium accounts have unlimited storage and additional features."
    }
]

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
                        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2 text-lg">
                            Get Started Free <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition text-lg">
                            View Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* features */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Everything you need to manage your code snippets
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        {features.map((feature, index) => (
                            <article
                                key={index}
                                className="p-6 rounded-xl border border-gray-200 hover:border-indigo-200 transition cursor-pointer hover:bg-indigo-600/10 w-[280px] h-[190px] flex items-center justify-center flex-col"
                            >
                                <h3 className="text-xl font-semibold mb-2 flex items-center gap-4"><span>{feature.icon}</span>{feature.title}</h3>
                                <p className="text-gray-600 text-sm text-center">{feature.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* stats */}
            <section className="bg-indigo-50 py-16">
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
            <section className="py-20 bg-indigo-600">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to streamline your code management?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8">
                        Join thousands of developers who trust CodeClip for their code snippet
                        management.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition flex items-center gap-2 text-lg hover:bg-white/80">
                            Get Started Free <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition text-lg">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </section>

            {/* footer */}
            <footer className="bg-gray-900 text-gray-300">
                <div className="max-w-7xl mx-auto px-6 py-12 text-center">
                    <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-sm">
                            © {new Date().getFullYear()} CodeClip. All rights reserved.
                        </div>
                        <div className="flex gap-4">
                            <a href="#github" className="hover:text-white transition" aria-label="Github">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#twitter" className="hover:text-white transition" aria-label="Twitter">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#linkedin" className="hover:text-white transition" aria-label="Linkedin">
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
