type Props = {
    children: React.ReactNode;
};

export const FeedWrapper = ({ children }: Props) => {
    return (
        <div className="realtive flex-1 top-0 pb-10">
            {children}
        </div>
    );
};