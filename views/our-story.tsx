import { TimeLine } from "@/components/timeline"
import { storyRef } from "@/const/refs"

export const OurStoryPage = () => {
    const timelineItems = [
        {
            img: 'home.png',
            text: 'It started with a language exchange app—meant to practice languages, but it brought us together.'
        },
        {
            img: 'location.png',
            text: 'Chris wanted to learn Spanish, and I hoped to improve my English. What began as casual chats grew into something deeper.'
        },
        {
            img: 'home.png',
            text: 'Though Chris struggled with Spanish, our conversations stretched into hours, bridging cultures and hearts.'
        },
        {
            img: 'home.png',
            text: 'After months of video calls, Chris flew to Chile. From the moment we met, everything felt natural.'
        },
        {
            img: 'home.png',
            text: 'His silly, welcoming nature put me at ease. He flirted, but I missed every sign until my friends clued me in.'
        },
        {
            img: 'home.png',
            text: 'Love grew quietly, in small moments—one laugh, one story at a time.'
        },
        {
            img: 'home.png',
            text: 'I knew I loved him on a rainy hiking trip. He made tea, set up our tent, and kept me warm when I needed it most.'
        },
        {
            img: 'home.png',
            text: 'For Chris, love deepened during long-distance—daily calls turning distance into closeness.'
        },
        {
            img: 'home.png',
            text: 'Our best memories are the simplest—picnics, walks, and cozy nights at home.'
        },
        {
            img: 'home.png',
            text: 'The proposal was perfect—on a beach full of memories, with laughter, tears, and an easy “yes”.'
        },
        {
            img: 'home.png',
            text: 'Chris’s positivity and big heart inspire me every day. He makes me braver.'
        },
        {
            img: 'home.png',
            text: "He admires my sense of adventure—how we find magic in life’s smallest moments."
        },
        {
            img: 'home.png',
            text: 'We dream of new adventures—Chile, South Korea, and becoming dog parents.'
        },
        {
            img: 'home.png',
            text: "Wherever life takes us, as long as we're together, we’re home."
        },
    ]
    return(
        <section ref={storyRef} className="section p-5 flex flex-col justify-between items-center">
            <h3 className="text-5xl md:text-6xl font-fancy ">OUR STORY</h3>
            <div className="flex justify-center items-center h-full">
                <TimeLine content={timelineItems}/>
            </div>
        </section>
    )
}