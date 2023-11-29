

export default function LoginPage(){
    return (
        <div className="grid p-20 w-full place-items-center">
            <h1 className="text-3xl p-2">Log in</h1>
            <div className="p-2">
                {/* Authproviders */}
                THIS IS WHERE AUTH PROVIDERS WILL COME...
            </div>
            <div className="p-2 w-64">
                <hr />
            </div>
            <div className="p-2">
                {/* Form */}
                <form className="flex flex-col gap-3 w-60">
                    <input className="text-sm rounded-lg block w-full p-2.5" type="text" placeholder="E-Mail" />
                    <input className="text-sm rounded-lg block w-full p-2.5" type="password" placeholder="Password" />
                    <button className="text-sm rounded-lg block w-full p-2.5 bg-gray-800 text-white hover:bg-gray-300 hover:text-black">Login</button>
                </form>
            </div>
        </div>
    )
}