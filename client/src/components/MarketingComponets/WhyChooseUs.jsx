import React from 'react';

const FeaturesSection = () => {        
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20 overflow-hidden">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                {/* Background decorative elements */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#8A2E88]/10 rounded-full"></div>
                <div className="absolute top-1/2 -left-24 w-32 h-32 bg-[#264653]/10 rounded-full"></div>
                <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-[#E76F51]/10 rounded-full"></div>
                
                <div className="text-center relative">
                    <h2 className="text-3xl font-bold text-[#264653] sm:text-4xl xl:text-5xl">
                        Why Choose Mysore International School?
                    </h2>
                    <p className="mt-4 text-xl text-[#8A2E88] sm:mt-8">
                        The Future of Education Starts Here!
                    </p>
                </div>

                <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-8 xl:mt-24 relative">
                    {/* Feature Card 1 */}
                    <div className="p-6 rounded-lg transition-all duration-500 transform hover:scale-105 group relative overflow-hidden bg-white hover:bg-gradient-to-br hover:from-[#8A2E88]/5 hover:to-[#264653]/5">
                        <div className="relative">
                            <div className="flex justify-center">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#8A2E88]/10 group-hover:bg-gradient-to-r group-hover:from-[#8A2E88] group-hover:to-[#264653] transition-all duration-500">
                                    <svg className="w-8 h-8 text-[#8A2E88] group-hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="9" y1="18" x2="15" y2="18"></line>
                                        <line x1="10" y1="22" x2="14" y2="22"></line>
                                        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
                                    </svg>
                                </div>
                            </div>
                            <h3 className="mt-8 text-xl font-bold text-[#264653] group-hover:text-[#8A2E88] transition-colors duration-300">Future-Ready Curriculum</h3>
                            <p className="mt-4 text-base text-gray-600">
                                Blending academics, innovation, and real-world problem-solving for comprehensive development.
                            </p>
                        </div>
                    </div>

                    {/* Feature Card 2 */}
                    <div className="p-6 rounded-lg transition-all duration-500 transform hover:scale-105 group relative overflow-hidden bg-white hover:bg-gradient-to-br hover:from-[#8A2E88]/5 hover:to-[#264653]/5">
                        <div className="relative">
                            <div className="flex justify-center">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#8A2E88]/10 group-hover:bg-gradient-to-r group-hover:from-[#8A2E88] group-hover:to-[#264653] transition-all duration-500">
                                    <svg className="w-8 h-8 text-[#8A2E88] group-hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </div>
                            </div>
                            <h3 className="mt-8 text-xl font-bold text-[#264653] group-hover:text-[#8A2E88] transition-colors duration-300">Leadership Development</h3>
                            <p className="mt-4 text-base text-gray-600">
                                Public speaking, critical thinking, and entrepreneurship training for tomorrow's leaders.
                            </p>
                        </div>
                    </div>

                    {/* Feature Card 3 */}
                    <div className="p-6 rounded-lg transition-all duration-500 transform hover:scale-105 group relative overflow-hidden bg-white hover:bg-gradient-to-br hover:from-[#8A2E88]/5 hover:to-[#264653]/5">
                        <div className="relative">
                            <div className="flex justify-center">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#8A2E88]/10 group-hover:bg-gradient-to-r group-hover:from-[#8A2E88] group-hover:to-[#264653] transition-all duration-500">
                                    <svg className="w-8 h-8 text-[#8A2E88] group-hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                        <path d="M4 22h16"></path>
                                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                                    </svg>
                                </div>
                            </div>
                            <h3 className="mt-8 text-xl font-bold text-[#264653] group-hover:text-[#8A2E88] transition-colors duration-300">World-Class Sports Facilities</h3>
                            <ul className="mt-4 text-base text-gray-600 space-y-2 text-left pl-4">
                                <li className="flex items-center">
                                    <span className="inline-block w-2 h-2 bg-[#8A2E88] group-hover:bg-gradient-to-r group-hover:from-[#8A2E88] group-hover:to-[#264653] rounded-full mr-2 transition-colors duration-300"></span>
                                    FIFA-Standard Football Field
                                </li>
                                <li className="flex items-center">
                                    <span className="inline-block w-2 h-2 bg-[#8A2E88] group-hover:bg-gradient-to-r group-hover:from-[#8A2E88] group-hover:to-[#264653] rounded-full mr-2 transition-colors duration-300"></span>
                                    NBA-Standard Basketball Court
                                </li>
                                <li className="flex items-center">
                                    <span className="inline-block w-2 h-2 bg-[#8A2E88] group-hover:bg-gradient-to-r group-hover:from-[#8A2E88] group-hover:to-[#264653] rounded-full mr-2 transition-colors duration-300"></span>
                                    ITF-Approved Tennis Courts
                                </li>
                                <li className="flex items-center">
                                    <span className="inline-block w-2 h-2 bg-[#8A2E88] group-hover:bg-gradient-to-r group-hover:from-[#8A2E88] group-hover:to-[#264653] rounded-full mr-2 transition-colors duration-300"></span>
                                    Professional Cricket Nets
                                </li>
                                <li className="flex items-center">
                                    <span className="inline-block w-2 h-2 bg-[#8A2E88] group-hover:bg-gradient-to-r group-hover:from-[#8A2E88] group-hover:to-[#264653] rounded-full mr-2 transition-colors duration-300"></span>
                                    5-Lane Professional Running Track
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature Card 4 */}
                    <div className="p-6 rounded-lg transition-all duration-500 transform hover:scale-105 group relative overflow-hidden bg-white hover:bg-gradient-to-br hover:from-[#8A2E88]/5 hover:to-[#264653]/5">
                        <div className="relative">
                            <div className="flex justify-center">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#8A2E88]/10 group-hover:bg-gradient-to-r group-hover:from-[#8A2E88] group-hover:to-[#264653] transition-all duration-500">
                                    <svg className="w-8 h-8 text-[#8A2E88] group-hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M22 12h-4"></path>
                                        <path d="M18 8v8"></path>
                                    </svg>
                                </div>
                            </div>
                            <h3 className="mt-8 text-xl font-bold text-[#264653] group-hover:text-[#8A2E88] transition-colors duration-300">Personalized Attention</h3>
                            <p className="mt-4 text-base text-gray-600">
                                Low student-to-teacher ratio ensuring focused learning and individual growth.
                            </p>
                        </div>
                    </div>

                    {/* Feature Card 5 */}
                    <div className="p-6 rounded-lg transition-all duration-500 transform hover:scale-105 group relative overflow-hidden bg-white hover:bg-gradient-to-br hover:from-[#8A2E88]/5 hover:to-[#264653]/5">
                        <div className="relative">
                            <div className="flex justify-center">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#8A2E88]/10 group-hover:bg-gradient-to-r group-hover:from-[#8A2E88] group-hover:to-[#264653] transition-all duration-500">
                                    <svg className="w-8 h-8 text-[#8A2E88] group-hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                        <path d="M2 12h20"></path>
                                    </svg>
                                </div>
                            </div>
                            <h3 className="mt-8 text-xl font-bold text-[#264653] group-hover:text-[#8A2E88] transition-colors duration-300">Global Exposure</h3>
                            <p className="mt-4 text-base text-gray-600">
                                Preparing students for IITs, Ivy League, and beyond.
                            </p>
                        </div>
                    </div>

                    {/* Feature Card 6 */}
                    <div className="p-6 rounded-lg transition-all duration-500 transform hover:scale-105 group relative overflow-hidden bg-white hover:bg-gradient-to-br hover:from-[#8A2E88]/5 hover:to-[#264653]/5">
                        <div className="relative">
                            <div className="flex justify-center">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#8A2E88]/10 group-hover:bg-gradient-to-r group-hover:from-[#8A2E88] group-hover:to-[#264653] transition-all duration-500">
                                    <svg className="w-8 h-8 text-[#8A2E88] group-hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                </div>
                            </div>
                            <h3 className="mt-8 text-xl font-bold text-[#264653] group-hover:text-[#8A2E88] transition-colors duration-300">Proven Results</h3>
                            <p className="mt-4 text-base text-gray-600">
                                Consistently producing top-performing students with a track record of excellence.
                            </p>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default FeaturesSection;