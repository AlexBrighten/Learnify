import { Button } from "@/components/ui/button";

const ButtonPage = () => {
  return (
    <div className="space-y-5 flex flex-col max-w-[200px]">
      <h1>Button Page</h1>
        <Button>Default</Button>
        <Button  variant="primary">Primary</Button>
        <Button variant="primaryOutline">Primary Outline</Button>
        <Button  variant="secondary">Secondary</Button>
        <Button variant="secondaryOutline">Secondary Outline</Button>
        <Button  variant="danger">Danger</Button>
        <Button variant="dangerOutline">Danger Outline</Button>
        <Button  variant="super">Super</Button>
        <Button variant="superOutline">Super Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button  variant="sidebar">Super</Button>
        <Button variant="sidebarOutline">Super Outline</Button>
    </div>
  );
}

export default ButtonPage;