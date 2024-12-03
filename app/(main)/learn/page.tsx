import { Header } from "@/app/(marketing)/header";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";

const LearnPage = () => {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                My sticky content
            </StickyWrapper>
            <FeedWrapper>
                <Header title="My Page Title" />
                My main content
            </FeedWrapper>
        </div>
    );
}

export default LearnPage;