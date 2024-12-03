import { Button } from '@/components/ui/button'
import Image from 'next/image'

export const Footer = () => {
    return(
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full">
                <Button variant="ghost" size="lg" className='w-full'>
                    <Image src="/box.png" alt="Logo" width={40} height={32} className='mr-4 rounded-md'/>
                    Easy
                </Button>
            </div>

            <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full">
                <Button variant="ghost" size="lg" className='w-full'>
                    <Image src="/box.png" alt="Logo" width={40} height={32} className='mr-4 rounded-md'/>
                    Medium
                </Button>
            </div>

            <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full">
                <Button variant="ghost" size="lg" className='w-full'>
                    <Image src="/box.png" alt="Logo" width={40} height={32} className='mr-4 rounded-md'/>
                    Hard
                </Button>
            </div>
        </footer>
    )
}