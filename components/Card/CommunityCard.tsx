import Image from '../Image';
type Props = {
    image: StaticImageData,
    title: String,
    genre: String,
    content: String,
}
export default function PlayerCard(props: Props) {
    return (
        <div className='bg-game-card rounded-16px border border-card backdrop-blur-lg pt-180px md:pt-100px lg:pt-180px pb-30px pl-30px pr-30px relative min-h-[500px] lg:min-h-[560px]'>
            <div className='absolute w-300px md:w-full -top-180px left-1/2 -translate-x-1/2 md:-top-150px xl:-top-250px'>
                <Image src={props.image} width={894} height={894} layout='responsive' alt="#"></Image>
            </div>
            <h3 className='text-white text-24px md:text-28px lg:text-36px mb-4'>{props.title}</h3>
            <h5 className='text-emerald-2 text-16px lg:text-24px mb-2'>{props.genre}</h5>
            <p className='text-white'>{props.content}</p>
        </div>
    )
}