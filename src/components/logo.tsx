type LogoProps = {
  size?: number
}

export default function Logo({ size = 40 }: LogoProps) {
  return (
    <>
      <div style={{ height: size }}>
        로고
      </div>
    </>
    // <img
    //   src="/logo.svg"
    //   alt="로고"
    //   style={{ height: size }}
    // />
  )
}