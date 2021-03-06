type Props = {
  titleText: string
}
export function BlogTitle({ titleText }: Props) {
  return (
    <h1
      style={{ fontSize: '2rem', margin: '0 0 20px', lineHeight: 1.3 }}
    >
      {titleText}
    </h1>
  )
}
