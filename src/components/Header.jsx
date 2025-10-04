import React from 'react'

const header = () => {
  return (
    <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <div className="md:flex md:items-center md:gap-12">
                    <a className="block text-teal-600" href="#">
                        <span>Sago Cabs</span>
                    </a>
                </div>

                <div className="hidden md:block">
                    <nav aria-label="Global">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
                            </li>

                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>
                            </li>

                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
                            </li>

                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
                            </li>

                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
                            </li>

                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                        <a
                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                        href="#"
                        >
                        Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default header