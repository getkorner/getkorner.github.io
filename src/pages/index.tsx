import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Logo from "../assets/logo.svg";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="min-h-screen flex justify-center items-center bg-[#83B4FF]">
      <Logo />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Korner</title>
