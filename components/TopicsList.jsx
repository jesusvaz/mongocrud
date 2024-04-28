import React from 'react';
import Remove from './Remove';
import Link from 'next/link';
import { HiPencilAlt } from "react-icons/hi";


export default function TopicsList() {
    return (
        <>
            <div className="p-4 borfer border-0slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    <h2 className="font-bold text-2xl">Topic Titlde</h2>
                    <div>Topic Dexcription</div>
                </div>
                <div className="flex gap-2" >
                    <Remove />
                    <Link href="/editTopoic/123">
                        <HiPencilAlt size={24} />

                    </Link>
                </div>
            </div>
        </>
    )
}
