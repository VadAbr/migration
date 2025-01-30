export const InfoPage = () => {
  return (
    <>
      <iframe
        src={'.vercel/output/static/info.pdf'}
        style={{
          width: '100vw',
          height: 'calc(100vh - 40px)',
          position: 'absolute',
          left: 0,
          top: 40,
        }}
      />
    </>
  )
}
