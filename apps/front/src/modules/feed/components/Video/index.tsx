type VideoProps = {
  id: string;
  title: string;
  description: string;
}

export const Video = ({ id, title, description }: VideoProps) => {
  return (
    <div className="h-96 w-full bg-black mb-4">
      <h2>{title}</h2>
      <p>{description}</p>
      <button>play</button>
    </div>
  )
}
