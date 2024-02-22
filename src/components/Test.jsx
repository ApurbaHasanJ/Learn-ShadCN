import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { DashboardIcon, DownloadIcon, RocketIcon, TrashIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Test = () => {
  return (
    <section>
      <h2 className="text-xl">Shadcn Buttons</h2>
      <div className="flex gap-2 mt-4">
        <Button variant="outline">Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="destructive">Button</Button>
        <Button disabled>Button</Button>
      </div>

      {/* button with icons */}
      <h2 className="text-xl mt-4">Icon Buttons</h2>
      <div className="flex gap-2 mt-4">
        <Button size="icon">
          <TrashIcon className="h-4 w-4" />
        </Button>
        <Button variant="destructive">
          <TrashIcon className="h-4 w-4 mr-2" /> Delete
        </Button>
        <Button disabled>
          Uploading...
          <DownloadIcon className="h-4 w-4 ml-2 animate-bounce" />
        </Button>
      </div>

      {/* Link Buttons */}
      <h2 className="text-xl mt-4">Link Buttons</h2>
      <div className="flex gap-2 mt-4">
        <Button asChild variant="ghost">
          <Link href="/login">Login</Link>
        </Button>
        <Button variant="default">
          <DashboardIcon className="h-4 w-4 mr-2 animate-pulse" /> Dashboard
        </Button>
      </div>

      {/* shad cn alert */}
      <h2 className="text-xl mt-4">Show Alert</h2>
      <div className="flex gap-2 mt-4">
      <Alert>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
      <Alert variant="destructive">
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
      </div>
    </section>
  );
};

export default Test;
