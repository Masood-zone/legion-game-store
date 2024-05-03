import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

function Login() {
  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader className="flex items-start justify-start fle-col">
        <CardTitle className="text-3xl font-medium">
          Login Into your Account
        </CardTitle>
        <CardDescription>
          Enter your email and password to check your progress
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <div></div>
        <div className="grid gap-2 text-left">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            className="rounded-2xl"
            type="email"
            placeholder="m@exmaple.com"
          />
        </div>
        <div className="grid gap-2 text-left">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            className="rounded-2xl"
            type="password"
            placeholder=""
          />
        </div>
      </CardContent>
      <CardFooter className="w-full">
        <Button className="w-full rounded-3xl bg-blue-600 text-white">
          Login
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Login;
