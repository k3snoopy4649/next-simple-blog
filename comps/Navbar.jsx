import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1><Image src="/logo.png" width={48} height={48} /></h1>
            </div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/ninjas">Ninja Listing</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;