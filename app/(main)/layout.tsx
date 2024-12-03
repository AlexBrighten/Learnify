import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";
import React from "react"; // Ensure React is imported for types.

type Props = {
    children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <MobileHeader />
            
            {/* Sidebar for larger screens */}
            <Sidebar className="hidden lg:flex" />

            {/* Main Content */}
            <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
                <div className="max-w-[1056px] mx-auto pt-6 h-full">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
