import Link from 'next/link';
import React from 'react'

function Footer() {

    const SOCIALS = [
        {
            name: 'GitHub',
            href: 'https://github.com/aymkh',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/aymkh',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
            )
        },
        {
            name: 'Twitter',
            href: 'https://x.com/__aymkh',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
            )
        },
        {
            name: 'Email',
            href: 'mailto:contact@maak-corp.tn',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
            )
        },
    ];

    return (
        <footer className='flex flex-col items-center gap-4 py-8 text-white bg-black'>
            <section className="py-12 text-white">
                <div className="container px-6 mx-auto">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                        <div>
                            <div className="mb-4 text-2xl logo">
                                <span className="text-primary">IG</span><span className="text-secondary">60</span><span className="text-sm text-gray-400">.com</span>
                            </div>
                            <p className="text-sm text-gray-400">
                                IG60 est une plateforme de création de site e-commerce qui aide les entreprises à créer un site professionnel et à réussir en ligne.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-4 text-lg font-semibold">Support</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="text-gray-400 transition-colors hover:text-white">FAQ</Link></li>
                                <li><Link href="#" className="text-gray-400 transition-colors hover:text-white">Politique de confidentialité</Link></li>
                                <li><Link href="#" className="text-gray-400 transition-colors hover:text-white">Termes et conditions</Link></li>
                                <li><Link href="#" className="text-gray-400 transition-colors hover:text-white">Contactez-nous</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-lg font-semibold">Entreprise</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="text-gray-400 transition-colors hover:text-white">À propos de nous</Link></li>
                                <li><Link href="#" className="text-gray-400 transition-colors hover:text-white">Fonctionnalités</Link></li>
                                <li><Link href="#" className="text-gray-400 transition-colors hover:text-white">Tarifs</Link></li>
                                <li><Link href="#" className="text-gray-400 transition-colors hover:text-white">Actualités</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-lg font-semibold">Nous contacter</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <i className="mt-1 mr-2 text-gray-400 fas fa-map-marker-alt"></i>
                                    <span className="text-gray-400">Tunis, Tunisie</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="mt-1 mr-2 text-gray-400 fas fa-envelope"></i>
                                    <span className="text-gray-400">contact@ig60.com</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="mt-1 mr-2 text-gray-400 fas fa-phone"></i>
                                    <span className="text-gray-400">+216 XX XXX XXX</span>
                                </li>
                            </ul>
                            <div className="flex mt-4 space-x-4">
                                <Link href="#" className="text-gray-400 transition-colors hover:text-white"><i className="fab fa-facebook-f"></i></Link>
                                <Link href="#" className="text-gray-400 transition-colors hover:text-white"><i className="fab fa-twitter"></i></Link>
                                <Link href="#" className="text-gray-400 transition-colors hover:text-white"><i className="fab fa-instagram"></i></Link>
                                <Link href="#" className="text-gray-400 transition-colors hover:text-white"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-between pt-8 mt-12 border-t border-gray-800 md:flex-row">
                        <p className="text-sm text-gray-400">© 2025 IG60.COM. Tous droits réservés.</p>
                        <div className="mt-4 md:mt-0">
                            <svg width="200" height="30" viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
                                {/* Visa */}
                                <rect x="10" y="5" width="40" height="20" rx="2" fill="#0066b2" />
                                <path d="M20,18 L25,18 L26,12 L28,18 L33,18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                                {/* Mastercard */}
                                <circle cx="65" cy="15" r="8" fill="#eb001b" />
                                <circle cx="75" cy="15" r="8" fill="#f79e1b" />
                                <path d="M70,9 A8,8 0 0,0 70,21 A8,8 0 0,0 70,9" fill="#ff5f00" />

                                {/* E-Dinar */}
                                <rect x="95" y="5" width="40" height="20" rx="2" fill="#ffaa33" />
                                <text x="115" y="18" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#fff">E-DINAR</text>

                                {/* Flousi */}
                                <rect x="145" y="5" width="40" height="20" rx="2" fill="#4ade80" />
                                <text x="165" y="18" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#fff">FLOUSI</text>
                            </svg>
                        </div>
                    </div>
                </div>
            </section >
            <div className="flex justify-center mt-8 space-x-6">
                {
                    SOCIALS.map((item, index: number) => (
                        <a key={index} target="_blank" href={item.href} className="hover:text-gray-500">
                            {item.icon}
                        </a>
                    ))
                }
            </div>
            <p className="py-8 text-base leading-6 text-center text-white">
                © {new Date().getFullYear()} <Link href={'https://maak-corp.tn'}><strong>MAAK CORP</strong></Link>, All rights reserved.
            </p>
        </footer >
    )
}

export default Footer