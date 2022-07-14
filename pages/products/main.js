import Link from "next/link";
import mysTyle from '../../components/layout.module.css'
import LayoutMe from "../../components/LayoutMe";

export default function Home() {
    return (
        <LayoutMe>
            <div>
                <Link href='/'>first page</Link>
            </div>
        </LayoutMe>

    );
}