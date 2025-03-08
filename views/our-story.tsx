import { TimeLine } from "@/components/timeline"
import { storyRef } from "@/const/refs"

export const OurStoryPage = () => {
    const timelineItems = [
        {
            img: 'our-story.png',
            text: ` language exchange app brought us together—Chris learning Spanish, me improving English. Casual chats turned into deep conversations, bridging cultures and hearts.
            `
        },
        {
            img: 'our-story-2.png',
            text: 'After months of video calls, Chris flew to Chile. From the moment we met, everything felt natural.'
        },
        {
            img: 'our-story-3.png',
            text: 'His silly, welcoming nature put me at ease. He flirted, but I missed every sign until my friends clued me in.'
        },
        {
            img: 'our-story-4.png',
            text: 'Love grew quietly, in small moments—one laugh, one story at a time.'
        },
        {
            img: 'our-story-5.png',
            text: 'I knew I loved him on a rainy hiking trip. He made tea, set up our tent, and kept me warm when I needed it most.'
        },
        {
            img: 'our-story-6.png',
            text: 'For Chris, love deepened during long-distance—daily calls turning distance into closeness.'
        },
        {
            img: 'our-story-7.png',
            text: 'Our best memories are the simplest—picnics, walks, and cozy nights at home.'
        },
        {
            img: 'our-story-8.png',
            text: 'The proposal was perfect—on a beach full of memories, with laughter, tears, and an easy “yes”.'
        },
        {
            img: 'our-story-9.png',
            text: 'Chris’s positivity and big heart inspire me every day. He makes me braver.'
        },
        {
            img: 'our-story-10.png',
            text: "He admires my sense of adventure—how we find magic in life’s smallest moments."
        },
        {
            img: 'our-story-11.png',
            text: 'We dream of new adventures—Chile, South Korea, and becoming dog parents.'
        },
        {
            img: 'our-story-12.png',
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