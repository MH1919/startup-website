import React from "react";
import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-zinc-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-yellow-400 mb-2">Welcome Back</h1>
          <p className="text-zinc-400">Sign in to your account to continue</p>
        </div>

        <div className="bg-gradient-to-b from-[#232323] to-[#18181b] rounded-2xl p-8 border border-zinc-800">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-zinc-900 border-zinc-800"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-yellow-400 hover:text-yellow-300"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="bg-zinc-900 border-zinc-800"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label
                htmlFor="remember"
                className="text-sm text-zinc-400 cursor-pointer"
              >
                Remember me
              </Label>
            </div>

            <Button className="w-full bg-yellow-400 hover:bg-yellow-300 text-zinc-900">
              Sign In
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#232323] text-zinc-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full border-zinc-800 hover:bg-zinc-800"
            >
              <Github className="w-5 h-5 mr-2" />
              Continue with GitHub
            </Button>
          </div>
        </div>

        <p className="text-center mt-8 text-zinc-400">
          Don't have an account?{" "}
          <Link href="/signup" className="text-yellow-400 hover:text-yellow-300">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
} 