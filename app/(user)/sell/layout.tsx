import Footer from "@/components/footer";
import Header from "@/components/header";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function SellLayout ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <Header alt={true}/>
        {children}
      </div>
    );
  }
  