import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps{
    id: string;
    name: string;
    topics: string;
    subject: string;
    duration: number;
    color: string;
}

const CompanionCard = ({ id, name, topics, subject, duration, color }:CompanionCardProps) => {
  return (
    <article className="companion-card" style={{backgroundColor: color}}>
        <div className="flex justify-between items-center">
            <div className="subject-badge">{subject}</div>
            <button className='companion-bookmark'><Image src='/Icons/bookmark.svg' alt='bookmark' width={12.5} height={15} /></button>
        </div>

        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-sm ">{topics}</p>
        <div className='flex items-center gap-2'>
            <Image src='/Icons/clock.svg' alt='duration' width={13.5} height={13.5} />
            <p className='text-sm'>{duration} minutes</p>
        </div>

        <Link href={`/companions/${id}`} className='w-full'>
            <button className='btn-primary w-full justify-center'>Launch Lesson</button>
        </Link>
    </article>
  );
};

export default CompanionCard;
