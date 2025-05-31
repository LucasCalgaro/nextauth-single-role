import Image from 'next/image'

const Splash = () => {
  return (
    <div className="absolute z-50 flex min-h-screen w-screen flex-col items-center justify-center bg-background">
      <div className="relative h-32 w-32 md:h-40 md:w-40">
        <Image
          src="/icon.svg"
          alt="Logo"
          fill
          priority
          className="animate-pulse"
        />
      </div>
    </div>
  )
}

export default Splash
