import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
    className?: string;
}

export const Sidebar = ({ className }: Props) => {
    return (
            
            <div className={cn("flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",className,)}>
                <Link href="/learn">
                    <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                        <Image src="/logo (2).png" height={40} width={40} alt="Learnify" />
                        <h1 className="text-2xl font-extrabold text-sky-600 tracking-wide">Learnify</h1>
                    </div>
                </Link>
                <div className="flex flex-col gap-y-2 flex-1">
                    <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg"/>
                    <SidebarItem label="LeaderBoard" href="/leaderboard" iconSrc="/learn.svg"/>
                    <SidebarItem label="Quest" href="/quest" iconSrc="/learn.svg"/>
                    <SidebarItem label="Shop" href="/shop" iconSrc="/learn.svg"/>
                </div>
                <div className="p-4">
                    <ClerkLoading>
                        <Loader className="h-5 w-5 text-muted-foreground animate-spin"></Loader>
                    </ClerkLoading>
                    <ClerkLoaded>
                        <UserButton afterSignOutUrl="/" />
                    </ClerkLoaded>
                </div>
            </div>
    );
}