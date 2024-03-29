import "@/app/components/footer/footer.css"
import Image from 'next/image'


export default function Footer(){
    return(
        <main><div className="footer flex justify-evenly p-4 shadow-2xl text-center items-center">
        <a href="/" className="p-2">aquilarda</a>
        <a href="https://github.com/aquilarda" className="p-2"><Image src="/github.png" alt="Github" width={50} height={50}/></a>
        </div>
        </main>
    );
}