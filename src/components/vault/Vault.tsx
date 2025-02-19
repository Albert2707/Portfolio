import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer";
  import { Button } from "@/components/ui/button";
  import { ExternalLink, FileBadge2 } from "lucide-react";
export const Vault = () => {
  return (
    <section className="w-screen h-[300px] py-10 flex justify-center items-center">
    <Drawer >
      <DrawerTrigger className="">
        <div className="relative flex items-center justify-center w-full">
          <span className="h-[54px] w-[12.4rem]  rounded-md absolute bg-gradient-to-r from-[#FF79C6] to-rose-500"></span>
          <button className="flex gap-2 items-center justify-center rounded-md overflow-hidden absolute h-[50px] w-[12rem] z-10 group bg-input hover:text-transparent transition-all duration-300 active:scale-90">
            <FileBadge2 className="w-7 h-7 text-[#222] absolute opacity-0 group-hover:opacity-100 transition-all 
duration-500"/>
            Certifications
          </button>
        </div>
      </DrawerTrigger>
      <DrawerContent className="bg-[#222] border-[#333] h-[70%] md:h-[350px] flex justify-center w-full items-center">
        <DrawerHeader>
          <DrawerTitle className="text-gray-200">Certifications</DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col h-auto gap-2 overflow-auto md:flex-row md:overflow-y-hidden">
          <div className="flex flex-col h-[500px] gap-2 overflow-hidden">

            <div className="w-40 h-40 overflow-hidden rounded-md">
              <img className="object-cover object-center w-full h-full" src="https://udemy-certificate.s3.amazonaws.com/image/UC-fe1995dd-c67e-49ea-b59c-8c9c37d135e6.jpg?v=1714487116000" alt="Mastering TypeScript" />
            </div>
            <a href="https://www.udemy.com/certificate/UC-fe1995dd-c67e-49ea-b59c-8c9c37d135e6/" target="_blank" className="flex gap-2 items-center justify-center rounded-md overflow-hidden h-[36px] w-full z-10 group bg-white transition-all duration-300 active:scale-90 text-sm">
              Credentials <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-col h-[500px] gap-2 overflow-hidden">

            <div className="w-40 h-40 overflow-hidden rounded-md">
              <img className="object-cover object-center w-full h-full" src="https://media.licdn.com/dms/image/v2/D4E22AQF0BSNdUM82IQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1715039040267?e=1742428800&v=beta&t=vqktVPvG9b9Chm5hTkFuRN3vcOOQ58v_0ZoB1HfmYXk" alt="Learning Reast APIs" />
            </div>
            <a href="https://www.linkedin.com/learning/certificates/9639ebfbbc8e06f587425a6dfb1635edc55eddccb096849a1407d020ff13b98a" target="_blank" className="flex gap-2 items-center justify-center rounded-md overflow-hidden h-[36px] w-full z-10 group bg-white transition-all duration-300 active:scale-90 text-sm">
              Credentials <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>

  </section>
  )
}
