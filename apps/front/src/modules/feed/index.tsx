import { Video } from "./components/Video"

const videos = [
  {
    id: '1',
    title: 'first',
    description: 'first description'
  },
  {
    id: '2',
    title: 'second',
    description: 'second description'
  },
  {
    id: '3',
    title: 'third',
    description: 'third description'
  },
]

export const Feed = () => {
  return (
    <section className="max-w-xs w-full flex items-center flex-col mx-auto
                        mt-6">
      {
        videos.map(video => (
          <Video id={video.id} key={video.id} title={video.title} description={video.description}/>
        ))
      }
    </section>
  )
}
