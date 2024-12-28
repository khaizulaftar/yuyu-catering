function Navbar() {
    return (
        <>
            <header className="border-b border-gray-200 bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-4">
                    <div className="flex items-start gap-4 flex-row items-center justify-between">
                        <img src="/Black and White Catering Company Logo.png" className="w-20"></img>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://wa.me/6281270148027?text=Saya%20ingin%20memesan%20cateringan%20Anda"
                                className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring"
                                type="button"
                            >
                                <span className="text-sm font-medium"> buat pesanan </span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar