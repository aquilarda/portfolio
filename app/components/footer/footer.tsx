import "@/app/components/footer/footer.css"

export default function Footer(){
    return(
        <main><div className="footer flex justify-evenly p-4 shadow-2xl text-center items-center">
        <a href="/">aquilarda</a>
        <a href="https://github.com/aquilarda"><img src="/github.png" alt="Github" width={50}/></a>
        </div>
        </main>
    );
}