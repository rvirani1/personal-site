type Props = {
  titleText: string
}

export function TalkTitle({ titleText }: Props) {
  return (
    <h1
      style={{
        fontSize: '1.75rem', marginTop: 0, marginBottom: 8, lineHeight: 1.1,
      }}
    >
      {titleText}
    </h1>
  )
}
